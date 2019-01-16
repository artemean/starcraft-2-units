import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Index from "./pages/Index";
import Terran from "./pages/Terran";
import Protoss from "./pages/Protoss";
import Zerg from "./pages/Zerg";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>StarCraft 2 Units</h1>
        <Route path="/" exact component={Index} />
        <Route path="/terran" component={Terran} />
        <Route path="/protoss" component={Protoss} />
        <Route path="/zerg" component={Zerg} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
