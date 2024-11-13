"use client"
import Hero from "@/components/Hero"; 
import About from "@/components/About"; 
import Skills from "@/components/Skills"
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import Preloader from '@/components/Preloader'
import { useState,useEffect } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <div>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default Home;
