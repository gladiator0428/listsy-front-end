import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: auto;
  padding: 60px 0;
  min-height: calc(100vh - 125px);
  display: flex;
`;

export const SidebarWrapper = styled.div`
  padding: 50px 64px;
  max-width: 384px;
  width: 100%;
  height: 100%;
  border-right: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  text-align: center;
  h1 {
    margin-top: 24px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  h6 {
    margin-top: 8px;
    color: #000;
    font-size: 12px;
    font-weight: 400;
  }
  p {
    margin-top: 16px;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
`;

export const MainSectionWrapper = styled.div`
  padding: 50px 64px;
  flex: 1;
`;

export const ProfileAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  width: fit-content;
  margin: auto;
  img {
    border-radius: 999px;
    object-fit: cover;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 10px;
    right: 1px;
    border-radius: 100px;
    background: #ff6f00;
  }
`;

export const EmptyAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #5a88ff;
  border-radius: 999px;
  color: #fff;
  font-size: 50px;
`;

export const SidebarNavWrapper = styled.div`
  margin-top: 32px;
  & > :not(:first-child) {
    margin-top: 8px;
  }
`;

export const NavItem = styled.div<{ active?: string }>`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ active }) => (active ? "#EAEAEA" : "#fff")};
  border-radius: 100px;
  transition: all 0.3s;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.4px; /* 145.714% */
  &.delete {
    color: red;
  }
  &:hover {
    background: ${({ active }) => (active ? "#EAEAEA" : "#eaeaea50")};
  }
`;

export const SettingPageWrapper = styled.div`
  h1 {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  button {
    width: 120px;
    margin-top: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #ff6f00;
    height: 37px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    cursor: pointer;
    float: right;
  }
`;

export const SettingFormWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 32px;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #afafaf;
    height: 59px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    color: #000;
    &::placeholder {
      color: #afafaf;
    }
  }
  .react-tel-input .form-control:hover,
  .react-tel-input .form-control:focus {
    border: none;
    border-bottom: 1px solid #afafaf;
    box-shadow: none;
  }
  .react-tel-input {
    input {
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid #afafaf;
      border-radius: 0;
    }
  }
  .country-list {
    bottom: 50px;
  }
  textarea {
    border: none;
    outline: none;
    height: 148px;
    resize: none;
    border-bottom: 1px solid #afafaf;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    width: 100%;
    line-height: 20.4px; /* 145.714% */
    color: #000;
    &::placeholder {
      color: #afafaf;
    }
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: flex-end;
  p {
    color: #afafaf;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
`;

export const EditButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: 16px;
    &.cancel {
      background: #fff;
      border: 1px solid #ff6f00;
      color: #ff6f00;
    }
  }
`;

export const ConfirmPasswordWrapper = styled.div`
  margin-top: 20px;
  text-align: left;
  p {
    font-size: 14px;
    color: #000000aa;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    height: 49px;
    border: none;
    outline: none;
    border-bottom: 1px solid #afafaf;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px;
    &::placeholder {
      color: #afafaf;
    }
  }
`;

export const ChangePasswordPageWrapper = styled.div`
  max-width: 680px;
  width: 100%;
  margin: auto;
  h1 {
    text-align: center;
    color: #000;
    font-size: 32px;
    font-weight: 700;
  }
  button {
    width: 120px;
    margin-top: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #ff6f00;
    height: 37px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    cursor: pointer;
    float: right;
  }
`;

export const PasswordInputGroup = styled.div`
  margin: 84px 0;
  & > :not(:first-child) {
    margin-top: 32px;
  }
  input {
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #afafaf;
    height: 59px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    color: #000;
    &::placeholder {
      color: #afafaf;
    }
  }
`;
export const PostsPageWrapper = styled.div``;
