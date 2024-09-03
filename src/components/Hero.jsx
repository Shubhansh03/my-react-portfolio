import React from "react";
import Profile from "../assets/mypic1.jpg";
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden : { x:-100 ,opacity:0},
  visible: {x:0 ,opacity:1, transition: {duration:1 ,delay: delay}}
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mx-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Shubhansh Hardaha
            </motion.h1>
            <motion.span variants={container(0.4)}
            initial="hidden"
            animate="visible" className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              FrontEnd Developer
            </motion.span>
            <motion.span variants={container(0.4)}
            initial="hidden"
            animate="visible" className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              UI UX Designer
            </motion.span>
            <motion.p variants={container(0.8)}
            initial="hidden"
            animate="visible" className="my-2 max-w-xl tracking-tighter font-light">
              I am a passionate FrontEnd Developer and UI UX Designer . I am
              currently a Third Year Undergrad at IIIT Nagpur pursuing B.Tech at
              CSE with specialization in Human Computer Interaction and Gaming
              Technology .
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x:100,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:0.5}} className="size-96 rounded-md" src={Profile} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
