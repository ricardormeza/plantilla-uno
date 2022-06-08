import React from 'react'
import testimonials from './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <div className="container testimonials__container">
                <article className='testimonial'>
                    <div className="client_avatar">
                        <img src={avatar1} alt="clinete testimonial image" />
                    </div>
                    <h5 className='client__name'>Ernest Achivever</h5>
                    <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit omnis fuga hic expedita ut est veniam. Iusto inventore asperiores saepe veritatis quidem, quo debitis obcaecati neque vitae illo voluptate suscipit.</small>
                </article>
                
            </div>
        </section>
    )
}

export default Testimonials