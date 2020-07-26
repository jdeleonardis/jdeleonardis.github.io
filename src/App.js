import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>      
        <Navbar />
        <main className="container">
          <Route exact path="/" component={Home} />          
          <Route exact path="/portfolio" component={Portfolio} />                    
          <Route exact path="/contact" component={Contact} /> 
        </main>        
        <Footer />      
    </Router>
  );
}

export default App;
