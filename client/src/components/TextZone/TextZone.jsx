import './TextZOne.scss';
import { Link } from 'react-router-dom';

const TextZone = (props) => {
    const { item } = props;
  return (
    <div className='text'>
        <p>
            {item?.description}
        </p>
        <Link to={item?.href}>{item?.linkText}</Link>
    </div>
  )
}

export default TextZone