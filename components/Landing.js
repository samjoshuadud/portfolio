import Image from "next/image";
import {Github, Linkedin} from "lucide-react"
export default function Landing({setSection}) {

  return (
    <>
      <div className="flex justify-center items-center w-full px-4">
        <div className="flex flex-col items-center max-w-3xl w-full">
          <div className="relative group opacity-0 animate-fadeInSlideUp">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-15 transition-opacity duration-800 ease-in-out"></div>
            <Image
              src="/assets/profile.jpeg"
              alt="Profile"
              width={220}
              height={220}
              className="rounded-full mt-8 sm:mt-12 relative group-hover:scale-[1.02] transition-transform duration-800 ease-in-out"
              priority
            />
          </div>

          <div className="mt-8 text-[#C3E5D2] text-center opacity-0 animate-fadeInSlideUp [animation-delay:200ms]">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text">
              Full Stack Developer
            </h1>
            <p className="pt-4 text-xl sm:text-2xl opacity-0 animate-fadeInSlideUp [animation-delay:400ms]">
              Crafting digital solutions that make a difference.
            </p>
          </div>
          
          <div className="mt-10 sm:mt-12 opacity-0 animate-fadeInSlideUp [animation-delay:600ms] flex flex-col sm:flex-row items-center w-full px-4 sm:px-0 justify-center sm:space-x-6 space-y-4 sm:space-y-0">
            <button 
              onClick={() => setSection("about")} 
              className="bg-[#2EA566] rounded-lg w-full max-w-[220px] h-14 relative overflow-hidden group transition-all duration-300 ease-out hover:shadow-md hover:shadow-[#2EA566]/20"
            >
              <span className="absolute inset-0 bg-[#C3E5D2] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative group-hover:text-[#0D2818] transition-colors duration-500 font-medium">
                Learn More About Me
              </span>
            </button>
            <button 
              onClick={() => setSection("projects")} 
              className="border border-[#2EA566] w-full max-w-[170px] h-14 rounded-lg relative overflow-hidden group transition-all duration-300 ease-out hover:shadow-md hover:shadow-[#2EA566]/20"
            >
              <span className="absolute inset-0 bg-[#2EA566] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative group-hover:text-white transition-colors duration-500 font-medium">
                View My Work
              </span>
            </button>
          </div>

          <div className="flex flex-row mt-12 sm:mt-16 mb-12 sm:mb-16 gap-8 opacity-0 animate-fadeInSlideUp [animation-delay:800ms]">
            <a href="https://github.com/samjoshuadud/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative" 
               aria-label="GitHub Profile">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-15 transition-opacity duration-500 ease-in-out"></div>
              <Github 
                color="white" 
                size={30} 
                className="relative transition-all duration-500 ease-in-out group-hover:translate-y-[-2px] group-hover:text-[#C3E5D2]" 
              />
            </a>
            <a href="https://www.linkedin.com/in/clbjsh/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative"
               aria-label="LinkedIn Profile">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] rounded-full blur opacity-0 group-hover:opacity-15 transition-opacity duration-500 ease-in-out"></div>
              <Linkedin 
                color="white" 
                size={30} 
                className="relative transition-all duration-500 ease-in-out group-hover:translate-y-[-2px] group-hover:text-[#C3E5D2]" 
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

