"use client"
import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top center',
        toggleActions: 'play none none reset',
      }
    });

    // Animate the mask to reveal the content
    tl.to(".mask", { x: "100%", duration: 1.5, ease: "power2.out" })
      .from(".welcome", { opacity: 0, y: -50, duration: 1 }, "-=1")
      .from(".description", { opacity: 0, y: 50, duration: 1, delay: -0.5 });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => direction = e.direction * -1,
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <Image 
        src="/background2.jpg"
        fill
        alt="background"
        priority
        objectFit="cover"  // Cover the entire area
        objectPosition="center" // Center image position
        className={styles.backgroundImage} // Optional, if you want to add styles via CSS
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Fullstack Web Developer -</p>
          <p ref={secondText}>Fullstack Web Developer -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p className='font-2xl font-semibold'>HI,<br/>I&apos;M SALONI <br/>I DESIGN & CODE</p>
      </div>
    </motion.main>
  );
};

export default Hero;
