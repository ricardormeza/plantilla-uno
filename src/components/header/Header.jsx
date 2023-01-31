import React, {Suspense} from 'react'
import header from './header.css'
import CTA from './CTA'
import ME from '../../assets/rrm_profile.png'
import HeaderSocial from './HeaderSocial'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'


// const MeImage = lazy( ()=> import('../../assets/me.webp'));

const Header = () => {
    return (
        <header className='header'>
            <div className="container header__container">
                <h5>hello I'm</h5>
                <h2>Ricky Ram</h2>
                <h5 className="text-ligth">Frontend Developer</h5>
                <CTA/>
                <HeaderSocial/>
                <Suspense>
                    <div className="me">
                        <LazyLoadImage
                            src={ME}
                            alt='image of Ricardo Ramirez Meza'
                            height={560}
                            width='100%'
                            effect='blur'
                            loading='lazy'
                        />
                    </div>          
                </Suspense>
                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header