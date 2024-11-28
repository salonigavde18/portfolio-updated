"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Rounded from "../../common/RoundedButton";
gsap.registerPlugin(ScrollTrigger);

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function About() {
  const cursorLabel = useRef(null);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  // ScrollTrigger GSAP setup
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        toggleActions: "play none none reset",
      },
    });

    tl.from(".about-heading", { opacity: 0, y: -50, duration: 1 })
      .from(".about-text", { opacity: 0, y: 50, duration: 1, delay: -0.5 })
      .from(".resume-button", { opacity: 0, y: 20, duration: 1, delay: -0.5 });

    // Animate button pulsing effect
    gsap.to(".resume-button", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: "power1.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleResumeClick = () => {
    window.open("SALONI_GAVDE_RESUME_NOV.pdf", "_blank"); 
  };

  return (
    <div className="about relative flex items-center justify-center h-screen overflow-hidden" id="about">
      <div className="flex flex-col items-center justify-center content relative z-10 text-center p-4">
        <h1 className="text-[#2E2123] lg:text-6xl about-heading text-4xl mb-8">
          Get to know me
        </h1>
        <div className="text-[#2E2123] about-text text-sm sm:text-base md:text-lg lg:text-xl mb-8 z-1 px-4 sm:px-6 md:px-8">
          <p>
          Crafting seamless, user-centric experiences through intuitive design and interactive front-end solutions.<br/> Bridging UI/UX creativity with technical expertise to deliver impactful, modern applications.
          </p>
        </div>

       
          
            <Rounded>
              <div className="z-20" onClick={handleResumeClick}>View My Resume</div>
            </Rounded>
          

          {/* "Learn More About Me" Button */}
          {/* <motion.div
            ref={cursorLabel}
            className={styles.cursorLabel}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            View
          </motion.div> */}
       
      </div>
    </div>
  );
}
