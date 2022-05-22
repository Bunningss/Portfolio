import './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { item, handleClick } = props;
  return (
    <li onClick={handleClick} className='listItem'>
      <Link to={item.href}>
        <img src={item.icon} alt="" />
      </Link>
    </li>
  )
}

export default ListItem