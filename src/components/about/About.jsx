import React from 'react'
import about from './about.css'
import ME from '../../assets/me-about.jpg'
import { AiOutlineCluster, 
        AiOutlineUser, 
        AiOutlineFolderOpen } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about' className='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about_card'>
                            <AiOutlineCluster className='about__icon' />
                            <h5>Experience</h5>
                            <small>+3 Years Working</small>
                        </article>
                        <article className='about_card'>
                            <AiOutlineUser className='about__icon' />
                            <h5>Clients</h5>
                            <small>50+ Worldwide</small>
                        </article>
                        <article className='about_card'>
                            <AiOutlineFolderOpen className='about__icon' />
                            <h5>Projects</h5>
                            <small>+35 Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum provident voluptatibus reiciendis sequi laboriosam incidunt! Repudiandae a aspernatur suscipit ullam ratione iusto nesciunt. Atque, delectus alias voluptatum minus rem quisquam!</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
                
            </div>
        </section>
    )
}

export default About