import './Hamburger.scss';

const Hamburger = ({ active, setActive }) => {
  return (
    <div onClick={() => setActive(!active)} className={active ? 'hamburger active' : 'hamburger'}>
        <span className="bar"></span><span className="bar"></span><span className="bar"></span>
    </div>
  )
}

export default Hamburger