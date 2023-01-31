import React, { Suspense } from 'react'
import testimonials from './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: avatar1,
        name: 'Ivan',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque cumque accusamus laborum, itaque dolorum atque quos voluptas! Sapiente, nisi reprehenderit laborum esse nam modi doloribus rerum corporis deserunt'
    },
    {
        avatar: avatar2,
        name: 'Elmira',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque cumque accusamus laborum, itaque dolorum atque quos voluptas! Sapiente, nisi reprehenderit laborum esse nam modi doloribus rerum corporis deserunt'
    },
    {
        avatar: avatar3,
        name: 'Elmer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque cumque accusamus laborum, itaque dolorum atque quos voluptas! Sapiente, nisi reprehenderit laborum esse nam modi doloribus rerum corporis deserunt'
    },
    {
        avatar: avatar4,
        name: 'Roberto',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque cumque accusamus laborum, itaque dolorum atque quos voluptas! Sapiente, nisi reprehenderit laborum esse nam modi doloribus rerum corporis deserunt'
    }
]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <Suspense>
                <h5>Review from clients</h5>
                <h2>Testimonials</h2>
                <Swiper className="container testimonials__container"
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={35}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {
                        data.map(({avatar, name, review}, index) => {
                            return(
                                <SwiperSlide key={index} className='testimonial'>
                                    <div className="client_avatar">
                                    <LazyLoadImage
                                            src={avatar}
                                            alt='Testimonials of clients'
                                            height='100%'
                                            width='100%'
                                            effect='blur'
                                            loading='lazy'
                                        />
                                    </div>
                                    <h5 className='client__name'>{name}</h5>
                                    <small className='client__review'>{review}</small>
                                </SwiperSlide>
                            )
                        })
                    }
                    
                </Swiper>
            </Suspense>
        </section>
    )
}

export default Testimonials