'use client'

import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import About from "@/components/About"
import Contact from "@/components/Contact";
import { User, Briefcase, Code, Mail, Menu, X } from "lucide-react"
import { useState } from "react";

const Navigation = ({setSection, currentSection, isMobile = false}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "landing", Icon: User, label: "Home" },
    { id: "about", Icon: Code, label: "About" },
    { id: "projects", Icon: Briefcase, label: "Projects" },
    { id: "contact", Icon: Mail, label: "Contact" },
  ];

  const handleClick = (sectionId) => {
    setSection(sectionId);
    if (isMobile) setIsOpen(false);
  };

  // Mobile Menu Button
  const MobileMenuButton = () => (
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-6 right-6 z-50 lg:hidden bg-[#0D2818]/80 p-2 rounded-lg border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300"
    >
      {isOpen ? (
        <X className="text-[#C3E5D2] w-6 h-6" />
      ) : (
        <Menu className="text-[#C3E5D2] w-6 h-6" />
      )}
    </button>
  );

  // Mobile Sidebar
  if (isMobile) {
    return (
      <>
        <MobileMenuButton />
        
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div 
          className={`fixed right-0 top-0 h-full w-72 bg-[#0D2818]/95 border-l border-[#2EA566]/20 backdrop-blur-sm z-40 transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
          } lg:hidden`}
        >
          <div className="flex flex-col items-start justify-center h-full">
            {navItems.map(({id, Icon, label}) => (
              <button 
                key={id}
                onClick={() => handleClick(id)}
                className={`group relative outline-none focus:outline-none flex items-center gap-4 w-full px-8 py-6 transition-all duration-300 ${
                  currentSection === id 
                    ? "bg-[#2EA566]/10 border-r-2 border-[#2EA566]" 
                    : "hover:bg-[#2EA566]/5"
                }`}
              >
                <div className="flex items-center gap-4 relative">
                  <Icon 
                    size={24} 
                    className={`transition-all duration-300 ${
                      currentSection === id 
                        ? "text-[#2EA566]" 
                        : "text-[#C3E5D2] group-hover:text-[#2EA566]"
                    }`} 
                  />
                  <span className={`text-lg transition-all duration-300 ${
                    currentSection === id 
                      ? "text-[#2EA566]" 
                      : "text-[#C3E5D2] group-hover:text-[#2EA566]"
                  }`}>
                    {label}
                  </span>
                </div>
                {currentSection === id && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#2EA566]/50" />
                )}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Desktop Footer
  return (
    <div className="fixed bottom-0 w-full h-20 border-t border-[#2EA566]/20 flex items-center justify-center gap-8">
      {navItems.map(({id, Icon}) => (
        <button 
          key={id}
          onClick={() => setSection(id)}
          className={`group relative outline-none focus:outline-none ${
            currentSection === id ? "after:absolute after:w-1.5 after:h-1.5 after:bg-[#2EA566] after:rounded-full after:-top-1 after:left-1/2 after:-translate-x-1/2" : ""
          }`}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
          <Icon 
            size={24} 
            className={`relative transition-all duration-300 
              ${currentSection === id 
                ? "text-[#2EA566] scale-110" 
                : "text-[#C3E5D2] group-hover:scale-110 group-hover:rotate-6"}`} 
          />
        </button>
      ))}
    </div>
  );
}

const renderSection = (section, setSection) => {
  switch (section) {
    case "landing":
      return <Landing setSection={setSection} />;
    case "projects":
      return <Projects />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
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
      <div className="hidden lg:block">
        <Navigation setSection={setSection} currentSection={section} />
      </div>
      <div className="lg:hidden">
        <Navigation setSection={setSection} currentSection={section} isMobile={true} />
      </div>
    </>
  );
}
