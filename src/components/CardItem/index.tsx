import React, { useRef } from "react";
import * as Styled from "./card.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { MdLocationOn } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { VideoPlayIcon } from "..";
import { calcCompareTime, getTimestamp } from "@/utils";
import { useRouter } from "next/router";

type Props = {
  link: string;
  userAvatar: string;
  title: string;
  subtitle: string;
  viewCount: number;
  reviewMark: number;
  reviewCount: number;
  price: number;
  priceUnit: string;
  postDate: string;
  id: string;
  duration: number;
};

export const CardItem: React.FC<Props> = ({
  link,
  id,
  postDate,
  price,
  priceUnit,
  reviewCount,
  reviewMark,
  subtitle,
  duration = 0,
  title,
  userAvatar,
  viewCount,
}) => {
  const router = useRouter();
  const videoRef = useRef<any>(null);

  return (
    <Styled.CardItemWrapper>
      <Styled.VideoWrapper
        onMouseEnter={() => videoRef.current.play()}
        onMouseLeave={() => {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }}
        onClick={() => router.push(`/ads/${id}`)}
      >
        <video ref={videoRef} src={`${SERVER_UPLOAD_URI + link}`}></video>
        <VideoPlayIcon />
        <span>{getTimestamp(Number(duration))}</span>
      </Styled.VideoWrapper>
      <Styled.VideoInfoWrapper>
        <Image
          src={`${SERVER_UPLOAD_URI + userAvatar}`}
          alt="avatar"
          width={36}
          height={36}
        />
        <div>
          <h1>{title}</h1>
          <div className="">
            <h2>{subtitle}</h2>
            <span>
              {viewCount > 999 ? viewCount / 1000 + "K" : viewCount} views
            </span>
          </div>
          <div className="reviews">
            <div>
              <Rating
                initialValue={reviewMark}
                size={24}
                disableFillHover
                allowHover={false}
                readonly
                onClick={() => {}}
              />
              <p>{reviewMark}</p>
              <span>{`(${reviewCount} Reviews)`}</span>
            </div>
            <h3>
              {priceUnit} {price.toFixed(2)}
            </h3>
          </div>
          <div>
            <p>
              <MdLocationOn size={12} />
              <span>United States</span>
            </p>
            <p>
              <BsClock size={12} />
              <span>{calcCompareTime(new Date().toString(), postDate)}</span>
            </p>
          </div>
        </div>
      </Styled.VideoInfoWrapper>
    </Styled.CardItemWrapper>
  );
};
