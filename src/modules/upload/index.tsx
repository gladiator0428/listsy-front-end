import React, { useState, useEffect } from "react";
import * as Styled from "./upload.styles";
import { MdClose } from "react-icons/md";
import { categories, kinds, modalTitle } from "./data";
import { RadioSelect } from "./RadioSelect";
import { UploadAsset } from "./UploadAsset";
import { Details } from "./Details";
import { UploadThumb } from "./UploadThumb";
import { JobPost } from "./JobPost";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const UploadModal: React.FC<Props> = ({ open, onClose }) => {
  const [kind, setKind] = useState(kinds[0].key);
  const [category, setCategory] = useState(categories[0].key);
  const [uploadStep, setUploadStep] = useState("kind");
  const [adLink, setAdLink] = useState("");

  useEffect(() => {
    if (open) {
      setKind(kinds[0].key);
      setCategory(categories[0].key);
      setUploadStep("kind");
    }
  }, [open]);

  return (
    <Styled.UploadModalWrapper className={open ? "open" : ""}>
      <Styled.UploadModalContainer>
        <Styled.UploadModalHeader>
          <h3>{modalTitle[uploadStep]}</h3>
          <MdClose size={20} color="#AFAFAF" onClick={onClose} />
        </Styled.UploadModalHeader>
        <Styled.UploadModalBody>
          {uploadStep === "kind" && (
            <>
              <RadioSelect
                data={kinds}
                selected={kind}
                title="What kind of thing do you want to post"
                onChange={setKind}
              />
              <Styled.UploadActionButtonWrapper>
                <div />
                <button
                  className="next"
                  onClick={() =>
                    setUploadStep(kind === "job" ? "job" : "category")
                  }
                >
                  Next
                </button>
              </Styled.UploadActionButtonWrapper>
            </>
          )}
          {uploadStep === "category" && (
            <>
              <RadioSelect
                data={categories}
                selected={category}
                title="Please select ads category"
                onChange={setCategory}
              />
              <Styled.UploadActionButtonWrapper>
                <button className="back" onClick={() => setUploadStep("kind")}>
                  Back
                </button>
                <button
                  className="next"
                  onClick={() => setUploadStep("upload")}
                >
                  Next
                </button>
              </Styled.UploadActionButtonWrapper>
            </>
          )}
          {uploadStep === "upload" && (
            <UploadAsset
              fileType={kind}
              onNext={(adLink: string) => {
                setUploadStep("detail");
                setAdLink(adLink);
              }}
            />
          )}
          {uploadStep === "detail" && (
            <Details adLink={adLink} category={category} />
          )}
          {uploadStep === "image" && <UploadThumb />}
          {uploadStep === "job" && <JobPost />}
        </Styled.UploadModalBody>
      </Styled.UploadModalContainer>
      <Styled.UploadModalOverlay onClick={onClose} />
    </Styled.UploadModalWrapper>
  );
};
