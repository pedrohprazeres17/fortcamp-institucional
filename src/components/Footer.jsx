import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--secondary)',
            paddingTop: '4rem',
            paddingBottom: '2rem',
            borderTop: '1px solid rgba(100,255,218,0.1)',
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
                        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--white)', display: 'block', marginBottom: '1rem' }}>
                            FORT<span style={{ color: 'var(--accent)' }}>CAMP</span>
                        </a>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            Protegendo o que realmente importa com transparência, responsabilidade e compromisso.
                        </p>
                    </div>

                    <div style={{ flex: '0 1 150px' }}>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600' }}>
                            Links Rápidos
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#home" style={{ color: 'var(--text-muted)' }}>Início</a></li>
                            <li><a href="#about" style={{ color: 'var(--text-muted)' }}>Sobre</a></li>
                            <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Seguros</a></li>
                            <li><a href="#broker" style={{ color: 'var(--text-muted)' }}>Corretor</a></li>
                            <li><a href="#contact" style={{ color: 'var(--text-muted)' }}>Contato</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: '0 1 150px' }}>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600' }}>
                            Social
                        </h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--text-muted)' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'var(--text-muted)' }}><Linkedin size={20} /></a>
                            <a href="#" style={{ color: 'var(--text-muted)' }}><Facebook size={20} /></a>
                        </div>
                    </div>
                </div>

                <div style={{
                    textAlign: 'center',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                }}>
                    <p>&copy; {new Date().getFullYear()} FORTCAMP Corretora de Seguros. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
