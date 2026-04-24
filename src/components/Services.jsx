import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Heart, Briefcase, Smartphone, Monitor, ArrowRight } from 'lucide-react';

const WHATSAPP = '5519997452558';

const services = [
    {
        icon: <Car size={32} />,
        title: 'Seguro Auto',
        desc: 'Veículo protegido contra roubos, colisões e terceiros.',
        msg: 'Olá! Tenho interesse em cotar um *Seguro Auto*. Pode me ajudar?',
    },
    {
        icon: <Home size={32} />,
        title: 'Seguro Residencial',
        desc: 'Sua casa segura contra incêndios e danos.',
        msg: 'Olá! Tenho interesse em cotar um *Seguro Residencial*. Pode me ajudar?',
    },
    {
        icon: <Heart size={32} />,
        title: 'Seguro de Vida',
        desc: 'Tranquilidade financeira para sua família.',
        msg: 'Olá! Tenho interesse em cotar um *Seguro de Vida*. Pode me ajudar?',
    },
    {
        icon: <Briefcase size={32} />,
        title: 'Seguro Empresarial',
        desc: 'Proteção completa para seu negócio.',
        msg: 'Olá! Tenho interesse em cotar um *Seguro Empresarial*. Pode me ajudar?',
    },
    {
        icon: <Smartphone size={32} />,
        title: 'Seguro Celular',
        desc: 'Proteção contra roubo, furto e danos ao seu smartphone.',
        msg: 'Olá! Tenho interesse em cotar um *Seguro Celular*. Pode me ajudar?',
    },
    {
        icon: <Monitor size={32} />,
        title: 'Seguro Eletrônicos',
        desc: 'Cobertura para notebooks, tablets e outros dispositivos.',
        msg: 'Olá! Tenho interesse em cotar um *Seguro de Eletrônicos*. Pode me ajudar?',
    },
];

const ServiceCard = ({ service, index }) => {
    const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(service.msg)}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, borderColor: 'rgba(249,115,22,0.35)' }}
            style={{
                background: 'var(--primary)',
                padding: '1.75rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {/* Ícone */}
            <div style={{
                color: 'var(--accent)',
                marginBottom: '1rem',
                background: 'rgba(100, 255, 218, 0.08)',
                padding: '0.85rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {service.icon}
            </div>

            <h3 style={{ fontSize: '1.05rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                {service.title}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', flex: 1 }}>
                {service.desc}
            </p>

            {/* CTA */}
            <div style={{ width: '100%', marginTop: '1.5rem' }}>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.25rem' }} />
                <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta"
                >
                    Cotar agora <ArrowRight size={14} />
                </a>
            </div>
        </motion.div>
    );
};

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
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Nossas <span style={{ color: 'var(--accent)' }}>Soluções</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto 1rem' }} />
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
                        Clique em qualquer seguro para iniciar sua cotação diretamente pelo WhatsApp.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
