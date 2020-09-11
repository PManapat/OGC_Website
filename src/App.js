import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/index.js";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Route } from "react-router-dom";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/services/" component={Services} />
        <Route path="/contact/" component={Contact} />
        <Footer />
      </div>
    );
  }
}

export default App;
