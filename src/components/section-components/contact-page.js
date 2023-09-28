import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
		  <section className="contact-two">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-5">
		          <div className="contact-two__content">
		            <div className="contact-two__block">
		              <h3>Dukungan Teknis INLISLite</h3>
		              <p>Dukungan teknis seperti bantuan dalam melakukan instalasi, update, pemecahan masalah, dan backup data dapat ditempuh dengan beberapa cara :
						<ol>
							<li>Panduan via perangkat komunikasi (telepon dan chatting)</li>
							<li>Penanganan oleh tim technical support secara remote menggunakan program aplikasi remote desktop seperti Windows Remote Desktop, TeamViewer, 
								dan sejenisya</li>
							<li>Mengirimkan internal storage unit (Harddisk) melalui jasa pengiriman barang.</li>
							<li>Mengirimkan unit CPU komputer melalui jasa pengiriman barang.</li>
							<li>Datang langsung ke Perpustakaan Nasional RI dengan membawa komputer yang akan diinstalasi / akan dilakukan pemecahan masalah</li>
							<li>Mengundang staf teknis Perpustakaan Nasional RI sesuai peraturan perjalanan dinas yang berlaku</li>
						</ol>
					  </p>
		            </div>{/* /.contact-two__block */}
		            <ul className="list-unstyled contact-two__info-list">
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-map-marked" />
		                  Alamat :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><b>Pusat Data dan Informasi Perpustakaan Nasional RI</b> <br />Jl. Medan Merdeka Selatan No. 11 Jakarta 10110</p>
		              </li>
		              
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-envelope" />
		                  Email :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><a href="mailto:support@gmail.com">info@perpusnas.go.id</a></p>
		              </li>
		            </ul>{/* /.contact-two__info-list */}
		          </div>{/* /.contact-two__content */}
		        </div>{/* /.col-lg-5 */}
		        <div className="col-lg-7">
		          <form action="#" className="contact-two__form">
		            <div className="contact-two__block">
		              <h3>Bimbingan Teknis INLISLite</h3>
		              <p>Bimbingan teknis terkait program aplikasi INLISLite bagi pengelola perpustakaan di seluruh Indonesia dapat diperoleh melalui:
						<ol>
							<li>Kegiatan Supervisi / Bimtek / Diklat yang diselenggarakan oleh Perpustakaan Nasional RI (melalui undangan resmi)</li>
							<li>Magang di Perpustakaan Nasional RI
								<br />Perpustakaan Nasional RI membuka peluang bagi pengelola perpustakaan di Indonesia untuk melakukan magang terkait program 
								aplikasi INLIS Lite. Syarat & Ketentuan:
								<ul>
									<li>Mengirimkan surat permohonan secara resmi dari lembaga / institusi perpustakaan yang bersangkutan kepada : Kepala Pusat Data & Informasi
										 Perpustakaan Nasional RI, Jl. Medan Merdeka Selatan No. 11 Jakarta 10110, email : info@perpusnas.go.id</li>
									<li>Surat permohonan dikirimkan selambat-lambatnya 7 (tujuh) hari sebelum jadwal pelaksanaan magang untuk dikonfirmasikan kepada tim pelaksana 
										pada unit kerja terkait.</li>
									<li>Jasa pembimbingan tidak dipungut biaya</li>
									<li>Transportasi, akomodasi, ATK, dan biaya-biaya keperluan lainnya ditanggung oleh pihak peserta magang.</li>
									<li>Waktu pelaksanaan magang hanya di hari kerja, Senin s.d. Jumat antara pukul 09.00 s.d. 15.00 (disesuaikan dengan kebutuhan materi bimbingan)</li>
								</ul>
							</li>
							<li>Workshop / Bimbingan Teknis Inisiatif
								<br/>Kegiatan workshop / bimbingan teknis terkait program aplikasi INLIS Lite dapat diselenggarakan secara inisiatif oleh pihak 
								pengelola perpustakaan, dengan mengundang tim pembimbing dari Perpustakaan Nasional RI sebagai narasumbernya. Syarat dan Ketentuan :
								<ul>
									<li>Mengirimkan surat permohonan secara resmi dari lembaga / institusi perpustakaan yang bersangkutan kepada : Kepala Pusat Data & Informasi
										 Perpustakaan Nasional RI, Jl. Medan Merdeka Selatan No. 11 Jakarta 10110, email : info@perpusnas.go.id</li>
									<li>Materi bimbingan / workshop disesuaikan dengan kebutuhan pihak penyelenggara;</li>
									<li>Jumlah nara sumber disesuaikan dengan kebutuhan materi bimbingan / workshop;</li>
									<li>Surat permohonan dikirimkan selambat-lambatnya 7 (tujuh) hari sebelum jadwal pelaksanaan kegiatan untuk dikonfirmasikan kepada 
										pimpinan unit kerja terkait.</li>
									<li>Biaya-biaya (transportasi, akomodasi, dan lain-lain) bagi nara sumber yang diundang ditanggung oleh pihak penyelenggara;</li>
									<li>Waktu penyelenggaraan workhop / bimbingan teknis inisiatif disesuaikan dengan kebutuhan penyelenggara atau kesepakatan antara penyelenggara 
										dengan nara sumber yang diundang</li>
									<li>Pihak penyelenggara tidak diperkenankan memungut biaya keikutsertaan kepada peserta yang diundang.</li>
								</ul>
							</li>
						</ol>
					  </p>
		            </div>{/* /.contact-two__block */}
		            
		          </form>{/* /.contact-two__form */}
		        </div>{/* /.col-lg-7 */}
		      </div>{/* /.row */}
		    </div>{/* /.container */}
		  </section>{/* /.contact-two */}
		  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.246066374694!2d106.81739319357911!3d-6.181182600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f442596e0c93%3A0x4ba58be40979fe36!2sPerpustakaan%20Nasional%20Republik%20Indonesia!5e0!3m2!1sid!2sid!4v1695931236342!5m2!1sid!2sid" className="google-map__contact" allowFullScreen />
		</div>

        }
}

export default Contact