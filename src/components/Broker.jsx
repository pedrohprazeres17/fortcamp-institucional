import React from 'react';
import { motion } from 'framer-motion';
import robertoFoto from '../assets/foto_profissional_roberto_caporalle.png';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Broker = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section id="broker" className="section-padding" style={{ background: 'var(--primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--white)' }}>
                        Conheça seu <span style={{ color: 'var(--accent)' }}>Corretor</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }} />
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '2rem' : '3rem',
                    alignItems: 'center',
                    textAlign: isMobile ? 'center' : 'left',
                }}>
                    {/* Foto */}
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 30 : 0, x: isMobile ? 0 : -40 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', cursor: 'default' }}
                    >
                        <div className="broker-photo" style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--accent)',
                            boxShadow: '0 0 40px rgba(100, 255, 218, 0.2)',
                            transition: 'box-shadow 0.3s ease',
                        }}>
                            <img
                                src={robertoFoto}
                                alt="Roberto Caporalle Mayo"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 30 : 0, x: isMobile ? 0 : 40 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, minWidth: 'min(300px, 100%)' }}
                    >
                        <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                            Roberto Caporalle Mayo
                        </h3>
                        <p style={{
                            fontSize: '0.8rem',
                            color: 'var(--accent-warm)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            fontWeight: '600',
                            marginBottom: '1.25rem',
                        }}>
                            Corretor de Seguros
                        </p>
                        <div style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                Com mais de duas décadas de experiência no mercado segurador, Roberto construiu sua carreira
                                em posições estratégicas nas áreas comercial, gestão e desenvolvimento de negócios. Formado em
                                Marketing Internacional, atuou em empresas como Sul América Seguros, BB Mapfre e OXXY Seguradora.
                            </p>
                            <p>
                                Na <strong style={{ color: 'var(--white)' }}>Fortcamp Corretora de Seguros</strong>, aplica toda
                                essa experiência para oferecer soluções personalizadas, seguras e eficientes — sempre com
                                transparência e foco total nas necessidades de cada cliente.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Broker;
