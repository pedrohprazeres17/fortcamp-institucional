import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary pt-16 pb-8 border-t border-[rgba(100,255,218,0.1)]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between flex-wrap gap-12 mb-12">

                    <div className="flex-1 min-w-[300px]">
                        <a href="#" className="text-2xl font-bold text-white block mb-4">
                            FORT<span className="text-accent">CAMP</span>
                        </a>
                        <p className="text-text-muted leading-relaxed">
                            Protegendo o que realmente importa com transparência,<br /> responsabilidade e compromisso.
                        </p>
                    </div>

                    <div className="flex-1 min-w-[150px]">
                        <h4 className="text-white mb-6 text-lg font-semibold">Links Rápidos</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#home" className="text-text-muted hover:text-accent transition-colors">Início</a></li>
                            <li><a href="#about" className="text-text-muted hover:text-accent transition-colors">Sobre</a></li>
                            <li><a href="#services" className="text-text-muted hover:text-accent transition-colors">Seguros</a></li>
                            <li><a href="#contact" className="text-text-muted hover:text-accent transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[150px]">
                        <h4 className="text-white mb-6 text-lg font-semibold">Social</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-text-muted hover:text-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-text-muted hover:text-accent transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                </div>

                <div className="text-center pt-8 border-t border-white/5 text-text-muted text-sm">
                    <p>&copy; {new Date().getFullYear()} FORTCAMP Corretora de Seguros. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
