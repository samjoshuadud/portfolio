import { Mail, Phone, Facebook, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "carmojallas.a12345677@umak.edu.ph",
      link: "mailto:carmojallas.a12345677@umak.edu.ph",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "09602825151",
      link: "tel:09602825151",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Joshua Armojallas",
      link: "https://facebook.com/joshua.armojallas",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Joshua Armojallas",
      link: "https://linkedin.com/in/clbjsh",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "samjoshuadud",
      link: "https://github.com/samjoshuadud",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full py-8 sm:py-10">
      <div className="w-full max-w-2xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text mb-5 sm:mb-6 text-center sm:text-left">
            Get in Touch
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-3 sm:space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="p-3 sm:p-4 rounded-lg border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group-hover:bg-[#0D2818]/40 group-hover:shadow-sm group-hover:shadow-[#2EA566]/10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#0D2818]/50 p-2 rounded-lg">
                    <contact.icon className="text-[#2EA566] w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-[#C3E5D2] font-medium text-sm sm:text-base">
                      {contact.label}
                    </h3>
                    <p className="text-[#C3E5D2]/80 group-hover:text-[#C3E5D2] transition-colors duration-300 text-xs sm:text-sm truncate">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-5 sm:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-[#C3E5D2]/60 text-center text-xs sm:text-sm">
            Feel free to reach out through any of these channels
          </p>
        </motion.div>
      </div>
    </div>
  );
}
