import WelcomeText from '../../components/WelcomeText/WelcomeText';
import './Home.scss';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

const Home = () => {
  return (
    <div className='home sectionPadding'>
      <WelcomeText/>
      <Logo/>
      <p className="desc">Front end developer / designer</p>
      <Link className='btnContainer' to='/contact'>
        <button>contact me!</button>
      </Link>
    </div>
  )
}

export default Home