import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="faq-one faq-one__faq-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="faq-one__block">
                  <div className="block-title-two text-left">
                    
                    <span>INLISLite versi 3 merupakan pengembangan lanjutan dari perangkat lunak (software) aplikasi otomasi perpustakaan INLISLite versi 2.1.2 
                      yang dibangun dan dikembangkan oleh Perpustakaan Nasional RI (Perpustakaan Nasional RI) sejak tahun 2011.</span>
                    <br />
                    <br />
                    <span>INLISLite versi 3 dikembangkan sebagai perangkat lunak satu pintu bagi pengelola perpustakaan untuk menerapkan otomasi perpustakaan sekaligus 
                      mengembangkan perpustakaan digital / mengelola dan melayankan koleksi digital.</span>
                    <br />
                    <br />
                    <span>INLIS Lite dibangun dan dikembangkan secara resmi oleh Perpustakaan Nasional RI dalam rangka menghimpun koleksi nasional dalam jejaring Perpustakaan
                       Digital Nasional Indonesia, disamping membantu upaya pengembangan pengelolaan dan pelayanan perpustakaan berbasis teknologi informasi dan 
                       komunikasi di seluruh Indonesia yang didasarkan pada :</span>
                    <span><ul>
                      <li>Undang-Undang Republik Indonesia Nomor 43 Tahun 2007 tentang Perpustakaan;</li>
                      <li>Peraturan Pemerintah Nomor 24 Tahun 2014 Tentang Pelaksanaan Undang-Undang Republik Indonesia Nomor 43 Tahun 2007 tentang Perpustakaan;</li>
                      <li>Undang-Undang Nomor 4 Tahun 1990 Tentang Serah Simpan Karya Cetak dan Rekam</li>
                      </ul></span>
                  </div>{/* /.block-title-two */}
                  <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                    <div className="accrodion ">
                      <div className="accrodion-title">
                        <h4>Karakteristik INLISLite Versi 3.0</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p><ol>
                            <li>Mengikuti standar metadata <b>MARC</b> (<i>Machine Readable Cataloguing</i>) dalam pembentukan katalog digitalnya.</li>
                            <li>Berbasis web (<i>web based application software</i>), di mana dalam pengoperasiannya menggunakan aplikasi browser internet yang umum digunakan untuk 
                              menjelajahi informasi di internet.</li>
                            <li>Instalasi perangkat lunak INLIS Lite cukup dilakukan pada satu komputer yang difungsikan sebagai pangkalan data (server). Pengoperasian aplikasi 
                              cukup dilakukan melalui komputer kerja (<i>workstation</i>) dengan cara mengkoneksikannya melalui perangkat jaringan komputer, baik secara lokal 
                              (<i>local area network</i>), antar wilayah (<i>wide area network</i>), maupun Internet.</li>
                            <li>Dapat dioperasikan secara bersamaan dalam satu waktu secara simultan (<i>multi user ready</i>)</li>
                            <li>Bebas pakai / gratis (<i>freeware</i> dan <i>opensource</i>).</li>
                            </ol></p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>Pilihan Platform InlisLite Versi 3</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                          INLISLite versi 3 dibangun dalam dua pilihan platform bahasa pemrograman yaitu:
                            <ol>
                            <li><b>DotNet Framework</b>, yang dapat diinstalasi pada komputer bersistem operasi Windows</li>
                            <li><b>PHP </b>(<i>opensource</i>), yang dapat diinstalasi pada komputer bersistem operasi Windows dan Linux</li>
                            </ol></p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>Ketentuan Penggunaan dan Distribusi INLIS Lite Versi 3</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p><ol>
                            <li>Seluruh perpustakaan lembaga maupun perorangan yang membutuhkan dipersilahkan untuk menyalin, menginstalasi, dan memanfaatkan perangkat lunak aplikasi 
                              INLIS Lite versi 3.</li>
                            <li>Seluruh perpustakaan lembaga maupun perorangan yang membutuhkan dipersilahkan untuk menyalin dan menginstalasi komponen perbaikan program (patch) 
                              dan komponen pemutakhir program (update) apabila tersedia.</li>
                            <li>Dilarang memperjualbelikan paket instalasi, komponen perbaikan (patch), maupun komponen pemutakhir (update) program aplikasi INLIS Lite versi 3.</li>
                            <li>Dukungan teknis (technical support) akan diberikan oleh Perpustakaan Nasional RI kepada pengguna perangkat lunak INLISLite versi 3 selama mematuhi 
                              syarat dan ketentuan yang berlaku. Informasi terkait syarat dan ketentuan dukungan teknis INLIS Lite versi 3 dapat dilihat pada laman 
                              Dukungan Teknis</li>
                            <li>Bimbingan teknis akan diberikan oleh Perpustakaan Nasional RI selama mematuhi syarat dan ketentuan yang berlaku. Informasi terkait syarat dan 
                              ketentuan bimbingan teknis INLIS Lite versi 3 dapat dilihat pada laman Bimbingan Teknis</li>
                            <li>Perpustakaan Nasional RI merekomendasikan kepada Perpustakaan Umum Pemerintah Propinsi/Kabupaten/Kota sebagai pembina perpustakaan di wilayahnya 
                              untuk berperan aktif membantu memberikan dukungan teknis dan membiayai kegiatan pelatihan / bimbingan teknis penggunaan program aplikasi INLISLite 
                              versi 3</li>
                            </ol></p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>Ketentuan Modifikasi INLIS Lite Versi 3 PHP (Opensource)</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p><ol>
                            <li>Semua pihak dengan tujuan yang baik dipersilahkan untuk berkontribusi dengan cara memodifikasi beberapa tampilan dan/atau beberapa fungsi program 
                              di dalam perangkat lunak aplikasi INLIS Lite Versi 3 PHP (Opensource) dengan memperhatikan semua poin-poin yang ada di dalam ketentuan ini</li>
                            <li>Tidak diperkenankan menghapus logo dan tulisan INLISLite di modul dan/atau laman manapun.</li>
                            <li>Tidak diperkenankan mengubah dan/atau menghapus kalimat yang berisi Hak Cipta © Perpustakaan Nasional RI</li>
                            <li>Tidak diperkenankan mengubah standar metadata MARC yang menjadi ciri utama dari pembentukan katalog digital dalam perangkat lunak program 
                              aplikasi INLISLite versi 3</li>
                            <li>Perpustakan Nasional Republik Indonesia dan komunitas pengguna INLISLite di seluruh Indonesia berhak mengetahui kegiatan modifikasi program 
                              aplikasi INLISLite versi 3 PHP</li>
                            <li>Semua pihak yang melakukan modifikasi program aplikasi INLISLite bersedia membagi source code hasil kegiatan tersebut secara penuh kepada 
                              Perpustakaan Nasional RI dan menjadi bagian dari pengembangan INLISLite oleh Perpustakan Nasional Republik Indonesia dan komunitas pengguna 
                              INLISLite di seluruh Indonesia</li>
                            <li>Tidak diperkenankan memperjualbelikan source code / program aplikasi INLISLite dan hasil modifikasinya</li>
                            </ol></p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                  </div>
                </div>{/* /.faq-one__block */}
                
              </div>{/* /.col-lg-8 */}
              <div className="col-lg-4">
                <div className="faq-one__form-wrap">
                  <form action="#" className="contact-one__form">
                    <h3>Demo INLISLite ver. 3</h3>
                    <div className="row">
                        
              
                      <div className="col-lg-12">
                        <button type="submit" className="thm-btn contact-one__form-btn" href="http://demoinlislitev31.perpusnas.go.id/">Uji Coba Aplikasi <i className="fa fa-angle-double-right" /></button>
                        {/* /.thm-btn contact-one__form-btn */}
                      </div>{/* /.col-lg-12 */}
                    </div>{/* /.row */}
                  </form>{/* /.contact-one__form */}
                </div>{/* /.faq-one__form-wrap */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>


        }
}

export default FaqV3