import './Animatedcard.scss';
import { expertises } from '../../staticData';

const AnimatedCard = ({ card }) => {
  return (
    <div ref={card} className='animate'>
        {
            expertises.map((expertise) => (
                <h2 className="expertise" key={expertise.id}>{expertise.name}</h2>
            ))
        }
    </div>
  )
}

export default AnimatedCard