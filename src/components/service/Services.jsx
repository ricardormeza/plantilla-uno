import React from 'react'
import './services.css'
import { BiCheckDouble } from 'react-icons/bi'
const Services = () => {
    return (
        <section id='services'>
            <h5>Lo que ofrezco</h5>
            <h2>Servicios</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service_head">
                        <h3>UX/UI Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Photoshop.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Illustrator</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Figma.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Canvas.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Tailwindcss</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>miro.com</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UI */}
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Alta en buscadores, SEO y SEM.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Google ADS, Creación de campañas</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Google LockerStudio, Creación de reportes</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Meta ADS, Creación de campañas.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>React, Nextjs, AstroJs</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>PHP, Wordpress, Shopify</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Web Development */}
                <article className="service">
                    <div className="service_head">
                        <h3>Content creator</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Creación de pauta digital, segmentación.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Creación de copywriter.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Creación de campaña para incremento de seguidores.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Creación de campaña para clientes potenciales.</p>
                        </li>
                        
                    </ul>
                </article>
                {/* END OF Content creator */}
            </div>
        </section>
    )
}

export default Services