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
            className="rounded-full mt-16 fadeinDown"
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

          <div className="flex flex-row mt-28 gap-8">
             <a href="https://github.com/samjoshuadud/" target="_blank">
              <Github color="white" size={30} />
             </a>
            <a href="https://www.linkedin.com/in/clbjsh/" target="_blank">
              <Linkedin color="white" size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
