import { repositories } from "../constants";

import Section from "./Section";

import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const Benefits = () => {
  const [ref, inView] = useInView({
    // Trigger animation only once
   threshold: 0, // Trigger when 20% of the element is visible
 });
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }, // Stagger each child animation by 0.2s
      }),
};

// Variants for individual items
    const itemVariants = {
      hidden: { opacity: 0, y: -20 }, // Start above the viewport
      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }, 
      };
  return (
    <Section id="Projects">
      <motion.div 
       
       className="container relative z-2 ">
        <motion.h2 
         ref={ref}
         initial={{x:-100, opacity: 0}} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{duration:0.5,delay:0}}  
         whileInView={{ opacity: 1 }} viewport={{ once: true }}
         className="h2 mb-32 md:mb-40 ">Projects</motion.h2>

        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -100 },
          hidden: { opacity: 0, y: 0 },
         }}
        
        className="flex flex-wrap   gap-10 mb-10">
          {repositories.map((item) => (
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}

              whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log('hover started!')}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5">{item.name}</h5>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-10">
                <div className="relative z-1 p-0.5 rounded-xl ">
                    <div   className="relative bg-n-8 rounded-[1rem]">
                    
                    <img
                    className=" mb-10 "
                    src= {item.image}
                    width={380}
                    height={90}
                    alt={item.title}
                  />
                    </div>
                </div>
                </div>

                <motion.p 
                 variants={itemVariants}
                className="body-2 mb- text-n-3">{item.description}</motion.p>
                <div className="flex items-center mt-auto">
                <a
                className="text-xl"
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link"
                  > 
                  <SiGithub/> 
               </a>
               
                {item.homepage && (
                  <a
                  className="pl-4"
                    href={item.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Site"
                >
                  <ExternalLink />
                </a>
                )} 
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Benefits; 
/*import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React from 'react';
import Button from '../components/Button';
import { repositories } from "../constants"
import { b } from 'framer-motion/client';
import Section from "./Section";

import { useInView } from 'react-intersection-observer';

const Benefits = () => {
  const [ref, inView] = useInView({
    // Trigger animation only once
   threshold: 0, // Trigger when 20% of the element is visible
 });
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }, // Stagger each child animation by 0.2s
      }),
};
    const itemVariants = {
      hidden: { opacity: 0, y: -20 }, // Start above the viewport
      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }, 
      };
  

  return (
   
  <Section id="Projects">
    <motion.div 
     
     className="container relative z-2 ">
      <motion.h2 
       ref={ref}
       initial={{x:-100, opacity: 0}} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{duration:0.5,delay:0}}  
       whileInView={{ opacity: 1 }} viewport={{ once: true }}
       className="h2 mb-32 md:mb-40 ">Projects</motion.h2>

        
      </motion.div>
      <div className="grid">
        {repositories.slice(0, 6).map((repo, index) => (
          <motion.div
            
            key={repo.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, y: -100 },
              hidden: { opacity: 0, y: 0 },
            }}
            custom={index}
          >
            <h3>
              
            </h3>
            <p>{repo.description || 'No description provided.'}</p>
            <div className="tech-list">
              {repo.language.slice(0, 3).map((lang, index) => (
                <motion.span key={index} variants={itemVariants}>
                  {lang}
                </motion.span>
              ))}
              {repo.language.length > 3 && <span>+{repo.language.length - 3} more</span>}
            </div>
            <div className="links">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link"
              >
                
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Site"
                >
                  <ExternalLink />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          className="styled-button"
          text="View More"
          link="https://github.com/lohitkolluri"
          aria-label="View more projects on GitHub"
        />
      </div>
    </Section>
  );
};

export default Benefits;*/