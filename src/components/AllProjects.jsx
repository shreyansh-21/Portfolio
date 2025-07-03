import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { personalInfo, projects } from "../constants";
import { Tilt } from "react-tilt";
import { demo } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  hosted_link,
}) => {
  return (
    <Tilt
      options={{ max: 25, scale: 1.05, speed: 400 }}
      className="sm:w-[360px] w-full"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="relative rounded-[20px] p-[2px] card-glow-bg shadow-glow"
      >
        <div className="bg-gradient-to-br from-[#80CBC4]/10 via-[#90CAF9]/10 to-[#FFB74D]/10 backdrop-blur-md rounded-[20px] p-5 flex flex-col justify-between h-full">
          <div
            className="relative w-full h-[230px] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => window.open(hosted_link, "_blank")}
          >
            <img
              src={image}
              alt="project"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(hosted_link, "_blank")}
                className="bg-[#1E1E1E]/70 hover:bg-[#90CAF9]/20 border border-[#90CAF9] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={demo}
                  alt="demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-semibold text-[22px]">{name}</h3>
            <p className="mt-2 text-white text-[14px] text-justify">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className="text-[13px] font-medium text-[#47a7f5]"
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const AllProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Complete Work</p>
        <h2 className={styles.sectionHeadText}>All Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Here you’ll find the complete collection of my personal projects a deeper look into the ideas I’ve explored, the skills I’ve honed, and the results I’ve built from scratch. From experimental prototypes to fully polished apps, each project tells a unique story of learning, creativity, and growth.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AllProjects, "");
