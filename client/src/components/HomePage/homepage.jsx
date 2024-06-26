import React from 'react'
import Hero from './hero'
import NewArrivals from './newArrivals'
import About from './about'
import Footer from './footer'
import Reviews from '../ReviewSection/Reviews'


const homepage = () => {
    return (
        <div>
            <div className='page'>
                <Hero />
                <NewArrivals />
                <About />
                <Reviews />
                {/*<ContactUs />*/}
                <Footer />
            </div>
        </div>
    )
}

export default homepage;
