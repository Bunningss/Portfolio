import Skill from '../Skill/Skill';
import './Card.scss';
import { skills } from '../../staticData';

const Card = ({ card }) => {
  return (
    <div className='card' ref={card}>
        {
            skills.map((skill) => (
                <Skill key={skill.id} skill={skill} skills={skills}/>
            ))
        }
    </div>
  )
}

export default Card