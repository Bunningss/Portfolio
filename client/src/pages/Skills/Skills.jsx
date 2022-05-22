import TextZone from '../../components/TextZone/TextZone';
import './Skills.scss';
import { skillsCharts, skillsSec } from '../../staticData';
import Chart from '../../components/Chart/Chart';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div className='skills sectionPadding'
    initial={{ x: '-100vw'}}
    animate={{ x: 0 }}
    transition={{ duration: 1 }}
    >
        <div className="skillsLeft">
            <h1 className="skillsHeader" aria-label='Expertises & Experiences'>
                <span>E</span>
                <span>x</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
                <span>t</span>
                <span>i</span>
                <span>s</span>
                <span>e</span>
                <span className='marginRight'>s</span>
                <span>&</span> <br />
                <span>E</span>
                <span>x</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
                <span>i</span>
                <span>e</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
            </h1>
            {
                skillsSec.map((item) => (
                    <TextZone key={item.id} item={item}/>
                ))
            }
        </div>
        <div className="skillsRight">
            {
                skillsCharts.map((chart) => (
                    <Chart key={chart.id} chart={chart}/>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Skills