import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterV4 extends Component {

  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + '/'
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/theme.js";

    document.body.appendChild(minscript);

    $('.go-top').find('a').on('click', function () {
      $(window).scrollTop(0);
    });


  }

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = "Footer logo"

    return (
      <footer className="site-footer-four  go-top">
        <div className="site-footer-four__bubble-1" />{/* /.site-footer-four__bubble-1 */}
        <div className="site-footer-four__bubble-2" />{/* /.site-footer-four__bubble-2 */}
        <div className="site-footer-four__bubble-3" />{/* /.site-footer-four__bubble-3 */}
        <div className="site-footer-four__bubble-4" />{/* /.site-footer-four__bubble-4 */}
        <div className="site-footer-four__mc-wrap">
          
        </div>{/* /.site-footer-four__mc-wrap */}
        <div className="site-footer-four__upper">
          <div className="container">
            <div className="site-footer-four__upper-sep" />{/* /.site-footer-four__upper-sep */}
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index-2.html">
                    <img src={publicUrl + "assets/images/logo-full-light.png"} alt={imgattr} />
                  </a>
                  <p>Pusat Data dan Informasi Perpustakaan Nasional RI</p>
									<p>Jl. Medan Merdeka Selatan No. 11 Jakarta 10110</p>
                </div>{/* /.footer-widget footer-widget__about */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__links">
                  <h3 className="footer-widget__title">Layanan Perpusnas RI</h3>{/* /.footer-widget__title */}
                  <ul className="list-unstyled">
                  <li><a href="https://opac.perpusnas.go.id/">OPAC</a></li>
                  <li><a href="https://e-resources.perpusnas.go.id/">e-Resources</a></li>
                  <li><a href="https://onesearch.id/">OneSearch</a></li>
                  <li><a href="https://ipusnas.perpusnas.go.id/">iPusnas</a></li>
                  <li><a href="https://paprika.perpusnas.go.id/">Paprika</a></li>
                  <li><a href="https://edeposit.perpusnas.go.id/">e-Deposit</a></li>
                  </ul>{/* /.list-unstyled */}
                </div>{/* /.footer-widget footer-widget__links */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="footer-widget">
                  
                  <div className="footer-widget__social">
                    <p>Ikuti Media Sosial Kami</p>
                    <a href="https://www.facebook.com/ayokeperpusnas"><i className="fab fa-facebook-f" /></a>
                    <a href="https://twitter.com/perpusnas1"><i className="fab fa-twitter" /></a>
                    <a href="https://www.instagram.com/perpusnas.go.id/"><i className="fab fa-instagram" /></a>
                    <a href="https://www.youtube.com/@Katinksg"><i className="fab fa-youtube" /></a>
                  </div>{/* /.footer-widget__social */}
                </div>{/* /.footer-widget */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.site-footer-four__upper */}
        <div className="site-footer-four__bottom">
          <div className="container text-center">
            <div className="site-footer-four__bottom-sep" />{/* /.site-footer-four__upper-sep */}
            <p>Pusdatin©2023 <a href="https://perpusnas.go.id/">Perpustakaan Nasional RI</a>. Hak Cipta Dilindungi Undang-undang.</p>
          </div>{/* /.container */}
        </div>{/* /.site-footer-four__bottom */}
      </footer>

    )
  }
}


export default FooterV4