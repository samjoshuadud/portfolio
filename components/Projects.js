import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProjectDetails = [
  {
    title: "Chatting App",
    description: "A real-time chatting app",
    techStack: ["React", "Next.js", "Firebase"],
    summary: `I developed a real-time chatting app with features including login, sign-up, Google authentication, and the ability to change display names. Users can join chat rooms using a unique ID. The app uses Firebase for the backend and real-time data handling, while the frontend is built with Next.js and hosted live on Vercel.`,
    link: "https://chatting-app-umak.vercel.app",
    images: ["chatting-app-1.jpeg", "chatting-app-2.jpeg"],
  },
];

export default function Project() {
  return (
    <>
      <h1 className="text-5xl font-bold text-[#C3E5D2] pl-28 pt-8">
        Featured Projects
      </h1>
      {ProjectDetails.map((project, index) => (
        <div className="flex justify-center mt-10" key={index}>
          <div className="w-[80%] grid grid-cols-2 gap-8">
            <div className="text-white mt-7">
              <h1 className="text-4xl font-semibold text-[#C3E5D2]">
                {project.title}
              </h1>
              <p className="mt-6 mb-6 text-xl">{project.description}</p>
              <ul className="my-4 flex flex-row gap-4" key={index}>
                {project.techStack.map((tech, index) => (
                  <Badge className="bg-[#258E57] px-4 py-2 text-sm" key={index}>
                    {tech}
                  </Badge>
                ))}
              </ul>
              <p className="my-6 text-lg fomt-semibold tracking-wide">
                {project.summary}
              </p>
              <a href={project.link} target="_blank">
                <Button
                  variant="outline"
                  className="border-[#2EA566] flex gap-4 mt-10 px-4 py-7"
                >
                  <span className="text-[#2EA566] ">View Project</span>
                  <SquareArrowOutUpRight size={24} className="text-[#2EA566]" />
                </Button>
              </a>
            </div>
            <div>
              {project.images.map((image, index) => (
                <Image
                  key={index}
                  src={`/assets/${image}`}
                  alt={`Project Image ${index + 1}`}
                  width={500}
                  height={250}
                  className="h-64 w-full mb-2"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
