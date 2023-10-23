import React, { useState } from "react";
import * as Styled from "./upload.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EstateForm } from "./detailsform";

type Props = {
  adLink: string;
  category: string;
};

export const Details: React.FC<Props> = ({ adLink, category }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const formComp: any = {
    sales: "sales",
    estate: <EstateForm />,
    truck: "truck",
    service: "service",
    pet: "pet",
  };

  return (
    <Styled.DetailsWrapper>
      <Styled.DetailsFormWrapper>
        {formComp[category]}
      </Styled.DetailsFormWrapper>
      <Styled.DetailsPreviewWrapper>
        <Styled.VideoWrapper>
          <video src={SERVER_UPLOAD_URI + adLink} controls />
          <Styled.VideoInfoWrapper>
            <div>
              <span>Video Link</span>
              <p>{SERVER_UPLOAD_URI + adLink}</p>
            </div>
            <CopyToClipboard
              text={SERVER_UPLOAD_URI + adLink}
              onCopy={handleCopyClick}
            >
              {copied ? (
                <MdCheck size={20} />
              ) : (
                <MdOutlineContentCopy size={20} />
              )}
            </CopyToClipboard>
          </Styled.VideoInfoWrapper>
        </Styled.VideoWrapper>
      </Styled.DetailsPreviewWrapper>
    </Styled.DetailsWrapper>
  );
};
