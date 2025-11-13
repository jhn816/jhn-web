import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

function App() {
  const skills = [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Tailwind",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React",
    "MySQL",
    "PHP",
    "Figma",
    "Agile Methodology",
    "Scrumboard",
    "Adobe Photoshop"
  ];

  return (<>

    <div class="w-screen bg-gradient-to-br from-gray-900 to-gray-600 pb-60 pt-5 px-70 flex flex-col gap-35">
      <div class="w-[calc(100%)] rounded-2xl h-18 bg-white/5 flex flex-row items-center justify-center gap-15 border-b-1 border-white/30"> 
        <a href="#about" className="text-base text-white font-light cursor-pointer">About Me</a>
        <a href="#skills" className="text-base text-white font-light cursor-pointer">Skills</a>
        <a href="#projects" className="text-base text-white font-light cursor-pointer">Projects</a>
        <a href="#experience" className="text-base text-white font-light cursor-pointer">Experience</a>
      </div>

      <div class="flex flex-row gap-20">
        <div class=" w-5/8 h-80 flex-col flex">
          <div class="flex flex-col gap-[10px]"> 
            <div class="flex flex-row gap-1.5">
              <a id="about" class="text-3xl text-white"> Hi, My name is </a>
              <a className="text-3xl bg-gradient-to-r from-[#0085E9] to-[#0049E9] bg-clip-text text-transparent"> Justin Nguyen </a>
            </div>
            <a class="text-2xl text-white"> Buffalo, New York</a>
          </div>

          <div class="mt-auto">
            <p class="text-xl mt-5 mb-[10px] text-white"> Aspiring Full Stack Software Engineer focused on building creative solutions that address problems from the simplest to the most complex. With experience under project managers, I have created projects that go into areas of web development, UX/UI design, and cybersecurity. Going into the future, I have plans of diving into AI, specifically ML.</p>
            <div class="flex flex-row gap-2"> 
              <p class="bg-[#0075E9] w-auto px-10 py-2 rounded-2xl text-[14px] text-white"> Contact </p>
              <p class="bg-[#0075E9] w-auto px-10 py-2 rounded-2xl text-[14px] text-white"> LinkedIn </p>
              <p class="bg-[#0075E9] w-auto px-10 py-2 rounded-2xl text-[14px] text-white"> GitHub </p>
            </div>
          </div>
        </div>
        <div class="w-3/8 h-80 bg-blue-600 rounded-2xl  border-b-1 border-white/30 drop-shadow-xl drop-shadow-black/10">

        </div>
      </div>

      <div class="flex flex-col justify-center-safe items-center gap-6">
        <p id="skills" class="text-3xl text-white"> Technologies & Skills </p>
        <div class="flex flex-wrap justify-center gap-4 max-w-5xl">
          {skills.map((skill, index) => (
            <p 
              key={index}
              className="border border-white px-5 py-2 rounded-xl text-[14px] text-white hover:bg-[#0075E9] hover:border-[#0075E9] transition cursor-default"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>

      <div class="flex flex-col justify-center-safe items-center gap-6">
        <p id="projects" class="text-3xl text-white"> My Projects </p>
        <div class="w-[calc(100%)] flex flex-row flex-wrap gap-[50px]">
          <div class="rounded-2xl border-b-1 border-white/30 bg-[#0075E9] w-[calc(50%-25px)] h-80 flex flex-col items-start drop-shadow-xl drop-shadow-black/10">
            <div class="rounded-t-2xl h-5/16 w-full bg-black/30"> 
              <p class="px-7 py-1 rounded-4xl bg-green-300 text-[14px] w-fit flex items-center ml-auto m-5 text-black"> Completed </p>
            </div>
            <div class="flex flex-col p-5 gap-2 w-full">
              <a class="text-white text-3xl font-semibold"> The Melting Pot </a>
              <div class="flex flex-row gap-1">
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> React </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> JavaScript </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> HTML/CSS </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> A/B & Moderated Testing </p>
              </div>
              <a class="text-white text-[16px] "> A cooking website developed by </a>
            </div>
          </div>

          <div class="rounded-2xl border-b-1 border-white/30 bg-[#0075E9] w-[calc(50%-25px)] h-80 flex flex-col items-start drop-shadow-xl drop-shadow-black/10">
            <div class="rounded-t-2xl h-5/16 w-full bg-black/30"> 
              <p class="px-7 py-1 rounded-4xl bg-yellow-200 text-[14px] w-fit flex items-center ml-auto m-5 text-black"> In Progress </p>
            </div>
            <div class="flex flex-col p-5 gap-2 w-full">
              <a class="text-white text-3xl font-semibold"> Lambda Phinance </a>
              <div class="flex flex-row gap-1">
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> MongoDB </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> Express.js </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> React </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> Node.js </p>
              </div>
              <a class="text-white text-[16px] "> A cooking website developed by </a>
            </div>
          </div>

          <div class="rounded-2xl border-b-1 border-white/30 bg-[#0075E9] w-[calc(50%-25px)] h-80 flex flex-col items-start drop-shadow-xl drop-shadow-black/10">
            <div class="rounded-t-2xl h-5/16 w-full bg-black/30">   
              <p class="px-7 py-1 rounded-4xl bg-yellow-200 text-[14px] w-fit flex items-center ml-auto m-5 text-black"> In Progress </p>
            </div>
            <div class="flex flex-col p-5 gap-2 w-full">
              <a class="text-white text-3xl font-semibold"> Pet Patrol </a>
              <div class="flex flex-row gap-1">
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> React </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> JavaScript </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> MySQL </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> PHP </p>
              </div>
              <a class="text-white text-[16px] "> A cooking website developed by </a>
            </div>
          </div>

          <div class="rounded-2xl border-b-1 border-white/30 bg-[#0075E9] w-[calc(50%-25px)] h-80 flex flex-col items-start drop-shadow-xl drop-shadow-black/10">
            <div class="rounded-t-2xl h-5/16 w-full bg-black/30"> 
              <p class="px-7 py-1 rounded-4xl bg-green-300 text-[14px] w-fit flex items-center ml-auto m-5 text-black"> Completed </p>
            </div>
            <div class="flex flex-col p-5 gap-2 w-full">
              <a class="text-white text-3xl font-semibold"> Auction Marketplace </a>
              <div class="flex flex-row gap-1">
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> Django </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> MySQL </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> WebSockets </p>
                <p class="bg-gray-900 w-fit px-4 py-2 rounded-xl text-[14px] text-white"> Nginx </p>
              </div>
              <a class="text-white text-[16px] "> A cooking website developed by </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center-safe items-center gap-6">
        <p id="projects" class="text-3xl text-white"> Experience</p>
        <div class="flex flex-row gap-2">
          <p class="bg-[#0075E9] w-auto px-10 py-2 rounded-2xl text-[14px] text-white"> Work </p>
          <p class="bg-[#0075E9] w-auto px-10 py-2 rounded-2xl text-[14px] text-white"> Academic </p>
          <p class="bg-[#0075E9] w-auto px-10 py-2 rounded-2xl text-[14px] text-white"> Volunteer </p>
        </div>
      </div>

    </div>
    </>
  )
}

export default App