
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-16 text-[11px] uppercase tracking-[0.3em] text-zinc-700 border-t border-zinc-900">
      <div className="flex justify-between items-center">
        <span>Bengaluru, IN</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
