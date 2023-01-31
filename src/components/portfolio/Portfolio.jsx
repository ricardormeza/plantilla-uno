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
        title: 'Store con Astro JS',
        github: 'https://github.com/ricardormeza/Store-Guitarra-Astro',
        demo: "https://lively-yeot-b510eb.netlify.app/"
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
        title: 'Dashboard React',
        github: 'https://github.com/ricardormeza/DashboardReact',
        demo: "https://dashboard-react-inky.vercel.app/"
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
        title: 'Buscador de bebidas',
        github: 'https://github.com/ricardormeza/BuscadorRecetas',
        demo: "https://buscador-recetas-bebidas.vercel.app/"
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