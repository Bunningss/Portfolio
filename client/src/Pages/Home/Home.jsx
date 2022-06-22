import Figure from '../../Components/Figure/Figure';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import TextAnimate from '../../Components/TextAnimate/TextAnimate';
import TextZone from '../../Components/TextZone/TextZone';
import './Home.scss';

const Home = () => {
  const text = "Hello,\nI'm Mahmud\nWeb Developer";
  const textZone = "front end developer / designer";
  return (
    <div className='home sectionMargin'>
      <div className="textArea">
        <TextAnimate text={text}/>
        <TextZone text={textZone}/>
        <PrimaryButton href={"/contact"} text={"Contact Me!"}/>
      </div>
      <Figure/>
    </div>
  )
}

export default Home