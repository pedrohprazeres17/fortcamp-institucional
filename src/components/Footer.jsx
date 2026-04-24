import React from 'react';
import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import logo from '../assets/logoFORTCAMP.png';

const WHATSAPP = '5519997452558';
const MSG = encodeURIComponent('Olá! Gostaria de fazer uma cotação de seguro.');

const Footer = () => {
    const waHref = `https://wa.me/${WHATSAPP}?text=${MSG}`;

    return (
        <footer style={{
            background: 'var(--secondary)',
            paddingTop: '4rem',
            paddingBottom: '2rem',
            borderTop: '1px solid rgba(100,255,218,0.1)',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    {/* Marca */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <a href="#home" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                            <img src={logo} alt="FORTCAMP Corretora de Seguros" style={{ height: '52px', width: 'auto' }} />
                        </a>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            Protegendo o que realmente importa com transparência, responsabilidade e compromisso.
                        </p>
                        <div style={{ display: 'flex', gap: '0.85rem' }}>
                            {[
                                { icon: <Instagram size={18} />, label: 'Instagram' },
                                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                                { icon: <Facebook size={18} />, label: 'Facebook' },
                            ].map(({ icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        color: 'var(--text-muted)',
                                        transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = 'var(--accent)';
                                        e.currentTarget.style.borderColor = 'rgba(100,255,218,0.3)';
                                        e.currentTarget.style.background = 'rgba(100,255,218,0.06)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Navegação
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {[
                                { label: 'Início', href: '#home' },
                                { label: 'Sobre a FORTCAMP', href: '#about' },
                                { label: 'Seguros', href: '#services' },
                                { label: 'Corretor', href: '#broker' },
                                { label: 'Nossos Princípios', href: '#values' },
                                { label: 'Contato', href: '#contact' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Fale Conosco
                        </h4>

                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                padding: '0.75rem 1.25rem',
                                background: 'rgba(37,211,102,0.08)',
                                border: '1px solid rgba(37,211,102,0.2)',
                                borderRadius: '8px',
                                color: '#25D366',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '1.25rem',
                                transition: 'background 0.2s, border-color 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(37,211,102,0.14)';
                                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.35)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(37,211,102,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.2)';
                            }}
                        >
                            <MessageCircle size={16} />
                            (19) 99745-2558
                        </a>

                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
                            Atendimento rápido e personalizado.<br />
                            Cotações sem compromisso.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1.75rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                }}>
                    <p>&copy; {new Date().getFullYear()} FORTCAMP Corretora de Seguros. Todos os direitos reservados.</p>
                    <p style={{ opacity: 0.6 }}>Protegendo o que realmente importa.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
