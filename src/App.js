import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from './components/About';
import Reason from './components/Reason';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Product from './components/Product'; 
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <section id="hero">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="Reason">
                <Reason />
              </section>
              <section id="product">
                <Product />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
