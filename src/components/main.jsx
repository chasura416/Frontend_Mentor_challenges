import { css } from "@emotion/react";

const Main = () => {
  return (
    <div css={MainContainer}>
      <h1>main</h1>
    </div>
  );
};

const MainContainer = css`
  background-color: red;
  color: blue;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default Main;
