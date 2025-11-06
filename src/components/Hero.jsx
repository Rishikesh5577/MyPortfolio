import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Profile from "../assets/photo.png";
// Resume will use an external Drive link for Rishikesh

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center py-20 px-6">
      
      {/* Profile Image */}
      <motion.div
        className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={Profile}
          alt="Rishikesh Wakchaure"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Name */}
        <motion.h1
          className="mt-6 text-3xl md:text-4xl font-bold text-center dark:text-white text-gray-900 dark:text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textShadow: "0px 0px 15px rgba(59, 130, 246, 0.7)", // subtle blue glow
          }}
        >
          Rishikesh Wakchaure
        </motion.h1>


      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          2000,
          "Full Stack Developer",
          2000,
          "Java | Python | SQL | React ",
          2000,
          "AWS | Docker | Kubernetes ",
          2000,
        ]}
        wrapper="span"
        speed={40}
        className="mt-2 text-lg text-gray-700 dark:text-gray-300"
        repeat={Infinity}
      />

      {/* Social Icons */}
      <div className="flex gap-6 mt-6 text-2xl">
        <a
          href="https://github.com/Rishikesh5577"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/rishikesh-wakchaure-06055524b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        
      </div>
          <a
            href = "https://drive.google.com/file/d/1AT16JA04geftk5bfYXLHT-xRUrO6CvoV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-2 rounded-xl bg-sky-500/30 text-white backdrop-blur-md border border-sky-300 hover:bg-sky-500/50 hover:scale-105 hover:shadow-[0_0_15px_#0ea5e9] transition-all duration-300 ease-in-out"
          >
            📄 Download Resume
          </a>

    </section>
  );
}
