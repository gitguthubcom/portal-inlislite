import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-two service-two__service-page  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-5">
		        <div className="service-two__block">
		          <div className="block-title-two text-left">
		            <p>Tentang</p>
		            <h3>Inlislite ver. 3</h3>
		          </div>{/* /.block-title-two */}
		          <p>INLISLite versi 3 merupakan pengembangan lanjutan dari perangkat lunak (software) aplikasi otomasi perpustakaan INLISLite versi 2.1.2 yang dibangun 
					dan dikembangkan oleh Perpustakaan Nasional RI (Perpustakaan Nasional RI) sejak tahun 2011. </p>
				  <p>INLISLite versi 3 dikembangkan sebagai perangkat lunak satu pintu bagi pengelola perpustakaan untuk menerapkan otomasi perpustakaan sekaligus 
					mengembangkan perpustakaan digital / mengelola dan melayankan koleksi digital.</p>
				<p>INLIS Lite dibangun dan dikembangkan secara resmi oleh Perpustakaan Nasional RI dalam rangka menghimpun koleksi nasional dalam jejaring Perpustakaan 
					Digital Nasional Indonesia, disamping membantu upaya pengembangan pengelolaan dan pelayanan perpustakaan berbasis teknologi informasi dan komunikasi di seluruh Indonesia yang didasarkan pada :</p>
		          <ul className="list-unstyled video-one__list">
		            <li>
		              <i className="far fa-check" />
		              Undang-Undang Republik Indonesia Nomor 43 Tahun 2007 tentang Perpustakaan;
		            </li>
		            <li>
		              <i className="far fa-check" />
		              Peraturan Pemerintah Nomor 24 Tahun 2014 Tentang Pelaksanaan Undang-Undang Republik Indonesia Nomor 43 Tahun 2007 tentang Perpustakaan;
		            </li>
		            <li>
		              <i className="far fa-check" />
		              Undang-Undang Nomor 4 Tahun 1990 Tentang Serah Simpan Karya Cetak dan Rekam
		            </li>
		            
		          </ul>{/* /.list-unstyled video-one__list */}
		          
		        </div>{/* /.service-two__block */}
		      </div>{/* /.col-lg-5 */}
		      
			  <div className="col-lg-6 d-flex justify-content-center">
              <div className="faq-two__image">
                <img src={publicUrl+"assets/images/resources/inlisliteV3.png"} alt={ imagealt } />
              </div>{/* /.faq-two__image */}
            </div>{/* /.col-lg-6 */}

		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default ServiceV5