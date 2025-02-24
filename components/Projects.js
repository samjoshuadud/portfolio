"use client";

import { SquareArrowOutUpRight, ChevronUp, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetails = [
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
        >
          <ChevronUp size={35} />
        </motion.button>

        <motion.button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={35} />
        </motion.button>
      </div>
    </>
  );
}
