import { Code2, Database, Cpu, Sparkles, Flame, Trophy, Star, Zap, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
    <div className="flex justify-center">
      <div className="w-full h-[calc(100vh-10.5rem)] px-4 sm:px-6 md:px-10 lg:px-20 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 h-full">
          <div className="space-y-6 lg:space-y-8 h-auto lg:h-[calc(100vh-10.5rem)] overflow-y-auto pb-4 lg:pb-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2EA566]/20 hover:scrollbar-thumb-[#2EA566]/40 pr-2">
            <motion.div 
              className="space-y-3 lg:space-y-6"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-[#C3E5D2]/80 text-sm sm:text-base lg:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hi! I'm <span className="font-bold text-[#C3E5D2]">Joshua Armojallas</span>. I'm a 3rd year Computer Science student at the University of Makati, passionate about full-stack web development. 
                As a Linux enthusiast, I believe in the power of open-source technologies and their ability to shape the future of software development.
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-3 lg:space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#C3E5D2] mb-2 lg:mb-6 flex items-center gap-2"
                variants={itemVariants}
              >
                Technical Skills
                <motion.span
                  animate={{ 
                    rotate: [0, 15, 0, -15, 0],
                    scale: [1, 1.2, 1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Sparkles className="text-[#2EA566] w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </motion.h3>
              
              <motion.div 
                className="p-3 sm:p-4 lg:p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group bg-[#0D2818]/40"
                variants={itemVariants}
                whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(46, 165, 102, 0.1)" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <motion.div 
                    whileHover={{ rotate: 360 }} 
                    transition={{ duration: 0.8 }}
                    className="bg-[#0D2818]/80 p-1.5 rounded-lg"
                  >
                    <Code2 className="text-[#2EA566] w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#C3E5D2]">Languages & Frameworks</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      { name: 'React', primary: true },
                      { name: 'Next.js', primary: true },
                      { name: 'JavaScript', primary: true },
                      { name: 'TypeScript', primary: true },
                      { name: 'Java', primary: true},
                      { name: 'Python', primary: true },
                      { name: 'Node.js', primary: false },
                      { name: 'Tailwind', primary: false },
                      { name: 'C# ASP.NET', primary: false },
                      { name: 'GoLang', primary: false },
                      { name: 'HTML/CSS', primary: false },
                    ].map((tech, index) => (
                      <motion.span 
                        key={index}
                        className={`px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full text-xs lg:text-sm border ${
                          tech.primary 
                            ? 'border-[#2EA566] text-[#2EA566] hover:bg-[#2EA566] hover:text-[#C3E5D2]' 
                            : 'border-[#2EA566]/20 text-[#C3E5D2]/60 hover:border-[#2EA566]/40 hover:text-[#C3E5D2]'
                        } transition-all duration-300 cursor-pointer`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + (index * 0.06) }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-3 sm:p-4 lg:p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group bg-[#0D2818]/40"
                variants={itemVariants}
                whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(46, 165, 102, 0.1)" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <motion.div 
                    whileHover={{ rotate: 360 }} 
                    transition={{ duration: 0.8 }}
                    className="bg-[#0D2818]/80 p-1.5 rounded-lg"
                  >
                    <Database className="text-[#2EA566] w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#C3E5D2]">Database & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['MySQL', 'Firebase', 'Git', 'Linux', 'Docker'].map((tool, index) => (
                    <motion.span 
                      key={index}
                      className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm border border-[#2EA566]/20 text-[#C3E5D2]/60 hover:border-[#2EA566]/40 hover:text-[#C3E5D2] transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.08) }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="h-auto lg:h-[96%] overflow-y-auto pr-1 sm:pr-2 lg:pr-4 pb-16 lg:pb-20 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2EA566]/20 hover:scrollbar-thumb-[#2EA566]/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#C3E5D2] mb-3 lg:mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Journey So Far
              </motion.h3>
              
              <div className="relative space-y-5 sm:space-y-6 lg:space-y-8">
                <motion.div 
                  className="absolute left-[42px] sm:left-[48px] lg:left-[85px] top-8 bottom-20 w-0.5 bg-gradient-to-b from-[#2EA566] via-[#2EA566]/50 to-transparent"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "100%", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
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
    description: "Attended multiple hackathons, building prototypes and learning from mentors. Transitioned to Linux and embraced system customization.",
    achievements: ["🏆 Web3PH Hackathon", "🏆 CCIS Hackathon", "🏆 7th CCIS UMak Hackathon Champion"],
    extraInfo: "These experiences strengthened my teamwork, rapid prototyping, and adaptability to new challenges."
  },
  {
    year: "2025",
    title: "Current Quest",
    Icon: Flame,
    description: "Currently in 3rd year, grinding LeetCode problems, learning Golang, and polishing development skills to level up my tech stack.",
    achievements: ["🔧 Skill Polishing", "💻 LeetCode: https://leetcode.com/u/samjoshuadud/"],
    extraInfo: "Focusing on improving problem-solving skills, learning new languages, and preparing for future projects and internships."
  }

                ].map((journey, index) => (
                  <motion.div 
                    key={index} 
                    className="relative flex group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-44 lg:h-44 rounded-xl border border-[#2EA566]/20 bg-[#0D2818]/40 p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center group-hover:border-[#2EA566]/40 transition-all duration-300"
                      whileHover={{ 
                        boxShadow: "0 0 15px rgba(46, 165, 102, 0.2)",
                        scale: 1.05
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <journey.Icon className="text-[#2EA566] w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 mb-1 lg:mb-2 group-hover:scale-110 transition-all duration-700" />
                      </motion.div>
                      <span className="text-[#2EA566] text-[10px] sm:text-xs lg:text-sm">{journey.year}</span>
                      <h4 className="text-[#C3E5D2] text-xs sm:text-sm lg:text-lg font-semibold mt-0.5 lg:mt-1 text-center">{journey.title}</h4>
                    </motion.div>
                    
                    <div className="flex-1 pl-3 sm:pl-4 lg:pl-6 pt-1 sm:pt-2 lg:pt-4">
                      <div className="relative">
                        <motion.div
                          animate={{ x: [-3, 0, -3] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="absolute -left-2 sm:-left-3 top-1 sm:top-2"
                        >
                          <ArrowRight className="text-[#2EA566] w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                        <motion.p 
                          className="text-[#C3E5D2]/80 text-xs sm:text-sm lg:text-base leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 + (index * 0.2) }}
                        >
                          {journey.description}
                        </motion.p>
                        <motion.div 
                          className="flex flex-wrap gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 lg:mt-3"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.9 + (index * 0.2) }}
                        >
                          {journey.achievements ? 
                            journey.achievements.map((achievement, i) => (
                              <motion.span 
                                key={i} 
                                className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs lg:text-sm border border-[#2EA566]/20 text-[#C3E5D2]/60 rounded-full hover:border-[#2EA566]/40 hover:text-[#C3E5D2] transition-all duration-300"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(46, 165, 102, 0.1)" }}
                              >
                                {achievement}
                              </motion.span>
                            ))
                            :
                            <motion.span 
                              className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs lg:text-sm border border-[#2EA566]/20 text-[#C3E5D2]/60 rounded-full hover:border-[#2EA566]/40 hover:text-[#C3E5D2] transition-all duration-300"
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(46, 165, 102, 0.1)" }}
                            >
                              {journey.achievement}
                            </motion.span>
                          }
                        </motion.div>
                        {journey.extraInfo && (
                          <motion.p 
                            className="text-[#C3E5D2]/60 text-xs sm:text-sm lg:text-base mt-1.5 sm:mt-2 lg:mt-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 + (index * 0.2) }}
                          >
                            {journey.extraInfo}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    );
}
