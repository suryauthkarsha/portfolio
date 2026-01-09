
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="space-y-8">
      <h1 className="text-5xl font-medium tracking-tight text-zinc-100">Surya Uthkarsha</h1>
      <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
        14-year-old builder based in Bengaluru. Currently Founder's Office at Emerging Equity, scaling early-stage startups and building Roadyz.
      </p>
      <nav className="flex space-x-6 text-sm">
        <a href="https://x.com/suryauthkarsha" target="_blank" className="no-underline text-zinc-500 hover:text-zinc-100 transition-colors">Twitter</a>
        <a href="https://linkedin.com/in/surya-uthkarsha-8b2015312" target="_blank" className="no-underline text-zinc-500 hover:text-zinc-100 transition-colors">LinkedIn</a>
        <a href="mailto:suryauthkarsha@gmail.com" className="no-underline text-zinc-500 hover:text-zinc-100 transition-colors">Email</a>
      </nav>
    </header>
  );
};

export default Header;
