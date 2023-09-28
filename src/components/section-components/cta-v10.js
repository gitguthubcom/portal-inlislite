import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV10 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="cta-eleven  go-top">
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-1.png"} className="cta-eleven__moc-1" alt="cta image" />
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-2.png"} className="cta-eleven__moc-2" alt="cta image" />
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-3.png"} className="cta-eleven__moc-3" alt="cta image" />
              <div className="container">
                <h3>Demo</h3>
                <p>Inlislite ver. 3</p>
                <a href="http://demoinlislitev31.perpusnas.go.id/" className="thm-btn cta-eleven__btn">Tes Aplikasi <i className="fa fa-angle-double-right" /></a>
                {/* /.thm-btn cta-eleven__btn */}
              </div>{/* /.container */}
            </section>


        }
	}

export default CtaV10