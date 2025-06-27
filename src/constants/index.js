import {
  fox,
  octopus,
  lion,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  python,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  wexus,
  vit,
  hybrowlabs,
  skillrisers,
  proximus,
  ShopEase,
  fitlog,
  GreenRoots,
  AgriAi,
  LumaPlate,
  HateShield,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: lion,
  },
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: octopus,
  },
  {
    title: "Data Analyst",
    icon: fox,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Devlopment Intern",
    company_name: "Hybrowlabs",
    company_website: "https://hybrowlabs.com/",
    icon: hybrowlabs,
    iconBg: "#90CAF9",
    date: "May 2024 - Present",
    points: [
      "Developed features for a scalable Todo web app using React and TailwindCSS, fixing frontend bugs and enhancing UI performance.",
      "Resolved pull request issues, improved REST API integrations, and collaborated with engineers in Agile sprintss.",
    ],
  },
  {
    title: "Software Devlopment Intern",
    company_name: "Wexus",
    company_website: "https://www.linkedin.com/company/wexus/",
    icon: wexus,
    iconBg: "#90CAF9",
    date: "Sept 2024 - Feb 2025",
    points: [
      "Built features for an e-commerce management system tailored for Instagram-based businesses.",
      "Developed front-end modules using React for real-time inventory tracking and product analytics.",
      "Integrated Stripe for seamless payment handling and added chatbot support to enhance customer experience.",
      "Improved the overall checkout speed by 20% through performance optimization and streamlined workflows."
    ],
  },
  {
    title: "Programme Representative",
    company_name: "VIT University",
    company_website: "https://vit.ac.in/",
    icon: vit,
    iconBg: "#90CAF9",
    date: "Aug 2023 - Jul 2024",
    points: [
      "Acted as a liaison between students and faculty to address academic concerns and streamline communication.",
      "Organized and facilitated meetings, feedback sessions, and discussions to represent student interests.",
      "Coordinated with administrative departments to ensure smooth execution of academic activities and policy updates.",
      "Collaborated with peers and university committees to drive student engagement initiatives and academic improvements."
    ],
  },

];

const projects = [
  {
    name: "ShopEase",
    description:
      "A modern, high-performance multi-page e-commerce UI .It features a seamless shopping experience with dynamic product listings, user authentication, and a responsive design.",
    tags: [
      {
        name: "reactjs",
      },
      {
        name: "redux",
      },
      {
        name: "nodejs",
      },
    ],
    image: ShopEase,
    hosted_link: "https://shop-ease-pi.vercel.app/",
  },
  {
    name: "Fit Log",
    description:
      "FitLog is a web application designed to help users track their fitness journey. It allows users to log workouts, monitor progress with the help of graphs and charts, and maintain a structured fitness routine.",
    tags: [
      {
        name: "Reactjs",
      },
      {
        name: "Chartjs",
      },
      {
        name: "Nodejs",
      },
    ],
    image: fitlog,
    hosted_link: "https://fitlog-omega.vercel.app/",
  },
  {
    name: "Green Roots",
    description:
      "An AI/ML Hackathon winning project dedicated to promoting mangrove sustainability and fostering community engagement in mangrove conservation efforts.",
    tags: [
      {
        name: "Google Earth Engine",
      },
      {
        name: "Random Forest",
      },
      {
        name: "Reactjs",
      },
    ],
    image: GreenRoots,
    hosted_link: "https://hackthonduo.github.io/GRWebsite/",
  },
  {
    name: "AgriVision AI",
    description:
      "A machine learning-powered precision agriculture tool for crop and soil analysis. Provides insights and recommendations to optimize farming efficiency and boost yields.",
    tags: [
      {
        name: "Random Forest",
      },
      {
        name: "Seaborn",
      },
      {
        name: "Nextjs",
      },
    ],
    image: AgriAi,
    hosted_link:
      "https://crop-prediction-puce.vercel.app/",
  },
  {
    name: "Luma Plate",
    description:
      "License Plate Recognition and Image Enhancement is a deep learning-based project that combines optical character recognition (OCR) with image enhancement techniques.",
    tags: [
      {
        name: "ZeroDCE",
      },
      {
        name: "OCR",
      },
      {
        name: "CNN",
      },
    ],
    image: LumaPlate,
    hosted_link: "https://github.com/shreyansh-21/LumaPlate",
  },
  {
    name: "Hate Shield",
    description:
      "HateShield is an AI-powered hate speech detection system using LSTM for text and ResNet for images. It analyzes social media comments, memes, and other content to identify harmful speech with high accuracy.",
    tags: [
      {
        name: "LSTM",
      },
      {
        name: "ResNET",
      },
      {
        name: "Keras",
      },
      {
        name: "computer vision",
      },
    ],
    image: HateShield,
    hosted_link:
      "https://github.com/shreyansh-21/HateShield",
  },
];

const personalInfo = {
  name: "Shreyansh Dubey",
  fullName: "Shreyansh Dubey",
  email: "shreyansh2128@gmail.com",
  role: "Web Devloper and Ai Enthusiast",
  about: `I'm a passionate full-stack developer and machine learning enthusiast with expertise in Python,
  JavaScript, and TypeScript, and hands-on experience with frameworks like React.js, Node.js, and Flask. 
  From intuitive web apps to intelligent ML-powered tools like DocuTalk and GreenRoots, 
  I love building solutions that are both scalable and impactful. Always curious and collaborative, 
  I’m ready to bring your ideas to life—let’s create something exceptional!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1nozEWMt5XaYGhPdmggglbyaq1LmQower/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/shreyansh-dubey21/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/shreyansh-21",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
