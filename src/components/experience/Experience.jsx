import React from 'react'
import experience from './experience.css'
import { BsCheckSquareFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <div>
                            <h4>HTML</h4>
                            <small className='text-ligth'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-ligth'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-ligth'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <div>
                            <h4>Sass</h4>
                            <small className='text-ligth'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <div>
                            <h4>Tailwind CSS</h4>
                            <small className='text-ligth'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND DIV */}
                <div className="experience__backend">
                <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <h4>Node JS</h4>
                            <small className='text-ligth'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <h4>MongoDB</h4>
                            <small className='text-ligth'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <h4>PHP</h4>
                            <small className='text-ligth'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <BsCheckSquareFill className='experience__details-icons'/>
                            <h4>MySQL</h4>
                            <small className='text-ligth'>Experienced</small>
                        </article>
                    </div>
                
                </div>
            </div>
        </section>
    )
}

export default Experience