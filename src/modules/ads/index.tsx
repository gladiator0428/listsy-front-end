import React, { useEffect, useState } from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import {
  MdOutlineCalendarMonth,
  MdOutlineShare,
  MdPhone,
} from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { BsBookmark, BsFlag, BsSend } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { Estate } from "./Estate";

export const AdsDetailsSection: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    const res = await axios.post(`${SERVER_URI}/estate/getAdDetailInfo`, {
      adId: id,
    });
    if (res.data.success) {
      setData(res.data.data);
    } else {
      toast.error(res.data.error);
      router.back();
    }
  };

  return (
    <Styled.AdsDetailsSectionWrapper>
      {data ? (
        <Styled.AdsDetailsContainer>
          <Styled.AdsDetailsVideoInfoWrapper>
            <Styled.VideoWrapper>
              <video
                src={`${SERVER_UPLOAD_URI + data.adId?.adFileName}`}
                controls
              ></video>
            </Styled.VideoWrapper>
            <Styled.VideoInfoWrapper>
              <h1>
                <span>{data?.title}</span>
                <p>
                  <MdOutlineCalendarMonth size={20} />{" "}
                  <span>{new Date(data?.adId?.uploadDate).toDateString()}</span>
                </p>
              </h1>
              <Styled.UserInfoWrapper>
                <div className="user-info">
                  <Image
                    src={`${SERVER_UPLOAD_URI + data?.userId?.avatar}`}
                    alt="avatar"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h5>
                      <span>
                        {data?.userId?.firstName + " " + data?.userId?.lastName}
                      </span>
                      {data?.userId?.telephoneNumber && (
                        <a
                          href={`tel:+${data?.userId?.telephoneNumber}`}
                          target="_blank"
                        >
                          <MdPhone size={20} />
                        </a>
                      )}
                    </h5>
                    <div className="review">
                      <Rating
                        initialValue={data?.userId?.reviewMark}
                        size={12}
                        disableFillHover
                        allowHover={false}
                        readonly
                        onClick={() => {}}
                      />
                      <p>{Number(data?.userId?.reviewMark).toFixed(1)}</p>
                      <span>{`(${data?.userId?.reviewCount} Reviews)`}</span>
                    </div>
                  </div>
                </div>
                <div className="user-action">
                  <BsSend size={24} />
                  <BsBookmark size={24} />
                  <BiLike size={24} />
                </div>
              </Styled.UserInfoWrapper>
              <p>{data?.description}</p>
              <span>Show Details</span>
              <div className="action">
                <button>
                  <MdOutlineShare size={20} />
                  <span>Share</span>
                </button>
                <button>
                  <BsFlag />
                  <span>Report</span>
                </button>
              </div>
            </Styled.VideoInfoWrapper>
          </Styled.AdsDetailsVideoInfoWrapper>
          <Styled.AdsDetailsThumbWrapper>
            <Swiper
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.adId?.imagesFileName?.map((item: any, key: number) => (
                <SwiperSlide key={key}>
                  <Image
                    src={`${SERVER_UPLOAD_URI + item}`}
                    alt={"thumbnails" + key}
                    width={460}
                    height={300}
                  />
                  <span>
                    {key + 1} / {data.adId?.imagesFileName.length}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
            <Styled.AdsDetailsInfoWrapper>
              <Estate data={data} />
            </Styled.AdsDetailsInfoWrapper>
          </Styled.AdsDetailsThumbWrapper>
        </Styled.AdsDetailsContainer>
      ) : (
        <Styled.AdsDetailsContainer>Loading...</Styled.AdsDetailsContainer>
      )}
    </Styled.AdsDetailsSectionWrapper>
  );
};
