import React from 'react'
import about from './about.css'
import ME from '../../assets/me-about.jpg'
import {GrWorkshop} from 'react-icons/gr'

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
                            <GrWorkshop className='about__icon'/>
                            <h5>Experience</h5>
                            <small>+3 Years Working</small>
                        </article>
                        <article className='about_card'>
                            <GrWorkshop className='about__icon'/>
                            <h5>Experience</h5>
                            <small>+3 Years Working</small>
                        </article>
                        <article className='about_card'>
                            <GrWorkshop className='about__icon'/>
                            <h5>Experience</h5>
                            <small>+3 Years Working</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About