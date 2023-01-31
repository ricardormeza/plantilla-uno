import React, { Suspense } from 'react'
import about from './about.css'
import Me from '../../assets/rrm-me.jpg'
import {
    AiOutlineCluster,
    AiOutlineUser,
    AiOutlineFolderOpen
} from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

const About = () => {
    return (
        <main id='about' className='about'>
            <h5>Algo extra.</h5>
            <h2>Acerca de mi</h2>
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
                            <h5>Experiencia</h5>
                            <small>+1 Years Working</small>
                        </article>
                        <article className='about_card'>
                            <AiOutlineUser className='about__icon' />
                            <h5>Clientes</h5>
                            <small>5+</small>
                        </article>
                        <article className='about_card'>
                            <AiOutlineFolderOpen className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>+15 Completed</small>
                        </article>
                    </div>
                    <h1>Ricky Ram | Web Developer </h1>
                    <p>Soy un frontend Developer🤖, amante del café☕, Master pizzamaker 🍕, que día a día trato de mejorar como profesional y<strong> cómo ser humano</strong>.</p>
                    <p>La reinvención hace avanzar al mundo. Y ese mismo dinamismo la enfoco en mi vida cotidiana y así a reinventarme.</p>
                    <p>Mi meta es convertirme en un fullstack developer</p>
                    <a href="#contact" area-aria-label='Click to contact section' className='btn btn-primary'>Hablémos</a>
                </div>

            </div>
        </main>
    )
}

export default About