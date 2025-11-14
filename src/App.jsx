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
  const [projectView, setProjectView] = useState(0);
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
      description: "a"
    }
  ];

  const project_popups=[
    {
      name: "The Melting Pot",
      project_index: 1,
      all_tags: ["React", "JavaScript", "RESTful API", "Agile/Scrum", "Figma", "UX Testing"],
      full_description: "",
      images: []},
    {
      name: "Lambda Phinance",
      project_index: 2,
      all_tags: ["MERN Stack", "RESTful API", "Authentication", "Data Visualization"],
      full_description: "",
      images: []},
    {
      name: "Pet Patrol",
      project_index: 3,
      all_tags: ["React", "JavaScript", "MySQL", "PHP", "Agile/Scrum"],
      full_description: "",
      images: []},
    {
      name: "Auction Marketplace",
      project_index: 4,
      all_tags: ["Django", "MySQL", "WebSockets", "Nginx"],
      full_description: "",
      images: []
    }
  ];


  return (<>

    <div class="w-screen bg-gradient-to-br from-gray-900 to-gray-500 pb-60 pt-5 px-70 flex flex-col gap-35">
      {/* pop up for projects section */}
      { projectView !== 0 && <div className="flex items-center justify-center fixed inset-0 bg-black/20 z-50">
        <div className="bg-gray-900 w-3/4 h-1/2 p-12 rounded-4xl">
          {project_popups.map((popup, index) => (<>
            {projectView === popup.project_index && 
              <div className='flex w-full justify-center'>
                <div className='items-center w-1/2'>
                  <p onClick={()=> setProjectView(0)} className='text-white text-xl text-left border border-white px-12 py-2 rounded-xl w-fit hover:cursor-pointer'> Back </p>
                </div>
                <div className='flex flex-col w-1/2 gap-5'>
                  <p className='text-white text-3xl'> {popup.name}</p>
                  <div className='flex flex-col w-full'>
                    <p className='text-white text-xl flex mb-1'> All Technology Tags</p>
                    <div className='flex items-center flex-row flex-wrap gap-2 w-1/2'> 
                      {popup.all_tags.map((tag, index) => (
                        <div key={index}
                          className="drop-shadow-sm drop-shadow-black/60 flex items-center gap-2 cursor-default border border-[#0353a4] px-3 py-1 rounded-xl text-[12px] text-white bg-[#0353a4]">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='text-white text-xl'> Whats the details?</p>
                    <p className='text-white text-md font-light'> {popup.full_description}</p>
                  </div>
              </div>
            </div>
            }
            </>
          ))}
        </div>
      </div>}

      {/* navigation bar section */}
      <div class="w-[calc(100%)] rounded-2xl h-18 bg-white/5 px-20 flex flex-row items-center justify-center gap-15 border-b-1 border-white/30"> 
        <a className="text-base text-white font-light mr-auto"> Website still in Construction! </a>
        <a href="#about" className="text-base text-white font-light cursor-pointer hover-up">About Me</a>
        <a href="#skills" className="text-base text-white font-light cursor-pointer hover-up">Skills</a>
        <a href="#projects" className="text-base text-white font-light cursor-pointer hover-up">Projects</a>
        <a href="#experience" className="text-base text-white font-light cursor-pointer hover-up">Experience</a>
      </div>

      {/* introduction section*/}
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
            <p class="text-xl mt-5 mb-[10px] text-white"> Aspiring Full Stack Software Engineer focused on building creative solutions that address problems from the simplest to the most complex. With experience under project managers, I have created projects that go into areas of web development, UX/UI design, and computer security. Going into the future, I have plans of diving into AI, specifically ML.</p>
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
    
      {/* skills and tech section // and about me*/}
      <div class="fade-in-section delay-200 flex flex-col justify-center-safe items-center gap-6">
        <p id="skills" class="text-3xl text-white"> Technologies & Skills </p>
        <div class="flex flex-wrap justify-center gap-4 max-w-6xl">
          {skills.map((skill, index) => (
            <div key={index}
              className="drop-shadow-sm drop-shadow-black/60 flex items-center gap-2 hover-press border border-white px-5 py-2 rounded-xl text-[16px] text-white hover:bg-[#0353a4] hover:border-[#0353a4] transition cursor-default">
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
        
      {/* my projects section */}
      <div class="fade-in-section delay-400 flex flex-col justify-center-safe items-center gap-6">
        <p id="projects" class="text-3xl text-white"> My Projects {projectView} </p>
        <div class="w-[calc(100%)] flex flex-row flex-wrap gap-[50px]">
          {projects.map((project, index) => ( 
             <div onClick={()=> setProjectView(index + 1)} key={index + 1} class="rounded-2xl border-b-1 border-white/30 bg-[#0353a4] w-[calc(50%-25px)] h-80 flex flex-col items-start  drop-shadow-black/30 drop-shadow-sm hover-press">
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

      {/* my experience section */}
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