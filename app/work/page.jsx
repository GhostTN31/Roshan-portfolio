"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import Link from "next/link";
import Image from "next/image";
//component import
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Work project datas
const work_project = [
  {
    num: "01",
    category: "Frontend-developer",
    title: "Parundhu web application",
    desc: "Parundhu application has been developed to implement a common application to integrate all the data coming from various sources for easier tracking of HS and executing pre-emptive action against them, this is reason for the emergence of Parundhu Website.",
    role: [
      {
        title: "Front-end",
        description:
          "Developed and maintained the front-end architecture, ensuring a responsive and user-friendly interface.",
      },
      {
        title: "Debugging",
        description:
          "Identified and resolved issues in the front-end code to ensure smooth functionality and user experience.",
      },
      {
        title: "Icon and Logo design",
        description:
          "Designed and integrated custom icons and logos to enhance the visual appeal and branding of the application.",
      },
    ],
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "BootStrap",
      },
      {
        name: "JQuery",
      },
      {
        name: "Laravel",
      },
      {
        name: "Figma",
      },
    ],
    image: "/assets/parundhu_img.png",
    live: "https://parundhu.a2zweb.in/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend-developer",
    title: "CCA(Chennai Cyber Alert) web application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.",
    role: [
      {
        title: "Front-end",
        description:
          "Developed and maintained the front-end architecture, ensuring a responsive and user-friendly interface.",
      },
      {
        title: "Debugging",
        description:
          "Identified and resolved issues in the front-end code to ensure smooth functionality and user experience.",
      },
      {
        title: "Icon and Logo design",
        description:
          "Designed and integrated custom icons and logos to enhance the visual appeal and branding of the application.",
      },
    ],
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "BootStrap",
      },
      {
        name: "JQuery",
      },
      {
        name: "Laravel",
      },
      {
        name: "Figma",
      },
    ],
    image: "/assets/CCA_img.png",
    live: "https://cca.a2zweb.in/",
    github: "",
  },
  {
    num: "03",
    category: "UI designer",
    title: "Meendum Manjappai web application",
    desc: "This website is meant for reaching out to the people of Tamil Nadu and spreading across the State on the perils of Use and Throwaway Plastics on our Environment. 'Manjappai' is aimed at encouraging people to return to the use of this eco-friendly bag and discard the plastic bags.",
    role: [
      {
        title: "Logo and Icon Design",
        description:
          "Designed and integrated custom logos and icons to enhance the visual appeal and branding of the application.",
      },
      {
        title: "Splash Screen Design",
        description:
          "Created splash screen designs for the mobile app version of the website.",
      },
    ],
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "BootStrap",
      },
      {
        name: "JQuery",
      },
      {
        name: "Figma",
      },
    ],
    image: "/assets/manjappai.png",
    live: "https://tnpcb.gov.in/meendummanjappai/",
    github: "",
  },
  {
    num: "04",
    category: "Frontend-developer",
    title: "Tbooks web application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.",
    role: [
      {
        title: "Front-end",
        description:
          "Developed and maintained the front-end architecture, ensuring a responsive and user-friendly interface.",
      },
      {
        title: "Debugging",
        description:
          "Identified and resolved issues in the front-end code to ensure smooth functionality and user experience.",
      },
      {
        title: "Icon and Logo design",
        description:
          "Designed main logo of the website to enhance the visual appeal and branding of the application.",
      },
    ],
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "BootStrap",
      },
      {
        name: "JQuery",
      },
    ],
    image: "/assets/Tbooks.png",
    live: "https://tbook.a2zweb.in/",
    github: "",
  },
  {
    num: "05",
    category: "Frontend-developer",
    title: "Mother's Trust School website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.",
    role: [
      {
        title: "Front-end",
        description:
          "Developed and maintained the front-end architecture, ensuring a responsive and user-friendly interface.",
      },
      {
        title: "Debugging",
        description:
          "Identified and resolved issues in the front-end code to ensure smooth functionality and user experience.",
      },
      {
        title: "Icon and Logo design",
        description:
          "Designed main the main logo of the website according to the client's wish ,to enhance the visual appeal and branding of the application.",
      },
    ],
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "BootStrap",
      },
      {
        name: "JQuery",
      },
      {
        name: "CMS",
      },
      {
        name: "Figma",
      },
    ],
    image: "/assets/mother's_trust.png",
    live: "https://mothertrust.org/",
    github: "",
  },
  {
    num: "06",
    category: "UI design",
    title: "Monica Beauty store website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.",
    role: [
      {
        title: "Logo and Icon Design",
        description:
          "Designed and integrated custom logos,icons and Gif to enhance the visual appeal and branding of the application.",
      },
      {
        title: "Content Management System (CMS)",
        description:
          "In this part my I created, edited and organized the content images and details of the products",
      },
    ],
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Figma",
      },
      {
        name: "CMS",
      },
    ],
    image: "/assets/beauty_center.png",
    live: "https://www.monicabeautycentre.com/",
    github: "",
  },
];

