
import { collabContent } from "../constants";
import { motion } from "motion/react"
import Section from "./Section";
import { RiReactjsLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPytorch } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const Collaboration = () => {
  const [ref, inView] = useInView({
     // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  
  return (
    <Section id="About">
      <motion.div  className="container relative lg:flex items-center justify-between ">
        <div className="">
          <motion.h2 
            ref={ref}
            initial={{x:-100, opacity: 0}} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{duration:0.5,delay:0}}  
            whileInView={{ opacity: 1 }} viewport={{ once: true }}
            
          className="  h2 mb-4 md:mb-8 ">
            About me
          </motion.h2>

          <ul className=" mb-10 flex flex-wrap gap-4 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 " key={item.id}>
                <div className="flex items-center">
                       
                 
                </div>
                

                { (
                  <p className="body-2 mt-3 mb-7  text-n-1">{item.text}</p>
                  
                )}
                 <div className=" grid gap-  px-15 md:px-20 lg:px-40 grid-cols-2 sm:grid-cols-9  justify-center">
                <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log('hover started!')} className=" rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
                    <FaPython className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log('hover started!')} className=" rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    < IoLogoJavascript className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <RiReactjsLine className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    < FaNode className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <SiExpress className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <FaCss3 className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <RiTailwindCssFill className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <SiPytorch className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <DiMongodb className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className=" sm:col-span-1 sm:col-start-4 rounded-2xl b p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <TbSql className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <FaGitAlt className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="rounded-2xl  p-4 border-image-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    <FaJava className="text-7xl text-blue-300"/>
        </motion.div>
        </div>
              </li>
            ))}
          </ul>

          
        </div>
        
        
          

          
        </motion.div>
      
    </Section>
  );
};

export default Collaboration;