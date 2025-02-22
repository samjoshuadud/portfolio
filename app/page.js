'use client'

import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import { User, Briefcase, Code, Mail } from "lucide-react"
import {useState} from "react";

const Footer = ({setSection}) => {
  return (
    <>
      <div className="fixed bottom-0 w-full h-24 border-t border-[#2EA566]/20 flex items-center justify-center gap-8">
        <button onClick={() => setSection("landing")}><User size={24} /> </button>
        <button onClick={() => setSection("projects")}><Briefcase size={24} /></button>
        <button onClick={() => setSection("")}><Code size={24} /></button>
        <button onClick={() => setSection("")}><Mail size={24} />  </button>
      </div>
    </>
  );
}

const renderSection = (section) => {
  switch (section) {
    case "landing":
      return <Landing />;
    case "projects":
      return <Projects />;
    default:
      return <Landing />;
  }
}

export default function Home() {
  const [section, setSection] = useState("landing");
  return (
    <>
      <h1 className="font-bold text-3xl text-[#C3E5D2] p-6">My Portfolio</h1>
      {renderSection(section)}
      <Footer setSection={setSection} />
    </>
  );
}
