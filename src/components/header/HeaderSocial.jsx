import React from 'react'
import {BsLinkedin, 
        BsGithub, 
        BsTwitter,
        BsFacebook} from 'react-icons/bs'


const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/ricardo-ramirez-mezac149/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/ricardormeza" target="_blank"><BsGithub/></a>
            <a href="https://twitter.com/rickardomeza" target="_blank"><BsTwitter/></a>
            <a href="https://twitter.com/rickardomeza" target="_blank"><BsFacebook/></a>
        </div>
    )
}

export default HeaderSocial