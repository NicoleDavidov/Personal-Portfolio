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
    <nav
      className="
        bg-white shadow-md fixed top-4 left-1/2 transform -translate-x-1/2
        w-full max-w-[550px] rounded-xl px-3 py-2 flex justify-center items-center z-50
        mx-auto
      "
    >
      <ul className="flex justify-between w-full">
        {links.map((link) => (
          <li key={link.name} className="flex-1 text-center">
            <Link
              to={link.path}
              className={`flex flex-col items-center justify-center gap-1 px-2 py-1 rounded-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {/* אייקון תמיד מוצג */}
              <span className="text-xl">{link.icon}</span>
              {/* טקסט מוסתר במסכים קטנים */}
              <span className="hidden sm:block text-xs">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
