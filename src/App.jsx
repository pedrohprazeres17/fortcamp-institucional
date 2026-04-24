import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import Services from './components/Services';
import Broker from './components/Broker';
import CallToAction from './components/CallToAction';
import Values from './components/Values';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="section-divider" />
            <AboutCompany />
            <div className="section-divider" />
            <Services />
            <div className="section-divider" />
            <Broker />
            <div className="section-divider" />
            <CallToAction />
            <div className="section-divider" />
            <Values />
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}

export default App;
