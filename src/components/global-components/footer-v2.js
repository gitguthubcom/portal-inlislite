import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

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
			<div className="site-footer-two  go-top">
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-1.png"} alt={imgattr} className="site-footer-two__shape-1" />
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-2.png"} alt={imgattr} className="site-footer-two__shape-2" />
				<div className="site-footer-two__upper">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__about">
									<Link to="/">
										<img src={publicUrl + "assets/images/logo-full-light.png"} alt={imgattr} />
									</Link>
									<p>Pusat Data dan Informasi Perpustakaan Nasional RI</p>
									<p>Jl. Medan Merdeka Selatan No. 11 Jakarta 10110</p>
									<div className="footer-widget__social">
										<a href="https://www.facebook.com/ayokeperpusnas"><i className="fab fa-facebook-f" /></a>
										<a href="https://twitter.com/perpusnas1"><i className="fab fa-twitter" /></a>
										<a href="https://www.instagram.com/perpusnas.go.id/"><i className="fab fa-instagram" /></a>
										<a href="https://www.youtube.com/@Katinksg"><i className="fab fa-youtube" /></a>
									</div>{/* /.footer-widget__social */}
								</div>{/* /.footer-widget footer-widget__about */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
							<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Layanan Perpusnas RI</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
										<li><a href="https://opac.perpusnas.go.id/">OPAC</a></li>
										<li><a href="https://keanggotaan.perpusnas.go.id/">Keanggotaan Perpusnas</a></li>
										<li><a href="https://e-resources.perpusnas.go.id/">e-Resources</a></li>
										<li><a href="https://onesearch.id/">OneSearch</a></li>
										<li><a href="https://ipusnas.perpusnas.go.id/">iPusnas</a></li>
										<li><a href="https://paprika.perpusnas.go.id/">Paprika</a></li>
									</ul>{/* /.footer-widget__links-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Penerbit, Institusi, dan Pustakawan</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
									<li><a href="https://edeposit.perpusnas.go.id/">e-Deposit</a></li>
										<li><a href="https://keanggotaan.perpusnas.go.id/">Keanggotaan Perpusnas</a></li>
										<li><a href="https://isbn.perpusnas.go.id/">ISBN</a></li>
										<li><a href="https://ismn.perpusnas.go.id/">ISMN</a></li>
										<li><a href="https://depbangkol.perpusnas.go.id/">Serah Simpan KCKR</a></li>
										<li><a href="https://data.perpusnas.go.id/">Pendataan Perpustakaan</a></li>
										<li><a href="https://pusdiklat.perpusnas.go.id/">Pusdiklat</a></li>
									</ul>{/* /.footer-widget__links-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							
						</div>{/* /.row */}
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__upper */}
				<div className="site-footer-two__bottom">
					<div className="container">
						<p>Pusdatin©2023 <a href="#">Perpustakaan Nasional RI</a>. Hak Cipta Dilindungi Undang-undang.</p>
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__bottom */}
			</div>
		)
	}
}


export default Footer_v2