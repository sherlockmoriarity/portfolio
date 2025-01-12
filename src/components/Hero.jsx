import { useRef } from "react";
import Section from "./Section";
import Button from "./Button";
import { BackgroundCircles } from "./design/Hero";
import { motion } from "motion/react"
import { useEffect, useState } from 'react';



const Hero = () => {
    const parallaxRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   
  return (
    <Section
      className="pt-[15rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <motion.div 
      initial={{ opacity: 0, y: 5, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
      style={{ backgroundPositionY: `${scrollY * 0.5}px` }}
       className="container relative  "  ref={parallaxRef} >
        <motion.div 
             
             style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
             className="relative z-1 item max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[1.25rem]" >
            

          
            <motion.h1 
            id="hero-heading"
            
            initial={{ opacity: 0, y: 5, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            
            className="text-xl text-purple-600">Hi, my name is</motion.h1>
          <motion.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.8 }} 
          className="h1 mb-6">
            Lalitha Priya, and I’m a software developer.</motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.2 }}
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            With a strong interest in AI/ML, web development, and DevOps, I enjoy exploring innovative ideas and building practical, scalable solutions that make a real difference.
            </motion.p>
            <Button  href="https://drive.google.com/file/d/1OmjqiTjv9otpB52ZI7XIft3UWdrW751m/view?usp=drive_link" white>
               Resume
            </Button>
            </motion.div>
              
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <div className="relative z-1 p-0.5 rounded-2xl ">
                    <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="h-[1.4rem] " />

              
             </div>
             </div>
             <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
             
            </div>
            <BackgroundCircles />
             </div>
             </motion.div>
             
    </Section>
  );
};

export default Hero;
