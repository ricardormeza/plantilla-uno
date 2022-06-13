import React, {Suspense} from 'react'
import about from './about.css'
import Me from '../../assets/me-about.webp'
import { AiOutlineCluster, 
        AiOutlineUser, 
        AiOutlineFolderOpen } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

const About = () => {
    return (
        <main id='about' className='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <Suspense>
                    <div className="about__me-image">
                        <LazyLoadImage
                            src={Me}
                            alt='image of Ricardo Ramirez Meza'
                            height='100%'
                            width='100%'
                            effect='blur'
                            loading='lazy'
                        />
                    </div>
                    </Suspense>
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
                    <h1>Ricky Ram | Web Developer </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum provident voluptatibus reiciendis sequi laboriosam incidunt! Repudiandae a aspernatur suscipit ullam ratione iusto nesciunt. Atque, delectus alias voluptatum minus rem quisquam!</p>
                    <a href="#contact" area-aria-label='Click to contact section' className='btn btn-primary'>Let's Talk</a>
                </div>
                
            </div>
        </main>
    )
}

export default About