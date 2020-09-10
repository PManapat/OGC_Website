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
  <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home} />
  <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
  <Route path={process.env.PUBLIC_URL + '/services'} component={Services} />
  <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
</BrowserRouter>
<Footer />
      </Router>
    </div>
    )
}

export default App;
