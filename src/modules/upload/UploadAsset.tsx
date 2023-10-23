import React, { useContext, useState } from "react";
import * as Styled from "./upload.styles";
import { MdClose, MdUpload } from "react-icons/md";
import { formatBytes } from "@/utils";
import { Auth as AuthContext } from "@/context/contexts";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";

type Props = {
  fileType: string;
  onNext: (adLink: string) => void;
};

export const UploadAsset: React.FC<Props> = ({ fileType, onNext }) => {
  const { authContext } = useContext<any>(AuthContext);
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("userId", authContext.user?.id);
    formData.append("fileType", fileType);
    formData.append("ad", file);
    const res = await axios.post(`${SERVER_URI}/estate/uploadAd`, formData);
    if (res.data.success) {
      toast.success(res.data.message);
      onNext(res.data.model.adFileName);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      {file ? (
        <Styled.UploadedFileWrapper>
          <h3>File Selected</h3>
          <div>
            <h4>
              <p>{file?.name}</p>
              <span>{formatBytes(file?.size)}</span>
            </h4>
            <MdClose size={20} color="#AFAFAF" onClick={handleRemoveFile} />
          </div>
          <button onClick={handleUpload}>Upload File</button>
        </Styled.UploadedFileWrapper>
      ) : (
        <Styled.UploadAssetWrapper htmlFor="upload-asset">
          <span>
            <MdUpload size={24} color="#AFAFAF" />
          </span>
          <h3>Select the {fileType} file to upload</h3>
          <p>Your video files will be private until you publish them.</p>
          <div className="button">Select file</div>
          <input
            type="file"
            id="upload-asset"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={fileType === "video" ? "video/*" : "audio/*"}
          />
        </Styled.UploadAssetWrapper>
      )}
    </>
  );
};
