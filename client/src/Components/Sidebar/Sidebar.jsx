import './Sidebar.scss';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import { sidebarData } from '../../staticData';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link className='logoContainer' to='/'>
        <h1 className="logo">M</h1>
      </Link>
      <ul className="sidebarList">
        {
          sidebarData.map((data) => (
            <ListItem key={data.id} data={data}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar