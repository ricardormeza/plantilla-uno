import React from 'react'
import {BsLinkedin, 
        BsGithub, 
        BsTwitter,
        BsFacebook} from 'react-icons/bs'


const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/ricardo-ramirez-mezac149/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/ricardormeza" 
            aria-label='perfil de github de ricardo ramírez meza' 
            target="_blank"><BsGithub/></a>
            <a href="https://twitter.com/rickardomeza" 
            aria-label='perfil de twitter de ricardo ramírez meza' 
            target="_blank"><BsTwitter/></a>
            <a href="https://twitter.com/rickardomeza" 
            aria-label='perfil de facebook de ricardo ramírez meza' 
            target="_blank"><BsFacebook/></a>
        </div>
    )
}

export default HeaderSocial