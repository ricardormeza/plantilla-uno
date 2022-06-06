import React from 'react'
import header from './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header className='header'>
            <div className="container header__container">
                <h5>hello I'm</h5>
                <h1>Ricky Ram</h1>
                <h5 className="text-ligth">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocial/>
                <div className="me">
                    <img src={ME} alt="Imagen de logotipo" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header