import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronDown, ArrowRight } from 'lucide-react';
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
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <motion.img
                        src={logo}
                        alt="FORTCAMP Corretora de Seguros"
                        className="hero-logo"
                        style={{ width: 'auto', marginBottom: '1rem' }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        style={{
                            color: 'var(--accent)',
                            fontSize: '0.8rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            fontWeight: '500',
                            marginBottom: '2rem',
                        }}
                    >
                        Corretora de Seguros
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        style={{ fontWeight: 'bold', marginBottom: '1.25rem', maxWidth: '700px' }}
                    >
                        Protegendo o que{' '}
                        <span style={{ color: 'var(--text-muted)' }}>realmente importa.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        style={{
                            maxWidth: '500px',
                            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                            color: 'var(--text-muted)',
                            lineHeight: '1.7',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Soluções personalizadas em seguros para proteger você, sua família e seu patrimônio.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                    >
                        <a
                            href="https://wa.me/5519997452558"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta"
                            style={{ maxWidth: '280px' }}
                        >
                            Quero uma cotação <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
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
