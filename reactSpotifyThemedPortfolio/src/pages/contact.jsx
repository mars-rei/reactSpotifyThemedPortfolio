import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

const Contact = () => {

  return (
    <div>
      <div className="scrollbar-hide md:overflow-hidden">
        <div className="flex flex-col min-h-screen flex-1 md:overflow-hidden md:bg-black">
          {/* top */}
          <TopBar />

          {/* middle */}
          <div class="md:flex md:flex-1 md:overflow-hidden md:mx-2 md:space-x-2">

            {/* nav bar */}
            <LeftBar />

            {/* scrollable content*/}
            <div class="md:flex-1 md:bg-[#121212] md:rounded-lg md:overflow-y-auto md:h-[calc(100vh-9.5rem)] md:scollbar-custom">

              <div class="my-8 md:my-0 mx-5 text-white md:flex md:items-center md:flex-col pb-24">
                <p class="text-2xl lg:text-3xl font-bold md:mt-10">Want to connect or view more of my work?</p>
                <p class="mt-10 text-2xl lg:text-3xl font-bold lg:mt-10 md:mt-5">Contact me</p>

                <div class="md:w-full md:flex md:flex-col lg:flex-row lg:flex-wrap md:justify-center md:gap-8 md:mt-8 md:items-center">
                  <div class="hidden md:inline-block rounded-lg bg-[#282828] w-80 h-90 px-5 py-4 mt-5 pt-14 space-y-3">
                    <div class="flex space-x-2 items-center">
                      <i class="fa fa-address-book text-2xl"></i>
                      <p class="font-bold text-md">Contact</p>
                    </div>
                    <p class="text-3xl font-bold text-red-300">Gmail</p>
                    <hr class="border-[#535353]" />
                    <ul class="text-md font-normal list-disc ml-6">
                      <li>
                          <p>Fast responses (usually within 24 hours)</p>
                      </li>
                      <li>
                          <p>Best for formal inquiries or collaborations</p>
                      </li>
                    </ul>
                    <a 
                      href="mailto:imidcen@gmail.com?subject=Inquiry" 
                      class="py-2 rounded-full bg-red-300 flex items-center justify-center mt-4 text-[#181818] font-bold"
                    >
                      Email Me
                    </a>
                    <p class="text-xs text-faded flex justify-center">Your message goes straight to my inbox.</p> 
                  </div>

                  <a href="mailto:imidcen@gmail.com?subject=Inquiry" class="md:hidden">
                    <div class="rounded-lg bg-[#282828] w-full px-3 py-4 mt-5 space-y-3">
                      <div class="flex space-x-2 items-center">
                        <i class="fa fa-address-book text-xl"></i>
                        <p class="font-bold text-xs">Contact</p>
                      </div>
                      <p class="text-lg font-bold text-red-300">Gmail</p>
                      <ul class="list-disc ml-6">
                        <li>
                          <p class="text-sm">Fast responses (usually within 24 hours)</p>
                        </li>
                        <li>
                          <p class="text-sm">Best for formal inquiries or collaborations</p>
                        </li>
                      </ul>
                      <p class="text-xs text-faded flex justify-center">Your message goes straight to my inbox.</p> 
                    </div>
                  </a>


                  <div class="hidden md:inline-block rounded-lg bg-[#282828] w-80 h-90 px-5 py-4 mt-5 pt-14 space-y-3">
                    <div class="flex space-x-2 items-center">
                      <i class="fa fa-address-book text-2xl"></i>
                      <p class="font-bold text-md">Contact</p>
                    </div>
                    <p class="text-3xl font-bold text-blue-300">LinkedIn</p>
                    <hr class="border-[#535353]" />
                    <ul class="text-md font-normal list-disc ml-6">
                      <li>
                          <p>1 post, 300+ connections</p>
                      </li>
                      <li>
                          <p>Connect to expand our networks</p>
                      </li>
                    </ul>
                    <a 
                      href="https://www.linkedin.com/in/imogen-dicen/" 
                      class="py-2 rounded-full bg-blue-300 flex items-center justify-center mt-16 text-[#181818] font-bold"
                    >
                      Add Me On LinkedIn
                    </a>
                    <p class="text-xs text-faded flex justify-center">Profile stalking encouraged.</p> 
                  </div>

                  <a href="https://www.linkedin.com/in/imogen-dicen/" class="md:hidden">
                    <div class="rounded-lg bg-[#282828] w-full px-3 py-4 mt-5 space-y-3">
                      <div class="flex space-x-2 items-center">
                        <i class="fa fa-address-book text-xl"></i>
                        <p class="font-bold text-xs">Contact</p>
                      </div>
                      <p class="text-lg font-bold text-blue-300">LinkedIn</p>
                      <ul class="list-disc ml-6">
                        <li>
                          <p class="text-sm">1 post, 300+ connections</p>
                        </li>
                        <li>
                          <p class="text-sm">Connect to expand our networks</p>
                        </li>
                      </ul>
                      <p class="text-xs text-faded flex justify-center">Profile stalking encouraged.</p> 
                    </div>
                  </a>
                </div>


                <p class="text-2xl lg:text-3xl font-bold mt-6 md:mt-10">Links to my work</p>

                <div class="md:w-full md:flex md:flex-col lg:flex-row lg:flex-wrap md:justify-center md:gap-8 md:items-center md:mt-5">
                  <div class="hidden md:inline-block rounded-lg bg-[#282828] w-80 h-90 px-5 py-4 mt-5 pt-14 space-y-3">
                    <div class="flex space-x-2 items-center">
                      <i class="fa fa-briefcase text-2xl"></i>
                      <p class="font-bold text-md">Portfolio</p>
                    </div>
                    <p class="text-3xl font-bold text-purple-200">Github</p>
                    <hr class="border-[#535353]" />
                    <ul class="text-md font-normal list-disc ml-6">
                      <li>
                          <p>Personal and academic work</p>
                      </li>
                      <li>
                          <p>Committed!</p>
                      </li>
                    </ul>
                    <a 
                      href="https://github.com/mars-rei" 
                      class="py-2 rounded-full bg-purple-200 flex items-center justify-center mt-16 text-[#181818] font-bold"
                    >
                      View My Code
                    </a>
                    <p class="text-xs text-faded flex justify-center">GitHub green > Anilist green. (This is a lie.)</p> 
                  </div>

                  <a href="https://github.com/mars-rei" class="md:hidden">
                    <div class="rounded-lg bg-[#282828] w-full px-3 py-4 mt-5 space-y-3">
                      <div class="flex space-x-2 items-center">
                        <i class="fa fa-briefcase text-xl"></i>
                        <p class="font-bold text-xs">Portfolio</p>
                      </div>
                      <p class="text-lg font-bold text-purple-200">Github</p>
                      <ul class="list-disc ml-6">
                        <li>
                          <p class="text-sm">Personal and academic work</p>
                        </li>
                        <li>
                          <p class="text-sm">Committed!</p>
                        </li>
                      </ul>
                      <p class="text-xs text-faded flex justify-center">GitHub green > Anilist green. (This is a lie.)</p> 
                    </div>
                  </a>

                  
                  <div class="hidden md:inline-block rounded-lg bg-[#282828] w-80 h-90 px-5 py-4 mt-5 pt-14 space-y-3">
                    <div class="flex space-x-2 items-center">
                      <i class="fa fa-briefcase text-2xl"></i>
                      <p class="font-bold text-md">Portfolio</p>
                    </div>
                    <p class="text-3xl font-bold text-orange-300">Notion Portfolio</p>
                    <hr class="border-[#535353]" />
                    <ul class="text-md font-normal list-disc ml-6">
                      <li>
                          <p>All projects, notes, and media</p>
                      </li>
                      <li>
                          <p>Updated regularly</p>
                      </li>
                    </ul>
                    <a 
                      href="https://reminiscent-flannel-fe7.notion.site/my-projects-0cd061a938b0467d98cb56019a970f6d?source=copy_link" 
                      class="py-2 rounded-full bg-orange-300 flex items-center justify-center mt-16 text-[#181818] font-bold"
                    >
                      View My Projects
                    </a>
                    <p class="text-xs text-faded flex justify-center">A backup portfolio storing only project details.</p> 
                  </div>

                  <a href="https://reminiscent-flannel-fe7.notion.site/my-projects-0cd061a938b0467d98cb56019a970f6d?source=copy_link" class="md:hidden">
                    <div class="rounded-lg bg-[#282828] w-full px-3 py-4 mt-5 space-y-3">
                      <div class="flex space-x-2 items-center">
                        <i class="fa fa-briefcase text-xl"></i>
                        <p class="font-bold text-xs">Portfolio</p>
                      </div>
                      <p class="text-lg font-bold text-orange-300">Notion Portfolio</p>
                      <ul class="list-disc ml-6">
                        <li>
                          <p class="text-sm">All projects, notes, and media</p>
                        </li>
                        <li>
                          <p class="text-sm">Updated regularly</p>
                        </li>
                      </ul>
                      <p class="text-xs text-faded flex justify-center">A backup portfolio storing only project details.</p> 
                    </div>
                  </a>


                  <div class="hidden md:inline-block rounded-lg bg-[#282828] w-80 h-90 px-5 py-4 mt-5 pt-14 space-y-3">
                    <div class="flex space-x-2 items-center">
                      <i class="fa fa-briefcase text-2xl"></i>
                      <p class="font-bold text-md">Portfolio</p>
                    </div>
                    <p class="text-3xl font-bold text-green-300">DataCamp</p>
                    <hr class="border-[#535353]" />
                    <ul class="text-md font-normal list-disc ml-6">
                      <li>
                          <p>Slowly but surely levelling up</p>
                      </li>
                      <li>
                          <p>"I swear I’ll finish this track soon"</p>
                      </li>
                    </ul>
                    <a 
                      href="https://www.datacamp.com/portfolio/marsrei"
                      class="py-2 rounded-full bg-green-300 flex items-center justify-center mt-16 text-[#181818] font-bold"
                    >
                      Learn With Me
                    </a>
                    <p class="text-xs text-faded flex justify-center">Learning at the speed of procrastination.</p> 
                  </div>

                  <a href="https://www.datacamp.com/portfolio/marsrei" class="md:hidden">
                    <div class="rounded-lg bg-[#282828] w-full px-3 py-4 mt-5 space-y-3">
                      <div class="flex space-x-2 items-center">
                        <i class="fa fa-briefcase text-xl"></i>
                        <p class="font-bold text-xs">Portfolio</p>
                      </div>
                      <p class="text-lg font-bold text-green-300">DataCamp</p>
                      <ul class="list-disc ml-6">
                        <li>
                          <p class="text-sm">Slowly but surely levelling up</p>
                        </li>
                        <li>
                          <p class="text-sm">"I swear I’ll finish this track soon"</p>
                        </li>
                      </ul>
                      <p class="text-xs text-faded flex justify-center">Learning at the speed of procrastination.</p> 
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* closed now playing section */}
            <ClosedRightBar />

          </div>

          {/* bottom */}
          <BottomBar currentPage="/contact" />

        </div>
      </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
  );
};

export default Contact;