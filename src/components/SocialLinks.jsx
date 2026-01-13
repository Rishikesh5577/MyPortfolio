import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <a href="https://github.com/Rishikesh5577" target="_blank" rel="noreferrer">
        <FaGithub size={28} />
      </a>
      <a href="https://linkedin.com/in/rishikesh-wakchaure-06055524b" target="_blank" rel="noreferrer">
        <FaLinkedin size={28} />
      </a>
      <a href="https://drive.google.com/file/d/1nvwUxjR-vELyPWrxXe2T0HTFcv9fBm0t/view?usp=sharing" target="_blank" rel="noreferrer">
        <FaCode size={28} />
      </a>
    </div>
  );
}
