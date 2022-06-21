import './ContactForm.scss';

const ContactForm = () => {
  return (
    <form action="" className='form'>
        <div className="inputContainer">
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email'  required />
        </div>
        <input type="text" placeholder='Subject' required />
        <textarea required name="" id="" cols="30" rows="10" placeholder='Message...'></textarea>
        <input type="submit" value="Send Message" className='submitBtn' />
    </form>
  )
}

export default ContactForm