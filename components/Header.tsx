
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="space-y-6">
      <h1 className="text-xl font-medium text-white">Surya Uthkarsha</h1>
      <p className="text-zinc-400 max-w-lg">
        14-year-old builder. Currently Founder's Office at Emerging Equity. 
        Scaling early-stage startups and building Roadyz.
      </p>
      <nav className="flex space-x-4 text-sm">
        <a href="https://x.com/suryauthkarsha" target="_blank" className="no-underline text-zinc-500 hover:text-white">Twitter</a>
        <a href="https://linkedin.com/in/surya-uthkarsha-8b2015312" target="_blank" className="no-underline text-zinc-500 hover:text-white">LinkedIn</a>
        <a href="mailto:suryauthkarsha@gmail.com" className="no-underline text-zinc-500 hover:text-white">Email</a>
      </nav>
    </header>
  );
};

export default Header;
