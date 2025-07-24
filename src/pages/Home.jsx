import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 min-h-screen flex flex-col items-center px-6 py-10">
      
      {/* כותרת ראשית */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight text-center"
      >
        Hi, I’m <span className="text-blue-600">Nicole</span> 👋
      </motion.h1>

      {/* פסקת פתיחה */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-700 max-w-3xl text-center leading-relaxed mb-8"
      >
        Final-year Computer Science student passionate about creating modern, responsive, and scalable web applications.  
        Skilled in both front-end and back-end development, I enjoy solving problems and building clean, efficient solutions.  
        <span className="font-semibold"> Seeking a full-stack role to grow and contribute to impactful projects.</span>
      </motion.p>

      {/* אייקונים ליצירת קשר */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-8 text-4xl mb-6"
      >
        <a
          href="https://linkedin.com/in/nicoledavidov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NicoleDavidov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:nicoledavidov.dev@gmail.com"
          className="text-red-500 hover:text-red-700 transition"
        >
          <MdEmail />
        </a>
        <a
          href="https://wa.me/972533326352"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 transition"
        >
          <FaWhatsapp />
        </a>
      </motion.div>

      {/* כפתור להורדת קובץ CV */}
      <motion.a
        href="/Nicole-Davidov-CV.pdf"
        download
        className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-500 transition mb-12"
      >
        Download CV
      </motion.a>

      {/* סקשן פרויקטים */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">📊 Profit Analyzer</h3>
            <p className="text-gray-600 mb-4">
              Java-based client-server system for analyzing financial sequences using Kadane & Prefix Sum algorithms.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech: Java, JavaFX, TCP, Gson</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/NicoleDavidov/Profit-Analyzer-Advanced-Java-Project"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-2 text-yellow-600">💵 Cost Manager</h3>
            <p className="text-gray-600 mb-4">
              Full-stack app for managing expenses, built with React and Node.js, featuring reports & MongoDB backend.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech: React, Node.js, MongoDB</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/NicoleDavidov/CostManagerClient"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Client Repo
              </a>
              <a
                href="https://github.com/NicoleDavidov/CostManagerServer"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Server Repo
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-2 text-green-600">🧠 Study Buddy</h3>
            <p className="text-gray-600 mb-4">
              AWS Hackathon chatbot prototype providing academic assistance with smart suggestions & summaries.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech: React, Tailwind, AWS</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/NicoleDavidov/study-buddy-hackathon"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            View More Projects →
          </Link>
        </div>
      </motion.section>

      {/* סקשן Career Path */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="max-w-4xl w-full mt-16"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Career Path</h2>
        <div className="space-y-6">
          
          {/* ניסיון מקצועי */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Technical Support Representative – Rimon Internet (2025 – Present)
            </h3>
            <p className="mt-2 text-gray-700">
              Provide tier-1 technical support for network and internet issues.  
              Troubleshoot router and software setups via phone and remote tools while ensuring top-tier customer service.
            </p>
          </div>

          {/* השכלה */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900">
              B.Sc. Computer Science (2023 – 2025)
            </h3>
            <p className="mt-2 text-gray-700">
              Final-year student | HIT – Holon Institute of Technology | GPA: 90
            </p>
          </div>

          {/* ניסיון צבאי */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Observer on the Northern Border (2019 – 2021)
            </h3>
            <p className="mt-2 text-gray-700">
              Operated advanced surveillance systems (radar, video, command software).  
              Managed real-time threat detection and trained new observers during high-pressure scenarios.
            </p>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
