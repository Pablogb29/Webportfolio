import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { ScrollToSection } from "./components/scroll-to-section";
import { VerticalNav } from "./components/vertical-nav";
import { Card } from "./components/card";
import { Twitter, Mail, Github, Linkedin, Code } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  // Define all section IDs for the vertical navigation
  const sectionIds = [
    "home-section",
    "about-me-section", 
    "projects-section", 
    "experience-section", 
    "education-section", 
    "contact-section"
  ];

  return (
    <>
      <VerticalNav sections={sectionIds} />
      <div id="home-section" className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black snap-section">
        {/* Removing the navigation buttons */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Pablo Gutiérrez
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Cybersecurity and AI Engineer
          </h2>
        </div>
        
        <ScrollToSection targetId="about-me-section" className="mt-8" />
      </div>

      <section id="about-me-section" className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black snap-section">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={80}
        />
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center animate-fade-in">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {/* Bio Column */}
            <div className="md:col-span-2">
              <div className="prose prose-invert max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  I am a Telecommunications Engineer who specializes in <span className="text-blue-400 font-medium"> Cybersecurity and Artificial Intelligence</span> , driven by a lifelong passion for technology and digital protection. While I have developed some AI models, my main focus lies in exploring and leveraging the full potential of existing AI systems to streamline workflows and optimize productivity.                </p>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  On the cybersecurity front, I have recently completed a master's degree in the field and am actively preparing for the <span className="text-blue-400 font-medium">eJPTv2</span> and, later this year, the <span className="text-blue-400 font-medium">OSCP</span> certification. Although I am still seeking my first professional role in cybersecurity, I have been fully committed to the discipline for years—building skills through hands-on labs, weekly CTFs, and real-world projects that feed my curiosity and problem-solving mindset.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                What sets me apart is my <span className="text-blue-400 font-medium">constant drive to improve</span>—not only myself, but those around me. I thrive in team environments, love mentoring and being mentored, and naturally take on leadership roles that encourage collaboration, innovation, and growth.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                Outside of work, you will find me <span className="text-blue-400 font-medium">running trails, skating obstacles, snowboarding down mountains, playing padel or pushing my limits in every sport that I train.</span> I am also a lifelong gamer and avid reader with a strong interest in <span className="text-blue-400 font-medium">economics, psychology, politics, and emerging technologies</span>. I believe true excellence comes from a balance of curiosity, discipline, and play—and I bring that mindset to everything I do.
                </p>
              </div>
              {/* Language Card Under Bio */}
            <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group mt-6">
              <h3 className="text-xl font-medium text-zinc-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                Languages
              </h3>
              <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm">
                <li><span className="text-zinc-100 font-medium">Spanish:</span> Native</li>
                <li><span className="text-zinc-100 font-medium">Catalan:</span> Native</li>
                <li><span className="text-zinc-100 font-medium">English:</span> Professional Working Proficiency (B2–C1)</li>
              </ul>
            </div>
            {/* Quote/Personal Statement */}
          <div className="mt-12 text-center animate-fade-in">
            <blockquote className="relative italic text-zinc-300 text-lg max-w-3xl mx-auto px-10">
              <span className="absolute top-0 left-0 text-4xl text-blue-500/40">"</span>
              I believe that the future of security lies at the intersection of human expertise and artificial intelligence, creating systems that can adapt and evolve alongside emerging threats.
              <span className="absolute bottom-0 right-0 text-4xl text-blue-500/40">"</span>
            </blockquote>
          </div>
            </div>
            
           
            {/* Skills Column */}
            <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              {/* Skill Bars */}
              <h3 className="text-xl font-semibold text-white mb-1">Technical Skills</h3>
              <p className="text-xs text-zinc-500 italic mb-4">
                Note: Percentages reflect how often I apply or document each skill in my daily tasks, not full mastery.
              </p>
              <div className="space-y-4">
                {[
                    { name: "Windows", level: 95, color: ["#2563EB", "#3B82F6"] }, // azul clásico
                    { name: "Linux", level: 90, color: ["#EA580C", "#F97316"] }, // naranja (Ubuntu / terminal vibe)
                    { name: "Windows Server", level: 70, color: ["#1D4ED8", "#60A5FA"] }, // azul más profundo
                    { name: "Penetration Testing", level: 80, color: ["#DC2626", "#F87171"] }, // rojo intenso (alerta / impacto)
                    { name: "Active Directory", level: 90, color: ["#7C3AED", "#A78BFA"] }, // púrpura (corporativo, Microsoft)
                    { name: "Bug Bounty", level: 65, color: ["#E11D48", "#FB7185"] }, // rosa (etiqueta hacker moderna)
                    { name: "Network Attacks", level: 90, color: ["#D97706", "#FBBF24"] }, // amarillo oscuro (actividad)
                    { name: "CTF & Offensive Tooling", level: 80, color: ["#4F46E5", "#818CF8"] }, // índigo (estrategia, juegos mentales)
                    { name: "AI & Machine Learning", level: 60, color: ["#9333EA", "#C084FC"] }, // violeta eléctrico (innovación)
                    { name: "n8n & Make", level: 65, color: ["#06B6D4", "#67E8F9"] }, // cian (automatización, conectores)
                    { name: "VSCode, Cursor & Trae", level: 90, color: ["#8B5CF6", "#C4B5FD"] }, // morado VSCode style
                    { name: "Python, Bash & PowerShell", level: 75, color: ["#16A34A", "#4ADE80"] }, // amarillo Python logo
                    { name: "Cyber Forensic Analyst", level: 40, color: ["#0F766E", "#2DD4BF"] }, // verde azulado (profundidad, análisis)
                  ].map((skill) => (
                  <div key={skill.name} className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-zinc-300 text-sm">{skill.name}</span>
                      <span className="text-zinc-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full"
                        style={{ 
                          width: `${skill.level}%`, 
                          transition: "width 1s ease-in-out",
                          background: `linear-gradient(to right, ${skill.color[0]}, ${skill.color[1]})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Certifications */}
              <h3 className="text-xl font-medium text-zinc-100 mt-6 mb-3 group-hover:text-blue-400 transition-colors duration-300">Certifications</h3>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
              </ul>
              {/* Certifications */}
              <h3 className="text-xl font-medium text-zinc-100 mt-6 mb-3 group-hover:text-blue-400 transition-colors duration-300">Next Certifications</h3>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li className="text-sm">eJPTv2</li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </section>

      <ScrollToSection targetId="projects-section" className="mt-8" />

      <section id="projects-section" className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black snap-section">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={80}
        />
        <div className="container mx-auto">
         
          {/* Thesis Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-zinc-100 mb-6 text-center">Academic Thesis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Bachelor Thesis */}
              <div className="group">
                <Card>
                  <div className="h-full p-6 relative flex flex-col group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <h3 className="text-xl font-medium text-zinc-100 group-hover:text-purple-400 transition-colors duration-300">Neural Network for Random Number Generation</h3>
                    <p className="mt-2 text-sm text-purple-400">Bachelor's Thesis</p>
                    <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Design of a neural network trained with analog transistor signals to generate seedless random numbers.</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium">Matlab</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium">Neural Networks</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium">Telecommunications</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Master Thesis */}
              <div className="group">
                <Card>
                  <div className="h-full p-6 relative flex flex-col group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <h3 className="text-xl font-medium text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">Active Directory Lab</h3>
                    <p className="mt-2 text-sm text-indigo-400">Master's Thesis</p>
                    <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Development and auditing of an Active Directory lab environment for security testing and vulnerability assessment.</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium">Windows Server</span>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium">PowerShell</span>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium">Cybersecurity</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Projects Section */}
          <div>
            <h3 className="text-2xl font-medium text-zinc-100 mb-6 text-center">Personal Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Project 1 */}
              <div className="group">
                <Card>
                  <div className="h-full p-6 relative flex flex-col group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <h3 className="text-xl font-medium text-zinc-100 group-hover:text-blue-400 transition-colors duration-300">TradeAlert Bot</h3>
                    <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Bot connected to MetaTrader that detects candlestick patterns and sends real-time alerts to Telegram.</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">Python</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">Telegram</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">Metatrader</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Project 2 - Statement Analyzer */}
              <div className="group">
                <Card>
                  <div className="h-full p-6 relative flex flex-col group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <h3 className="text-xl font-medium text-zinc-100 group-hover:text-green-400 transition-colors duration-300">Cybersecurity machines documentations</h3>
                    <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Repository with write-ups of the machines I solve during my cybersecurity training.</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">Bash</span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">PowerShell</span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">Python</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Project 3 - Web Portfolio */}
              <div className="group">
                <Card>
                  <div className="h-full p-6 relative flex flex-col group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <h3 className="text-xl font-medium text-zinc-100 group-hover:text-amber-400 transition-colors duration-300">Web Portfolio</h3>
                    <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Personal website designed as a modern alternative to a traditional CV.</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-medium">Next.js</span>
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-medium">Tailwind</span>
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-medium">CSS</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Project 4 - Threat Intelligence Dashboard */}
              <div className="group">
                <Card>
                  <div className="h-full p-6 relative flex flex-col group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-pink-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <h3 className="text-xl font-medium text-zinc-100 group-hover:text-pink-400 transition-colors duration-300">Python Automation Training</h3>
                    <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Repository of scripts to improve Python automation using Pytest and data visualization tools.</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-medium">Python</span>
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-medium">D3.js</span>
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-medium">Data Visualization</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Project 5 - NextJS Dashboard */}
              <div className="group">
                <Card>
                  <div className="h-full p-6 relative flex flex-col group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-pink-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <h3 className="text-xl font-medium text-zinc-100 group-hover:text-pink-400 transition-colors duration-300">NextJS Dashboard</h3>
                    <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Responsive dashboard built after completing the official Next.js course from Vercel.</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-medium">NextJS</span>
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-medium">Tailwind</span>
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-medium">CSS</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToSection targetId="experience-section" className="mt-8" />

      <section id="experience-section" className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black snap-section">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={80}
        />
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center animate-fade-in">Professional Experience</h2>
          <div className="relative max-w-3xl mx-auto space-y-12">
            {/* Timeline line - now with pulsing effect */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent -translate-x-1/2"></div>
            
            {/* Experience 1 - Current Position */}
            <div className="relative pl-10 animate-fade-in">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-500/20 animate-pulse"></span>
              <div className="p-5 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 shadow-lg shadow-zinc-900/20 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-blue-400 transition-colors duration-300">Quality Assurance Coordinator</h3>
                  <span className="text-sm text-zinc-500 px-3 py-1 rounded-full border border-zinc-700 group-hover:border-blue-500/50 transition-colors duration-300">01/2025 - Present</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-zinc-300 font-medium">Bertrandt</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Barcelona, Spain</span>
                </div>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  Leading the QA team in mobile and architecture car validation for SEAT & CUPRA applications, while balancing technical and managerial responsibilities.
                </p>
                <ul className="mt-3 space-y-1 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 list-disc list-inside text-sm">
                  <li>Leading the QA team in the mobile and architecture car validation of SEAT & CUPRA apps</li>
                  <li>Coordinating daily activities and distributing tasks among team members</li>
                  <li>Acting as a point of contact for client communication and feedback loops</li>
                  <li>Delivering weekly and monthly project tracking reports and presentations</li>
                  <li>Continued executing technical validations alongside organizational duties</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">Team Leadership</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">Project Management</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">Client Communication</span>
                </div>
              </div>
            </div>
            
            {/* Experience 2 - Previous Position at Bertrandt */}
            <div className="relative pl-10 animate-fade-in animation-delay-100">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full -translate-x-1/2 shadow-lg shadow-blue-500/20"></span>
              <div className="p-5 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 shadow-lg shadow-zinc-900/20 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">Quality Assurance Engineer</h3>
                  <span className="text-sm text-zinc-500 px-3 py-1 rounded-full border border-zinc-700 group-hover:border-indigo-500/50 transition-colors duration-300">08/2023 - 12/2024</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-zinc-300 font-medium">Bertrandt</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Barcelona, Spain</span>
                </div>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  Performed comprehensive validation and testing for automotive applications and vehicle architecture for Seat and Cupra brands.
                </p>
                <ul className="mt-3 space-y-1 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 list-disc list-inside text-sm">
                  <li>Mobile app validator for Seat and Cupra brands</li>
                  <li>Vehicle architecture validator for Seat and Cupra</li>
                  <li>Creation of Test Plans and Test Cases</li>
                  <li>Log reading for applications, back-end, and vehicles</li>
                  <li>Use of tools such as ODIS, Serial2, dataloggers, Datadog, Kibana, Figma, Zeplin, and Jira, among others</li>
                  <li>Automation of mobile applications</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium">Quality Assurance</span>
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium">Test Automation</span>
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium">Automotive</span>
                </div>
              </div>
            </div>
            
            {/* Experience 3 - Barman */}
            <div className="relative pl-10 animate-fade-in animation-delay-200">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-1/2 shadow-lg shadow-blue-500/20"></span>
              <div className="p-5 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 shadow-lg shadow-zinc-900/20 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-purple-400 transition-colors duration-300">Barman</h3>
                  <span className="text-sm text-zinc-500 px-3 py-1 rounded-full border border-zinc-700 group-hover:border-purple-500/50 transition-colors duration-300">06/2019 - 08/2023</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-zinc-300 font-medium">Aramark</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Barcelona, Spain</span>
                </div>
                <ul className="mt-3 space-y-1 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 list-disc list-inside text-sm">
                  <li>Managing high-volume service operations</li>
                  <li>Providing exceptional customer experiences </li>
                  <li>Maintaining inventory </li>
                  <li>Training new staff members</li>
                </ul>                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium">Customer Service</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium">Inventory Management</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium">Team Coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToSection targetId="education-section" className="mt-8" />

      <section id="education-section" className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black snap-section">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={80}
        />
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center animate-fade-in">Education</h2>
          <div className="relative max-w-3xl mx-auto space-y-12">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-green-500/50 to-transparent -translate-x-1/2"></div>
            
            {/* Education 1 - Specialist in AI */}
            <div className="relative pl-10 animate-fade-in">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full -translate-x-1/2 shadow-lg shadow-green-500/20 animate-pulse"></span>
              <div className="p-5 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 shadow-lg shadow-zinc-900/20 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-green-400 transition-colors duration-300">Specialist in Artificial Intelligence</h3>
                  <span className="text-sm text-zinc-500 px-3 py-1 rounded-full border border-zinc-700 group-hover:border-green-500/50 transition-colors duration-300">10/2024 - 10/2025</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-zinc-300 font-medium">Racks Labs - IUNIT Centro Universitario</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Remote, Spain</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">EQF level 7</span>
                </div>
                <ul className="mt-3 space-y-1 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 list-disc list-inside text-sm">
                  <li>Development and application of AI in areas such as automation, data analysis, digital content generation, and development.</li>
                  <li>Creation of AI-driven SaaS solutions to improve processes</li>
                  <li>Use of advanced AI tools like chatbots and large language models (LLMs)</li>
                  <li>Implementation of AI models for optimizing and personalizing solutions in various industries</li>
                  <li>Utilizing advanced machine learning and deep learning techniques</li>
                </ul>
                <div className="mt-4">
                  <p className="text-sm text-zinc-400">
                    <span className="text-teal-400 font-semibold">Specialist's Thesis: </span>
                    <span className="italic">"In progress"</span>
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">Machine Learning</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">Deep Learning</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">LLMs</span>
                </div>
              </div>
            </div>

            {/* Education 2 - Master in Cybersecurity */}
            <div className="relative pl-10 animate-fade-in animation-delay-100">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full -translate-x-1/2 shadow-lg shadow-green-500/20"></span>
              <div className="p-5 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 shadow-lg shadow-zinc-900/20 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-green-400 transition-colors duration-300">Master's in Cybersecurity</h3>
                  <span className="text-sm text-zinc-500 px-3 py-1 rounded-full border border-zinc-700 group-hover:border-green-500/50 transition-colors duration-300">03/2024 - 04/2025</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-zinc-300 font-medium">Deloitte - IMF Smart Education</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Remote, Spain</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">EQF level 7</span>
                </div>
                <ul className="mt-3 space-y-1 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 list-disc list-inside text-sm">
                  <li>Comprehensive training in cybersecurity with focus on intelligence, incident management, and secure development.</li>
                  <li>Cyber intelligence and incident management: Malware analysis, technical audits (ethical hacking), forensic analysis</li>
                  <li>Secure development and penetration testing: Training in secure application development, source code auditing</li>
                  <li>Malicious code analysis and digital evidence: Skills in reverse engineering and specialized tools handling</li>
                  <li>Monitoring and attack mitigation: Competencies in security event monitoring and correlation (SIEM)</li>
                </ul>
                <div className="mt-4">
                  <p className="text-sm text-zinc-400">
                    <span className="text-teal-400 font-semibold">Master's Thesis: </span>
                    <span className="italic">"Active Directory Lab"</span>
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">Ethical Hacking</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">Forensic Analysis</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">Penetration Testing</span>
                </div>
              </div>
            </div>
            
            {/* Education 3 - Bachelor's degree */}
            <div className="relative pl-10 animate-fade-in animation-delay-200">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full -translate-x-1/2 shadow-lg shadow-green-500/20"></span>
              <div className="p-5 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 shadow-lg shadow-zinc-900/20 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-teal-400 transition-colors duration-300">Bachelor's degree in Electronic Telecommunications Engineering</h3>
                  <span className="text-sm text-zinc-500 px-3 py-1 rounded-full border border-zinc-700 group-hover:border-teal-500/50 transition-colors duration-300">09/2019-02/2024</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-zinc-300 font-medium">Universidad Autónoma de Barcelona</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Barcelona, Spain</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">EQF level 6</span>
                </div>
                <ul className="mt-3 space-y-1 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 list-disc list-inside text-sm">
                  <li>Development of electronic projects in telecommunications with focus on design, implementation, and operation.</li>
                  <li>Application of regulations and execution of technical studies (measurements, calculations, reports)</li>
                  <li>Innovation and problem-solving with adaptation to new technologies and ethical responsibility</li>
                  <li>Management and teamwork in multidisciplinary environments</li>
                  <li>Communication and project planning skills</li>
                </ul>
                <div className="mt-4">
                  <p className="text-sm text-zinc-400">
                    <span className="text-teal-400 font-semibold">Bachelor's Thesis: </span>
                    <span className="italic">"Neuronal Network for Random Number Generation"</span>
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs font-medium">Telecommunications</span>
                  <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs font-medium">Electronics</span>
                  <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs font-medium">Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToSection targetId="contact-section" className="mt-8" />

      <section id="contact-section" className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black snap-section">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={80}
        />
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">Contact</h2>
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:gap-12 max-w-4xl">
            {/* LinkedIn Card */}
            <Card>
              <Link
                href="https://www.linkedin.com/in/pablo-guti%C3%A9rrez-bueno-852272144/"
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-6 md:py-12">
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                  <Linkedin size={20} />
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                    Pablo Gutiérrez
                  </span>
                  <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    LinkedIn
                  </span>
                </div>
              </Link>
            </Card>
            
            {/* Github Card */}
            <Card>
              <Link
                href="https://github.com/Pablogb29"
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-6 md:py-12">
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                  <Github size={20} />
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                    Pablogb29
                  </span>
                  <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    Github
                  </span>
                </div>
              </Link>
            </Card>
            
            {/* Email Card - Now centered in a full-width row */}
            <Card className="sm:col-span-2">
              <Link
                href="mailto:pabloinfosec@gmail.com"
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-6 md:py-12">
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                  <Mail size={20} />
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                    pabloinfosec@gmail.com
                  </span>
                  <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    Email
                  </span>
                </div>
              </Link>
            </Card>
            
            {/* HackTheBox Card - Now centered in a full-width row */}
            <Card className="sm:col-span-2">
              <Link
                href="https://app.hackthebox.com/users/653281"
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-6 md:py-12">
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                  <Code size={20} />
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                    MokaCat
                  </span>
                  <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    Hack The Box
                  </span>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
