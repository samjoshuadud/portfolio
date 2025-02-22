import Image from "next/image";
import {Github, Linkedin} from "lucide-react"
export default function Landing() {


  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <Image
              src="/assets/profile.jpeg"
              alt="Profile"
              width={220}
              height={220}
              className="rounded-full mt-16 animate-fadeIn relative group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="mt-8 text-[#C3E5D2] text-center animate-slideUp [animation-delay:200ms] opacity-0">
            <h1 className="font-bold text-6xl bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text animate-gradient">
              Full Stack Developer
            </h1>
            <p className="pt-4 text-2xl">
              Crafting digital solutions that make a difference.{" "}
            </p>
          </div>
          
          <div className="mt-12 animate-slideUp [animation-delay:400ms] opacity-0 space-x-6">
            <button className="bg-[#2EA566] rounded-lg w-52 h-14 relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#C3E5D2] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative group-hover:text-[#0D2818] transition-colors duration-300">
                Learn More About Me
              </span>
            </button>
            <button className="border border-[#2EA566] w-40 h-14 rounded-lg relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#2EA566] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">
                View My Work
              </span>
            </button>
          </div>

          
          <div className="flex flex-row mt-28 gap-8 animate-slideUp [animation-delay:600ms] opacity-0">
            <a href="https://github.com/samjoshuadud/" 
               target="_blank" 
               className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <Github color="white" size={30} className="relative transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/clbjsh/" 
               target="_blank" 
               className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <Linkedin color="white" size={30} className="relative transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

