import { StLine } from "../components/line";
import { MainLayout } from "../layout/mainLayout";
import { MainBox } from "../components/mainbox";
import LeftContainer from "../layout/leftContainer";
import { RightContainer } from "../layout/rightContainer";

const Main = () => {
  return (
    <MainLayout>
      <MainBox>
        <LeftContainer />
        <RightContainer>
          <h1>FAQ</h1>
          <StLine />
          <div className="arrow">
            글씨 클릭하면 글씨 나오고 들어감
          </div>
        </RightContainer>
      </MainBox>
    </MainLayout>
  );
};

export default Main;
