import React from "react";

import Header from "../components/Header";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Panel4 from "./Panel4";
import Panel5 from "./Panel5";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import IntersectViewport from "../components/IntersectViewport";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <IntersectViewport>
        <Panel1 />
      </IntersectViewport>
      <Panel2 />
      <IntersectViewport>
        <Panel3 />
      </IntersectViewport>
      <IntersectViewport>
        <Panel4 />
      </IntersectViewport>
      <IntersectViewport>
        <Panel5 />
      </IntersectViewport>
      <IntersectViewport>
        <Footer />
      </IntersectViewport>
      <ScrollToTop />
    </div>
  );
}

export default App;
