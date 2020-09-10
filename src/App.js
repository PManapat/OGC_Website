import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/index.js';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom";
import './style.css';

function App() {
  
  return (
    <div>
      <Router>
      <Navbar /> 
<BrowserRouter basename={process.env.PUBLIC_URL}>
  <Route exact path="/home" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/services" component={Services} />
  <Route path="/contact" component={Contact} />
</BrowserRouter>
<Footer />
      </Router>
    </div>
    )
}

export default App;
