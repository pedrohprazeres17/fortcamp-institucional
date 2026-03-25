import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoFORTCAMP.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Seguros', href: '#services' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A192F]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`} style={{
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="logo">
                    <img src={logo} alt="FORTCAMP Corretora de Seguros" style={{ height: '100px', width: 'auto' }} />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex" style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
                            style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '4px' }}>
                        Fale com um consultor
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', '@media (min-width: 768px)': { display: 'none !important' } }}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer' }}
                        className="md:hidden"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#112240]"
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '75%', // Slide in from right
                        height: '100vh',
                        backgroundColor: 'var(--secondary)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                    }}
                >
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
