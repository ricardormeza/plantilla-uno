import React from 'react'
import nav from './nav.css'
import {AiOutlineHome, 
        AiOutlineUser,
        AiOutlineBook,
        AiOutlineMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
    return (
        <nav className='navbar'>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><AiOutlineBook/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contact"><AiOutlineMessage/></a>
        </nav>
    )
}

export default Nav