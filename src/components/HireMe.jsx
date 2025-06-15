import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      className="fixed left-4 bottom-4 lg:flex hidden justify-center items-center z-50"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Gradient Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 via-indigo-500 to-blue-600 opacity-40 animate-slow-pulse blur-xl" />

        {/* Connect Button */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="z-10 flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-teal-400 hover:from-indigo-500 hover:to-teal-300 transition-colors duration-300 shadow-md"
          target="_blank"
        >
          <span className="text-white text-[14px] font-semibold">Connect</span>
        </a>
      </div>
    </motion.div>
  );
};

export default HireMe;
