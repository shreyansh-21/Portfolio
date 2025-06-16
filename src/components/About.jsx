import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="relative rounded-[20px] p-[2px] card-glow-bg shadow-glow"
      >
        <div className="bg-gradient-to-br from-[#80CBC4]/10 via-[#90CAF9]/10 to-[#FFB74D]/10 rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center backdrop-blur-md">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain drop-shadow-md"
          />
          <h3 className="text-[#E0E0E0] text-[20px] font-semibold text-center mt-4">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#E0E0E0] text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        {personalInfo.about}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);
