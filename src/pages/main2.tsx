import * as St from '../layout2/styles'

const main2 = () => {
  return (
    <St.Layout>
      <St.ContainerDiv>
        <St.LeftContainer>상단 왼쪽</St.LeftContainer>
        <St.RightContainer>상단 오른쪽</St.RightContainer>
      </St.ContainerDiv>
      <St.BoxWrapper>
        <St.UpperBoxWrapper>
          <div>상단 박스1</div>
          <div>상단 박스2</div>
          <div>상단 박스3</div>
        </St.UpperBoxWrapper>
        <St.LowerBoxWrapper>
          <div>하단 박스1</div>
          <div>하단 박스2</div>
          <div>하단 박스3</div>
        </St.LowerBoxWrapper>
      </St.BoxWrapper>
    </St.Layout>
  );
};

export default main2;