import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV4 extends Component {

    render() {


    return	<section className="service-five  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="service-five__single">
			          <div className="service-five__single-inner">
			            <div className="service-five__icon">
			              <i className="far fa-chart-line" />
			            </div>{/* /.service-five__icon */}
			            <h3><Link to="/service-details">Best Performance</Link></h3>
			            <p>Menggunakan teknologi pengcodingan terkini dan mutakhir, akses data front-end dan back-end menjadi lebih cepat. </p>
			          </div>{/* /.service-five__single-inner */}
			        </div>{/* /.service-five__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="service-five__single">
			          <div className="service-five__single-inner">
			            <div className="service-five__icon">
			              <i className="far fa-rss" />
			            </div>{/* /.service-five__icon */}
			            <h3><Link to="/service-details">Easy Configuration</Link></h3>
			            <p>dengan tampilan baru yang lebih simple, memudahkan dalam instalasi dan konfigurasi aplikasi </p>
			          </div>{/* /.service-five__single-inner */}
			        </div>{/* /.service-five__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="service-five__single">
			          <div className="service-five__single-inner">
			            <div className="service-five__icon">
			              <i className="far fa-unlock-alt" />
			            </div>{/* /.service-five__icon */}
			            <h3><Link to="/service-details">Best Security</Link></h3>
			            <p>Penggunaan metode baru keamanan data, sehingga lebih terjaga dari serangan cyber. </p>
			          </div>{/* /.service-five__single-inner */}
			        </div>{/* /.service-five__single */}
			      </div>{/* /.col-lg-4 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>


        }
}

export default ServiceV4