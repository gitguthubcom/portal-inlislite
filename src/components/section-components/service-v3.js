import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return	<section className="service-four  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-atom-alt" />
		          <h3><Link to="/service-details">Advanced Business <br /> Solutions</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-bullseye-arrow" />
		          <h3><Link to="/service-details">Achieve Targets <br />
		              with Goals</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-recycle" />
		          <h3><Link to="/service-details">Increase the Online <br /> Workflow</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-anchor" />
		          <h3><Link to="/service-details">Higher Annualized <br /> Growth</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		    </div>{/* /.row */}
		    
		  </div>{/* /.container */}
		</section>



        }
}

export default ServiceV3