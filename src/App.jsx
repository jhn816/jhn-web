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
import { HiMenu, HiX } from 'react-icons/hi';

function App() {
  const [projectView, setProjectView] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false);
  const [navHamburger, setNavHamburger] = useState(false);
  const [hamOpen, setHamOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    function resizeUpdate() {
      const width = window.innerWidth;
      const path = document.getElementById("curve");
      
      // update background curve path
      if (width < 768) {
        path.setAttribute("d", "M0 750 C 200 900, 378 600, 767 659 L767 905 L0 905 Z");
      } else {
        path.setAttribute("d", "M0 750 C 530 1000, 1000 800, 1709 335 L1709 905 L0 905 Z");
        //   M0 750
        //   C 530 1000, 1000 800, 1709 335
        //   L1709 905
        //   L0 905
        //   Z
        // }
      }

      // update navigation bar from regular to hamburger
      if (width < 1126) {
        setNavHamburger(true);
      } else {
        setNavHamburger(false);
      }
    }
  
    window.addEventListener("resize", resizeUpdate);
    resizeUpdate();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const experiences = [
    "Work", "Academic", "Volunteer"
  ];

  const contacts = [
    { name: "Contact",
      link: "",
      icon: <MdEmail size={18}/>
    },
    { name: "LinkedIn",
      link: "https://www.linkedin.com/in/jhn816/",
      icon: <FaLinkedin size={18}/>
    },
    { name: "GitHub",
      link: "https://github.com/jhn816",
      icon: <FaGithub size={18}/>
    }
  ]

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
      {/* navigation bar */}
      {!navHamburger ?
        <div className={`oswald transition-all duration-300 ease-out h-20 ${isScrolled ? "w-[calc(100%)] px-[140px] drop-shadow-black/40 drop-shadow-xl text-white bg-[#182140]" : "w-[calc(100%-250px)] mx-[125px] mb-60px mt-[20px] rounded-4xl text-white bg-white/5"}  py-[45px] fixed z-99 px-20 flex flex-row items-center justify-center gap-[50px] border-b border-white/30`}> 
        <a className="text-base font-bold mr-auto"> JHN-WEB UNDER CONSTRUCTION! </a>
        <a href="#about" className="text-base font-bold cursor-pointer hover-up">ABOUT ME</a> 
        <a href="#skills" className="text-base font-bold cursor-pointer hover-up">SKILLS</a>
        <a href="#projects" className="text-base font-bold cursor-pointer hover-up">PROJECTS</a>
        <a href="#experience" className="text-base font-bold cursor-pointer hover-up">EXPERIENCE</a>
      </div> : <>
      <div className={`oswald transition-all duration-300 ease-out h-20 [@media(max-width:425px)]:text-[10px] ${isScrolled ? "left-0 right-0 [@media(max-width:425px)]:px-6 px-[60px] drop-shadow-black/20 drop-shadow-xl text-white bg-[#182140]" : "left-5 right-5 [@media(max-width:425px)]:px-5 px-10 mb-60 mt-[20px] rounded-3xl text-white bg-white/5"}  [@media(max-width:425px)]:py-[10px] [@media(max-width:425px)]:h-15 py-[45px] fixed z-101 flex flex-row items-center justify-center border-b border-white/30`}> 
        <a className="font-bold mr-auto"> JHN-WEB UNDER CONSTRUCTION! </a>
        {!hamOpen ? 
          <HiMenu onClick={() => setHamOpen(true)} className="transition hover:cursor-pointer hover:drop-shadow-[0px_0px_16px_#0353a4] hover:scale-[1.03] active:scale-[1] [@media(max-width:425px)]:w-8 [@media(max-width:425px)]:h-8 w-10 h-10"/> : 
          <HiX onClick={() => setHamOpen(false)} className="transition hover:cursor-pointer hover:drop-shadow-[0px_0px_16px_#0353a4] hover:scale-[1.03] active:scale-[1] [@media(max-width:425px)]:w-8 [@media(max-width:425px)]:h-8 w-10 h-10"/>}
      </div>
      <div className={`fixed top-0 transition-all duration-300 ease-out [@media(max-width:425px)]:text-[16px] text-2xl drop-shadow-black/30 drop-shadow-lg bg-white text-black ${hamOpen ? "opacity-100" : "opacity-0 translate-y-[-20px]"} ${isScrolled? "left-5 right-5 rounded-b-4xl [@media(max-width:425px)]:mt-13 mt-22" : "[@media(max-width:425px)]:left-5 [@media(max-width:425px)]:right-5 left-10 right-10 rounded-4xl [@media(max-width:425px)]:mt-21 mt-30"} oswald flex flex-col gap-4 py-5 items-center fixed z-100 border-b-1 border-white/30`}> 
        <a href="#about" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">ABOUT ME</a> 
        <a href="#skills" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">SKILLS</a>
        <a href="#projects" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">PROJECTS</a>
        <a href="#experience" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">EXPERIENCE</a>
      </div>
      </>
      }
      
    <div className="relative w-screen md:w-screen h-screen justify-center bg-gradient-to-br from-[#131b34] to-[#121520] pt-5 flex flex-col gap-35
      px-10
      md:px-20
      lg:px-30
      xl:px-50
      2xl:px-70
      ">
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
        <path id="curve"
          className="fill-gray-100 stroke-gray-100 stroke-2"
        />
      </svg>

      {/* introduction section*/}
      <div className="w-full gap-[20px] fade-in-section flex flex-row justify-between h-fit">
        <div className=" w-fit h-80 flex-col flex gap-3 h-fit">
          <div className="flex flex-col"> 
            <div className="flex flex-row gap-2 md:gap-3 mb-0 mt-0">
              <a className="oswald text-[clamp(1.25rem,6vw,5rem)] lg:text-[clamp(2.4rem,3.75vw,3.25rem)] weight-600 text-white"> Hi, my name is{" "}</a>
              <a className="h-title text-[clamp(1.25rem,6vw,5rem)] lg:text-[clamp(2.4rem,3.75vw,3.25rem)] text-[#0353a4] font-semibold text-shadow-[0px_1px_1px_rgba(255,255,255,0.4)] md:text-shadow-[0px_1px_1px_rgba(255,255,255,0.9)]"> Justin Nguyen </a>
            </div>
            <a className="body text-[clamp(1.25rem,3.75vw,1.5rem)] text-white"> Buffalo, New York</a>
          </div>

          <div className="mt-auto">
            <p className="body md:w-full text-[clamp(.15rem,3.75vw,1.25rem)] mt-5 mb-[10px] text-white"> Aspiring Full Stack Software Engineer focused on building creative solutions that address problems from the simplest to the most complex. With experience under project managers, I have created projects that go into areas of web development, UX/UI design, and computer security. Going into the future, I have plans of diving into AI, specifically ML.</p>
            <div className="flex flex-col [@media(min-width:426px)]:flex-row gap-2 body"> 
              {contacts.map((contact, index) => (
                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="[@media(max-width:426px)]:justify-center [@media(max-width:540px)]:px-5 px-10 py-2 text-[14px] flex items-center gap-2 bg-[#0353a4] rounded-2xl text-white hover-press drop-shadow-[0px_8px_16px_rgba(149,157,165,0.1)]">{contact.icon} {contact.name} </a>
              ))}
           </div>
          </div>
        </div>
        
        
        <img src="/selfie.jpg" className="w-3/8 h-fit rounded-2xl  border-b-1 border-white/30  drop-shadow-black/20 drop-shadow-sm
        hidden lg:block"/>
      </div>
    </div>
          
    <div className="w-screen bg-gray-100 pb-30 pt-10 flex flex-col gap-35 
      px-10
      md:px-20
      lg:px-30
      xl:px-50
      2xl:px-70
      ">
      {/* skills and tech section // and about me*/}
      <div className='fade-in-section delay-200 w-full gap-10 lg:gap-0 flex flex-col lg:flex-row justify-between'>
        <div className="flex flex-col w-full text-center lg:text-left lg:w-4/8 justify-center-safe gap-3">
          <p id="skills" className="header text-[clamp(2rem,3.75vw,3.25rem)] text-[#0353a4] drop-shadow-black/20 drop-shadow-sm"> TECHNOLOGIES </p>
          <div className="flex flex-wrap lg:gap-3">
            <div className="flex flex-col w-full gap-3 lg:border-black/10 lg:border lg:px-7 lg:py-5 rounded-4xl"> 
              <p className="oswald text-black text-2xl"> Frontend Skills</p>
              <div className='flex flex-row justify-center lg:justify-normal flex-wrap gap-3'>
                {skills.frontend.map((skill, index) => (
                  <div key={index}
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-2 py-1 text-[9px] lg:px-4 lg:py-2 rounded-xl lg:text-[16px] text-black hover:bg-[#0353a4] hover:text-white hover:border-[#0353a4] transition cursor-default">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full gap-3 lg:border-black/10 lg:border lg:px-7 py-5 rounded-4xl"> 
              <p className="oswald text-black text-2xl"> Backend Skills </p>
              <div className='flex flex-row justify-center lg:justify-normal flex-wrap gap-3'>
                {skills.backend.map((skill, index) => (
                  <div key={index}
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-2 py-1 text-[9px] lg:px-4 lg:py-2 rounded-xl lg:text-[16px] text-black hover:bg-[#0353a4] hover:text-white hover:border-[#0353a4] transition cursor-default">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full gap-3 lg:border-black/10 lg:border lg:px-7 py-5 rounded-4xl"> 
              <p className="oswald text-black text-2xl"> Tool Skills </p>
              <div className='flex flex-row justify-center lg:justify-normal flex-wrap gap-3'>
                {skills.tools.map((skill, index) => (
                  <div key={index}
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-2 py-1 text-[9px] lg:px-4 lg:py-2 rounded-xl lg:text-[16px] text-black hover:bg-[#0353a4] hover:text-white hover:border-[#0353a4] transition cursor-default">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col w-full text-center lg:text-right lg:w-7/16 h-full">
            <p id="about" className="h-title text-[#0353a4] text-[clamp(2.25rem,3.75vw,5.25rem)] drop-shadow-black/20 drop-shadow-sm"> ABOUT ME </p>
            <p className='body text-[clamp(.15rem,3.75vw,1.25rem)] text-black text-xl'>I love trying and learning new hobbies and skills. I’ve gotten into snowboarding but I keep busting my a**, and it isn’t cheap! More seriously though, graphic design has been the hobby that shaped my creativity since middle school. And, after 8+ years of practice, I’ve created graphics for others, including YouTube banners, thumbnails, and even logos for gaming teams. It is partly the reason for the drive to build products and designs for myself and others. </p>
        </div>
      </div>
    </div>
    
    <div className="w-screen bg-gradient-to-br from-[#131b34] to-[#121520] pb-60 pt-30 flex flex-col gap-35 drop-shadow-[0_-8px_12px_rgba(0,0,0,0.2)]
       px-10
      md:px-20
      lg:px-30
      xl:px-50
      2xl:px-70
      ">
      {/* my projects section */}
      <div className="fade-in-section delay-400 flex flex-col justify-center-safe items-center gap-6">
        <p id="projects" className="header text-[clamp(2.25rem,3.75vw,3.25rem)] font-semibold text-white"> MY PROJECTS </p>
        <div className="w-[calc(100%)] flex flex-col items-center xl:flex-row xl:flex-wrap gap-[50px]">
          {projects.map((project, index) => ( 
             <div onClick={()=> setProjectView(index + 1)} key={index + 1} className="rounded-2xl border-b-1 border-white/30 bg-gray-100 w-full md:w-3/4 xl:w-[calc(50%-25px)] h-80 flex flex-col items-start  drop-shadow-black/30 drop-shadow-sm hover-press">
              <div className="rounded-t-2xl h-5/16 w-full bg-black/20"> 
                <p className={`px-7 py-1 rounded-3xl ${project.status === "Completed" ? 'bg-green-300' : 'bg-yellow-200'} text-[14px] w-fit flex items-center ml-auto m-5 text-black`}> {project.status} </p>
              </div>
              <div className="flex flex-col p-5 gap-2 w-full">
                <a className="h-body text-[clamp(1.5rem,3.75vw,2rem)] text-[#0353a4] drop-shadow-sm drop-shadow-black/20"> {project.name} </a>
                <div className="flex flex-row flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <p key={index} className="body bg-gray-900 w-fit px-2 py-1 md:px-3 md:py-2 rounded-xl text-[clamp(.5rem,3vw,.8rem)] md:text-[clamp(.5rem,3vw,.8rem)] text-white drop-shadow-sm drop-shadow-black/10"> {tag} </p>
                  ))}
                </div>
                <a className="body text-black text-[clamp(.7rem,3vw,.8rem)] md:text-[clamp(4px,6vw,14px)] drop-shadow-sm drop-shadow-black/20"> {project.description} </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* my experience section */}
      <div className="flex flex-col justify-center-safe items-center gap-3 [@media(min-width:510px)]:gap-6">
        <p id="experience" className="header text-[clamp(2.25rem,3.75vw,3.25rem)] text-white">EXPERIENCES</p>
          <div className="flex flex-row gap-2">
            {experiences.map((experience, index) => (
              <p key={index} className="bg-[#0353a4] w-[80px] flex justify-center [@media(min-width:510px)]:px-15 px-6 py-1 text-[10px] [@media(min-width:510px)]:py-2 rounded-2xl [@media(min-width:510px)]:text-[14px] text-white hover-press drop-shadow-black/20 drop-shadow-sm"> {experience} </p>
            ))}
        </div>
      </div>
  </div>
  </>
  )
}

export default App