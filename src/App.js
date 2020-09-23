import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/index.js";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { HashRouter, Route, Redirect } from "react-router-dom";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HashRouter basename={process.env.PUBLIC_URL} />
        <Route path="/home" component={Home} />
        <Route path="/" />
        <Redirect to="/home" />
        <Route path="/about/" component={About} />
        <Route path="/services/" component={Services} />
        <Route path="/contact/" component={Contact} />
        <Footer />
      </div>
    );
  }
}

export default App;
