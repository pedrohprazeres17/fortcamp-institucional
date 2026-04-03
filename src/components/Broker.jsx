import React from 'react';
import { motion } from 'framer-motion';
import robertoFoto from '../assets/foto_profissional_roberto_caporalle.png';

const Broker = () => {
    return (
        <section id="broker" className="section-padding" style={{ background: 'var(--primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--white)' }}>
                        Conheça seu <span style={{ color: 'var(--accent)' }}>Corretor</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        gap: '3rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {/* Foto */}
                    <div style={{ flex: '0 0 auto' }}>
                        <div style={{
                            width: '240px',
                            height: '240px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--accent)',
                            boxShadow: '0 0 30px rgba(100, 255, 218, 0.15)',
                        }}>
                            <img
                                src={robertoFoto}
                                alt="Roberto Caporalle"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Bio resumida */}
                    <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                            Roberto Caporalle
                        </h3>
                        <div style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Broker;
