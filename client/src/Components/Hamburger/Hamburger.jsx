import './Hamburger.scss';

const Hamburger = ({ active,setActive }) => {
    const handleClick = () => {
        setActive(!active)
    };
  return (
    <div onClick={handleClick} className={active ? "hamburger enabled" : "hamburger"}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>
  )
}

export default Hamburger