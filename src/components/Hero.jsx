import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#90CAF9]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#90CAF9] to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#80CBC4] via-[#90CAF9] to-[#FFB74D] bg-clip-text text-transparent drop-shadow-lg">
                <Typewriter
                  words={[personalInfo.name]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  // deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Innovative {personalInfo.role}, <br className="sm:block hidden" />
            Crafting smart solutions with web and machine learning tech
          </p>
        </motion.div>

      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
