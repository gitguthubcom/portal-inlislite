import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV4 extends Component {

	     componentDidMount() {

        const $ = window.$;
         if ($('.testimonials-three__carousel').length) {
            //Init the carousel
            initSlider();

            function initSlider() {
                $(".testimonials-three__carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    dots: false,
                    nav: false,
                    autoplay: true,
                    onInitialized: startProgressBar,
                    onTranslate: resetProgressBar,
                    onTranslated: startProgressBar
                });
            }

            function startProgressBar() {
                // apply keyframe animation
                $(".testimonials-three__slide-progress span").css({
                    width: "100%",
                    transition: "width 5000ms"
                });
            }

            function resetProgressBar() {
                $(".testimonials-three__slide-progress span").css({
                    width: 0,
                    transition: "width 0s"
                });
            }
	        }

	    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="testimonials-three">
			  <div className="container">
			    <div className="testimonials-three__block text-center">
			      <h3>Testimoni Pengguna InlisLite</h3>
			     
			    </div>{/* /.testimonials-three__block */}
			    <div className="testimonials-three__carousel owl-carousel owl-theme">
			      <div className="item">
			        <div className="testimonials-three__single">
			          <div className="row">
			            <div className="col-lg-5">
			              <div className="testimonials-three__image">
			                <img src={publicUrl+"assets/images/testimonials/testi-3-1.png"} alt={ imagealt } />
			              </div>{/* /.testimonials-three__image */}
			            </div>{/* /.col-lg-5 */}
			            <div className="col-lg-7 d-flex">
			              <div className="my-auto">
			                <div className="testimonials-three__content">
			                  <p>Kami merasa sangat terbantu dengan adanya entry data ke dalam aplikasi INLISLite karena kita lebih dimudahkan
								dalam mencari koleksi melalui OPAC
							  </p>
			                  <h3>Pustakawan</h3>
			                  <span>Dispurarsip Kabupaten Lubuklinggau</span>
			                </div>{/* /.testimonials-three__content */}
			              </div>{/* /.my-auto */}
			            </div>{/* /.col-lg-7 */}
			          </div>{/* /.row */}
			        </div>{/* /.testimonials-three__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-three__single">
			          <div className="row">
			            <div className="col-lg-5">
			              <div className="testimonials-three__image">
			                <img src={publicUrl+"assets/images/testimonials/testi-3-2.png"} alt={ imagealt } />
			              </div>{/* /.testimonials-three__image */}
			            </div>{/* /.col-lg-5 */}
			            <div className="col-lg-7 d-flex">
			              <div className="my-auto">
			                <div className="testimonials-three__content">
			                  <p>INLISLite bisa mempermudah kami sebagai siswa untuk mencari dan mendapatkan koleksi buku dan bahan bacaan yang kami inginkan. </p>
			                  <h3>Siswi</h3>
			                  <span>SMA Kabupaten Hulu Sungai Utara</span>
			                </div>{/* /.testimonials-three__content */}
			              </div>{/* /.my-auto */}
			            </div>{/* /.col-lg-7 */}
			          </div>{/* /.row */}
			        </div>{/* /.testimonials-three__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-three__single">
			          <div className="row">
			            <div className="col-lg-5">
			              <div className="testimonials-three__image">
			                <img src={publicUrl+"assets/images/testimonials/testi-3-3.png"} alt={ imagealt } />
			              </div>{/* /.testimonials-three__image */}
			            </div>{/* /.col-lg-5 */}
			            <div className="col-lg-7 d-flex">
			              <div className="my-auto">
			                <div className="testimonials-three__content">
			                  <p>Kami merasakan manfaat dari aplikasi INLISLite yakni optimalisasi label barcode scanner. Sebelumnya nomor panggil dan barcode itu terpisah,
								maka sekarang sudah lebih praktis karena bisa dicetak dalam sekali input menggunakan fitur di INLISLite
							  </p>
			                  <h3>Taufik Tri Muladi</h3>
			                  <span>Pengelola Bahan Pustaka Dispursip Kab. Tangerang</span>
			                </div>{/* /.testimonials-three__content */}
			              </div>{/* /.my-auto */}
			            </div>{/* /.col-lg-7 */}
			          </div>{/* /.row */}
			        </div>{/* /.testimonials-three__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-three__carousel owl-carousel thm__owl-carousel owl-theme */}
			    <div className="testimonials-three__slide-progress">
			      <span />
			    </div>{/* /.slide-progress */}
			  </div>{/* /.container */}
			</section>
        }
}

export default TestimonialV4