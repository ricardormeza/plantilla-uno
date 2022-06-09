import React from 'react'
import contact from './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>ricardo.rmeza@live.com</h5>
                        <a href="mailto:ricardo.rmeza@live.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>yosoyrickyram</h5>
                        <a href="https://m.me/RickardoRamirezMeza" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>ricardo.rmeza@live.com</h5>
                        <a href="https://api.whatsapp.com/send?phone+529611741737" target="_blank">Send a wts</a>
                    </article>
                </div>
                {/* END CONTACT__OPTIONS */}
                <form action="">
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='your email' required />
                    <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact