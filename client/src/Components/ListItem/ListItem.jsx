import { Link } from 'react-router-dom';
import './ListItem.scss';

const ListItem = ({ data }) => {
  return (
    <Link to={data.href}>
        <li className="listItem">
            <img src={data.icon} alt={data.name} />
        </li>
    </Link>
  )
}

export default ListItem