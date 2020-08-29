import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/index.js';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './style.css';

function App() {
  
  return (
    <div>
      <Router>
      <Navbar /> 
<Switch>
  <Route exact path={process.env.PUBLIC_URL + "/home"} component={Home} />
  <Route path="/about" component={About} />
  <Route path="/services" component={Services} />
  <Route path="/contact" component={Contact} />
</Switch>
<Footer />
      </Router>
    </div>
    )
}

export default App;
