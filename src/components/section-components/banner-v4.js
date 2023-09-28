import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="banner-four  go-top">
		  <img src={publicUrl+"assets/images/resources/banner-4-1.png" }className="banner-four__moc" alt={ imagealt } />
		  <div className="container-fluid">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="banner-four__content">
		          <h4>InlisLite 4.0 <span>New</span></h4>
		          <h3>Integrated <br />
		            <span>Library System</span></h3>
		          <p>Sistem Aplikasi Otomatisasi Perpustakaan, Terintegrasi, Mudah Digunakan &amp; Gratis</p>
		          <Link to="/service" className="thm-btn banner-four__btn">Coba Sekarang <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn banner-four__btn */}
		        </div>{/* /.banner-four__content */}
		      </div>{/* /.col-lg-12 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default BannerV4