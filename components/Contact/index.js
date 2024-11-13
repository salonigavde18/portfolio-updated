'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
  const contactRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#FEEDEF] min-h-screen flex flex-col items-center justify-center p-6" id="contact">
      <h2 className="text-6xl mb-10">Contact Me</h2>
      <div ref={contactRef} className="bg-[#C997A0] p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <p className="text-lg font-medium">Email:</p>
        <p className="text-gray-700">saloniigavde2002@gmail.com</p>
        
        <p className="text-lg font-medium mt-4">Phone:</p>
        <p className="text-gray-700">+91-992-3679-363</p>

        <p className="text-lg font-medium mt-4">Location:</p>
        <p className="text-gray-700">Pune, Maharashtra, India</p>

        <p className="text-lg font-medium mt-4">LinkedIn:</p>
        <a
          href="https://linkedin.com/in/saloni-gavde-823356206"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn Profile
        </a>

        <p className="text-lg font-medium mt-4">GitHub:</p>
        <a
          href="https://github.com/salonigavde18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
}
