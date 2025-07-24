import { Link, useLocation } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUser, FaFileAlt } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
    { name: "About", path: "/about", icon: <FaUser /> },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 
      w-[550px] sm:w-[450px] xs:w-[300px] rounded-xl px-4 py-2 flex justify-center items-center z-50">
      <ul className="flex justify-between w-full text-sm sm:text-base">
        {links.map((link) => (
          <li key={link.name} className="flex-1 text-center">
            <Link
              to={link.path}
              className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg sm:text-xl">{link.icon}</span>
              <span className="text-xs sm:text-sm">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
