import React from 'react'
import contact from './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a01v88d', 'template_qn9rh7y', form.current, 'VkSKJ0SK-OKSx4Qrc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

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
                        <a href="mailto:ricardo.rmeza@live.com"
                        aria-label='send mail to ricardo' 
                        target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>yosoyrickyram</h5>
                        <a href="https://m.me/RickardoRamirezMeza"
                        aria-label='send message to ricardo at fb'
                        target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>ricardo.rmeza@live.com</h5>
                        <a href="https:wa.me/526631016627"
                        aria-label='send message to ricardo at whatsapp'
                        target="_blank">Mandame un whatsapp</a>
                    </article>
                </div>
                {/* END CONTACT__OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
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