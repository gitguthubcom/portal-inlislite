import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV4 extends Component {

	componentDidMount() {
	 	let publicUrl = process.env.PUBLIC_URL+'/'
        const cssUrl =   publicUrl + "assets/css/color-4.css";
        this.addStyle(cssUrl);
    }

    addStyle = url => {
        const style = document.createElement("link");
        style.href = url;
        style.rel = "stylesheet";
        style.async = true;

        document.head.appendChild(style);
    };

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        return (
           <header className="site-header-two site-header-two__home-four go-top">
			  <nav className="main-nav__two stricky">
			    <div className="container-fluid">
			      <div className="main-nav__logo-box">
			        <Link to="/">
			          <img src={publicUrl+"assets/images/logo-full-light.png"} alt={ imgattr } />
			        </Link>
			      </div>{/* /.main-nav__logo-box */}
			      <div className="main-nav__main-navigation">
			        <ul className=" main-nav__navigation-box">
			          <li>
			            <Link to="/">Beranda</Link>
			            
			          </li>
			          {/* <li>
			            <Link to="/about">About</Link>
			          </li> */}
			          <li className="dropdown">
			            <a href="#">Tentang</a>
			            <ul>
			              <li><Link to="/faq-v2">InlisLite ver 3</Link></li>
			              <li><Link to="/tentang-inlislite-v4">InlisLite ver 4</Link></li>
			              
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li>
			            <a href="#">Fitur & Modul Program</a>
			           
			          </li>
			          <li className="dropdown">
			            <a href="#">Unduh App</a>
			            <ul>
			              <li><Link to="/pricing">Installer</Link></li>
			              <li><Link to="/faq">Patch/Updater</Link></li>
			              <li><Link to="/service-v2">Panduan</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li className="dropdown">
			            <Link to="/blog-standard">Aplikasi Pendukung</Link>
			            <ul>
			              <li><Link to="/blog-grid">OAI-PMH Service</Link></li>
			              <li><Link to="/blog-list">SMS Gateway Service</Link></li>
			              <li><Link to="/blog-details">RFID Gateway Service</Link></li>
						  <li><Link to="/blog-list">Migrator</Link></li>
			              <li><Link to="/blog-details">Record Indexing (Elastic Search)</Link></li>

			            </ul>{/* /.sub-menu */}
			          </li>
			          <li>
			            <Link to="/contact">Kontak</Link>
			          </li>
			        </ul>
			      </div>{/* /.main-nav__main-navigation */}
			      <div className="main-nav__right">
			        <a href="#" className="side-menu__toggler"><span /></a>
			        <Link to="/contact">Dukungan Teknis?</Link>
			        <Link to="/contact">Demo Program</Link>
			      </div>{/* /.main-nav__right */}
			    </div>{/* /.container-fluid */}
			  </nav>{/* /.main-nav__one */}
			</header>


        )
    }
}


export default NavbarV4