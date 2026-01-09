
import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "He was building. At 13. I was blown away... Surya is already using technology to solve real-world problems.",
    author: "Ashish Singhal",
    designation: "Co-founder @ CoinSwitch"
  },
  {
    quote: "His clarity of purpose and courage to build at such a young age is simply remarkable.",
    author: "Sandeep Alur",
    designation: "CTO @ Microsoft Innovation Hub India"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="space-y-12">
      {TESTIMONIALS.map((t, idx) => (
        <div key={idx} className="max-w-xl">
          <p className="text-sm italic text-zinc-400 mb-2 leading-relaxed">
            "{t.quote}"
          </p>
          <p className="text-[11px] uppercase tracking-widest text-zinc-600">
            — {t.author}, {t.designation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
