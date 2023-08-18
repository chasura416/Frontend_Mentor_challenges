import styled from "@emotion/styled";

export const LeftLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > .Bg_line {
    position: relative;
  }

  & > .Box {
    position: absolute;
    top: 0;
    right: 0;
  }

  & > .Woman {
    position: absolute;
  }
  
`

export const RightLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100px;
  background-color: red;
`