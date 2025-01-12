import Button from "./Button";

import Section from "./Section";

import { roadmap } from "../constants";

import { Gradient } from "./design/Roadmap";
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const Roadmap = () => {
  const [ref, inView] = useInView({
    // Trigger animation only once
    threshold: 0, // Trigger when the element enters the viewport
  });
   return (
  <Section className="overflow-hidden " id="Contact">
    <div className="container md:pb-4 ">
     <motion.h2 
      ref={ref}
      initial={{x:-100, opacity: 0}} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{duration:0.5,delay:0}}  
      whileInView={{ opacity: 1 }} viewport={{ once: true }}
      className="h2 mb-2 md:mb-4 ">Get In Touch</motion.h2>


      <div className="">
        {roadmap.map((item) => {
          
        
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "" : ""
              }`}
              key={item.id}
            >
                
              <div className="relative p-4 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-10 lg:flex-row flex-col ">
                <div className="relative flex lg:flex-row flex-col ">
                  <div className="mb-5  -mx-15 lg:flex ">
                    
                    <img
                      className=" my-10 "
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                    <div className="lg:pl-20  mt-15 md:mt-22 xl:mt-44">
                    <Button className=" hidden lg:flex items-center justify-center whitespace-nowrap"
                     href="mailto:lalithapriyaa05@gmail.com">Email Me</Button>
                  </div>

                  </div>
                  
                  <p className="text-xl  ">I’m always excited to connect with new people. Feel free to reach out!</p>
                  
                  <div className="lg:pr-20  mt-15 md:mt-22 xl:mt-44">
                  <Button className=" flex lg:hidden items-center justify-center whitespace-nowrap"
                     href="mailto:lalithapriyaa05@gmail.com">Email Me</Button>
                  </div>
                 </div>
                  
                  
                
                </div>
                
              </div>
            
            
            
            
          );
          
        })}
 
        <Gradient />
      </div>
      
      

      
    </div>
  </Section>
);
};

export default Roadmap;