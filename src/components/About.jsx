import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🙋‍♂️ About Me
      </motion.h2>

      {/* About Description */}
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
          Currently part of the <strong>Infosys Springboard 6.0</strong> program as a Software Development Intern. I work on full-stack fundamentals, modern development tools, and industry workflows, with a keen interest in scalable web solutions and ML integration.
        </p>
      </motion.div>

      {/* Internship Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-6 dark:text-white">
          🎓 Internship Experience
        </h3>

        {/* Infosys Springboard 6.0 – Current (on Top) */}
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow mb-6">
          <h4 className="text-xl font-semibold dark:text-white">
            Infosys Springboard 6.0
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Software Development Intern • Current
          </p>
          <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Learning and practicing real-world software engineering workflows.</li>
            <li>Working on full-stack fundamentals and modern development tools.</li>
            <li>Exploring project-based learning and industry-level coding standards.</li>
          </ul>
        </div>

        {/* Gamotech It and Web Solutions Internship */}
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow mb-6">
          <h4 className="text-xl font-semibold dark:text-white">
            Gamotech It and Web Solutions
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Associate Software Developer Intern • Current • Pune
          </p>
          <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Developed reusable UI components and optimized REST APIs.</li>
            <li>Enhanced database operations ensuring smooth frontend-backend communication.</li>
            <li>Improved application scalability, maintainability, and performance.</li>
            <li>Used Git, GitHub, Postman, and deployed application on Render.</li>
            <li><strong>Tech:</strong> React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Git</li>
          </ul>
        </div>

        {/* Sumago Internship */}
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow">
          <h4 className="text-xl font-semibold dark:text-white">
            Sumago Infotech Pvt. Ltd.
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Full Stack Development Intern • Jan 2024 – Feb 2024 • Nashik
          </p>
          <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Built responsive UI components and integrated REST APIs.</li>
            <li>Worked on database operations and enhanced application performance.</li>
            <li>Used Git/GitHub for collaboration and version control.</li>
            <li><strong>Tech:</strong> React.js, Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap, Git</li>
          </ul>
        </div>
      </motion.div>

      {/* Skill Badges */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">
          💻 Java, Python, React, JavaScript
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">
          🗄️ MongoDB, SQL • Git/GitHub
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">
          ☁️ AWS, Docker (Basics)
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">
          🤝 Teamwork, Communication
        </div>
      </motion.div>
    </section>
  );
}
