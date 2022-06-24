import './TextZone.scss';
import { Link } from 'react-router-dom';

const TextZone = ({ text, href, linkText }) => {
  return (
    <>
      <p className='textZone'>{text}</p>
      <Link className='textZoneLink' to={href ? href : ""}>{linkText}</Link>
    </>
  )
}

export default TextZone