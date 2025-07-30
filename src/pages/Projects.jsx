import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "📊 Profit Analyzer",
      description:
        "Advanced Java-based client-server application for analyzing financial sequences. Includes Kadane and Prefix Sum algorithms, JavaFX UI, and multi-threaded TCP server with JSON communication.",
      tech: ["Java", "JavaFX", "TCP Sockets", "Design Patterns", "JUnit"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/NicoleDavidov/Profit-Analyzer-Advanced-Java-Project" },
      ],
    },
    {
      name: "💵 Cost Manager (Full-Stack)",
      description:
        "Personal finance management system with expense tracking, monthly reports, and charts. Built with React frontend and Node.js + MongoDB backend (developed separately for modularity).",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      links: [
        { label: "Client Repo", url: "https://github.com/NicoleDavidov/CostManagerFrontEnd" },
        { label: "Server", url: "https://costmanagerserversideproject.onrender.com/" },
        { label: "Server Repo", url: "https://github.com/NicoleDavidov/CostManagerServerSide" },
        { label: "Website", url: "https://costmanager-y239.onrender.com/" },
      ],
    },
    {
      name: "🧠 Study Buddy – AWS Hackathon",
      description:
        "AI-powered chatbot concept developed for an AWS hackathon. Provides academic support with study tips and lecture summaries using AWS tools like S3, Bedrock, and Lex.",
      tech: ["React", "Tailwind", "AWS"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/NicoleDavidov/study-buddy-hackathon" },
      ],
    },
    {
      name: "🫁 DL Project - Lung Cancer Classification",
      description:
        "Deep Learning project classifying lung cancer images as Benign, Malignant, or Normal. Implemented CNN and transfer learning achieving 99%-100% accuracy, with preprocessing and hyperparameter tuning.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/NicoleDavidov/DL_finalProject-Lung_Cancer_Project_DL" },
      ],
    },
    {
      name: "🎯 ML Project - Breast Cancer Classification",
      description:
        "Machine Learning project using algorithms like SVM and Random Forest to classify breast cancer tumors. Includes feature engineering, model tuning, and evaluation metrics (F1-score, accuracy).",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/NicoleDavidov/Machine-Learning-Breast-Cancer" },
      ],
    },
    {
      name: "🌐 Personal Portfolio",
      description:
        "Responsive personal portfolio website built with React and Vite to showcase projects, resume, and skills. Includes modern UI with TailwindCSS, animations with Framer Motion, and routing with React Router.",
      tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/NicoleDavidov/Personal-Portfolio" },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 min-h-screen px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-800 mb-8 text-center"
      >
        All My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="text-gray-700 hover:text-gray-900 font-semibold underline"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
