import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v5';
import Cta from './section-components/cta-v10';
import FaqV2 from './section-components/faq-v2';
import Footer from './global-components/footer-v2';

const ServiceV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tentang Inlislite Ver. 3"  />
        <Service />
        
        <FaqV2 />
        <Cta />
        <Footer />
    </div>
}

export default ServiceV1

