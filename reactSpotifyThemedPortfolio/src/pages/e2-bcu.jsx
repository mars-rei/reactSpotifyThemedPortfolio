import { useState, useEffect } from 'react';

import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

const ImageOverlay = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 150;
      const opacity = Math.min(scrollY / maxScroll, 0.8);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="fixed top-0 left-0 right-0 z-0 md:hidden">
      <img src="./images/e2-1.jpg" className="w-full aspect-square object-cover" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="absolute inset-0 bg-[#121212]" style={{ opacity: scrollOpacity }} id="image-overlay"></div>
    </div>
  );
};

const E2 = () => {

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
            <div class="md:flex-1 bg-[#121212] md:rounded-lg md:overflow-y-auto md:h-[calc(100vh-9.5rem)] md:overflow-x-hidden">

              <div class="relative text-white md:min-h-full">
                <ImageOverlay />

                <div class="hidden md:flex absolute inset-0 bg-gradient-to-b from-teal-600 to-[#121212] opacity-20 h-90"></div>

                <div class="relative z-10 min-h-screen md:min-h-reset mt-80 md:mt-0 pb-24 md:pb-0">

                  <div class="md:pt-80 md:pb-24">
                    <div class="px-4">
                      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">Birmingham City University</h1>
                    </div>
                
                    <div class="mt-3 p-4 bg-[#121212]">
                      <p class="text-xs md:text-sm text-faded md:text-white">From 2023 - Now</p>

                      <div>
                        <div class="mt-4 py-2 text-xl md:text-3xl font-bold">1st Year</div>

                        <div class="mt-4 py-2 text-lg md:text-2xl font-bold">1st Semester</div>
                          
                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            1
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Computer Programming</p>
                            <p class="text-xs md:text-sm text-faded">83%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5"> 
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            2
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Computer Systems</p>
                            <p class="text-xs md:text-sm text-faded">83%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                              3
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                              <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                              <p class="font-normal text-md">Website Design and Development</p>
                              <p class="text-xs md:text-sm text-faded">74%</p>
                          </div>
                        </div>

                        <div class="mt-4 py-2 text-lg md:text-2xl font-bold">2nd Semester</div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            1
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Data Structures and Algorithms</p>
                            <p class="text-xs md:text-sm text-faded">89%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            2
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Network Fundamentals</p>
                            <p class="text-xs md:text-sm text-faded">85%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            3
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Innovation Project</p>
                            <p class="text-xs md:text-sm text-faded">76%</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div class="mt-4 py-2 text-xl md:text-3xl font-bold">2nd Year</div>

                        <div class="mt-4 py-2 text-lg md:text-2xl font-bold">1st Semester</div>
                        
                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            1
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Object Oriented Programming</p>
                            <p class="text-xs md:text-sm text-faded">79%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            2
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Operating Systems and DevOps</p>
                            <p class="text-xs md:text-sm text-faded">75%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            3
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Database and Web Application Development</p>
                            <p class="text-xs md:text-sm text-faded">72%</p>
                          </div>
                        </div>

                        <div class="mt-4 py-2 text-lg md:text-2xl font-bold">2nd Semester</div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            1
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Software Design</p>
                            <p class="text-xs md:text-sm text-faded">87%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            2
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Computer Mathematics and Declarative Programming</p>
                            <p class="text-xs md:text-sm text-faded">80%</p>
                          </div>
                        </div>

                        <div class="flex flex-row gap-3 mt-3 items-center md:ml-5">
                          <div class="flex items-center justify-center w-2 font-normal text-xs md:text-sm md:text-faded">
                            3
                          </div>

                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-computer fa-2x text-[#121212]"></span>
                          </div>

                          <div>
                            <p class="font-normal text-md">Cyber Security</p>
                            <p class="text-xs md:text-sm text-faded">76%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* closed now playing section */}
            <ClosedRightBar />

          </div>

          {/* bottom */}
          <BottomBar currentPage="/e2-bcu" />

        </div>
      </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
  );
};

export default E2;