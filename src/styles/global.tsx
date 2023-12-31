import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
  }
`
const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle;