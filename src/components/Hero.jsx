import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronDown } from 'lucide-react';
import logo from '../assets/logoFORTCAMP.png';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            textAlign: 'center',
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <img
                        src={logo}
                        alt="FORTCAMP Corretora de Seguros"
                        className="hero-logo"
                        style={{ width: 'auto', marginBottom: '1rem' }}
                    />
                    <p style={{
                        color: 'var(--accent)',
                        fontSize: '0.8rem',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: '500',
                        marginBottom: '2rem',
                    }}>
                        Corretora de Seguros
                    </p>

                    <h1 className="hero-title" style={{
                        fontWeight: 'bold',
                        marginBottom: '1.25rem',
                        maxWidth: '700px',
                    }}>
                        Protegendo o que{' '}
                        <span style={{ color: 'var(--text-muted)' }}>realmente importa.</span>
                    </h1>

                    <p style={{
                        maxWidth: '500px',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                        color: 'var(--text-muted)',
                        lineHeight: '1.7',
                    }}>
                        Soluções personalizadas em seguros para proteger você, sua família e seu patrimônio.
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    color: 'var(--text-muted)',
                    zIndex: 2,
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                    <ChevronDown size={28} />
                </motion.div>
            </motion.a>

            {/* Background decorativo */}
            <div style={{ position: 'absolute', top: '20%', right: '5%', opacity: 0.05, pointerEvents: 'none' }}>
                <Shield size={300} />
            </div>
        </section>
    );
};

export default Hero;
