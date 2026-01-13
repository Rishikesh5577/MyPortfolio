import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
// Projects for Rishikesh Wakchaure
const projects = [
  {
    title: "Dynamic World - Education Platform",
    description:
      "During Gamotech It and Web Solutions Internship Contributed in Developed and enhanced the Dynamic World website using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented interactive components for services, career guidance, and admission support, ensuring a responsive UI/UX. Managed website deployment and hosting on AWS, ensuring smooth performance and uptime. Used Git for version control to collaborate with the team and maintain codebase integrity. Integrated dynamic content updates, including live notifications for JEE Main registration and admission updates.",
    github: "",
    live: "https://www.dynamicworld.in/",
    image: null,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS", "Git", "Responsive Design", "Dynamic Content"],
    status: "Live",
  },
  {
    title: "SareeSansar - Online Saree Shopping Platform",
    description:
      "Developed a full-stack eCommerce platform for saree shopping with product categorization, search, filtering, cart, checkout, payment gateway, and an Admin Panel for managing products, orders, and users. Built secure backend APIs (Node.js, Express.js, MongoDB), tested via Postman, and implemented a fully responsive UI using React.js and Tailwind CSS.",
    github: "",
    live: "https://sareesansaaar-1.onrender.com/",
    image: null,
    skills: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Postman", "Payment Gateway", "Admin Panel"],
    status: "Live",
  },
  {
    title: "One Cut's Unisex Salon (Freelance Project)",
    description:
      "A professional salon website built with React and Vite, featuring service listings, appointment booking, and gallery. Responsive design for all devices.",
    github: "",
    live: "https://onecuts.vercel.app/",
    image: null,
    skills: ["React", "Vite", "Tailwind CSS", "Responsive Design", "JavaScript"],
    status: "Live",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Showcases my projects, skills, and experience in an interactive way.",
    github: "",
    live: "https://rishiwakchaure.vercel.app/",
    image: null,
    skills: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design", "JavaScript"],
    status: "Live",
  },
  {
    title: "Smart Agriculture - IoT and ML-Based Farming Solution",
    description:
      "IoT sensors capture real-time soil data; ML predicts crops and recommends fertilizers (≈85% accuracy) to improve yield decisions.",
    github: "https://github.com/Rishikesh5577/Smart-Agriculture.git",
    live: "",
    image: null,
    skills: ["Python", "IoT", "Machine Learning", "ThingSpeak", "Naive Bayes"],
    status: "Completed",
  },
  {
    title: "Expenses Tracker - Personal Finance Web App",
    description:
      "Full-stack app to track income/expenses with dashboards and authentication; secure backend APIs for real-time updates.",
    github: "https://github.com/Rishikesh5577/Expenses_Tracker-Project.git",
    live: "",
    image: null,
    skills: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
    status: "Completed",
  },
  {
    title: "Ocean Plastic Waste Detection",
    description:
      "A full-stack application with React/Vite frontend and YOLOv8 model to detect and classify ocean waste with 92% precision. Features image upload and real-time detection results.",
    github: "https://github.com/Rishikesh5577/Ocean-Plastic-Waste-Detection.git",
    live: "",
    image: null,
    skills: ["React", "Vite", "YOLOv8", "Python", "OpenCV", "Deep Learning"],
    status: "Completed",
  },
  {
    title: "Simple Notes App for TWS Community",
    description:
      "Developed a user-friendly notes application with features for creating, editing, and managing notes, deployed with Docker and Nginx for high performance.",
    github: "https://github.com/Rishikesh5577/django-notes-app.git",
    live: "",
    image: null,
    skills: ["React", "AWS", "Docker", "Nginx"],
    status: "Completed",
  },
  {
    title: "Lenslogic - E-commerce Eyeglasses Platform",
    description:
      "Developed a full-stack e-commerce platform for eyeglasses using the MERN stack. Features include product catalog, shopping cart, user authentication, order management, and payment integration.",
    github: "https://github.com/Rishikesh5577/Lenslogic.git",
    live: "",
    image: null,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "E-commerce", "Payment Integration", "User Authentication"],
    status: "Completed",
  },
  {
    title: "InshurAI - Insurance AI Platform",
    description:
      "Developed a full-stack insurance platform leveraging AI tools for automated claims processing and risk assessment. Integrated intelligent algorithms to enhance insurance workflow and decision-making.",
    github: "https://github.com/Rishikesh5577/InshurAI.git",
    live: "",
    image: null,
    skills: ["Java", "React", "Spring Boot", "AI Tools", "Machine Learning", "REST APIs", "Full-Stack Development"],
    status: "Completed",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  
  // Debug: Log each project with index
  console.log('Projects list:');
  projects.forEach((project, index) => {
    console.log(`Project ${index + 1}:`, project.title);
  });

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">My Projects</h2>
      
      {/* Debug: Show projects count */}
      <div className="text-center mb-6">
        <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">
          Total Projects: {projects.length}
        </p>
      </div>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          console.log(`Rendering project ${index + 1}:`, project.title);
          return (
            <div 
              key={index} 
              className="border-2 border-green-500 p-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundColor: index === 0 ? '#f0fdf4' : 'transparent',
                borderColor: index === 0 ? '#10b981' : '#60a5fa',
              }}
            >
              <div className="text-center font-bold mb-2 text-sm text-green-700">
                Project #{index + 1}
              </div>
              <ProjectCard 
                {...project} 
                onClick={() => setSelected(project)} 
              />
            </div>
          );
        })}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
