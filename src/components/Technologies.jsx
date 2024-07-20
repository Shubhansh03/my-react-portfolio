import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial:{y:-10},
  animate: {y:[10,-10], transition:{duration:duration , ease:"linear" ,repeat: Infinity ,repeatType: "reverse"}}
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1 ,x:0}} 
      initial={{opacity:0 ,x:-100}}
      transition={{duration:1 , delay:0.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1 ,x:0}} 
      initial={{opacity:0 ,x:100}}
      transition={{duration:1 , delay:0.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-500" />
          </div>
          <h4 className="text-center justify-center py-2 text-xl">Html</h4>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoCss3 className="text-7xl text-sky-700" />
          </div>
          <h4 className="text-center justify-center py-2 text-xl">Css</h4>
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-amber-300" />
          </div>
          <h4 className="text-center justify-center py-2 text-xl">
            JavaScript
          </h4>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <h4 className="text-center justify-center py-2 text-xl">ReactJs</h4>
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
          </div>
          <h4 className="text-center justify-center py-2 text-xl">MongoDb</h4>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-lime-600" />
          </div>
          <h4 className="text-center justify-center py-2 text-xl">NodeJs</h4>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
