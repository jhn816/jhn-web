import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaExternalLinkAlt} from 'react-icons/fa';
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
  SiAdobephotoshop, 
  SiPostgresql,
  SiTypescript
} from 'react-icons/si';
import { MdDashboard } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

function App() {
  const [projectView, setProjectView] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);

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
      
      if (width < 768) {
        path.setAttribute("d", "M0 750 C 200 900, 378 600, 767 659 L767 905 L0 905 Z");
      } else {
        path.setAttribute("d", "M0 750 C 530 1000, 1000 800, 1709 335 L1709 905 L0 905 Z");
      }

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


  const experienceCategories = ["Work", "Academic", "Volunteer"];

  const experienceData = [
    // Work
    [
      {
        role: "Digital Skills Trainer",
        org: "Mission: Ignite",
        location: "Buffalo, NY",
        period: "Feb 2026 – Present",
        bullets: [
          "Increased user proficiency by 40% through the Tech360 Program by delivering targeted technical instruction and OS coaching for both small groups and individual end-users.",
          "Optimized digital equity by facilitating ISP provisioning and analyzing participant KPIs to streamline program delivery and documentation."
        ]
      },
      {
        role: "Student Assistant",
        org: "SUNY, University at Buffalo",
        location: "Amherst, NY",
        period: "Sep 2022 – Present",
        bullets: [
          "Troubleshoot complex software errors via ticket-based diagnostics; managed inventory logistics for 100+ high-value assets.",
          "Optimized digital infrastructure for campus events, increasing deployment speed and end-user connectivity."
        ]
      }
    ],
    // Academic
    [
      {
        role: "B.S. Computer Science",
        org: "University at Buffalo",
        location: "Amherst, NY",
        period: "Expected May 2026",
        bullets: [
          "Relevant coursework: Web Applications, HCI & UI/UX, Computer Security, Distributed Systems, Computer Vision & Image Processing.",
          "AWS Certified Cloud Practitioner — Feb 2026."
        ]
      },
      {
        role: "Chapter President & Head of Finances",
        org: "Lambda Phi Epsilon",
        location: "Amherst, NY",
        period: "Dec 2022 – Present",
        bullets: [
          "Directed organization events for 1,000+ participants raising $10,000+ and 200+ potential donors for the National Bone Marrow Program.",
          "Built an internal expense-tracking application to streamline treasury operations for 75+ active members.",
          "Managed semesterly budget allocation, dues collection, and financial reporting for the chapter."
        ]
      }
    ],
    // Volunteer
    [
      {
        role: "Drive Volunteer",
        org: "NMDP (National Marrow Donor Program)",
        location: "Buffalo, NY",
        period: "Feb 2023 – Present",
        bullets: [
          "Organized semester tabling events on campus with Lambda Phi Epsilon to register new potential bone marrow donors to the national registry.",
          "Engaged and educated 200+ potential donors over 3+ years, directly supporting patients in need of life-saving transplants."
        ]
      },
      {
        role: "Meal & Clothing Service Volunteer",
        org: "Friends Of Night People, Inc.",
        location: "Buffalo, NY",
        period: "Sep 2025 – Dec 2025",
        bullets: [
          "Sorted, organized, and distributed clothing donations to the Buffalo community on behalf of Friends Of Night People, Inc.",
          "Served hot meals to community members in need as part of the organization's ongoing poverty alleviation programs."
        ]
      },
      {
        role: "Community Clean-up Volunteer",
        org: "Adopt A Highway Maintenance Corporation",
        location: "Buffalo, NY",
        period: "Apr 2023 – Present",
        bullets: [
          "Volunteered each semester with Lambda Phi Epsilon to clean Sweet Home Road — the chapter's adopted highway — as part of an ongoing environmental stewardship commitment.",
          "Contributed to 3+ years of consistent community beautification and environmental upkeep in the local area."
        ]
      }
    ]
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
      { name: "Typescript", icon: <SiTypescript /> },
    ],
  
    backend: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Python", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
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
      description: "A social media platform that makes cooking and recipe sharing effortless. Built with a team of 5, featuring real-time interactions, responsive design, and user-tested UX.",
      link: "https://themeltingpot.app/",
      github: ""
    },
    {
      name: "Lambda Phinance",
      status: "In Progress",
      tags: ["MERN Stack", "RESTful API", "Authentication", "Data Visualization"],
      description: "A full-stack expense tracker that streamlined my fraternity's treasury operations. Features real-time expense sharing, debt management, and visual analytics.",
      link: "https://lambdaphinance.netlify.app/",
      github: "https://github.com/jhn816/lambdaphinance"
    },
    {
      name: "Pet Patrol",
      status: "In Progress",
      tags: ["React", "JavaScript", "MySQL", "PHP", "Agile/Scrum"],
      description: "An all-in-one pet management app for tracking routines, health records, and nearby services. Share photos and pet information with friends while staying organized.",
      link: "",
      github: ""
    },
    {
      name: "Auction Marketplace",
      status: "Completed",
      tags: ["Django", "MySQL", "WebSockets", "Nginx"],
      description: "A real-time auction platform with live bidding powered by WebSockets. Features item listings, bid history, user authentication, and Nginx-served deployment.",
      link: "",
      github: "https://github.com/lejimene/Talriz"
    },
    {
      name: "jhn-web",
      status: "In Progress",
      tags: ["React", "JavaScript", "Tailwind", "Vercel"],
      description: "This website to showcase my skills and projects that I have done!",
      link: "https://jhn-web.vercel.app/",
      github: "https://github.com/jhn816/jhn-web"
    }
  ];

  const project_popups=[
    {
      name: "The Melting Pot",
      project_index: 1,
      all_tags: ["React", "JavaScript", "RESTful API", "Agile/Scrum", "Figma", "UX Testing"],
      full_description: "Built with a team of 5 using an Agile/Scrum workflow, The Melting Pot is a social cooking platform where users can post, discover, and interact with recipes in real time. I led UX testing sessions on campus, bringing in 50+ users to validate interface decisions. We iterated on high-fidelity Figma wireframes based on A/B testing results, improving user retention and accessibility by 25%. The app uses RESTful API integrations for dynamic CRUD operations and responsive media state management.",
      images: []
    },
    {
      name: "Lambda Phinance",
      project_index: 2,
      all_tags: ["MERN Stack", "RESTful API", "Authentication", "Data Visualization"],
      full_description: "A full-stack financial management app built for my fraternity's treasury operations. I developed a JWT-based authentication system and a scalable NoSQL schema to handle 300+ semesterly transaction logs. The real-time collaborative sheets feature increased treasury tracking efficiency by 50% over spreadsheet workflows, serving 75+ active users. The dashboard includes visual analytics charts to surface spending trends and outstanding balances at a glance.",
      images: []
    },
    {
      name: "Pet Patrol",
      project_index: 3,
      all_tags: ["React", "JavaScript", "MySQL", "PHP", "Agile/Scrum"],
      full_description: "An all-in-one pet management app designed to help owners track their pets' routines, health records, vet visits, and nearby services. Users can share photos and pet profiles with friends. Built with a React frontend, PHP backend, and MySQL database following an Agile/Scrum workflow with sprint planning and a shared scrumboard. Currently in active development.",
      images: []
    },
    {
      name: "Auction Marketplace",
      project_index: 4,
      all_tags: ["Django", "MySQL", "WebSockets", "Nginx"],
      full_description: "A real-time auction marketplace where users can list items and place live bids. WebSockets power the live bidding experience, updating all connected clients instantly without page refresh. The platform includes user authentication, item listing management, bid history tracking, and is deployed via Nginx. Built with Django and a MySQL backend for structured relational data.",
      images: []
    },
    {
      name: "jhn-web",
      project_index: 5,
      all_tags: ["React", "JavaScript", "Tailwind", "Vercel"],
      full_description: "This website showcases my skills, projects, and experience as a full stack engineer. Built with React, styled using TailwindCSS, and deployed on Vercel. Currently in active development — new sections and polish being added continuously.",
      images: []
    }
  ];


  return (<>
      {/* navigation bar */}
      {!navHamburger ?
        <div className={`oswald transition-all duration-300 ease-out h-20 ${isScrolled ? "w-[calc(100%)] px-[140px] drop-shadow-black/40 drop-shadow-xl text-[var(--color-white)] bg-[var(--color-dark-bg)]" : "w-[calc(100%-250px)] mx-[125px] mb-60px mt-[20px] rounded-4xl text-white bg-white/5"}  py-[45px] fixed z-99 px-20 flex flex-row items-center justify-center gap-[50px] border-b border-white/30`}> 
        <a className="text-base font-bold mr-auto"> JHN-WEB UNDER CONSTRUCTION! </a>
        <a href="#about" className="text-base font-bold cursor-pointer hover-up">ABOUT ME</a> 
        <a href="#skills" className="text-base font-bold cursor-pointer hover-up">SKILLS</a>
        <a href="#projects" className="text-base font-bold cursor-pointer hover-up">PROJECTS</a>
        <a href="#experience" className="text-base font-bold cursor-pointer hover-up">EXPERIENCE</a>
      </div> : <>
      <div className={`oswald transition-all duration-300 ease-out h-20 [@media(max-width:425px)]:text-[10px] ${isScrolled ? "left-0 right-0 [@media(max-width:425px)]:px-6 px-[60px] drop-shadow-black/20 drop-shadow-xl text-[var(--color-white)] bg-[var(--color-dark-bg)]" : "left-5 right-5 [@media(max-width:425px)]:px-5 px-10 mb-60 mt-[20px] rounded-3xl text-[var(--color-white)] bg-white/5"}  [@media(max-width:425px)]:py-[10px] [@media(max-width:425px)]:h-15 py-[45px] fixed z-101 flex flex-row items-center justify-center border-b border-white/30`}> 
        <a className="font-bold mr-auto"> JHN-WEB UNDER CONSTRUCTION! </a>
        {!hamOpen ? 
          <HiMenu onClick={() => setHamOpen(true)} className="transition hover:cursor-pointer hover:drop-shadow-[0px_0px_16px_var(--color-primary)] hover:scale-[1.03] active:scale-[1] [@media(max-width:425px)]:w-8 [@media(max-width:425px)]:h-8 w-10 h-10"/> : 
          <HiX onClick={() => setHamOpen(false)} className="transition hover:cursor-pointer hover:drop-shadow-[0px_0px_16px_var(--color-primary)] hover:scale-[1.03] active:scale-[1] [@media(max-width:425px)]:w-8 [@media(max-width:425px)]:h-8 w-10 h-10"/>}
      </div>
      <div className={`fixed top-0 transition-all duration-300 ease-out [@media(max-width:425px)]:text-[16px] text-2xl drop-shadow-black/30 drop-shadow-lg bg-[var(--color-white)] text-black ${hamOpen ? "opacity-100" : "opacity-0 translate-y-[-20px]"} ${isScrolled? "left-5 right-5 rounded-b-4xl [@media(max-width:425px)]:mt-13 mt-22" : "[@media(max-width:425px)]:left-5 [@media(max-width:425px)]:right-5 left-10 right-10 rounded-4xl [@media(max-width:425px)]:mt-21 mt-30"} oswald flex flex-col gap-4 py-5 items-center fixed z-100 border-b-1 border-white/30`}> 
        <a href="#about" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">ABOUT ME</a> 
        <a href="#skills" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">SKILLS</a>
        <a href="#projects" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">PROJECTS</a>
        <a href="#experience" className="transition hover:cursor-pointer hover:scale-[1.03] active:scale-[1] font-bold cursor-pointer hover-up">EXPERIENCE</a>
      </div>
      </>
      }
      
    <div className="relative w-screen md:w-screen h-screen justify-center bg-gradient-to-br from-[var(--color-dark-bg-from)] to-[var(--color-dark-bg-to)] pt-5 flex flex-col gap-35
      px-10
      md:px-20
      lg:px-30
      xl:px-50
      2xl:px-70
      ">
      {/* pop up for projects section */}
      { projectView !== 0 && <div className="flex items-center justify-center fixed inset-0 bg-black/20 z-50">
        <div className="bg-gray-900 w-3/4 h-1/2 p-12 rounded-4xl overflow-y-auto">
          {project_popups.map((popup, index) => (
            projectView === popup.project_index && 
              <div key={index} className='flex w-full justify-center'>
                <div className='items-center w-1/2'>
                  <p onClick={()=> setProjectView(0)} className='text-white text-xl text-left border border-white px-12 py-2 rounded-xl w-fit hover:cursor-pointer'> Back </p>
                </div>
                <div className='flex flex-col w-1/2 gap-5'>
                  <p className='text-white text-3xl'> {popup.name}</p>
                  <div className='flex flex-col w-full'>
                    <p className='text-white text-xl flex mb-1'> All Technology Tags</p>
                    <div className='flex items-center flex-row flex-wrap gap-2 w-full'> 
                      {popup.all_tags.map((tag, i) => (
                        <div key={i}
                          className="drop-shadow-sm drop-shadow-black/60 flex items-center gap-2 cursor-default border border-[var(--color-primary)] px-3 py-1 rounded-xl text-[12px] text-[var(--color-white)] bg-[var(--color-primary)]">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='text-[var(--color-white)] text-xl'> What's the details?</p>
                    <p className='text-[var(--color-white)] text-md font-light'> {popup.full_description}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>}
      
      {/* path art for intro */}
      <svg className="absolute top-0 left-0 w-screen h-screen pointer-events-none drop-shadow-[0_-20px_6px_rgba(0,0,0,0.1)]" width="200" height="120">
        <path id="curve"
          className="fill-gray-100 stroke-gray-100 stroke-2"
        />
      </svg>

      {/* introduction section*/}
      <div className="w-full gap-[20px] fade-in-section flex flex-row justify-between h-fit">
        <div className=" w-fit h-80 flex-col flex gap-3 h-fit">
          <div className="flex flex-col"> 
            <div className="flex flex-row gap-2 md:gap-3 mb-0 mt-0">
              <a className="oswald text-[clamp(1.25rem,6vw,5rem)] lg:text-[clamp(2.4rem,3.75vw,3.25rem)] weight-600 text-[var(--color-white)]"> Hi, my name is{" "}</a>
              <a className="h-title text-[clamp(1.25rem,6vw,5rem)] lg:text-[clamp(2.4rem,3.75vw,3.25rem)] text-[var(--color-primary)] font-semibold text-shadow-[0px_1px_1px_rgba(255,255,255,0.4)] md:text-shadow-[0px_1px_1px_rgba(255,255,255,0.9)]"> Justin Nguyen </a>
            </div>
            <a className="body text-[clamp(1.25rem,3.75vw,1.5rem)] text-[var(--color-white)]"> Buffalo, New York</a>
          </div>

          <div className="mt-auto">
            <p className="body md:w-full text-[clamp(.15rem,3.75vw,1.25rem)] mt-5 mb-[10px] text-white/85"> Aspiring Full Stack Software Engineer focused on building creative solutions that address problems from the simplest to the most complex. With experience under project managers, I have created projects that go into areas of web development, UX/UI design, and computer security. Going into the future, I have plans of diving into AI, specifically ML.</p>
            <div className="flex flex-col [@media(min-width:426px)]:flex-row gap-2 body"> 
              {contacts.map((contact, index) => (
                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="[@media(max-width:426px)]:justify-center [@media(max-width:540px)]:px-5 px-10 py-2 text-[14px] flex items-center gap-2 bg-[var(--color-primary)] rounded-2xl text-white hover-press drop-shadow-[0px_8px_16px_rgba(149,157,165,0.1)]">{contact.icon} {contact.name} </a>
              ))}
           </div>
          </div>
        </div>
        
        <img src="/selfie.jpg" className="w-3/8 h-fit rounded-2xl border-b-1 border-white/30 drop-shadow-black/20 drop-shadow-sm hidden lg:block"/>
      </div>
    </div>
          
    <div className="w-screen bg-gray-100 pb-30 pt-10 flex flex-col gap-35 
      px-10
      md:px-20
      lg:px-30
      xl:px-50
      2xl:px-70
      ">
      {/* skills and tech section + about me */}
      <div className='fade-in-section delay-200 w-full gap-10 lg:gap-0 flex flex-col lg:flex-row justify-between'>
        <div className="flex flex-col w-full text-center lg:text-left lg:w-4/8 justify-center-safe gap-3">
          <p id="skills" className="header text-[clamp(2rem,3.75vw,3.25rem)] text-[var(--color-primary)] drop-shadow-black/20 drop-shadow-sm"> TECHNOLOGIES </p>
          <div className="flex flex-wrap lg:gap-3">
            <div className="flex flex-col w-full gap-3 lg:border-black/10 lg:border lg:px-7 lg:py-5 rounded-4xl"> 
              <p className="oswald text-black text-2xl"> Frontend Skills</p>
              <div className='flex flex-row justify-center lg:justify-normal flex-wrap gap-3'>
                {skills.frontend.map((skill, index) => (
                  <div key={index}
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-2 py-1 text-[9px] lg:px-4 lg:py-2 rounded-xl lg:text-[16px] text-black hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] hover:border-[var(--color-primary)] transition cursor-default">
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
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-2 py-1 text-[9px] lg:px-4 lg:py-2 rounded-xl lg:text-[16px] text-black hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] hover:border-[var(--color-primary)] transition cursor-default">
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
                    className="body flex w-fit items-center gap-2 hover-press border border-black px-2 py-1 text-[9px] lg:px-4 lg:py-2 rounded-xl lg:text-[16px] text-black hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] hover:border-[var(--color-primary)] transition cursor-default">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full text-center lg:text-right lg:w-7/16 h-full">
            <p id="about" className="h-title text-[var(--color-primary)] text-[clamp(2.25rem,3.75vw,5.25rem)] drop-shadow-black/20 drop-shadow-sm"> ABOUT ME </p>
            <p className='body text-[clamp(.15rem,3.75vw,1.25rem)] text-black text-xl'>I love trying and learning new hobbies and skills. I've gotten into snowboarding but I keep busting my a**, and it isn't cheap! More seriously though, graphic design has been the hobby that shaped my creativity since middle school. And, after 8+ years of practice, I've created graphics for others, including YouTube banners, thumbnails, and even logos for gaming teams. It is partly the reason for the drive to build products and designs for myself and others. </p>
        </div>
      </div>
    </div>
    
    <div className="w-screen bg-gradient-to-br from-[var(--color-dark-bg-from)] to-[var(--color-dark-bg-to)] pb-60 pt-30 flex flex-col gap-35 drop-shadow-[0_-8px_12px_rgba(0,0,0,0.2)]
       px-10
      md:px-20
      lg:px-30
      xl:px-50
      2xl:px-70
      ">
      {/* my projects section */}
      <div className="fade-in-section delay-400 flex flex-col justify-center-safe items-center gap-6">
        <p id="projects" className="header text-[clamp(2.25rem,3.75vw,3.25rem)] font-semibold text-[var(--color-white)]"> MY PROJECTS </p>
        <div className="w-[calc(100%)] flex flex-col items-center xl:flex-row xl:flex-wrap gap-[50px]">
          {projects.map((project, index) => ( 
             <div onClick={() => {
                if (window.innerWidth <= 445) {
                  setProjectView(index + 1);
                }
              }} 
              key={index + 1} className="rounded-2xl border-b-1 border-white/30 bg-gray-100 w-full md:w-3/4 xl:w-[calc(50%-25px)] h-80 flex flex-col items-start drop-shadow-black/30 drop-shadow-sm hover-press">
              <div className="rounded-t-2xl h-5/16 w-full bg-black/20"> 
                <p className={`px-7 py-1 rounded-3xl ${project.status === "Completed" ? 'bg-[var(--color-status-complete)]' : 'bg-[var(--color-status-progress)]'} text-[14px] w-fit flex items-center ml-auto m-5 text-black`}> {project.status} </p>
              </div>
              <div className="flex flex-col p-5 gap-2 w-full">
                <div className='flex flex-row gap-3 items-center'>
                  <a className="h-body text-[clamp(1.5rem,3.75vw,2rem)] text-[var(--color-primary)] drop-shadow-sm drop-shadow-black/20"> {project.name} </a>
                  <a className='[@media(max-width:445px)]:hidden'>
                    <p onClick={()=> setProjectView(index + 1)} className="hover:scale-[1.05] active:scale-[1] transition body bg-[var(--color-primary)] w-fit mt-1 px-2 md:px-3 md:py-1 rounded-xl text-[clamp(.5rem,3vw,.8rem)] md:text-[clamp(.5rem,3vw,.8rem)] text-[var(--color-white)] drop-shadow-sm drop-shadow-black/10"> View </p>
                  </a>
                  {project.link && <a className="ml-auto [@media(max-width:445px)]:hidden" target="_blank" rel="noopener noreferrer" href={project.link} >
                  <FaExternalLinkAlt className="text-gray-900 mt-1 hover:drop-shadow-[0px_0px_5px_var(--color-primary)] transition hover:scale-[1.1] active:scale-[1]" size={30}/>
                  </a>}
                  {project.github && <a className={`[@media(max-width:445px)]:hidden ${!project.link && "ml-auto"}`} target="_blank" rel="noopener noreferrer" href={project.github} >
                  <FaGithub className="text-gray-900 mt-1 hover:drop-shadow-[0px_0px_5px_var(--color-primary)] transition hover:scale-[1.1] active:scale-[1]" size={30}/>
                  </a>}
                </div>
                <div className="flex flex-row flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <p key={i} className="body bg-gray-900 w-fit px-2 py-1 md:px-3 md:py-2 rounded-xl text-[clamp(.5rem,3vw,.8rem)] md:text-[clamp(.5rem,3vw,.8rem)] text-white drop-shadow-sm drop-shadow-black/10"> {tag} </p>
                  ))}
                </div>
                <a className="body text-black text-[clamp(.7rem,3vw,.8rem)] md:text-[clamp(4px,6vw,14px)] drop-shadow-sm drop-shadow-black/20"> {project.description} </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* experience section */}
      <div className="flex flex-col justify-center-safe items-center gap-6">
        <p id="experience" className="header text-[clamp(2.25rem,3.75vw,3.25rem)] text-[var(--color-white)]">EXPERIENCES</p>

        {/* Tab buttons */}
        <div className="flex flex-row gap-2">
          {experienceCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveExperience(index)}
              className={`w-[80px] flex justify-center [@media(min-width:510px)]:px-15 px-6 py-1 text-[10px] [@media(min-width:510px)]:py-2 rounded-2xl [@media(min-width:510px)]:text-[14px] hover-press drop-shadow-black/20 drop-shadow-sm transition-all
                ${activeExperience === index
                  ? 'bg-[var(--color-primary)] text-[var(--color-white)]'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Experience cards */}
        <div className="w-full flex flex-col gap-5 mt-2">
          {experienceData[activeExperience].map((entry, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl p-6 md:p-8 w-full drop-shadow-black/20 drop-shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                <div>
                  <p className="h-body text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--color-primary)] font-semibold">{entry.role}</p>
                  <p className="body text-black text-[clamp(.85rem,2vw,1rem)] font-medium">{entry.org} — {entry.location}</p>
                </div>
                <p className="body text-black/60 text-[clamp(.75rem,2vw,.9rem)] whitespace-nowrap mt-1">{entry.period}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-[6px] min-w-[6px] min-h-[6px] w-[6px] h-[6px] rounded-full bg-[var(--color-primary)]" />
                    <p className="body text-black/80 text-[clamp(.75rem,2vw,.95rem)]">{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

  </div>
  </>
  )
}

export default App