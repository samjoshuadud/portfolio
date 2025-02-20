import Landing from "@/components/Landing";
import { User, Briefcase, Code, Mail } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="fixed bottom-0 w-full h-24 border-t border-[#2EA566]/20 flex items-center justify-center gap-8">
        <User size={24} />
        <Briefcase size={24} />
        <Code size={24} />
        <Mail size={24} />
      </div>
      {/* Fix Padding of the Body and make sure the width is full relative to the body */}
    </>
  );
}


export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl text-[#C3E5D2] p-6">My Portfolio</h1>
      <Landing />

      <Footer />
    </>
  );
}
