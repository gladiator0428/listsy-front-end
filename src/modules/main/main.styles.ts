import styled from "styled-components";

export const MainPageSectionWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterWrapper = styled.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 12px;
  }
  & > button {
    height: 34px;
    border-radius: 5px;
    background: #ff6f00;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    outline: none;
    border: none;
    width: 80px;
  }
`;

export const MainGridWrapper = styled.div`
  flex: 1;
  overflow: auto;
  & > div {
    height: 100%;
  }
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 32px;
    padding: 0 20px 40px;
  }
`;
