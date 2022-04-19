import React from "react";

import Header from "./components/Header";
import Panel1 from "./components/Panel1";
import Panel2 from "./components/Panel2";
import Panel3 from "./components/Panel3";
import Panel4 from "./components/Panel4";
import Panel5 from "./components/Panel5";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
      <Panel5 />
    </div>
  );
}

export default App;
