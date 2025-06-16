import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { motion } from "framer-motion";

import {
  navLinks,
  navigationPaths,
  personalInfo,
  publicUrls,
} from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        py-4 w-full flex items-center fixed top-0 z-50
        transition-all duration-300 backdrop-blur-md
        ${
          scrolled
            ? "bg-[#121212]/80 shadow-lg border-b border-[#90CAF9]/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={navigationPaths.home}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            whileHover={{ y: [0, -5, 0] }}
            transition={{ duration: 0.5 }}
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />

          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {personalInfo.name} &nbsp;
            <span className="lg:block hidden">| {personalInfo.role}</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative group text-[17px] font-medium cursor-pointer transition-all ${
                active === link.title ? "text-white" : "text-[#B0BEC5]"
              }`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="transition-all duration-300">
                {link.title}
              </a>
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#90CAF9] transition-all group-hover:w-full"></span>
            </li>
          ))}

          <li className="text-[#B0BEC5] hover:text-white transition">
            <a
              href={publicUrls.resume}
              download="Shreyansh_Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-4 bg-gradient-to-br from-[#80CBC4]/10 via-[#90CAF9]/10 to-[#FFB74D]/10 backdrop-blur-md border border-[#90CAF9]/20 shadow-lg rounded-xl p-6 z-20 flex-col gap-4 min-w-[160px]`}
          >
            <ul className="list-none flex flex-col gap-4 text-white">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-[16px] font-medium cursor-pointer hover:text-[#90CAF9]"
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <li>
                <a
                  href={publicUrls.resume}
                  download="Shreyansh_Resume.pdf"
                  target="_blank"
                  className="text-[16px] font-medium hover:text-[#90CAF9]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
