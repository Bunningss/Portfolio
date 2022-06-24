import './Skill.scss';

const Skill = ({ skill }) => {
  const rightSide = Array.from({length: 10}, () => Math.random() * 300);
  const topSide = Array.from({ length: 10 }, () => Math.random() * 600);
  const zIndex = Array.from({ length: 10 }, () => Math.random() * 250);
  
  const calculatePixel = (item) => {
    for(let i = 0; i <= item.length; i++) {
      return item[i] + "px"
    }
  }

  const styles = {
    position: "absolute",
    right: calculatePixel(rightSide),
    top: calculatePixel(topSide),
    transform: `translateZ(${calculatePixel(zIndex)})`
  }
  return (
    <h4 className='skill' style={styles}>{skill.name}</h4>
  )
}

export default Skill