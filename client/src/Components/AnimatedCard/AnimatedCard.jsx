import { useRef } from 'react';
import Card from '../Card/Card';
import './AnimatedCard.scss';

const AnimatedCard = () => {
  const card = useRef();

  const handleMouseMove = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    card.current.style.transition = `all .3s ease`
    card.current.style.transformStyle = `preserve-3d`
  }

  const handleMouseLeave = () => {
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.current.style.transition = `all .3s ease`
    card.current.style.transformStyle = `flat`
  };

  return (
    <div className='animatedCard' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Card card={card}/>
    </div>
  )
}

export default AnimatedCard