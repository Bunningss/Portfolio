import TextZone from '../../components/TextZone/TextZone';
import './About.scss';
import { aboutSec } from '../../staticData';
import AnimatedCard from '../../components/AnimatedCard/AnimatedCard';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const card = useRef();

  const animate = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10
    card.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
  }

  const reset = () => {
    card.current.style.transform = `rotateX(0deg) rotateY(0deg)`
    card.current.style.transition = `all .5s ease`
  }

  return (
    <motion.div className='about sectionPadding'
    initial={{ x: '-100vw'}}
    animate={{ x: 0 }}
    transition={{ duration: 1 }}
    >
      <div className="aboutLeft">
        <h1 className="aboutHeader" aria-label='Myself'>
          <span>M</span>
          <span>y</span>
          <span>s</span>
          <span>e</span>
          <span>l</span>
          <span>f</span>
        </h1>
        {
          aboutSec.map((item) => (
            <TextZone key={item.id} item={item}/>
          ))
        }
      </div>
      <div onMouseMove={animate} onMouseOut={reset} className="aboutRight">
        <AnimatedCard card={card}/>
      </div>
    </motion.div>
  )
}

export default About