import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
// Projects for Rishikesh Wakchaure
const projects = [
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
      "YOLOv8 model to detect and classify ocean waste with 92% precision; trained on 2000+ annotated images.",
    github: "https://github.com/Rishikesh5577/Ocean-Plastic-Waste-Detection.git",
    live: "",
    image: null,
    skills: ["Python", "YOLOv8", "OpenCV", "Roboflow", "Deep Learning"],
    status: "Completed",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Projects</h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            onClick={() => setSelected(project)} 
          />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
