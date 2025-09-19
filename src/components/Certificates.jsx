// src/components/Certificates.jsx
import { motion } from "framer-motion";

// Dynamically import all certificates (images and PDFs) from assets
// This way, you can drop new files into src/assets/certificates/ and they will automatically show up
const fileModules = import.meta.glob(
  "../assets/certificates/*.{png,jpg,jpeg,webp,svg,pdf}",
  { eager: true, as: "url" }
);

// Build a curated, ordered list of certificates based on filename patterns
const desiredCertificates = [
  { pattern: "AWSGFG_Certificate.pdf", title: "AWS Cloud Practitioner" },
  { pattern: "Java Foundation.pdf", title: "Java Foundation Certificate" },
  { pattern: "Infosys_sql.pdf", title: "Infosys SQL Certificate" },
  { pattern: "eCertificateOracleCertifiedFoundationsAssociate.pdf", title: "Oracle Cloud Infrastructure" },
  { pattern: "AmrutExpo.pdf", title: "Amrut Expo Winner Certificate" },
  { pattern: "Deloitte_Data_Analytics.pdf", title: "Delloite Data Analytics Intership" },
  { pattern: "IBM_Certificate.pdf", title: "IBM Certificate" },
  { pattern: "Rishikesh Wakchaure_Completion.pdf", title: "Edunet AI Certificate" },
  { pattern: "Deloitte Cyber.pdf", title: "Delloite Cyber Intership" },
  { pattern: "C++ Infosys.pdf", title: "C++ Infosys certificate" },
  { pattern: "Tata_Data_Analytics.pdf", title: "Tata Data Analytics Intership" },
  { pattern: "HackerrankSQL.png", title: "HackerRank SQL Certificate" },
];

const fileEntries = Object.entries(fileModules);
const certificates = desiredCertificates
  .map(({ pattern, title }) => {
    const match = fileEntries.find(([path]) => path.endsWith(pattern));
    if (!match) return null;
    const [path, url] = match;
    const ext = (pattern.split(".").pop() || "").toLowerCase();
    return { title, url, ext };
  })
  .filter(Boolean);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function Certificates() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            {cert.ext === "pdf" ? (
              <div className="w-full h-56 bg-gray-100 dark:bg-gray-700">
                <iframe
                  src={cert.url}
                  title={cert.title}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <img
                src={cert.url}
                alt={cert.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold dark:text-white">{cert.title}</h3>
              {cert.ext === "pdf" && (
                <div className="mt-3 flex gap-3">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    View
                  </a>
                  <a
                    href={cert.url}
                    download
                    className="px-3 py-1 text-sm rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
