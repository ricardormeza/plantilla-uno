import React, {Suspense} from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Cripto API Cotizador',
        github: 'https://github.com/ricardormeza/CriptoCotizador',
        demo: "https://iridescent-heliotrope-04356c.netlify.app/"
    },
    {
        id: 2,
        image: IMG2,
        title: 'Fisioterapia webpage',
        github: 'https://github.com/ricardormeza/fisioterapia-a-domicilio',
        demo: "https://clinicadefisioterapiacdmx.com/fisioterapia-a-domicilio/"
    },
    {
        id: 3,
        image: IMG3,
        title: 'Rick & Morty API',
        github: 'https://github.com/ricardormeza/fisioterapia-a-domicilio',
        demo: "https://incomparable-semifreddo-0cd1f1.netlify.app/"
    },
    {
        id: 4,
        image: IMG4,
        title: 'CRM - React Vite',
        github: 'https://github.com/ricardormeza/CRM-CS',
        demo: "https://splendid-druid-0ab792.netlify.app/"
    },
    {
        id: 5,
        image: IMG5,
        title: 'Abogado webpage',
        github: 'https://github.com/ricardormeza/fisioterapia-a-domicilio',
        demo: "https://abogadochiapas.com/"
    },
    {
        id: 6,
        image: IMG6,
        title: 'Abogado webpage',
        github: 'https://github.com/ricardormeza/fisioterapia-a-domicilio',
        demo: "https://abogadochiapas.com/"
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <Suspense>
                                <article key={id} className='portfolio__item'>
                                    <div className="portfolio__item-image">
                                        <LazyLoadImage
                                            src={image}
                                            alt={title}
                                            height='100%'
                                            width='100%'
                                            effect='blur'
                                            loading='lazy'
                                        />
                                        {/* <img src={image } 
                                        alt={title}
                                        loading='lazy'
                                        width='100%'
                                        height='100%'
                                        /> */}
                                    </div>
                                    <h3>{title}</h3>
                                        <div className="portfolio__item-cta">
                                            <a href={github} className='btn'>GitHub</a>
                                            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                        </div>
                                </article>
                            </Suspense>
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export default Portfolio