import * as St from './styles';
import { StLine } from '../components/line';
import ArrowIcon from '../assets/images/icon-arrow-down.svg';

const RightContainer = () => {
  return (
    <St.RightLayout>
      <h1>FAQ</h1>
      <St.Arrow>
        <p>글씨 클릭하면 글씨 나오고 들어감</p>
        <img src={ArrowIcon} />
      </St.Arrow>
      <StLine />
    </St.RightLayout>
  )
}

export default RightContainer;