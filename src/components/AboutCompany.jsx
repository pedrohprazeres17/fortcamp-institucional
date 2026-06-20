import React from 'react';
import { motion } from 'framer-motion';
import { Zap, UserCheck, Sparkles } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const valueProps = [
    {
        icon: <Zap size={28} />,
        title: 'Rapidez',
        desc: 'Cotações e atendimento ágil para você não perder tempo.',
    },
    {
        icon: <UserCheck size={28} />,
        title: 'Personalização',
        desc: 'Soluções sob medida para cada cliente e necessidade.',
    },
    {
        icon: <Sparkles size={28} />,
        title: 'Praticidade',
        desc: 'Processo simples e descomplicado do início ao fim.',
    },
];

const AboutCompany = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--section-alt)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--white)' }}>
                        Sobre a <span style={{ color: 'var(--accent)' }}>FORTCAMP</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }} />
                </motion.div>

                <div style={{
                    display: 'flex',
                    gap: 'clamp(2rem, 5vw, 4rem)',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                }}>
                    {/* Texto da empresa */}
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 30 : 0, x: isMobile ? 0 : -30 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 300px', minWidth: 'min(300px, 100%)' }}
                    >
                        <p style={{
                            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                            color: 'var(--text-muted)',
                            lineHeight: '1.9',
                            marginBottom: '1.5rem',
                        }}>
                            A <strong style={{ color: 'var(--white)' }}>FORTCAMP Corretora de Seguros</strong> oferece
                            soluções completas para pessoas físicas e jurídicas, com{' '}
                            <span style={{ color: 'var(--accent-warm)', fontWeight: '600' }}>atendimento rápido e personalizado</span>{' '}
                            focado nas necessidades reais de cada cliente.
                        </p>
                        <p style={{
                            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                            color: 'var(--text-muted)',
                            lineHeight: '1.9',
                        }}>
                            Trabalhamos com as principais seguradoras do mercado para garantir a melhor proteção ao melhor custo.
                            Mais do que vender seguros, construímos relações de confiança.
                        </p>
                    </motion.div>

                    {/* Value Props */}
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 30 : 0, x: isMobile ? 0 : 30 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{
                            flex: '1 1 280px',
                            minWidth: 'min(280px, 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        {valueProps.map((prop, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 4, borderLeftColor: 'var(--accent)' }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    padding: '1.25rem 1.5rem',
                                    background: 'var(--primary)',
                                    borderRadius: '10px',
                                    borderLeft: '4px solid var(--accent-warm)',
                                    cursor: 'default',
                                }}
                            >
                                <div style={{
                                    color: 'var(--accent-warm)',
                                    background: 'var(--accent-warm-subtle)',
                                    padding: '0.75rem',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    {prop.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.05rem', color: 'var(--white)', marginBottom: '0.2rem' }}>
                                        {prop.title}
                                    </h4>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                        {prop.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
