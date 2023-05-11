import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FiInstagram } from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgdtwil', 'template_n3d6pzc', form.current, 'w93Afwo3KTM1njJPL')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Connect Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>ilayabharathi178@gmail.com</h5>
            <a href="mailto:ilayabharathi178@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='icon'/>
            <h4>Messenger</h4>
            <h5>Bad Blood</h5>
            <a href="http://m.me/sakthi.ilaya/" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <FiInstagram className='icon'/>
            <h4>Instagram</h4>
            <h5>itz_ab</h5>
            <a href="https://www.instagram.com/_itz.ab/" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact