import { Code2, Database, Cpu, Sparkles, Flame, Trophy, Star, Zap, Target, ArrowRight } from "lucide-react";

export default function About() {
    return (
    <div className="flex justify-center">
      <div className="w-full h-[calc(100vh-10.5rem)] px-4 sm:px-8 md:px-16 lg:px-32 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full">
          {/* Left Column - About & Skills */}
          <div className="space-y-8 lg:space-y-12 h-auto lg:h-[calc(100vh-10.5rem)] overflow-y-auto lg:overflow-hidden pb-8 lg:pb-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2EA566]/20 hover:scrollbar-thumb-[#2EA566]/40">
            {/* Intro Section */}
            <div className="space-y-4 lg:space-y-6 animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text">
                About Me
              </h2>
              <p className="text-[#C3E5D2]/80 text-base lg:text-lg leading-relaxed">
                Hi! I'm <span className="font-bold">Joshua Armojallas</span>. I'm a 2nd year Computer Science student at the University of Makati, passionate about full-stack web development. 
                As a Linux enthusiast, I believe in the power of open-source technologies and their ability to shape the future of software development.
              </p>
            </div>

            {/* Technical Skills Grid */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#C3E5D2] mb-4 lg:mb-6">Technical Skills</h3>
              
              {/* Languages & Frameworks */}
              <div className="p-4 lg:p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:200ms] opacity-0 bg-[#0D2818]/40">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg lg:text-xl font-semibold text-[#C3E5D2]">Languages & Frameworks</h3>
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
                        className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm border ${
                          tech.primary 
                            ? 'border-[#2EA566] text-[#2EA566] hover:bg-[#2EA566] hover:text-[#C3E5D2]' 
                            : 'border-[#2EA566]/20 text-[#C3E5D2]/60 hover:border-[#2EA566]/40 hover:text-[#C3E5D2]'
                        } transition-all duration-300`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="p-4 lg:p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group animate-slideUp [animation-delay:400ms] opacity-0 bg-[#0D2818]/40">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-[#2EA566] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-[#C3E5D2]">Database & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'Firebase', 'Git', 'Linux'].map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm border border-[#2EA566]/20 text-[#C3E5D2]/60 hover:border-[#2EA566]/40 hover:text-[#C3E5D2] transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quest Log */}
          <div className="h-auto lg:h-[96%] overflow-y-auto pr-2 lg:pr-4 pb-20 lg:pb-32 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2EA566]/20 hover:scrollbar-thumb-[#2EA566]/40">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#C3E5D2] mb-4 lg:mb-6">Journey So Far</h3>
              
              <div className="relative space-y-6 lg:space-y-8">
                {/* Connection line */}
                <div className="absolute left-[60px] lg:left-[85px] top-12 bottom-20 w-0.5 bg-gradient-to-b from-[#2EA566] via-[#2EA566]/50 to-transparent"></div>

                {/* Journey Cards */}
                {[
                  {
                    year: "2020",
                    title: "First Code",
                    Icon: Star,
                    description: "First tried programming with Python, learning basics by cloning and upgrading repositories.",
                    achievement: "🐍 Python Basics"
                  },
                  {
                    year: "2021",
                    title: "Web Dev Start",
                    Icon: Zap,
                    description: "Bought a course on web development, learning HTML, CSS, JS, and Bootstrap.",
                    achievement: "🌐 Web Basics"
                  },
                  {
                    year: "2023",
                    title: "CS Journey",
                    Icon: Target,
                    description: "Enrolled in Computer Science, learned Java and revisited web basics. Worked on projects featured in the Projects section.",
                    achievement: "📚 CS Basics"
                  },
                  {
                    year: "2024",
                    title: "Hackathon Hero",
                    Icon: Trophy,
                    description: "Attended two hackathons, learning from mentors and building prototypes. Transitioned to Linux, enjoying customization.",
                    achievements: ["🏆 Web3PH Hackathon", "🏆 CCIS Hackathon"],
                    extraInfo: "These experiences taught me teamwork, rapid prototyping, and adapting to new challenges."
                  },
                  {
                    year: "2025",
                    title: "Current Quest",
                    Icon: Flame,
                    description: "Currently polishing skills and learning new technologies to enhance my development capabilities.",
                    achievement: "🔧 Skill Polishing"
                  }
                ].map((journey, index) => (
                  <div key={index} className="relative flex group">
                    <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-xl border border-[#2EA566]/20 bg-[#0D2818]/40 p-3 lg:p-4 flex flex-col items-center justify-center group-hover:border-[#2EA566]/40 transition-all duration-300">
                      <journey.Icon className="text-[#2EA566] w-6 h-6 lg:w-8 lg:h-8 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
                      <span className="text-[#2EA566] text-xs lg:text-sm">{journey.year}</span>
                      <h4 className="text-[#C3E5D2] text-base lg:text-lg font-semibold mt-1 text-center">{journey.title}</h4>
                    </div>
                    
                    <div className="flex-1 pl-4 lg:pl-6 pt-2 lg:pt-4">
                      <div className="relative">
                        <ArrowRight className="absolute -left-3 top-2 text-[#2EA566] w-4 h-4 lg:w-5 lg:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                        <p className="text-[#C3E5D2]/80 text-sm lg:text-base leading-relaxed">
                          {journey.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2 lg:mt-3">
                          {journey.achievements ? 
                            journey.achievements.map((achievement, i) => (
                              <span key={i} className="px-2 lg:px-3 py-1 text-xs lg:text-sm border border-[#2EA566]/20 text-[#C3E5D2]/60 rounded-full hover:border-[#2EA566]/40 hover:text-[#C3E5D2] transition-all duration-300">
                                {achievement}
                              </span>
                            ))
                            :
                            <span className="px-2 lg:px-3 py-1 text-xs lg:text-sm border border-[#2EA566]/20 text-[#C3E5D2]/60 rounded-full hover:border-[#2EA566]/40 hover:text-[#C3E5D2] transition-all duration-300">
                              {journey.achievement}
                            </span>
                          }
                        </div>
                        {journey.extraInfo && (
                          <p className="text-[#C3E5D2]/60 text-sm lg:text-base mt-2 lg:mt-3">
                            {journey.extraInfo}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
