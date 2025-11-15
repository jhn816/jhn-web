import { useState, useEffect } from 'react';
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const experiences = [
    "Work", "Academic", "Volunteer"
  ];

  const skills = {
    frontend: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "React", icon: <SiReact /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  
    backend: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Python", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  
    tools: [
      { name: "Agile Methodology", icon: <FaTasks /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Scrumboard", icon: <MdDashboard /> },
      
    ]
  };

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
      <div className={`oswald transition-all duration-400 ease-out ${isScrolled ? "w-[calc(100%)] px-[140px] h-20 drop-shadow-black/40 drop-shadow-xl text-white bg-[#182140]" : "w-[calc(100%-250px)] mx-[125px] mb-60px mt-[20px] rounded-4xl h-20 text-white bg-white/5"}  py-[45px] fixed z-99 px-20 flex flex-row items-center justify-center gap-15 border-b-1 border-white/30`}> 
        <a className="text-base font-bold mr-auto"> WEBSITE UNDER CONSTRUCTION! </a>
        <a href="#about" className="text-base font-bold cursor-pointer hover-up">ABOUT ME</a> 
        <a href="#skills" className="text-base font-bold cursor-pointer hover-up">SKILLS</a>
        <a href="#projects" className="text-base font-bold cursor-pointer hover-up">PROJECTS</a>
        <a href="#experience" className="text-base font-bold cursor-pointer hover-up">EXPERIENCE</a>
      </div>
      
    <div className="relative w-screen h-screen justify-center bg-gradient-to-br from-[#131b34] to-[#121520] pt-5 px-70 flex flex-col gap-35">
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
      
      {/* path art for intro */}
      <svg   className="absolute top-0 left-0 w-screen h-screen pointer-events-none drop-shadow-[0_-20px_6px_rgba(0,0,0,0.1)]" width="200" height="120">
          <path 
            d="
              M0 750
              C 530 1000, 1000 800, 1709 335
              L1709 896
              L0 896
              Z
            "
            className="fill-gray-100 stroke-gray-100 stroke-2"
          />
        </svg>

      {/* introduction section*/}
      <div className="fade-in-section flex flex-row gap-20 h-auto">
        <div className=" w-5/8 h-80 flex-col flex h-fit">
          <div className="flex flex-col"> 
            <div className="flex flex-row gap-3 mb-0 mt-0">
              <a className="oswald text-[3.45rem] pb-[.75rem] weight-600 text-white"> Hi, my name is{" "}</a>
              <a className="h-title text-[#0353a4] font-semibold text-shadow-[0px_1px_1px_rgba(255,255,255,0.9)]"> Justin Nguyen </a>
            </div>
            <a className="body text-2xl text-white"> Buffalo, New York</a>
          </div>

          <div className="mt-auto">
            <p className="body text-xl mt-5 mb-[10px] text-white"> Aspiring Full Stack Software Engineer focused on building creative solutions that address problems from the simplest to the most complex. With experience under project managers, I have created projects that go into areas of web development, UX/UI design, and computer security. Going into the future, I have plans of diving into AI, specifically ML.</p>
            <div className="flex flex-row gap-2 body"> 
              <a className="flex items-center gap-2 bg-[#0353a4] w-auto px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> <MdEmail size={18}/> Contact </a>
              <a href="https://www.linkedin.com/in/jhn816/"  target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0353a4] w-fit px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> <FaLinkedin size={18}/> LinkedIn </a>
              <a href="https://github.com/jhn816"  target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0353a4] w-auto px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> <FaGithub size={18}/>GitHub </a>
            </div>
          </div>
        </div>
        
        <img src="./public/assets/images/selfie.jpg" className="w-3/8 h-auto rounded-2xl  border-b-1 border-white/30  drop-shadow-black/20 drop-shadow-sm"/>
      </div>
    </div>
          
    <div className="w-screen bg-gray-100 pb-30 pt-10 px-70 flex flex-col gap-35 ">
      {/* skills and tech section // and about me*/}
      <div className='fade-in-section delay-200 w-full flex flex-row justify-between'>
        <div className="flex flex-col w-4/8 justify-center-safe gap-3">
          <p id="skills" className="header text-[#0353a4] drop-shadow-black/20 drop-shadow-sm"> TECHNOLOGIES </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-col w-full gap-3 border-black/10 border px-7 py-5 rounded-4xl"> 
              <p className="oswald text-black text-2xl"> Frontend Skills</p>
              <div className='flex flex-row flex-wrap gap-3'>
                {skills.frontend.map((skill, index) => (
                  <div key={index}
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-4 py-2 rounded-xl text-[16px] text-black hover:bg-[#0353a4] hover:text-white hover:border-[#0353a4] transition cursor-default">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full gap-3 border-black/10 border px-7 py-5 rounded-4xl"> 
              <p className="oswald text-black text-2xl"> Backend Skills </p>
              <div className='flex flex-row flex-wrap gap-3'>
                {skills.backend.map((skill, index) => (
                  <div key={index}
                    className="body flex w-fit items-center gap-2 hover-press border border-black/ px-4 py-2 rounded-xl text-[16px] text-black hover:bg-[#0353a4] hover:text-white hover:border-[#0353a4] transition cursor-default">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full gap-3 border-black/10 border px-7 py-5 rounded-4xl"> 
              <p className="oswald text-black text-2xl"> Tool Skills </p>
              <div className='flex flex-row flex-wrap gap-3'>
                {skills.tools.map((skill, index) => (
                  <div key={index}
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-4 py-2 rounded-xl text-[16px] text-black hover:bg-[#0353a4] hover:text-white hover:border-[#0353a4] transition cursor-default">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col w-7/16 text-right justify-center text-center h-full">
            <p id="about" className="h-title text-[#0353a4] text-2xl drop-shadow-black/20 drop-shadow-sm"> ABOUT ME </p>
            <p className='body text-black text-xl'>I love trying and learning new hobbies and skills. I’ve gotten into snowboarding but I keep busting my a**, and it isn’t cheap! More seriously though, graphic design has been the hobby that shaped my creativity since middle school. And, after 8+ years of practice, I’ve created graphics for others, including YouTube banners, thumbnails, and even logos for gaming teams. It is partly the reason for the drive to build products and designs for myself and others. </p>
        </div>
      </div>
    </div>
    
    <div className="w-screen bg-gradient-to-br from-[#131b34] to-[#121520] pb-60 pt-30  px-70 flex flex-col gap-35 drop-shadow-[0_-8px_12px_rgba(0,0,0,0.2)]">
      {/* my projects section */}
      <div className="fade-in-section delay-400 flex flex-col justify-center-safe items-center gap-6">
        <p id="projects" className="header text-5xl font-semibold text-white"> MY PROJECTS </p>
        <div className="w-[calc(100%)] flex flex-row flex-wrap gap-[50px]">
          {projects.map((project, index) => ( 
             <div onClick={()=> setProjectView(index + 1)} key={index + 1} className="rounded-2xl border-b-1 border-white/30 bg-gray-100 w-[calc(50%-25px)] h-80 flex flex-col items-start  drop-shadow-black/30 drop-shadow-sm hover-press">
              <div className="rounded-t-2xl h-5/16 w-full bg-black/20"> 
                <p className={`px-7 py-1 rounded-3xl ${project.status === "Completed" ? 'bg-green-300' : 'bg-yellow-200'} text-[14px] w-fit flex items-center ml-auto m-5 text-black`}> {project.status} </p>
              </div>
              <div className="flex flex-col p-5 gap-2 w-full">
                <a className="h-body text-[#0353a4] drop-shadow-sm drop-shadow-black/20"> {project.name} </a>
                <div className="flex flex-row gap-1">
                  {project.tags.map((tag, index) => (
                    <p key={index} className="body bg-gray-900 w-fit px-3 py-2 rounded-xl text-[12px] text-white drop-shadow-sm drop-shadow-black/10"> {tag} </p>
                  ))}
                </div>
                <a className="body text-black text-[16px] drop-shadow-sm drop-shadow-black/20"> {project.description} </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* my experience section */}
      <div className="flex flex-col justify-center-safe items-center gap-6">
        <p id="experience" className="header text-white"> EXPERIENCES</p>
        <div className="flex flex-row gap-2">
            {experiences.map((experience, index) => (
              <p key={index} className="bg-[#0353a4] w-auto px-10 py-2 rounded-2xl text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> {experience} </p>
            ))}
        </div>
      </div>
  </div>
  </>
  )
}

export default App