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

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12 },
    }),
};

const Values = () => {
    return (
        <section id="values" className="section-padding" style={{ background: 'var(--secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--white)' }}>
                        Nossos <span style={{ color: 'var(--accent)' }}>Princípios</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
                    gap: '1.5rem',
                }}>
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.25)' }}
                            viewport={{ once: true }}
                            style={{
                                padding: 'clamp(1.5rem, 4vw, 2rem)',
                                background: 'var(--primary)',
                                borderRadius: '10px',
                                borderTop: '3px solid var(--accent-warm)',
                                border: '1px solid rgba(100, 255, 218, 0.05)',
                                borderTopColor: 'var(--accent-warm)',
                                borderTopWidth: '3px',
                                borderTopStyle: 'solid',
                                cursor: 'default',
                            }}
                        >
                            <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', marginBottom: '0.85rem', color: 'var(--accent)' }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