// Personal project datas
const personal_project = [
  {
    num: "01",
    category: "Web Application",
    title: "Weather Application",
    desc: "A React.js-based weather application that allows users to check daily and hourly weather forecasts. Users can search for weather data by city and also access the weather information for their current location. The application features a clean and responsive interface, ensuring a seamless user experience across different devices.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React.Js",
      },
    ],
    image: "/assets/project_weather.png",
    live: "https://ghosttn31.github.io/weatherApp/",
    github: "https://github.com/GhostTN31/weatherApp",
  },
  {
    num: "02",
    category: "2D game",
    title: "Endless Run",
    desc: "A fun and addictive retro styled 2D game developed using HTML Canvas, CSS and JavaScript. In 'Endless Run,' players control a character that must navigate through an endless series of obstacles, aiming to achieve the highest possible score.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/project_run.png",
    live: "https://ghosttn31.github.io/Endless-run/",
    github: "https://github.com/GhostTN31/Endless-run",
  },
  {
    num: "03",
    category: "Web Application",
    title: "Todo-list",
    desc: "A React.js-based Todo-list application that allows users to add, edit, and delete tasks, helping them stay organized and manage their daily activities efficiently.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React.js",
      },
    ],
    image: "/assets/project_todo.png",
    live: "https://ghosttn31.github.io/Todo-list/",
    github: "https://github.com/GhostTN31/Todo-list",
  },
  {
    num: "04",
    category: "Website",
    title: "Simple Calculator",
    desc: "A basic calculator built with React.js, allowing users to perform standard arithmetic operations with a clean and responsive interface.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React.js",
      },
    ],
    image: "/assets/project_calc.png",
    live: "https://ghosttn31.github.io/simple-calculator/",
    github: "https://github.com/GhostTN31/simple-calculator",
  },
];

const Work = () => {
  const [project, setProject] = useState(work_project[0]);
  const [state, setState] = useState(personal_project[0]);

  // work project slide
  const handleSlideChange = (swiper) => {
    // current slide index value
    const currentIndex = swiper.activeIndex;
    // update slide index value based on state
    setProject(work_project[currentIndex]);
  };

  //personal project slide
  const handleSlideChange2 = (swiper) => {
    // current slide index value
    const currentIndex = swiper.activeIndex;
    // update slide index value based on state
    setState(personal_project[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      {/* Work projects */}
      <div className="container mx-auto">
        <h2 className="xl:text-[65px] text-[45px] font-bold leading-none py-6 gap-8 text-accent transition-all duration-500 capitalize">
          Work Projects
        </h2>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <ScrollArea className="h-[400px]">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[35px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                {/* project desc */}
                <p className="text-white/60">{project.desc}</p>
                {/* Roles */}
                <h4 className="text-[25px] font-bold leading-none transition-all duration-500">
                  My Roles
                </h4>
                <ul className="flex flex-col gap-4 flex-wrap">
                  {project.role.map((item, index) => {
                    return (
                      <li key={index} className="text-white capitalize">
                        <span className="text-white/60">{item.title}</span>:{" "}
                        {item.description}
                      </li>
                    );
                  })}
                </ul>
                {/* stack */}
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-yellow-500">
                        {item.name}
                        {/* removal of last comma */}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* live project button */}
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* Github project button */}
                  {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                </div>
              </div>
            </ScrollArea>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {work_project.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={item.image}
                          fill
                          className="object-fit"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
              z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-yellow-500 hover:bg-yellow-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>

      {/* Personal projects */}
      <div className="container mx-auto">
        <h2 className="xl:text-[65px] text-[45px] font-bold leading-none py-6 gap-8 text-accent transition-all duration-500 capitalize">
          Personal Projects
        </h2>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {state.num}
              </div>
              {/* project category */}
              <h2 className="text-[35px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {state.title}
              </h2>
              {/* project desc */}
              <p className="text-white/60">{state.desc}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {state.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="xl:text-xl text-base text-yellow-500"
                    >
                      {item.name}
                      {/* removal of last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={state.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={state.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange2}
            >
              {personal_project.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={item.image}
                          fill
                          className="object-fit"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
              z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-yellow-500 hover:bg-yellow-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
