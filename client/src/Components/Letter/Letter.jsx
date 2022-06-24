import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './Letter.scss';

const Letter = ({ letter }) => {
  const [ time, setTime ] = useState(false)
  const lett = useRef();
  const animate = () => {
    lett.current?.classList.add('active')
    setTime(!time);
  };

  useEffect(() => {
    setTimeout(() => {
      lett.current?.classList.remove("active");
    }, 3000);
  }, [time]);

  return ( 
    <span ref={lett} onMouseOver={animate} className="letter">{letter}</span>
  )
}

export default Letter