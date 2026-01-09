
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    title: "Stealth Startup",
    role: "Founder",
    description: "Building something new in stealth. Recipient of a microgrant from Lift Off.",
    isCurrent: true
  },
  {
    title: "Roadyz",
    role: "CEO & Founder",
    description: "Gamified road safety app for children. Shark Tank India Round 1. Backed by Angels. 10k+ users.",
    isCurrent: true
  },
  {
    title: "Edza AI",
    role: "Head of Growth",
    description: "AI tutor platform. Scaled to 40k users and 1.5M impressions. Raising 100M INR (Q2 2025).",
    isCurrent: true
  },
  {
    title: "The Marg Initiative",
    role: "Founder",
    description: "Youth-led NGO for sustainable road safety. Partnered with Bengaluru Police to reach 50k+ people.",
    isCurrent: true
  },
  {
    title: "Founder's Office @ Capital Hub",
    role: "Market Research",
    description: "Researching market trends and assisting communication for early-stage founders.",
    isCurrent: false
  },
  {
    title: "The Nile Clothing",
    role: "Founder",
    description: "Sustainable streetwear brand. Merchandise partner for various NGOs.",
    isCurrent: false
  },
  {
    title: "Skywalk Utilization Study",
    role: "Researcher",
    description: "Behavioral research under NIMHANS mentorship.",
    isCurrent: false
  }
];

interface ProjectsProps {
  type: 'current' | 'other';
}

const Projects: React.FC<ProjectsProps> = ({ type }) => {
  const filteredProjects = PROJECTS.filter(p => type === 'current' ? p.isCurrent : !p.isCurrent);

  return (
    <div className="space-y-16">
      {filteredProjects.map((project, idx) => (
        <div key={idx} className="group flex flex-col space-y-3">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-medium text-zinc-100">{project.title}</h3>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-bold">{project.role}</span>
          </div>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
