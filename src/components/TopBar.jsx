import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP = '5519997452558';
const MSG = encodeURIComponent('Olá! Gostaria de fazer uma cotação de seguro.');

const TopBar = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 900,
            height: '40px',
            background: '#040e1c',
            borderBottom: '1px solid rgba(100, 255, 218, 0.07)',
            display: 'flex',
            alignItems: 'center',
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}>
                <span className="topbar-tagline" style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontWeight: '500',
                }}>
                    Atendimento rápido e sem compromisso
                </span>

                <a
                    href={`https://wa.me/${WHATSAPP}?text=${MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="topbar-wa-link"
                >
                    <MessageCircle size={13} strokeWidth={2.5} />
                    (19) 99745-2558
                </a>
            </div>
        </div>
    );
};

export default TopBar;
