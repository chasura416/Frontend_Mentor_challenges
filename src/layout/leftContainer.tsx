import * as St from './styles';
import Bg_line from '../assets/images/bg-pattern-desktop.svg';
import Box from '../assets/images/illustration-box-desktop.svg';
import Woman from '../assets/images/illustration-woman-online-desktop.svg';

const LeftContainer = () => {
  return (
    <St.LeftLayout>
      <img className='Bg_line' src={Bg_line}/>
      <img className='Box' src={Box}/>
      <img className='Woman' src={Woman}/>
    </St.LeftLayout>
  )
}

export default LeftContainer;