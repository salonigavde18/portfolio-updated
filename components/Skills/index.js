'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skills = {
  "ui/ux": [
    { title: 'Figma' },
    { title: 'Prototyping' },
    { title: 'Wireframing' },
    { title: 'User Research' },
    { title: 'Accessibility Design' },
    { title: 'Interaction Design' },
    { title: 'Responsive Design' },
    { title: 'Usability Testing' },
    { title: 'Information Architecture' },
    { title: 'Journey Mapping' },
  ],
  "frontend": [
    { title: 'HTML' },
    { title: 'CSS' },
    { title: 'JavaScript' },
    { title: 'React.js' },
    { title: 'TailwindCSS' },
    { title: 'GSAP' },
    { title: 'Framer Motion' }
  ],
};

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skillElements = document.querySelectorAll('.skill');
    
    skillElements.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            delay: index * 0.1 
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#FEEDEF] min-h-screen flex flex-col items-center justify-center py-10" id='skills'>
      <h2 className="text-6xl mb-12 text-center">My Skills</h2>
      {Object.entries(skills).map(([category, skillSet]) => (
        <div key={category} className="mb-10">
          <h3 className="text-2xl font-semibold mb-6 text-center uppercase">{category}</h3>
          <div className="flex flex-wrap justify-center">
            {skillSet.map((skill, index) => (
              <div
                key={index}
                className="skill m-4 p-4 bg-[#d09ea5] rounded shadow-lg"
              >
                <h4 className="text-xl">{skill.title}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
