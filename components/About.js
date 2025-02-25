import { Code2, Brain, Rocket, Coffee } from "lucide-react";

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="w-full h-[calc(100vh-10.5rem)] overflow-y-auto px-32 pb-32 pt-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2EA566]/20 hover:scrollbar-thumb-[#2EA566]/40">
        {/* Intro Section with Animation */}
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-[#C3E5D2] text-lg leading-relaxed">
            A passionate Full Stack Developer who loves turning complex problems into elegant solutions. 
            With a keen eye for detail and a drive for innovation, I craft digital experiences that make a difference.
          </p>
        </div>

        {/* Skills Grid with Hover Effects */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Technical Skills */}
          <div className="p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:200ms] opacity-0">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-[#C3E5D2]">Technical Arsenal</h3>
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm border border-[#2EA566] text-[#C3E5D2] hover:bg-[#2EA566] hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem Solving */}
          <div className="p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:400ms] opacity-0">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-[#C3E5D2]">Problem Solving</h3>
            </div>
            <p className="text-[#C3E5D2]/80 leading-relaxed">
              I approach each challenge with analytical thinking and creative solutions. 
              Breaking down complex problems into manageable pieces is my specialty.
            </p>
          </div>

          {/* Current Focus */}
          <div className="p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:600ms] opacity-0">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-[#C3E5D2]">Current Focus</h3>
            </div>
            <p className="text-[#C3E5D2]/80 leading-relaxed">
              Currently diving deep into cloud architecture and AI integration. 
              Always learning and exploring new technologies to stay ahead of the curve.
            </p>
          </div>

          {/* Interests */}
          <div className="p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:800ms] opacity-0">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-[#C3E5D2]">When Not Coding</h3>
            </div>
            <p className="text-[#C3E5D2]/80 leading-relaxed">
              You'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16 animate-slideUp [animation-delay:1000ms] opacity-0">
          <h3 className="text-2xl font-semibold text-[#C3E5D2] mb-6">Journey So Far</h3>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-[#2EA566]/20">
            {[
              { year: '2023', title: 'Full Stack Developer', desc: 'Leading complex web applications development' },
              { year: '2022', title: 'Frontend Specialist', desc: 'Mastered modern frontend frameworks' },
              { year: '2021', title: 'Started Coding Journey', desc: 'First line of code written' },
            ].map((item, index) => (
              <div key={index} className="relative flex items-start ml-6 group">
                <span className="absolute -left-[1.625rem] h-3 w-3 rounded-full bg-[#2EA566] group-hover:scale-125 transition-transform duration-300" />
                <div className="p-4 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 w-full">
                  <h4 className="text-[#2EA566] font-semibold">{item.year}</h4>
                  <p className="text-[#C3E5D2] font-medium">{item.title}</p>
                  <p className="text-[#C3E5D2]/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}