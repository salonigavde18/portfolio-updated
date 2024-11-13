'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      '.footer-item',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.out' }
    );

    // Animation for social icons
    gsap.fromTo(
      '.social-icon',
      { scale: 0 },
      { scale: 1, duration: 0.5, stagger: 0.1, ease: 'bounce.out' }
    );
  }, []);

  return (
    <footer className="py-6 bg-[#FEEDEF]">
      <div className="container mx-auto text-center space-y-4">
        {/* Contact Information */}
        <div className="footer-item">
          <p className="text-6xl mb-12 text-center">Let's work together :)</p>
          <p className='text-[#33333] text-xl'>
            Email: <a href="mailto:saloniigavde2002@gmail.com" className="hover:underline text-black text-xl">saloniigavde2002@gmail.com</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-item flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/saloni-gavde-823356206"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon bg-black hover:text-gray-400 transition-transform duration-300 transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/salonigavde18"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon bg-black hover:text-gray-400 transition-transform duration-300 transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="footer-item text-sm">
          &copy; {new Date().getFullYear()} Saloni Gavde. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
