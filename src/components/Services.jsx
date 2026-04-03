import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Heart, Briefcase, Plus } from 'lucide-react';

const services = [
    { icon: <Car size={32} />, title: 'Seguro Auto', desc: 'Veículo protegido contra roubos, colisões e terceiros.' },
    { icon: <Home size={32} />, title: 'Seguro Residencial', desc: 'Sua casa segura contra incêndios e danos.' },
    { icon: <Heart size={32} />, title: 'Seguro de Vida', desc: 'Tranquilidade financeira para sua família.' },
    { icon: <Briefcase size={32} />, title: 'Seguro Empresarial', desc: 'Proteção completa para seu negócio.' },
    { icon: <Plus size={32} />, title: 'Outros Seguros', desc: 'Viagem, equipamentos e muito mais.' },
];

const Services = () => {
    return (
        <section id="services" className="section-padding" style={{ background: 'var(--secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nossas <span style={{ color: 'var(--accent)' }}>Soluções</span></h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, borderColor: 'var(--accent-warm)' }}
                            style={{
                                background: 'var(--primary)',
                                padding: '1.75rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'border-color 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{
                                color: 'var(--accent)',
                                marginBottom: '1rem',
                                background: 'rgba(100, 255, 218, 0.1)',
                                padding: '0.85rem',
                                borderRadius: '50%',
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                                {service.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
