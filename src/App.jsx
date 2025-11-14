import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiReact, 
  SiMysql, 
  SiPhp, 
  SiFigma, 
  SiAdobephotoshop 
} from 'react-icons/si';
import { MdDashboard } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';

function App() {
  const experiences = [
    "Work", "Academic", "Volunteer"
  ];

  const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "React", icon: <SiReact /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Agile Methodology", icon: <FaTasks /> },
  { name: "Scrumboard", icon: <MdDashboard /> },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> }
  ];

  const projects=[
    {
      name: "The Melting Pot",
      status: "Completed",
      tags: ["React", "JavaScript", "RESTful API", "Agile/Scrum", "Figma", "UX Testing"],
      description: "A social media platform that makes cooking and recipe sharing effortless. Built with a team of 5, featuring real-time interactions, responsive design, and user-tested UX."
    },
    {
      name: "Lambda Phinance",
      status: "In Progress",
      tags: ["MERN Stack", "RESTful API", "Authentication", "Data Visualization"],
      description: "A full-stack expense tracker that streamlined my fraternity's treasury operations. Features real-time expense sharing, debt management, and visual analytics."    },
    {
      name: "Pet Patrol",
      status: "In Progress",
      tags: ["React", "JavaScript", "MySQL", "PHP", "Agile/Scrum"],
      description: "An all-in-one pet management app for tracking routines, health records, and nearby services. Share photos and pet information with friends while staying organized."    },
    {
      name: "Auction Marketplace",
      status: "Completed",
      tags: ["Django", "MySQL", "WebSockets", "Nginx"],
      description: ""
    }
  ];

  return (<>

    <div class="w-screen bg-gradient-to-br from-gray-900 to-gray-500 pb-60 pt-5 px-70 flex flex-col gap-35">
      <div class="w-[calc(100%)] rounded-2xl h-18 bg-white/5 flex flex-row items-center justify-center gap-15 border-b-1 border-white/30"> 
        <a href="#about" className="text-base text-white font-light cursor-pointer hover-up">About Me</a>
        <a href="#skills" className="text-base text-white font-light cursor-pointer hover-up">Skills</a>
        <a href="#projects" className="text-base text-white font-light cursor-pointer hover-up">Projects</a>
        <a href="#experience" className="text-base text-white font-light cursor-pointer hover-up">Experience</a>
      </div>

      <div class="fade-in-section flex flex-row gap-20">
        <div class=" w-5/8 h-80 flex-col flex">
          <div class="flex flex-col gap-[10px]"> 
            <div class="flex flex-row gap-1.5">
              <a id="about" class="text-3xl text-white"> Hi, My name is </a>
              <a className="text-3xl bg-gradient-to-r from-[#0099E9] to-[#0079E9] font-semibold bg-clip-text text-transparent"> Justin Nguyen </a>
            </div>
            <a class="text-2xl text-white"> Buffalo, New York</a>
          </div>

          <div class="mt-auto">
            <p class="text-xl mt-5 mb-[10px] text-white"> Aspiring Full Stack Software Engineer focused on building creative solutions that address problems from the simplest to the most complex. With experience under project managers, I have created projects that go into areas of web development, UX/UI design, and cybersecurity. Going into the future, I have plans of diving into AI, specifically ML.</p>
            <div class="flex flex-row gap-2"> 
              <a class="flex items-center gap-2 bg-[#0353a4] w-auto px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> <MdEmail size={18}/> Contact </a>
              <a href="https://www.linkedin.com/in/jhn816/"  target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-[#0353a4] w-fit px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> <FaLinkedin size={18}/> LinkedIn </a>
              <a href="https://github.com/jhn816"  target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-[#0353a4] w-auto px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> <FaGithub size={18}/>GitHub </a>
            </div>
          </div>
        </div>
        <div class="w-3/8 h-80 bg-[#0353a4] rounded-2xl  border-b-1 border-white/30  drop-shadow-black/20 drop-shadow-sm">

        </div>
      </div>

      <div class="fade-in-section delay-200 flex flex-col justify-center-safe items-center gap-6">
        <p id="skills" class="text-3xl text-white"> Technologies & Skills </p>
        <div class="flex flex-wrap justify-center gap-4 max-w-6xl">
          {skills.map((skill, index) => (
            <div key={index}
              className="drop-shadow-sm drop-shadow-black/60 flex items-center gap-2 hover-press border border-white px-5 py-2 rounded-xl text-[14px] text-white hover:bg-[#0353a4] hover:border-[#0353a4] transition cursor-default">
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div class="fade-in-section delay-400 flex flex-col justify-center-safe items-center gap-6">
        <p id="projects" class="text-3xl text-white"> My Projects </p>
        <div class="w-[calc(100%)] flex flex-row flex-wrap gap-[50px]">
          {projects.map((project, index) => ( 
             <div key={index} class="rounded-2xl border-b-1 border-white/30 bg-[#0353a4] w-[calc(50%-25px)] h-80 flex flex-col items-start  drop-shadow-black/30 drop-shadow-sm hover-press">
              <div class="rounded-t-2xl h-5/16 w-full bg-black/20"> 
                <p class={`px-7 py-1 rounded-3xl ${project.status === "Completed" ? 'bg-green-300' : 'bg-yellow-200'} text-[14px] w-fit flex items-center ml-auto m-5 text-black`}> {project.status} </p>
              </div>
              <div class="flex flex-col p-5 gap-2 w-full">
                <a class="text-white text-3xl font-semibold drop-shadow-sm drop-shadow-black/70"> {project.name} </a>
                <div class="flex flex-row gap-1">
                  {project.tags.map((tag, index) => (
                    <p key={index} class="bg-gray-900 w-fit px-3 py-2 rounded-xl text-[12px] text-white drop-shadow-sm drop-shadow-black/10"> {tag} </p>
                  ))}
                </div>
                <a class="text-white text-[16px] drop-shadow-sm drop-shadow-black/40"> {project.description} </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="flex flex-col justify-center-safe items-center gap-6">
        <p id="experience" class="text-3xl text-white"> Experience</p>
        <div class="flex flex-row gap-2">
            {experiences.map((experience, index) => (
              <p key={index} class="bg-[#0353a4] w-auto px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> {experience} </p>
            ))}
        </div>
      </div>

    </div>
    </>
  )
}

export default App