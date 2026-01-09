
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import AIAgent from './components/AIAgent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-24">
      <Header />
      
      <section>
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Focus</h2>
        <Projects type="current" />
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Archive</h2>
        <Projects type="other" />
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Voices</h2>
        <Testimonials />
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Interface</h2>
        <AIAgent />
      </section>

      <Footer />
    </div>
  );
};

export default App;
