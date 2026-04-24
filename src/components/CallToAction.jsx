import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--section-alt)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        padding: 'clamp(2.5rem, 8vw, 5rem) clamp(1.25rem, 5vw, 3rem)',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Glow decorativo */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }} />

                    <h2 style={{
                        marginBottom: '1.5rem',
                        fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                        color: 'var(--white)',
                        position: 'relative',
                    }}>
                        Sua proteção começa com uma{' '}
                        <span style={{ color: 'var(--accent-warm)' }}>conversa.</span>
                    </h2>

                    <p style={{
                        color: 'var(--text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '550px',
                        margin: '0 auto 2.5rem',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        lineHeight: '1.7',
                        position: 'relative',
                    }}>
                        Conte para nós o que é importante para você. Em minutos, um especialista
                        entra em contato com a solução ideal.
                    </p>

                    <a
                        href="https://wa.me/5519997452558"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta"
                        style={{ position: 'relative' }}
                    >
                        Quero falar com um especialista <ArrowRight size={20} />
                    </a>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.85rem',
                        marginTop: '1.5rem',
                        position: 'relative',
                    }}>
                        Atendimento rápido e sem compromisso.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
