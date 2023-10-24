import React, { useState, useContext } from "react";
import * as Styled from "./upload.styles";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EstateForm } from "./detailsform";
import { toast } from "react-toastify";
import axios from "axios";
import { Auth as AuthContext } from "@/context/contexts";

type Props = {
  adLink: string;
  adId: string;
  category: string;
  onNext: () => void;
};

export const Details: React.FC<Props> = ({
  adLink,
  category,
  adId,
  onNext,
}) => {
  const [copied, setCopied] = useState(false);
  const [price, setPrice] = useState("0");
  const [priceUnit, setPriceUnit] = useState("$");
  const { authContext } = useContext<any>(AuthContext);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleEstateFormSave = async (data: any) => {
    if (Number(price) === 0) {
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(`${SERVER_URI}/estate/loadEstateInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const formComp: any = {
    sales: "sales",
    estate: <EstateForm onSave={handleEstateFormSave} />,
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
          <Styled.PriceInputWrapper>
            <p>Price</p>
            <div>
              <select
                value={priceUnit}
                onChange={(e) => setPriceUnit(e.target.value)}
              >
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="£">£</option>
                <option value="¥">¥</option>
                <option value="₣">₣</option>
                <option value="₹">₹</option>
              </select>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </Styled.PriceInputWrapper>
        </Styled.VideoWrapper>
      </Styled.DetailsPreviewWrapper>
    </Styled.DetailsWrapper>
  );
};
