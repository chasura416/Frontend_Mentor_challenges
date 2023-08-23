import styled from "@emotion/styled";

export const LeftLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  & > .Bg_line {
    position: relative;
    right: 290px;
    bottom: 70px;
  }

  & > .Box {
    position: absolute;
    right: 215px;
    z-index: 1;
  }

  & > .Woman {
    position: absolute;
  }
  
`;

export const RightLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  /* background-color: red; */
`;

export const Arrow = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;