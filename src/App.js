import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Award, BookOpen, Code, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const skills = {
    languages: ['C', 'Java', 'Python'],
    web: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    backend: ['MySQL', 'JDBC', 'REST API', 'Node.js'],
    tools: ['VS Code', 'IntelliJ IDEA', 'Git', 'GitHub'],
    concepts: ['OOP', 'OS', 'DBMS', 'DSA', 'SDLC', 'Computer Networks']
  };

  const projects = [
    {
      title: 'WeatherTrack - Real-Time Weather Website',
      tech: 'HTML, CSS, JavaScript, WeatherAPI',
      description: 'A responsive website that fetches real-time weather data and displays current weather along with a 3-day forecast. Features include location-based search, Celsius temperature, wind speed, and humidity.',
      demo: 'https://saitejavurukonda.github.io/WeatherTrack-RealTime/',
      github: 'https://github.com/Saitejavurukonda/WeatherTrack-RealTime'
    },
    {
      title: 'Bank Management System',
      tech: 'Java, MySQL, JDBC',
      description: 'Console-based Java & MySQL Bank Management System with Admin and Customer roles, enabling account management, transactions, and service requests.',
      github: 'https://github.com/Saitejavurukonda/BankManagementSystem'
    }
  ];

  const certifications = [
    { name: 'Introduction to Internet of Things', provider: 'NPTEL (IIT Kharagpur)', date: 'Jan–Apr 2024' },
    { name: 'Complete SQL Bootcamp From Zero to Hero in SQL', provider: 'Udemy', date: 'July 2025' },
    { name: 'Java (Basic)', provider: 'HackerRank', date: 'Aug 2025' },
    { name: 'Microsoft Certified Azure AI Fundamentals', provider: 'Microsoft', date: 'Aug 2025' }
  ];

  const achievements = [
    'Elite+ Silver – NPTEL IoT Certification, IIT Kharagpur (Jan–Apr 2024)',
    '5-star badges in Java & SQL – HackerRank (July 2025)',
    'Top 1% nationally – Naukri Campus Young Turks 2025, 97.90 percentile (Sep 2025)',
    'Campus Ambassador – Devtown (Oct 2024)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Vurukonda Saiteja</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#education" className="text-gray-300 hover:text-purple-400 transition">Education</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</a>
              <a href="#certifications" className="text-gray-300 hover:text-purple-400 transition">Certifications</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
     <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50 flex items-center justify-center bg-purple-600 text-white text-4xl font-bold">
  VS
</div>






          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Vurukonda Saiteja
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-4">
            Software Developer | Tech Enthusiast
          </p>
          <p className="text-lg text-purple-200/80 mb-8 font-medium">
            Turning Ideas into Innovation through Code
          </p>
          <p className="text-base text-gray-300 max-w-3xl mx-auto mb-8">
            Computer Science student passionate about software development and building solutions that make a difference. Experienced in Java, Python, Web Technologies, and IoT with a proven track record of academic excellence and practical project delivery.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/Saitejavurukonda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/saiteja-vurukonda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:saitejavurukonda5@gmail.com" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition">
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated Computer Science Engineering (IoT) student at Malla Reddy Engineering College, Hyderabad, with a CGPA of 7.77. My academic journey reflects my commitment to excellence and passion for technology, research, and software development.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                With hands-on experience in web development and database management, I've successfully developed practical applications that solve real-world problems. My projects demonstrate my ability to work with modern tech stacks and deliver functional solutions.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Technical Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                I've earned multiple certifications in Java, SQL, IoT, and Azure AI, showcasing my commitment to continuous learning. With 5-star badges in Java and SQL on HackerRank and a top 1% national ranking in Naukri Campus Young Turks 2025, I demonstrate strong programming fundamentals and analytical thinking.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                My Elite+ Silver certification from IIT Kharagpur in IoT and experience as a Campus Ambassador for Devtown highlight my leadership and dedication to the tech community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <BookOpen className="text-purple-400" />
            Academic Journey
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">B.Tech in Computer Science Engineering (IoT)</h3>
                  <p className="text-purple-400 text-lg">Malla Reddy Engineering College</p>
                  <p className="text-gray-400">Maisammaguda, Dhulapally, Medchal, Telangana</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-2xl font-bold text-purple-400">7.77/10</p>
                  <p className="text-gray-400">2022 – 2026</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">Intermediate Education (MPC)</h3>
                  <p className="text-purple-400">Krishnaveni Co-operative Junior College</p>
                  <p className="text-gray-400">Khammam, Telangana</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-xl font-bold text-purple-400">949 Marks</p>
                  <p className="text-gray-400">2020 – 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">SSC (State Board)</h3>
                  <p className="text-purple-400">Lavanya School</p>
                  <p className="text-gray-400">Ballepally, Khammam, Telangana</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-xl font-bold text-purple-400">10/10 GPA</p>
                  <p className="text-gray-400">2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Code className="text-purple-400" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Database & Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, i) => (
                  <span key={i} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 lg:col-span-2">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Core Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill, i) => (
                  <span key={i} className="bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-purple-400" />
            Projects Showcase
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-purple-400 text-sm mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex gap-4 flex-wrap">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition text-sm">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition text-sm">
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Award className="text-purple-400" />
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-purple-400 text-sm">{cert.provider}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">Key Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

     {/* Resume Download Section */}
<section className="py-20 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-white mb-8">Download My Resume</h2>
    <p className="text-xl text-gray-300 mb-8">
      Get a comprehensive overview of my education, skills, projects, certifications, and achievements.
    </p>
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-lg">
      <Download className="text-white mx-auto mb-4" size={48} />
      <h3 className="text-2xl font-bold text-white mb-4">Professional Resume</h3>
      <p className="text-white/90 mb-6">
        Available in PDF format for easy viewing and ATS compatibility
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="https://drive.google.com/uc?export=download&id=1KXqpEiqQ_yPwjou5TDE7uU2-1NYGieCO"
          download="Saiteja_Vurukonda_Resume.pdf"
          className="bg-white hover:bg-gray-100 text-purple-600 font-semibold px-8 py-4 rounded-lg transition flex items-center gap-3"
        >
          <Download size={24} />
          Download Resume (PDF)
        </a>
        <a
          href="https://drive.google.com/file/d/1KXqpEiqQ_yPwjou5TDE7uU2-1NYGieCO/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition flex items-center gap-3"
        >
          <ExternalLink size={24} />
          View Resume Online
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in collaborating or have an opportunity? Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:saitejavurukonda5@gmail.com" className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition">
              <Mail className="text-purple-400 mx-auto mb-3" size={32} />
              <p className="text-white font-semibold mb-2">Email</p>
              <p className="text-gray-400 text-sm break-all">saitejavurukonda5@gmail.com</p>
            </a>
            <a href="tel:+919959207670" className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition">
              <Phone className="text-purple-400 mx-auto mb-3" size={32} />
              <p className="text-white font-semibold mb-2">Phone</p>
              <p className="text-gray-400 text-sm">+91 9959207670</p>
            </a>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <MapPin className="text-purple-400 mx-auto mb-3" size={32} />
              <p className="text-white font-semibold mb-2">Location</p>
              <p className="text-gray-400 text-sm">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Vurukonda Saiteja. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4">
            <a href="https://github.com/Saitejavurukonda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/saiteja-vurukonda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:saitejavurukonda5@gmail.com" className="text-gray-400 hover:text-purple-400 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}