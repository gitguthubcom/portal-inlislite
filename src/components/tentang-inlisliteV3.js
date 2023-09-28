import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Faqpage from './section-components/faq-v3';
import Footer from './global-components/footer-v2';

const Faq = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tentang INLISLite ver. 3"  subheader="Tentang INLISLite ver. 3" />
        <Faqpage />
        <Footer />
    </div>
}

export default Faq

