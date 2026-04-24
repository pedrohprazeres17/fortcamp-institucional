import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoFORTCAMP.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Sobre', href: '#about' },
        { name: 'Seguros', href: '#services' },
        { name: 'Corretor', href: '#broker' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            padding: scrolled ? '0.5rem 0' : '0.75rem 0',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" className="logo">
                    <img src={logo} alt="FORTCAMP" className="nav-logo" style={{ width: 'auto' }} />
                </a>

                {/* Desktop Menu */}
                <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--text-main)',
                                fontSize: '0.9rem',
                                transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" style={{
                        padding: '0.6rem 1.2rem',
                        background: 'var(--accent-warm)',
                        color: 'var(--white)',
                        borderRadius: '6px',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        transition: 'background 0.3s ease',
                    }}
                        onMouseEnter={(e) => e.target.style.background = 'var(--accent-warm-hover)'}
                        onMouseLeave={(e) => e.target.style.background = 'var(--accent-warm)'}
                    >
                        Fale com um consultor
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: '0.5rem' }}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 1000,
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.25 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '80%',
                            maxWidth: '320px',
                            height: '100vh',
                            backgroundColor: 'var(--secondary)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                            zIndex: 1001,
                        }}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '1.25rem',
                                right: '1.25rem',
                                background: 'none',
                                border: 'none',
                                color: 'var(--white)',
                                cursor: 'pointer',
                                padding: '0.5rem',
                            }}
                        >
                            <X size={26} />
                        </button>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', textAlign: 'center', padding: '0 2rem' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: '500' }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li style={{ marginTop: '0.5rem', width: '100%' }}>
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-cta"
                                >
                                    Fale com um consultor
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
