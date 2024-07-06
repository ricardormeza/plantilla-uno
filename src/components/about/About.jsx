import React, { Suspense } from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
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
    const [text, count ] = useTypewriter({
        words: [
        `Hola, Soy Rick 🤪`,
        "Full Stack Developer 🤖", 
        "Amante del café ☕",
        "Master pizzamaker 🍕",
        "<Amante del Front 😍/>"
    ],
    loop: true,
    delaySpeed: 2000,
    })
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
                            <small>+4 años creando diversos proyectos</small>
                        </article>
                        <article className='about_card'>
                            <AiOutlineUser className='about__icon' />
                            <h5>Clientes</h5>
                            <small>10+</small>
                        </article>
                        <article className='about_card'>
                            <AiOutlineFolderOpen className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>+45 Completados</small>
                        </article>
                    </div>
                    <h1>
                        <span>{text}</span>
                        <Cursor cursorColor='#0a45f7' />
                    </h1>
                    <p>Soy un profesional versátil que saca lo mejor del desarrollo web, combinando de manera impecable su experiencia full stack con avanzadas estrategias de SEO-SEM para garantizar que tu presencia digital brille.</p>
                    <p>La reinvención impulsa el avance del mundo. Ese mismo dinamismo lo aplico a mi vida diaria, permitiéndome reinventarme constantemente..</p>
                    <p>Mi meta es viajar al rededor del mundo</p>
                    <a href="#contact" area-aria-label='Click to contact section' className='btn btn-primary'>Hablémos</a>
                </div>

            </div>
        </main>
    )
}

export default About