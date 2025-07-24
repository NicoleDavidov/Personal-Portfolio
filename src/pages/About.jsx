export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12 px-6 flex flex-col items-center">
      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        About <span className="text-blue-600">Me</span>
      </h1>

      {/* Intro text */}
      <p className="max-w-4xl text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-6">
        Hi, I'm <span className="font-semibold">Nicole</span>, a final-year Computer Science student at HIT with a strong passion for software development and problem-solving. 
        I specialize in <span className="text-blue-600 font-semibold">Full-Stack Development</span>, working with React, Node.js, Express, and MongoDB, 
        and have experience in Java projects involving client-server architecture, multithreading, and algorithm design.
      </p>

      {/* Additional description */}
      <p className="max-w-4xl text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-6">
        I enjoy working on challenging projects, learning new tools, and building innovative, user-friendly applications. 
        My strong foundation in OOP, data structures, and algorithms, along with hands-on experience in both front-end and back-end technologies, 
        allows me to create robust and scalable solutions. <br /><br />
        In my free time, I love exploring new technologies, reading, Netflix, and working out. 
        I'm eager to bring my technical expertise and enthusiasm for learning to impactful projects in dynamic environments.
      </p>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mt-10">
        {/* Skills */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Skills</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Frontend:</strong> React, HTML, CSS, Tailwind, Material-UI</li>
            <li><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
            <li><strong>Programming:</strong> Java, Python, JavaScript</li>
            <li><strong>Concepts:</strong> OOP, MVC, Design Patterns</li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Education</h2>
          <p className="text-gray-700">
            <strong>B.Sc. Computer Science</strong> (2023 – 2025) <br />
            HIT – Holon Institute of Technology | GPA: <strong>90</strong>
          </p>
        </div>

        {/* Hobbies */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Hobbies</h2>
          <p className="text-gray-700">Reading, Netflix, Fitness, Exploring New Tech</p>
        </div>

        {/* Contact */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Contact</h2>
          <p className="text-gray-700">
            Email: <a href="mailto:nicoledavidov.dev@gmail.com" className="text-blue-500 hover:underline">nicoledavidov.dev@gmail.com</a>
          </p>
          <p className="text-gray-700">Phone: 053-332-6352</p>
        </div>
      </div>
    </div>
  );
}
