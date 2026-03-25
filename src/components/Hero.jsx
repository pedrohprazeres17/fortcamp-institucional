import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Proteção & Confiança
                    </h4>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', maxWidth: '800px' }}>
                        Protegendo o que <br />
                        <span style={{ color: 'var(--text-muted)' }}>realmente importa.</span>
                    </h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                        Soluções completas em seguros para pessoas físicas e jurídicas, com transparência, responsabilidade e o compromisso que você merece.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', background: 'var(--accent)', color: 'var(--primary)' }}>
                            Solicitar atendimento
                        </a>
                        <a href="#about" className="btn" style={{ padding: '1rem 2rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', border: '1px solid var(--text-muted)', color: 'var(--text-main)' }}>
                            Conheça a Fortcamp
                        </a>
                    </div>
                </motion.div>

                <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={20} color="var(--accent)" />
                        <span>Atendimento Personalizado</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={20} color="var(--accent)" />
                        <span>Suporte 24h</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={20} color="var(--accent)" />
                        <span>Cobertura Completa</span>
                    </div>
                </div>
            </div>

            {/* Background Graphic Elements */}
            <div style={{ position: 'absolute', top: '20%', right: '5%', opacity: 0.1, pointerEvents: 'none' }}>
                <Shield size={400} />
            </div>

        </section>
    );
};

export default Hero;
