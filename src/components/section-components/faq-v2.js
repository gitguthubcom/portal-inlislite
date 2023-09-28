import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="faq-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-two__content">
                
                <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Karakteristik INLISLite Versi 3</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                    <ol>
                        <li>Mengikuti standar metadata <b>MARC</b> (Machine Readable Cataloguing) dalam pembentukan katalog digitalnya.</li>
                        <li>Berbasis web (web based application software), di mana dalam pengoperasiannya menggunakan aplikasi browser internet yang umum digunakan 
                          untuk menjelajahi informasi di internet.</li>
                        <li>Instalasi perangkat lunak INLIS Lite cukup dilakukan pada satu komputer yang difungsikan sebagai pangkalan data (server). Pengoperasian aplikasi cukup dilakukan
                           melalui komputer kerja (workstation) dengan cara mengkoneksikannya melalui perangkat jaringan komputer, baik secara lokal (local area network), 
                           antar wilayah (wide area network), maupun Internet.</li>
                        <li>Dapat dioperasikan secara bersamaan dalam satu waktu secara simultan (multi user ready)</li>
                        <li>Bebas pakai / gratis (freeware dan opensource).</li>
                    </ol>
                      </div>{/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion ">
                    <div className="accrodion-title">
                      <h4>Pilihan Platform InlisLite Versi 3</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                      <p>INLISLite versi 3 dibangun dalam dua pilihan platform bahasa pemrograman yaitu:</p>
                        <ol>
                          <li><b>DotNet Framework</b>, yang dapat diinstalasi pada komputer bersistem operasi Windows</li>
                          <li><b>PHP</b> (opensource), yang dapat diinstalasi pada komputer bersistem operasi Windows dan Linux</li>
                        </ol>
                      </div>{/* /.inner */}
                    </div>
                  </div>
                  
                </div>
                              </div>{/* /.faq-two__content */}
            </div>{/* /.col-lg-6 */}
            <div className="col-lg-6 d-flex justify-content-center">
            <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
            <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Ketentuan Penggunaan dan Distribusi INLIS Lite Versi 3</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <ol>
                          <li>Seluruh perpustakaan lembaga maupun perorangan yang membutuhkan dipersilahkan untuk menyalin, menginstalasi, dan memanfaatkan perangkat lunak aplikasi INLIS Lite versi 3.</li>
                          <li>Seluruh perpustakaan lembaga maupun perorangan yang membutuhkan dipersilahkan untuk menyalin dan menginstalasi komponen perbaikan program (patch) 
                            dan komponen pemutakhir program (update) apabila tersedia.</li>
                          <li>Dilarang memperjualbelikan paket instalasi, komponen perbaikan (patch), maupun komponen pemutakhir (update) program aplikasi INLIS Lite versi 3.</li>
                          <li>Dukungan teknis (technical support) akan diberikan oleh Perpustakaan Nasional RI kepada pengguna perangkat lunak INLISLite versi 3 selama mematuhi 
                            syarat dan ketentuan yang berlaku. Informasi terkait syarat dan ketentuan dukungan teknis INLIS Lite versi 3 dapat dilihat pada laman Dukungan Teknis</li>
                          <li>Bimbingan teknis akan diberikan oleh Perpustakaan Nasional RI selama mematuhi syarat dan ketentuan yang berlaku. Informasi terkait syarat 
                            dan ketentuan bimbingan teknis INLIS Lite versi 3 dapat dilihat pada laman Bimbingan Teknis</li>
                          <li>Perpustakaan Nasional RI merekomendasikan kepada Perpustakaan Umum Pemerintah Propinsi/Kabupaten/Kota sebagai pembina perpustakaan di wilayahnya 
                            untuk berperan aktif membantu memberikan dukungan teknis dan membiayai kegiatan pelatihan / bimbingan teknis penggunaan program aplikasi 
                            INLISLite versi 3</li>
                        </ol>
                      </div>{/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Ketentuan Modifikasi INLIS Lite Versi 3 PHP (Opensource)</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <ol>
                          <li>Semua pihak dengan tujuan yang baik dipersilahkan untuk berkontribusi dengan cara memodifikasi beberapa tampilan dan/atau beberapa fungsi program 
                            di dalam perangkat lunak aplikasi INLIS Lite Versi 3 PHP (Opensource) dengan memperhatikan semua poin-poin yang ada di dalam ketentuan ini</li>
                          <li>Tidak diperkenankan menghapus logo dan tulisan INLISLite di modul dan/atau laman manapun.</li>
                          <li>Tidak diperkenankan mengubah dan/atau menghapus kalimat yang berisi Hak Cipta © Perpustakaan Nasional RI</li>
                          <li>Tidak diperkenankan mengubah standar metadata MARC yang menjadi ciri utama dari pembentukan katalog digital dalam perangkat lunak program aplikasi 
                            INLISLite versi 3</li>
                          <li>Perpustakan Nasional Republik Indonesia dan komunitas pengguna INLISLite di seluruh Indonesia berhak mengetahui kegiatan modifikasi program aplikasi 
                            INLISLite versi 3 PHP</li>
                          <li>Semua pihak yang melakukan modifikasi program aplikasi INLISLite bersedia membagi source code hasil kegiatan tersebut secara penuh kepada Perpustakaan 
                            Nasional RI dan menjadi bagian dari pengembangan INLISLite oleh Perpustakan Nasional Republik Indonesia dan komunitas pengguna INLISLite di seluruh 
                            Indonesia</li>
                          <li>Tidak diperkenankan memperjualbelikan source code / program aplikasi INLISLite dan hasil modifikasinya</li>
                          </ol>
                      </div>{/* /.inner */}
                    </div>
                    
                  </div>
                </div>
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
        <br />
      </section>

        }
}

export default FaqV2