import './Sidebar.scss';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import { sidebar } from '../../staticData';

const Sidebar = () => {
return (
    <div className='sidebar'>
        <Link className='logoContainer' to=''>
            <h1 className="logo">M</h1>
        </Link>
        <ul className="sidebarlist">
            {
                sidebar.map((item) => (
                    <ListItem key={item.id} item={item}/>
                ))
            }
        </ul>
    </div>
)
}

export default Sidebar