'use client'

import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import About from "@/components/About"
import { User, Briefcase, Code, Mail } from "lucide-react"
import {useState} from "react";

const Footer = ({setSection, currentSection}) => {
  return (
    <>
      <div className="fixed bottom-0 w-full h-20 border-t border-[#2EA566]/20 flex items-center justify-center gap-8">
        <button 
          onClick={() => setSection("landing")} 
          className={`group relative outline-none focus:outline-none ${currentSection === "landing" ? "after:absolute after:w-1.5 after:h-1.5 after:bg-[#2EA566] after:rounded-full after:-top-1 after:left-1/2 after:-translate-x-1/2" : ""}`}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
          <User 
            size={24} 
            className={`relative transition-all duration-300 
              ${currentSection === "landing" 
                ? "text-[#2EA566] scale-110" 
                : "text-[#C3E5D2] group-hover:scale-110 group-hover:rotate-6"}`} 
          />
        </button>
        <button 
          onClick={() => setSection("about")} 
          className={`group relative outline-none focus:outline-none ${currentSection === "about" ? "after:absolute after:w-1.5 after:h-1.5 after:bg-[#2EA566] after:rounded-full after:-top-1 after:left-1/2 after:-translate-x-1/2" : ""}`}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
          <Code 
            size={24} 
            className={`relative transition-all duration-300 
              ${currentSection === "about" 
                ? "text-[#2EA566] scale-110" 
                : "text-[#C3E5D2] group-hover:scale-110 group-hover:rotate-6"}`} 
          />
        </button>
        <button 
          onClick={() => setSection("projects")} 
          className={`group relative outline-none focus:outline-none ${currentSection === "projects" ? "after:absolute after:w-1.5 after:h-1.5 after:bg-[#2EA566] after:rounded-full after:-top-1 after:left-1/2 after:-translate-x-1/2" : ""}`}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
          <Briefcase 
            size={24} 
            className={`relative transition-all duration-300 
              ${currentSection === "projects" 
                ? "text-[#2EA566] scale-110" 
                : "text-[#C3E5D2] group-hover:scale-110 group-hover:rotate-6"}`} 
          />
        </button>
        <button 
          onClick={() => setSection("contact")} 
          className={`group relative outline-none focus:outline-none ${currentSection === "contact" ? "after:absolute after:w-1.5 after:h-1.5 after:bg-[#2EA566] after:rounded-full after:-top-1 after:left-1/2 after:-translate-x-1/2" : ""}`}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
          <Mail 
            size={24} 
            className={`relative transition-all duration-300 
              ${currentSection === "contact" 
                ? "text-[#2EA566] scale-110" 
                : "text-[#C3E5D2] group-hover:scale-110 group-hover:rotate-6"}`} 
          />
        </button>
      </div>
    </>
  );
}

const renderSection = (section, setSection) => {
  switch (section) {
    case "landing":
      return <Landing setSection={setSection} />;
    case "projects":
      return <Projects />;
    case "about":
      return <About />
    default:
      return <Landing setSection={setSection} />;
  }
}

export default function Home() {
  const [section, setSection] = useState("landing");
  return (
    <>
      <h1 className="font-bold text-3xl text-[#C3E5D2] p-6">My Portfolio</h1>
      {renderSection(section, setSection)}
      <Footer setSection={setSection} currentSection={section} />
    </>
  );
}
