import React from 'react';
import { motion } from 'framer-motion';

import logoPorto      from '../assets/seguradoras/logo-porto-seguro.svg';
import logoOxxy       from '../assets/seguradoras/logo-oxxy-seguradora.svg';
import logoItau       from '../assets/seguradoras/logo-itau-seguros.webp';
import logoAzul       from '../assets/seguradoras/logo-azul-seguros.webp';
import logoHdi        from '../assets/seguradoras/logo-hdi-seguros.webp';
import logoMitsui     from '../assets/seguradoras/logo-mitsui-seguros.webp';
import logoSuhai      from '../assets/seguradoras/logo-suhai-seguros.webp';
import logoTokio      from '../assets/seguradoras/logo-tokio-marine-seguros.webp';
import logoYelum      from '../assets/seguradoras/logo-yelum-seguros.webp';

const partners = [
    { src: logoPorto,  alt: 'Porto Seguro'    },
    { src: logoAzul,   alt: 'Azul Seguros'    },
    { src: logoItau,   alt: 'Itaú Seguros'    },
    { src: logoTokio,  alt: 'Tokio Marine'    },
    { src: logoHdi,    alt: 'HDI Seguros'     },
    { src: logoYelum,  alt: 'Yelum Seguros'   },
    { src: logoMitsui, alt: 'Mitsui Seguros'  },
    { src: logoSuhai,  alt: 'Suhai Seguros'   },
    { src: logoOxxy,   alt: 'OXXY Seguradora' },
];

const track = [...partners, ...partners];

const LogoCard = ({ src, alt }) => (
    <div
        className="partner-logo-card"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            cursor: 'default',
        }}
        onMouseEnter={e => {
            e.currentTarget.querySelector('img').style.filter = 'none';
        }}
        onMouseLeave={e => {
            e.currentTarget.querySelector('img').style.filter = 'brightness(0) invert(1) opacity(0.7)';
        }}
    >
        <img
            src={src}
            alt={alt}
            decoding="async"
            style={{
                height: '46px',
                width: 'auto',
                maxWidth: '140px',
                objectFit: 'contain',
                display: 'block',
                filter: 'brightness(0) invert(1) opacity(0.7)',
                transition: 'filter 0.3s ease',
                userSelect: 'none',
                pointerEvents: 'none',
            }}
        />
    </div>
);

const PartnersCarousel = () => (
    <section
        id="partners"
        style={{ background: 'var(--section-alt)', padding: '60px 0' }}
    >
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', marginBottom: '1rem', color: 'var(--white)' }}>
                    As melhores seguradoras,{' '}
                    <span style={{ color: 'var(--accent)' }}>em um só lugar</span>
                </h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto 1rem' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto', lineHeight: '1.7' }}>
                    Comparamos várias seguradoras para encontrar a melhor cobertura pelo melhor custo para você.
                </p>
            </motion.div>
        </div>

        {/* Viewport com máscara de fade nas bordas */}
        <div
            className="partners-viewport"
            style={{
                overflow: 'hidden',
                position: 'relative',
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
        >
            <div className="partners-track" style={{ padding: '0.5rem 0' }}>
                {track.map((p, i) => (
                    <LogoCard key={i} src={p.src} alt={p.alt} />
                ))}
            </div>
        </div>
    </section>
);

export default PartnersCarousel;
