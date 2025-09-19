import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🙋‍♂️ About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-lg leading-relaxed">
            I'm <strong>Rishikesh Wakchaure</strong>, an IT graduate with hands-on project experience and a strong problem-solving mindset. I enjoy building practical solutions, collaborating in teams, and continuously learning new technologies.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
            Currently working as an <strong>Associate Software Developer Intern</strong> at Kodeo Software Technology Pvt. Ltd. I work across the stack using JavaScript/React (web and React Native) and Node.js, with experience in databases and cloud tools. My interests include full‑stack development and applying ML where it adds real value.
        </p>

      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">💻 Java, Python, React, JavaScript</div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">🗄️ MongoDB, SQL • Git/GitHub</div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">☁️ AWS, Docker (Basics)</div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">🤝 Teamwork, Communication</div>


      </motion.div>
    </section>
  );
}
