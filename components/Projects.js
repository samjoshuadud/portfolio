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
    images: ["chatting-app-1.jpeg", "chatting-app-2.jpeg"],
  },
  {
    title: "UniLostAndFound",
    description: "A full-stack university Lost and Found System",
    techStack: ["React", "Next.js", "Firebase Auth", "C#", "Asp.NET"],
    summary:
      "I built a Lost and Found web application for university students and staff. It allows users to report lost or found items, send email notifications, and search for items based on categories. The backend is implemented in C# with ASP.NET, using Firebase Firestore for data storage. The frontend is built with Next.js, ensuring a seamless user experience.",
    link: "https://github.com/samjoshuadud/uni-lost-full-stack",
    images: ["unilostandfound-1.jpeg", "unilostandfound-2.jpeg"],
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
        className="text-5xl font-bold text-[#C3E5D2] pl-28 pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h1>
      <AnimatePresence mode="wait">
        {currentProjects.map((project, index) => (
          <motion.div
            key={currentPage} // Key changes when page changes to trigger exit animation
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} // Exit animation
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-[80%] grid grid-cols-2 gap-8">
              <motion.div
                className="text-white mt-7"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }} // Exit animation
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl font-semibold text-[#C3E5D2]">
                  {project.title}
                </h1>
                <p className="mt-6 mb-6 text-xl">{project.description}</p>

                <ul className="my-4 flex flex-row flex-wrap gap-4">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      className="bg-[#258E57] px-4 py-2 text-sm"
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

                <p className="my-6 text-lg  tracking-wide">
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
                    className="border-[#2EA566] flex gap-4 mt-10 px-4 py-7"
                  >
                    <span className="text-[#2EA566]">View Project</span>
                    <SquareArrowOutUpRight
                      size={24}
                      className="text-[#2EA566]"
                    />
                  </Button>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Image
                      src={`/assets/${image}`}
                      alt={`Project Image ${index + 1}`}
                      width={500}
                      height={250}
                      className="h-64 w-full mb-2"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="flex flex-col gap-4 fixed right-10 top-[47%] transform -translate-y-1/2">
        <motion.button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
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

      <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2 flex justify-center text-[#C3E5D2]">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentPage(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`mx-1 p-1 outline-none focus:outline-none cursor-pointer`}
          >
            <Circle
              size={10}
              className={`${
                index === currentPage ? "text-[#2EA566]" : "text-[#C3E5D2]/50 hover:text-[#C3E5D2]"
              } transition-colors duration-200`}
            />
          </motion.button>
        ))}
      </div>
    </>
  );
}
