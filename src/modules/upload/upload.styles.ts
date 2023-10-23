import styled from "styled-components";

export const UploadModalWrapper = styled.div<{ open?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  z-index: 999;
`;

export const UploadModalContainer = styled.div`
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.25);
  max-height: 90%;
  height: fit-content;
  overflow: auto;
  margin-top: 5vh;
  background: #fff;
  max-width: 900px;
  width: 100%;
  overflow: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const UploadModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000050;
`;

export const UploadModalHeader = styled.div`
  border-bottom: 1px solid #afafaf;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const KindSelectWrapper = styled.div`
  max-width: 500px;
  width: 95%;
  margin: auto;
  padding: 28px 0;
  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  div {
    & > :not(:first-child) {
      margin-top: 16px;
    }
    label {
      display: flex;
      align-items: center;
      width: fit-content;
      input {
        width: 16px;
        height: 16px;
        accent-color: #000;
      }
      span {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        line-height: 20.4px; /* 145.714% */
        margin-left: 24px;
      }
    }
  }
`;

export const UploadActionButtonWrapper = styled.div`
  max-width: 500px;
  width: 95%;
  margin: auto;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 30px;
    width: 85px;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
    &.next {
      color: #fff;
      background: #ff6f00;
    }
    &.back {
      color: #ff6f00;
      background: #fff;
      border: 1px solid #ff6f00;
    }
  }
`;

export const UploadAssetWrapper = styled.label`
  max-width: 400px;
  cursor: pointer;
  width: 95%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #ededed;
  text-align: center;
  border-radius: 20px;
  margin: 50px auto;
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 200px;
    background: #eaeaea;
    margin-bottom: 16px;
  }
  h3 {
    color: #000;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  p {
    color: #000;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 16px;
  }
  .button {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #ff6f00;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    width: 100px;
    border: none;
    outline: none;
  }
`;

export const UploadedFileWrapper = styled.div`
  max-width: 400px;
  width: 95%;
  padding: 40px 30px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #ededed;
  margin: 50px auto;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 5px 8px;
    margin-bottom: 20px;

    h4 {
      display: flex;
      align-items: center;
      p {
        font-size: 14px;
        font-weight: 500;
      }
      span {
        margin-left: 8px;
        font-weight: 400;
        font-size: 12px;
        color: #afafaf;
      }
    }
  }
  svg {
    cursor: pointer;
  }
  button {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #ff6f00;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    width: 100px;
    border: none;
    cursor: pointer;
    outline: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 24px 16px;
  display: flex;
`;

export const DetailsFormWrapper = styled.div`
  flex: 1;
`;

export const DetailsPreviewWrapper = styled.div`
  width: 350px;
  margin-left: 24px;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  video {
    width: 100%;
  }
`;

export const VideoInfoWrapper = styled.div`
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  div {
    width: 80%;
  }
  span {
    color: #000;
    font-size: 10px;
    font-weight: 400;
  }
  p {
    color: #ff6f00;
    font-size: 12px;
    font-weight: 400;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 8px;
  }
  svg {
    cursor: pointer;
  }
`;

export const UploadModalBody = styled.div`
  flex: 1;
  overflow: auto;
`;
