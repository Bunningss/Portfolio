import ListItem from '../ListItem/ListItem';
import './ToggleMenu.scss';
import { sidebar } from '../../staticData';

const ToggleMenu = ({ active, setActive }) => {
  const handleClick = () => {
    setActive(!active);
  }
  return (
    <ul className={active ? 'toggle active' : 'toggle'}>
        {
            sidebar.map((item) => (
                <ListItem handleClick={handleClick} key={item.id} item={item}/>
            ))
        }
    </ul>
  )
}

export default ToggleMenu