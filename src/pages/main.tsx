import { MainLayout } from "../layout/mainLayout";
import { MainBox } from "../components/mainbox";
import LeftContainer from "../layout/leftContainer";
import RightContainer from "../layout/rightContainer";

const Main = () => {
  return (
    <MainLayout>
      <MainBox>
        <LeftContainer />
        <RightContainer />
      </MainBox>
    </MainLayout>
  );
};

export default Main;
