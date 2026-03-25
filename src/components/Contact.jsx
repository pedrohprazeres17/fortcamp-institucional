import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--primary)', textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
                        padding: '4rem 2rem',
                        borderRadius: '16px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)'
                    }}
                >
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
                        Conte com uma corretora que coloca sua <br />
                        <span style={{ color: 'var(--accent)' }}>segurança em primeiro lugar.</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Estamos prontos para entender suas necessidades e oferecer a melhor solução. Fale com um de nossos especialistas hoje mesmo.
                    </p>

                    <a href="#" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Entrar em Contato <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
