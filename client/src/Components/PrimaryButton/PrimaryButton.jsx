import './PrimaryButton.scss';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ text, href }) => {
  return (
    <Link className="btnContainer" to={href}>
        <button className="btnPrimary">{text}</button>
    </Link>
  )
}

export default PrimaryButton