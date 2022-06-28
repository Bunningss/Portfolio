import './Contact.scss';
import TextAnimate from '../../Components/TextAnimate/TextAnimate';
import TextZone from '../../Components/TextZone/TextZone';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const text = "Contact me to resolve any queries you have and we can get started with your project right away.";

  const handleClick = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_eiboynh', 'template_lzygkxe', formRef.current, 'WeUIKek5FuDWMETKM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='contact default'>
      <TextAnimate text={"Contact Me"}/>
      <TextZone text={text}/>
      <form className="contactForm" ref={formRef}>
        <div className="formTop">
          <input type="text" required placeholder='Name' name='user_name' />
          <input type="email" required placeholder='Email Address' name="user_email" />
        </div>
        <input type="text" required placeholder='Subject' name='user_subject' />
        <textarea id="" cols="30" rows="10" placeholder='Message' name="message"></textarea>
        <PrimaryButton text={"Send Message"} onClick={handleClick}/>
      </form>
    </div>
  )
}

export default Contact