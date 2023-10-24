import styled from "styled-components";

export const CardItemWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 0px 18px 40px 0px rgba(216, 215, 215, 0.25);
`;

export const VideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 65%;
  span {
    position: absolute;
    color: #fff;
    border-radius: 2px;
    display: flex;
    bottom: 5px;
    right: 5px;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    background: rgba(0, 0, 0, 0.99);
    font-size: 12px;
    font-weight: 700;
  }

  video {
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
  }
  svg {
    position: absolute;
    top: 47%;
  }
`;

export const VideoInfoWrapper = styled.div`
  padding: 24px 12px;
  display: flex;
  img {
    border-radius: 999px;
    object-fit: cover;
  }
  & > div {
    margin-left: 12px;
    flex: 1;
    h1 {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      line-height: 20.4px; /* 145.714% */
      margin-bottom: 8px;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > h2 {
        color: #909090;
        font-size: 14px;
        font-weight: 400;
      }
      & > span {
        color: #afafaf;
        font-size: 10px;
        font-weight: 400;
      }
      & > p {
        display: flex;
        align-items: center;
        span {
          color: #000;
          margin-left: 4px;
          font-size: 10px;
          font-weight: 300;
        }
      }
      &.reviews {
        div {
          display: flex;
        }
        margin: 6px 0 12px;
        p {
          color: #000;
          font-size: 10px;
          font-weight: 400;
          margin: 0 4px;
        }
        span {
          color: #000;
          font-size: 10px;
          font-weight: 300;
        }
        h3 {
          color: #000;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`;
