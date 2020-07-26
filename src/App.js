import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
// import About from "./components/pages/About";
// import Discover from "./components/pages/Discover";
// import Search from "./components/pages/Search";

function App() {
  return (
    <Router>      
        <Navbar />
        <main className="container">
          <Route exact path="/" component={Home} />          
          <Route exact path="/portfolio" component={Portfolio} />                    
          <Route exact path="/contact" component={Contact} />                              
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />  
          <Route exact path="/search" component={Search} />                */}
        </main>        
        <Footer />      
    </Router>
  );
}

export default App;
