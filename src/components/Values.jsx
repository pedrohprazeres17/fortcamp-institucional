import React from 'react';
import { motion } from 'framer-motion';

const values = [
    {
        title: 'Missão',
        text: 'Oferecer excelência e ética, garantindo proteção em todas as etapas da vida.',
    },
    {
        title: 'Visão',
        text: 'Ser referência em confiança e inovação no mercado de seguros.',
    },
    {
        title: 'Valores',
        text: 'Confiança, Compromisso, Ética, Excelência e Profissionalismo.',
    },
];

const Values = () => {
    return (
        <section id="values" className="section-padding" style={{ background: 'var(--secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--white)' }}>
                        Nossos <span style={{ color: 'var(--accent)' }}>Princípios</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {values.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '2rem',
                                background: 'var(--primary)',
                                borderRadius: '8px',
                                borderTop: '3px solid var(--accent-warm)',
                                border: '1px solid rgba(100, 255, 218, 0.05)',
                                borderTopColor: 'var(--accent-warm)',
                                borderTopWidth: '3px',
                                borderTopStyle: 'solid',
                            }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent)' }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Values;
