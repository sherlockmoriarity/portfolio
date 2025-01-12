import { EXPERIENCES } from "../constants"
import Section from "./Section";
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer';

const Experience = () => {
    const [ref, inView] = useInView({
        // Trigger animation only once
       threshold: 0.2, // Trigger when 20% of the element is visible
     });
    return (
      <Section id="Experience">
      <div className="container mb-40 " >
          <motion.h1 
          whileInView={{ opacity: 1 ,y: 0}}
          initial={{ opacity: 0, y: -100 }}
          transition = {{duration: 0.5}}
           className=" text-center h2 mb-4 md:mb-12 ">Work Experience</motion.h1>
          
          <div  >
               {EXPERIENCES.map((experience, index) => (
                <motion.div 
                key={index} className="mb-12 flex flex-wrap ">
                <motion.div 
                 ref={ref}
                 initial={{x:-100, opacity: 0}} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{duration:0.5,delay:0}}  
                 whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="w-full  text-center justify-center lg:w-1/4">
                <p className="mb-2 flex text-xl">{experience.year}</p>
                </motion.div>    
                    <motion.div 
                     whileInView={{ opacity: 1 ,x: 0}}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{duration: 1}}
                    className="w-full  max-w- lg:w-3/4">
                    <h6 className="h6 text-xl mb-10 ">{experience.role}- {" "}
                        <span className="text-lg ">
                            {experience.company}
                        </span>
                    </h6>
                    <p className="  ">{experience.description.split('\n').map((line, index) => (
    <span key={index}>{line}<br /></span> // Wrap each line in a <span> and insert <br />
  ))}</p>
                        </motion.div>     
          </motion.div> 
          ))}   
          </div>
          </div>
        </Section>
    );
  };
  
  export default Experience