import Image from "next/image";
import {Github, Linkedin} from "lucide-react"
export default function Landing() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/profile.jpeg"
            alt="Profile"
            width={220}
            height={220}
            className="rounded-full mt-16"
          />

          <div className="mt-8 text-[#C3E5D2] text-center">
            <h1 className="font-bold text-6xl">Full Stack Developer</h1>
            <p className="pt-4 text-2xl">
              Crafting digital solutions that make a difference.{" "}
            </p>
          </div>
          <div className="mt-12">
            <button className="bg-[#2EA566] rounded-lg w-52 h-14 mr-4">Learn More About Me</button>
            <button className="border border-[#2EA566] w-40 h-14 rounded-lg ml-4">View My Work</button>
          </div>

          <div className="flex flex-row">
             <a href="https://github.com/samjoshuadud/">
              <Github color="white" size={37} />
             </a>
            <a href="https://Linked">
              <Linkedin color="white" size={37} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
