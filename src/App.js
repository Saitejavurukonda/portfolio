import React from "react";
import {
  Github,
  Linkedin,
  Download,
  ExternalLink
} from "lucide-react";

export default function Portfolio() {

  const projects = [
    {
      title: "WeatherTrack - Real-Time Weather Website",
      tech: "HTML, CSS, JavaScript, WeatherAPI",
      description:
        "A responsive website that fetches real-time weather data and displays current weather along with a 3-day forecast.",
      demo: "https://saitejavurukonda.github.io/WeatherTrack-RealTime/",
      github: "https://github.com/Saitejavurukonda/WeatherTrack-RealTime"
    },
    {
      title: "Bank Management System",
      tech: "Java, MySQL, JDBC",
      description:
        "Console-based Java & MySQL Bank Management System with Admin and Customer roles.",
      github: "https://github.com/Saitejavurukonda/BankManagementSystem"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* HERO */}

      <section className="pt-32 pb-20 px-4 text-center">

        <h1 className="text-6xl font-bold text-white mb-4">
          Vurukonda Saiteja
        </h1>

        <p className="text-2xl text-purple-300 mb-6">
          Software Developer | Tech Enthusiast
        </p>

        <div className="flex gap-4 justify-center flex-wrap">

          <a
            href="https://github.com/Saitejavurukonda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/saiteja-vurukonda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="py-20 px-4">

        <h2 className="text-4xl text-white text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {projects.map((project, i) => (

            <div
              key={i}
              className="bg-slate-800 p-8 rounded-lg"
            >

              <h3 className="text-2xl text-white mb-2">
                {project.title}
              </h3>

              <p className="text-purple-400 mb-3">
                {project.tech}
              </p>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex gap-4">

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded"
                >
                  <Github size={16} />
                  Code
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* RESUME */}

      <section className="py-20 px-4">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl text-white mb-8">
            Download My Resume
          </h2>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-lg">

            <Download className="text-white mx-auto mb-4" size={48} />

            <h3 className="text-2xl text-white mb-6">
              Professional Resume
            </h3>

            <div className="flex gap-4 justify-center flex-wrap">

              <a
                href="https://drive.google.com/uc?export=download&id=1TzBtdrf1uRFXf5CarA61T_n7IEnhpFq2"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg flex items-center gap-3"
              >
                <Download size={24} />
                Download Resume
              </a>

              <a
                href="https://drive.google.com/file/d/1TzBtdrf1uRFXf5CarA61T_n7IEnhpFq2/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 text-white px-8 py-4 rounded-lg flex items-center gap-3"
              >
                <ExternalLink size={24} />
                View Resume
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-8 text-center text-gray-400 border-t border-purple-500">

        © 2026 Vurukonda Saiteja

      </footer>

    </div>
  );
}
