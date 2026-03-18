import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://github.com/RyanS2025" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl hover:text-white transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/ryan-sinha-306986387/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl hover:text-white transition-colors" />
        </a>
      </div>
      © {new Date().getFullYear()} Ryan Sinha
    </footer>
  );
}