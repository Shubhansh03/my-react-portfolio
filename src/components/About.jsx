import React from "react";
import aboutImg from "../assets/mypic2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1 ,y:0}} 
      initial={{opacity:0 ,y:100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me </span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img whileInView={{opacity:1 ,x:0}} 
      initial={{opacity:0 ,x:-200}}
      transition={{duration:1.5}} className="size-96 h-64 rounded-md" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p whileInView={{opacity:1 ,x:0}} 
      initial={{opacity:0 ,x:100}}
      transition={{duration:1 , delay:0.5}} className="my-6 py-6 max-w-xl">
              {" "}
              I am currently a 3rd Year Undergraduate Student at Indian
              Institute Of Information Technology Nagpur . Having keen interest
              in UI design and frontend Development I look forward to enhance my
              skills and follow my passion throughout .
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
