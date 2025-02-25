import { Code2, Database, Cpu, Sparkles, Flame, Trophy, Star, Zap, Target, ArrowRight } from "lucide-react";

export default function About() {
    return (
    <div className="flex justify-center">
      <div className="w-full h-[calc(100vh-10.5rem)] px-32 pt-8">
        <div className="grid grid-cols-2 gap-16 h-full">
          {/* Left Column - About & Skills (Fixed Height) */}
          <div className="space-y-12 h-[calc(100vh-10.5rem)] overflow-hidden">
            {/* Intro Section */}
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text">
                About Me
              </h2>
              <p className="text-[#C3E5D2] text-lg leading-relaxed">
                I'm a 2nd year Computer Science student at the University of Makati, passionate about full-stack web development. 
                As a Linux enthusiast, I believe in the power of open-source technologies and their ability to shape the future of software development.
              </p>
            </div>

            {/* Technical Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#C3E5D2] mb-6">Technical Skills</h3>
              
              {/* Languages & Frameworks */}
              <div className="p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:200ms] opacity-0">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-[#C3E5D2]">Languages & Frameworks</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'React', primary: true },
                      { name: 'Next.js', primary: true },
                      { name: 'JavaScript', primary: true },
                      {name: 'Java', primary: true},
                      { name: 'Python', primary: true },
                      { name: 'Node.js', primary: false },
                      { name: 'Tailwind', primary: false },
                      { name: 'C# ASP.NET', primary: false },
                      { name: 'HTML/CSS', primary: false },
                    ].map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          tech.primary 
                            ? 'border-[#2EA566] text-[#2EA566] hover:bg-[#2EA566] hover:text-white' 
                            : 'border-[#2EA566]/50 text-[#C3E5D2]/80'
                        } transition-colors duration-300`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:400ms] opacity-0">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-[#C3E5D2]">Database & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'Firebase', 'Git', 'Linux'].map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm border border-[#2EA566]/50 text-[#C3E5D2]/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quest Log (Scrollable) */}
          <div className="h-[96%] overflow-y-auto pr-4 pb-32 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2EA566]/20 hover:scrollbar-thumb-[#2EA566]/40">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#C3E5D2] mb-6">Journey So Far</h3>
              
              <div className="relative space-y-8">
                {/* Connection line */}
                <div className="absolute left-[85px] top-12 bottom-20 w-0.5 bg-gradient-to-b from-[#2EA566] via-[#2EA566]/50 to-transparent"></div>

                {/* 2020: First Programming Experience */}
                <div className="relative flex group">
                  <div className="w-44 h-44 rounded-xl border border-[#2EA566]/20 bg-[#0D2818]/40 p-4 flex flex-col items-center justify-center group-hover:border-[#2EA566] transition-all duration-300">
                    <Star className="text-[#2EA566] w-8 h-8 mb-2 group-hover:rotate-[360deg] transition-all duration-700" />
                    <span className="text-[#2EA566] text-sm">2020</span>
                    <h4 className="text-[#C3E5D2] text-lg font-semibold mt-1">First Code</h4>
                  </div>
                  
                  <div className="flex-1 pl-6 pt-4">
                    <div className="relative">
                      <ArrowRight className="absolute -left-3 top-2 text-[#2EA566] w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <p className="text-[#C3E5D2]/80 leading-relaxed">
                        First tried programming with Python, learning basics by cloning and upgrading repositories.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="achievement-badge">🐍 Python Basics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2021: Web Development */}
                <div className="relative flex group">
                  <div className="w-44 h-44 rounded-xl border border-[#2EA566]/20 bg-[#0D2818]/40 p-4 flex flex-col items-center justify-center group-hover:border-[#2EA566] transition-all duration-300">
                    <Zap className="text-[#2EA566] w-8 h-8 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <span className="text-[#2EA566] text-sm">2021</span>
                    <h4 className="text-[#C3E5D2] text-lg font-semibold mt-1">Web Dev Start</h4>
                  </div>
                  
                  <div className="flex-1 pl-6 pt-4">
                    <div className="relative">
                      <ArrowRight className="absolute -left-3 top-2 text-[#2EA566] w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <p className="text-[#C3E5D2]/80 leading-relaxed">
                        Bought a course on web development, learning HTML, CSS, JS, and Bootstrap.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="achievement-badge">🌐 Web Basics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2023: Computer Science Enrollment */}
                <div className="relative flex group">
                  <div className="w-44 h-44 rounded-xl border border-[#2EA566]/20 bg-[#0D2818]/40 p-4 flex flex-col items-center justify-center group-hover:border-[#2EA566] transition-all duration-300">
                    <Target className="text-[#2EA566] w-8 h-8 mb-2 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-[#2EA566] text-sm">2023</span>
                    <h4 className="text-[#C3E5D2] text-lg font-semibold mt-1">CS Journey</h4>
                  </div>
                  
                  <div className="flex-1 pl-6 pt-4">
                    <div className="relative">
                      <ArrowRight className="absolute -left-3 top-2 text-[#2EA566] w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <p className="text-[#C3E5D2]/80 leading-relaxed">
                        Enrolled in Computer Science, learned Java and revisited web basics. Worked on projects featured in the Projects section.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="achievement-badge">📚 CS Basics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2024: Sophomore Year & Hackathons */}
                <div className="relative flex group">
                  <div className="w-44 h-44 rounded-xl border border-[#2EA566]/20 bg-[#0D2818]/40 p-4 flex flex-col items-center justify-center group-hover:border-[#2EA566] transition-all duration-300">
                    <Trophy className="text-[#2EA566] w-8 h-8 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span className="text-[#2EA566] text-sm">2024</span>
                    <h4 className="text-[#C3E5D2] text-lg font-semibold mt-1">Hackathon Hero</h4>
                  </div>
                  
                  <div className="flex-1 pl-6 pt-4">
                    <div className="relative">
                      <ArrowRight className="absolute -left-3 top-2 text-[#2EA566] w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <p className="text-[#C3E5D2]/80 leading-relaxed">
                        Attended two hackathons, learning from mentors and building prototypes. Transitioned to Linux, enjoying customization.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="achievement-badge">🏆 Web3PH Hackathon</span>
                        <span className="achievement-badge">🏆 CCIS Hackathon</span>
                      </div>
                      <p className="text-[#C3E5D2]/80 mt-3">
                        These experiences taught me teamwork, rapid prototyping, and adapting to new challenges.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2025: Current Focus */}
                <div className="relative flex group">
                  <div className="w-44 h-44 rounded-xl border border-[#2EA566]/20 bg-[#0D2818]/40 p-4 flex flex-col items-center justify-center group-hover:border-[#2EA566] transition-all duration-300">
                    <Trophy className="text-[#2EA566] w-8 h-8 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span className="text-[#2EA566] text-sm">2025</span>
                    <h4 className="text-[#C3E5D2] text-lg font-semibold mt-1">Current Quest</h4>
                  </div>
                  
                  <div className="flex-1 pl-6 pt-4">
                    <div className="relative">
                      <ArrowRight className="absolute -left-3 top-2 text-[#2EA566] w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <p className="text-[#C3E5D2]/80 leading-relaxed">
                        Currently polishing skills and learning new technologies to enhance my development capabilities.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="achievement-badge">🔧 Skill Polishing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}