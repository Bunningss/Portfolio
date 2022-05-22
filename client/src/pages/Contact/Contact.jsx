import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.scss';
import TextZone from '../../components/TextZone/TextZone';
import { contactSec } from '../../staticData';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div className='contact sectionPadding'
    initial={{ x: '-100vw'}}
    animate={{ x: 0 }}
    transition={{ duration: 1 }}
    >
        <div className="contactLeft">
            <h1 className="contactHeader" aria-label='Contact me'>
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span className='marginRight'>t</span>
                <span>M</span>
                <span>e</span>
            </h1>
            {
                contactSec.map((item) => (
                    <TextZone key={item.id} item={item}/>
                ))
            }
            <ContactForm/>
        </div>
        <div className="contactRight"></div>
    </motion.div>
  )
}

export default Contact