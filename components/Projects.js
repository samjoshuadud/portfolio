"use client";

import { SquareArrowOutUpRight, ChevronUp, ChevronDown, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectDetails = [
  {
    title: "Chatting App",
    description: "A real-time chatting app",
    techStack: ["React", "Next.js", "Firebase"],
    summary: `I developed a real-time chatting app with features including login, sign-up, Google authentication, and the ability to change display names. Users can join chat rooms using a unique ID. The app uses Firebase for the backend and real-time data handling, while the frontend is built with Next.js and hosted live on Vercel.`,
    link: "https://chatting-app-umak.vercel.app",
    images: ["chatting-app-5.jpeg", "chatting-app-2.jpeg", "chatting-app-3.jpeg", "chatting-app-4.jpeg", "chatting-app-1.jpeg"],
  },
  {
    title: "UniLostAndFound",
    description: "A full-stack university Lost and Found System",
    techStack: ["React", "Next.js", "Firebase Auth", "C#", "Asp.NET"],
    summary:
      "I built a Lost and Found web application for university students and staff. It allows users to report lost or found items, send email notifications, and search for items based on categories. The backend is implemented in C# with ASP.NET, using Firebase Firestore for data storage. The frontend is built with Next.js, ensuring a seamless user experience.",
    link: "https://github.com/samjoshuadud/uni-lost-full-stack",
    images: ["unilostandfound-1.jpeg", "unilostandfound-2.jpeg", "unilostandfound-3.png", "unilostandfound-4.png"],
  },
  {
    title: "Face Attendance System",
    description: "A simple face attendance system using OpenCV and Python.",
    techStack: ["OpenCV", "Python", "Tailwind CSS"],
    summary: `Captures a person's face and compares it with the provided dataset. Once a match is found, it automatically marks the attendance of the matched face.`,
    link: "https://github.com/samjoshuadud/attendance-opencv",
    images: ["face-sys1.jpeg"],
  },
  {
    title: "Clinic Portal",
    description: "CCIS Hackathon Prototype",
    techStack: ["Vite.js", "Node.js", "MySQL"],
    summary: `Clinic Portal is a centralized system designed to manage electronic medical records (EMR) for faculty members. A prototype project for our 6th CCIS Hackathon.`,
    link: "https://github.com/samjoshuadud/clinic-portal",
    images: ["clinic-portal1.jpeg", "clinic-portal2.jpeg"],
  },
  {
    title: "Build Up",
    description: "Web3PH Hackathon Prototype",
    techStack: ["Vite.js", "Python", "RestAPI"],
    summary: `A prototype project for the Unitour Web3PH Hackathon, Build Up is a web application that helps students review by generating flashcards and quizzes based on their provided materials. Integrated with the Google Books API, it makes finding resources easy. An on going project.`,
    link: "https://github.com/samjoshuadud/Build-Up",
    images: ["build-up1.jpeg", "build-up2.jpeg"],
  },
  {
    title: "Java Library System",
    description: "1st Year Final Project",
    techStack: ["Java", "MySQL"],
    summary: `A Library Management System built using Java with a graphical user interface (GUI). This system allows for efficient management of library resources, enabling users to borrow, return, and search for books.`,
    link: "https://github.com/samjoshuadud/Library-System",
    images: ["java2.jpeg", "java1.jpeg"],
  },
  {
    title: "Jedgees E-Commerce Website",
    description: "Printing Service E-Commerce",
    techStack: ["HTML", "CSS", "JavaScript","PHP", "MySQL"],
    summary: `A PHP E-Commerce website that enable users to create an order, shop, and request for a service. It is a printing service company.`,
    link: "https://github.com/samjoshuadud/Jedgeesmain",
    images: ["jedgeez.jpeg", "jedgeez2.jpeg"],
  }


  
];

const ITEMS_PER_PAGE = 1;

export default function Project() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(ProjectDetails.length / ITEMS_PER_PAGE);

  const currentProjects = ProjectDetails.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  return (
    <>
      <motion.h1
        className="text-3xl lg:text-5xl font-bold text-[#C3E5D2] px-4 sm:px-8 md:px-16 lg:pl-28 pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h1>
      <AnimatePresence mode="wait">
        {currentProjects.map((project, index) => (
          <motion.div
            key={currentPage}
            className="flex justify-center mt-8 sm:pb-10 md:pb-10 lg:mt-10 px-6 sm:px-8 md:px-16 lg:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Project Info */}
              <motion.div
                className="text-white mt-4 lg:mt-10 order-2 lg:order-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl lg:text-4xl font-semibold text-[#C3E5D2]">
                  {project.title}
                </h1>
                <p className="mt-4 lg:mt-6 mb-4 lg:mb-6 text-lg lg:text-xl">{project.description}</p>

                <ul className="my-4 flex flex-row flex-wrap gap-2 lg:gap-4">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      className="bg-[#258E57] px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm"
                      key={index}
                      as={motion.div}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </ul>

                <p className="my-4 lg:my-6 text-base lg:text-lg tracking-wide">
                  {project.summary}
                </p>

                <motion.a
                  href={project.link}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-[#2EA566] flex gap-4 mt-6 lg:mt-10 px-4 py-6 lg:py-7 w-full lg:w-auto"
                  >
                    <span className="text-[#2EA566]">View Project</span>
                    <SquareArrowOutUpRight
                      size={24}
                      className="text-[#2EA566]"
                    />
                  </Button>
                </motion.a>
              </motion.div>

              {/* Project Images */}
              <motion.div
                className="order-1 lg:order-2 h-[calc(100vh-25rem)] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2EA566]/20 hover:scrollbar-thumb-[#2EA566]/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-3 pr-2">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Image
                      src={`/assets/${image}`}
                      alt={`Project Image ${index + 1}`}
                      width={500}
                      height={250}
                        className="w-full rounded-lg object-cover"
                    />
                  </motion.div>
                ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Navigation Buttons - Hidden on mobile */}
      <div className="hidden lg:flex flex-col gap-4 absolute right-10 top-[47%] transform -translate-y-1/2">
        <motion.button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`${
            currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
          } outline-none focus:outline-none`}
        >
          <ChevronUp size={35} />
        </motion.button>

        <motion.button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          } outline-none focus:outline-none`}
        >
          <ChevronDown size={35} />
        </motion.button>
      </div>

      {/* Page Indicators - Adjusted for better stability */}
      <div className="w-full  flex justify-center my-auto ">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`mx-1 p-1 outline-none focus:outline-none cursor-pointer`}
            >
              <Circle
                size={8}
                className={`${
                  index === currentPage ? "text-[#2EA566]" : "text-[#C3E5D2]/50 hover:text-[#C3E5D2]"
                } transition-colors duration-200`}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
}
