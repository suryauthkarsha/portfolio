
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from '././components/Footer';
import AIAgent from './components/AIAgent';

const App: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-32 py-32 px-8">
      <Header />
      
      <main className="space-y-32">
        <section>
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-zinc-600 mb-12 font-semibold">Current Focus</h2>
          <Projects type="current" />
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-zinc-600 mb-12 font-semibold">Archive</h2>
          <Projects type="other" />
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-zinc-600 mb-12 font-semibold">Voices</h2>
          <Testimonials />
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-zinc-600 mb-12 font-semibold">Vision Agent</h2>
          <AIAgent />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
