import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

import HomeV4 from './components/home-v4';
import About from './components/about';
import TentangV3 from './components/tentang-inlisliteV3';
import FiturV3 from './components/fitur-inlisliteV3';
import Service from './components/service';
import ServiceV2 from './components/service-v2';
import ServiceDetails from './components/service-details';
import PortfolioStandard from './components/portfolio-standard';
import PortfolioFull from './components/portfolio-full';
import PortfolioMasonary from './components/portfolio-masonary';
import PortfolioDetails from './components/portfolio-details';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Testimonial from './components/testimonial';
import Team from './components/team';
import BlogGrid from './components/blog-grid';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV4} />
	                    
	                    <Route path="/about" component={About} />
						<Route path="/tentang-inlisliteV3" component={TentangV3} />
						<Route path="/fitur-inlisliteV3" component={FiturV3} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/service-v2" component={ServiceV2} />
	                    <Route path="/service-details" component={ServiceDetails} />
	                    <Route path="/portfolio-standard" component={PortfolioStandard} />
	                    <Route path="/portfolio-full" component={PortfolioFull} />
	                    <Route path="/portfolio-masonary" component={PortfolioMasonary} />
	                    <Route path="/portfolio-details" component={PortfolioDetails} />
	                    <Route path="/pricing" component={Pricing} />
	                    <Route path="/faq" component={Faq} />
	                    <Route path="/testimonial" component={Testimonial} />
	                    <Route path="/team" component={Team} />
	                    <Route path="/blog-grid" component={BlogGrid} />
	                    <Route path="/blog-list" component={BlogList} />
	                    <Route path="/blog-details" component={BlogDetails} />
	                    <Route path="/contact" component={Contact} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
