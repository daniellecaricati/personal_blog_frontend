import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 border-t border-zinc-200 py-10 px-6 md:px-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-600">
        
        {/* Copyright Text */}
        <p className="text-lg font-medium">
          Personal Blog - Danielle Caricati © {currentYear}
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-8 text-zinc-700">
          <a href="#" aria-label="Facebook" className="hover:text-zinc-950 transition duration-300">
            <FacebookLogo size={30} weight="fill" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-zinc-950 transition duration-300">
            <InstagramLogo size={30} weight="fill" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-zinc-950 transition duration-300">
            <LinkedinLogo size={30} weight="fill" />
          </a>
        </div>

      </div>
    </footer>
  );
};