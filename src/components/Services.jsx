import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Heart, Briefcase, Plus } from 'lucide-react';

const services = [
    { icon: <Car size={40} />, title: 'Seguro Auto', desc: 'Proteção completa para seu veículo contra roubos, colissões e terceiros.' },
    { icon: <Home size={40} />, title: 'Seguro Residencial', desc: 'Sua casa protegida contra incêndios, danos elétricos e roubos.' },
    { icon: <Heart size={40} />, title: 'Seguro de Vida', desc: 'Tranquilidade financeira para você e sua família em momentos difíceis.' },
    { icon: <Briefcase size={40} />, title: 'Seguro Empresarial', desc: 'Soluções personalizadas para proteger o patrimônio da sua empresa.' },
    { icon: <Plus size={40} />, title: 'Outros Seguros', desc: 'Consulte-nos para seguros de equipamentos, viagem, e muito mais.' },
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
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nossas Soluções</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, borderColor: 'var(--accent)' }}
                            style={{
                                background: 'var(--primary)',
                                padding: '2.5rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'border-color 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', background: 'rgba(100, 255, 218, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
