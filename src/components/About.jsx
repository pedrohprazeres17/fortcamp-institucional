import React from 'react';
import { motion } from 'framer-motion';
import robertoFoto from '../assets/ROBERTO_CAPORALLE_FOTO.jpg';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--white)' }}>
                        Sobre a <span style={{ color: 'var(--accent)' }}>FORTCAMP</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
                </motion.div>

                {/* Seção do Corretor */}
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
                        marginBottom: '4rem'
                    }}
                >
                    {/* Foto */}
                    <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
                        <div style={{
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--accent)',
                            boxShadow: '0 0 30px rgba(100, 255, 218, 0.15)'
                        }}>
                            <img
                                src={robertoFoto}
                                alt="Roberto Caporalle"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Texto */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                            Conhecendo seu Corretor
                        </h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '1.5rem', fontWeight: '400' }}>
                            Roberto Caporalle
                        </h4>
                        <div style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                Profissional com sólida trajetória no mercado segurador, atuando há mais de duas décadas em posições estratégicas nas áreas comercial, gestão e desenvolvimento de negócios. Construiu expertise consistente na criação de produtos, relacionamento com corretores, expansão de mercado e gestão de equipes de alta performance.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Com formação em Marketing Internacional pela Faculdade de Ciências e Tecnologia, possui visão estratégica voltada para resultados, aliando conhecimento técnico à prática de mercado.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Atuou como Gerente Geral na OXXY Seguradora S/A, trabalhando diretamente com o CEO na estruturação e administração da companhia. Desempenhou papel relevante como Consultor de Rede de Varejo na BB Mapfre / Brasilseg (Banco do Brasil) e como Gerente de Sucursal na Capemisa e Sul América Seguros.
                            </p>
                            <p>
                                Na <strong style={{ color: 'var(--white)' }}>Fortcamp Corretora de Seguros</strong>, aplica toda sua experiência para oferecer soluções personalizadas, seguras e eficientes, sempre com compromisso, transparência e foco total nas necessidades de cada cliente.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Missão, Visão, Valores */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}
                >
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '8px', border: '1px solid rgba(100, 255, 218, 0.05)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent)' }}>Missão</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Oferecer excelência e ética, garantindo proteção em todas as etapas da vida.</p>
                    </div>
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '8px', border: '1px solid rgba(100, 255, 218, 0.05)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent)' }}>Visão</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ser referência em confiança e inovação no mercado de seguros.</p>
                    </div>
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '8px', border: '1px solid rgba(100, 255, 218, 0.05)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent)' }}>Valores</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Confiança, Compromisso, Ética, Excelência e Profissionalismo.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
