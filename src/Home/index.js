import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Slider from "./Slider";
import ScrollToTop from "../components/ScrollToTop";

import "./style.scss";

export default () => {
  return (
    <>
      <div id="page" className="site">
        <Header />
        <div id="content" className="site-content">
          <div className="polestar-container">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-8"
                  className="post-8 page type-page status-publish post"
                >
                  <div className="entry-content">
                    <Slider />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};
