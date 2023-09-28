import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           <header className="site-header-two site-header-two__ go-top  go-top">
			  <nav className="main-nav__two stricky">
			    <div className="container">
			      <div className="main-nav__logo-box">
			        <Link to="/">
			          <img src={publicUrl+"assets/images/logo-2-1.png"} alt={ imgattr }/>
			        </Link>
			      </div>{/* /.main-nav__logo-box */}
			      <div className="main-nav__main-navigation">
			        <ul className=" main-nav__navigation-box">
			          <li className="dropdown">
			            <Link to="/home-v4">Beranda</Link>
			            
			          </li>
					  
					  <li className="dropdown">
			            <a href="#">Tentang</a>
			            <ul>
			              <li><Link to="/tentang-inlisliteV3">Inlislite ver 3</Link></li>
			              <li><Link to="/tentang-inlisliteV3">Inlislite ver 4</Link></li>
			              
			            </ul>{/* /.sub-menu */}
			          </li>
			          
					  <li>
			            <Link to="/about">Fitur & Modul Program</Link>
			          </li>
			          
			           <li className="dropdown">
			            <a href="#">Unduh App</a>
			            <ul>
			              <li><Link to="/portfolio-standard">Installer</Link></li>
			              <li><Link to="/portfolio-full">Patch/Updater</Link></li>
			              <li><Link to="/portfolio-masonary">Panduan</Link></li>
			              
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li className="dropdown">
			            <a href="#">Aplikasi Pendukung</a>
			            <ul>
			              <li><Link to="/pricing">OAI-PMH Service</Link></li>
			              <li><Link to="/faq">SMS Gateway Service</Link></li>
			              <li><Link to="/testimonial">RFID Gateway Service</Link></li>
			              <li><Link to="/team">Migrator</Link></li>
						  <li><Link to="/team">Record Indexing (Elastic Search)</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			           
			          <li>
			            <Link to="/contact">Kontak</Link>
			          </li>
			        </ul>
			      </div>{/* /.main-nav__main-navigation */}
			      <div className="main-nav__right">
			        <a href="#" className="side-menu__toggler"><span /></a>
			      </div>{/* /.main-nav__right */}
			    </div>{/* /.container */}
			  </nav>{/* /.main-nav__one */}
			</header>



        )
    }
}


export default NavbarV2