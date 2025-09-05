import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import OpenRightBar from '../components/layout/openRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

import ProjectHeader from '../components/layout/projectHeader';
import ProjectContent from '../components/layout/projectContent';
import SkillsDemonstrated from '../components/layout/skillsDemonstrated';

const Project = ({ project }) => {

  return (
    <div>
      <div className="scrollbar-hide md:overflow-hidden">
        <div className="flex flex-col min-h-screen flex-1 md:overflow-hidden md:bg-black">
          <TopBar />

          <div className="md:flex md:flex-1 md:overflow-hidden md:mx-2 md:space-x-2">
            <LeftBar />

            <div class="flex-1 bg-[#121212] rounded-lg overflow-y-auto h-[calc(100vh-9.5rem)]" id="mainContent">

              <div class="mx-5 pb-24 text-white">

                <ProjectHeader projectLink={project} />

                <ProjectContent projectLink={project} />

                {/* 
                <div class="mt-6" x-data="{ openTrack: null }">
                  <p class="ml-16 text-sm text-faded">Stage of Project</p>
                  <hr class="mt-2 border-[#535353]" />

                  <div class="mt-2">
                    <div>
                      <div 
                        @click="openTrack === 'code' ? openTrack = null : openTrack = 'code'"
                        class="flex flex-row gap-3 items-center hover:bg-[#282828] rounded-md p-2 cursor-pointer"
                      >
                        <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center"></div>
                        <div class="min-w-0 flex-1 pr-2">
                          <p class="font-semibold text-md truncate">Code</p>
                        </div>
                        <div class="min-w-0 flex-1 pr-2">
                          <p class="font-semibold text-sm text-faded">Project Showcase</p>
                        </div>
                      </div>

                      <div 
                        x-show="openTrack === 'code'" 
                        x-collapse 
                        class="bg-[#282828] rounded-md p-4"
                      >
                        <p class="text-md font-bold mb-4">Code</p>
                        <p class="text-sm text-faded">
                          Please refer to the GitHub link in the ‘Project Details’ section (on the right) for the code that could be retrieved for this project.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <div 
                        @click="openTrack === 'planning' ? openTrack = null : openTrack = 'planning'"
                        class="flex flex-row gap-3 items-center hover:bg-[#282828] rounded-md p-2 cursor-pointer"
                      >
                        <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center"></div>
                        <div class="min-w-0 flex-1 pr-2">
                          <p class="font-semibold text-md truncate">Planning</p>
                        </div>
                        <div class="min-w-0 flex-1 pr-2">
                          <p class="font-semibold text-sm text-faded">Project Showcase</p>
                        </div>
                      </div>

                      <div 
                        x-show="openTrack === 'planning'" 
                        x-collapse 
                        class="bg-[#282828] rounded-md p-4"
                      >
                        <p class="text-md font-bold mb-4">Planning</p>
                        <p class="text-sm text-faded">
                          (Was unable to retrieve the report I did the planning in but found code snippets based on me trying to 
                          experiment with creating a chess board using Object Oriented Programming in Python, and a draw.io file.)
                        </p>

                        <div class="flex justify-center items-center">
                          <div x-data="slideshow" class="md:w-full lg:w-160 h-full bg-[#282828] rounded-md">
                            <div x-ref="slider" class="h-full overflow-x-auto scrollbar-hide">
                              <div class="flex flex-nowrap md:gap-x-8 lg:gap-x-0">
                                <div class="slide flex-shrink-0 md:w-full lg:w-160 flex justify-center items-center mt-5 mb-2">
                                  <figure class="space-y-1">
                                    <img src="../imgs/p1-2.png" class="rounded-md md:h-full lg:h-160">
                                    <figcaption class="text-xs text-faded text-center">A class diagram planning what attributes each class should have.</figcaption>
                                    <p class="text-xs text-faded mt-5 text-center">Slide 1/2</p>
                                    <div @click="next()" class="flex justify-center mt-3 cursor-pointer hover:text-white">
                                      <i class="fa-solid fa-arrow-right fa-sm"></i>
                                    </div>
                                  </figure>
                                </div>
                                
                                <div class="slide flex-shrink-0 md:w-full lg:w-160 flex justify-center items-center mt-5 mb-2">
                                  <figure class="space-y-1">
                                    <img src="../imgs/p1-3.png" class="rounded-md md:w-full lg:w-140">
                                    <figcaption class="text-xs text-faded text-center">Output of non-graphical board in testing.</figcaption>
                                    <p class="text-xs text-faded mt-5 text-center">Slide 2/2</p>
                                    <div @click="prev()" class="flex justify-center mt-3 cursor-pointer hover:text-white">
                                      <i class="fa-solid fa-arrow-left fa-sm"></i>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div 
                        @click="openTrack === 'testVids' ? openTrack = null : openTrack = 'testVids'"
                        class="flex flex-row gap-3 items-center hover:bg-[#282828] rounded-md p-2 cursor-pointer"
                      >
                        <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center"></div>
                        <div class="min-w-0 flex-1 pr-2">
                          <p class="font-semibold text-md truncate">Testing Videos</p>
                        </div>
                        <div class="min-w-0 flex-1 pr-2">
                          <p class="font-semibold text-sm text-faded">Project Showcase</p>
                        </div>
                      </div>

                      <div 
                        x-show="openTrack === 'testVids'" 
                        x-collapse 
                        class="bg-[#282828] rounded-md p-4"
                      >
                        <p class="text-md font-bold mb-4">Testing Videos</p>

                        <div class="flex justify-center items-center">
                          <div x-data="slideshow" class="w-full h-full bg-[#282828] rounded-md">
                            <div x-ref="slider" class="h-full overflow-x-auto scrollbar-hide">
                              <div class="flex flex-nowrap md:gap-x-8 lg:gap-x-0">
                                <div class="slide flex-shrink-0 w-full flex justify-center items-center mt-5 mb-2">
                                  <figure class="space-y-1">
                                    <iframe 
                                      class="md:w-75 md:h-45 lg:w-135 lg:h-70 xl:w-180 xl:h-120"
                                      src="https://www.youtube.com/embed/LASGbPAbdbg?si=tXozBpew-1bOXWI2" 
                                      frameborder="0" 
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                      referrerpolicy="strict-origin-when-cross-origin" 
                                      allowfullscreen
                                    >
                                    </iframe>
                                    <figcaption class="text-xs text-faded text-center">Video on testing whether notation output in the terminal works or not.</figcaption>
                                    <p class="text-xs text-faded mt-5 text-center">Slide 1/2</p>
                                    <div @click="next()" class="flex justify-center mt-3 cursor-pointer hover:text-white">
                                      <i class="fa-solid fa-arrow-right fa-sm"></i>
                                    </div>
                                  </figure>
                                </div>
                                
                                <div class="slide flex-shrink-0 w-full flex justify-center items-center mt-5 mb-2">
                                  <figure class="space-y-1">
                                    <iframe 
                                      class="md:w-75 md:h-45 lg:w-135 lg:h-70 xl:w-180 xl:h-120"
                                      src="https://www.youtube.com/embed/LUSH0WPr_Rk?si=Aj9nW6bXaVHhyqic" 
                                      frameborder="0" 
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                      referrerpolicy="strict-origin-when-cross-origin" 
                                      allowfullscreen
                                    >
                                    </iframe>
                                    <figcaption class="text-xs text-faded text-center">Video on testing whether piece movement and special moves work as expected or not.</figcaption>
                                    <p class="text-xs text-faded mt-5 text-center">Slide 2/2</p>
                                    <div @click="prev()" class="flex justify-center mt-3 cursor-pointer hover:text-white">
                                      <i class="fa-solid fa-arrow-left fa-sm"></i>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                */}

                <SkillsDemonstrated projectLink={project} />
              </div>
            </div>
            

            <OpenRightBar projectLink={project} />
          </div>

          <BottomBar currentPage={project} />
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Project;