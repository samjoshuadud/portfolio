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
    <div className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
      <div className="w-full max-w-2xl px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2EA566] to-[#C3E5D2] text-transparent bg-clip-text mb-8">
            Get in Touch
          </h2>
        </motion.div>

        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6 rounded-xl border border-[#2EA566]/20 hover:border-[#2EA566]/40 transition-all duration-300 group-hover:bg-[#0D2818]/40">
                <div className="flex items-center gap-4">
                  <contact.icon className="text-[#2EA566] w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-[#C3E5D2] font-medium text-lg">
                      {contact.label}
                    </h3>
                    <p className="text-[#C3E5D2]/80 group-hover:text-[#C3E5D2] transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-[#C3E5D2]/60 mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Feel free to reach out through any of these channels
        </motion.p>
      </div>
    </div>
  );
}
