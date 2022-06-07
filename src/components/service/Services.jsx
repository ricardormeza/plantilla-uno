import React from 'react'
import './services.css'
import { BiCheckDouble } from 'react-icons/bi'
const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service_head">
                        <h3>UX/UI Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
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
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
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
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheckDouble className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Content creator */}
            </div>
        </section>
    )
}

export default Services