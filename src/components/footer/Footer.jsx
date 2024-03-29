import React from 'react'
import footer from './footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <a href="#" className='footer__logo'>RickyRam</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://facebook.com"><FaInstagram/></a>
                <a href="https://facebook.com"><FaTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Renato Ramírez Reza. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer