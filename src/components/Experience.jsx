import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences, navigationPaths } from "../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
  contentStyle={{
    background: "#121212",
    color: "#E0E0E0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    borderRadius: "12px",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
  }}
  contentArrowStyle={{ borderRight: "7px solid #121212" }}
  icon={
    <a
      href={experience.company_website}
      target="_blank"
      className="flex justify-center items-center w-full h-full"
    >
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </a>
  }
  iconStyle={{
    background: experience.iconBg || "#80CBC4",
    color: "#121212",
  }}
  date={
    <span className="text-[14px] text-[#B0BEC5]">{experience.date}</span>
  }
>
  <div>
    <h3 className="text-[#E0E0E0] text-[24px] font-bold">
      {experience.title}
    </h3>
    <p
      className="text-[#90CAF9] text-[16px] font-semibold"
      style={{ margin: 0 }}
    >
      {experience.company_name}
    </p>
  </div>

  <ul className="mt-5 ml-5 list-disc space-y-2">
    {experience.points.map((point, index) => (
      <li
        key={`experience-point-${index}`}
        className="text-[#E0E0E0] text-[14px] pl-1 tracking-wider"
      >
        {point}
      </li>
    ))}
  </ul>
</VerticalTimelineElement>

  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, navigationPaths.work);
