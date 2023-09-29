import React from 'react';
import Navbar from './global-components/navbar-v4';
import Banner from './section-components/banner-v4';

import AboutV6 from './section-components/about-v6';
import Service4 from './section-components/service-v4';



import Testimonial from './section-components/testimonial-v4';


import Footer from './global-components/footer-v4';

const Home_V4 = () => {
    return <div>
        <Navbar />
        <Banner />
        
        
        <Service4 />
        
        
        
        <Testimonial />
        <AboutV6 />
        
        <Footer />
    </div>
}

export default Home_V4

