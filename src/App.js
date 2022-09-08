import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Donate from './components/Donate';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Involved from "./pages/Involved";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Navbar/>
      <Donate/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/ourWork' exact element={<OurWork/>} />
        <Route path='/involved' exact element={<Involved/>} />
        <Route path='/contact' exact element={<Contact/>} />
      </Routes>      
      <Footer/>
    </Router>    
  );
}

export default App;
