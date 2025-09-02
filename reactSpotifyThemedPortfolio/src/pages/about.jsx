import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

import ArtistSection from '../components/layout/artistSection'; 
import ArtistPopularSongs from '../components/layout/artistPopularSongs'; 
import educations from '../data/educations'; 

import PlaylistSection from '../components/layout/playlistSection'; 
import highlightedProjects from '../data/highlightedProjects'; 

const IntroductionOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openIntro = () => setIsOpen(true);
  const closeIntro = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeIntro();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) closeIntro();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <div className="py-2 text-2xl font-bold">About</div>

      <div className="relative lg:w-200 w-153 mt-3 cursor-pointer" onClick={openIntro}>
        <img src="/images/fullHeadshot.jpg" className="w-full object-cover rounded-md" />
        
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-md"></div>

        <div className="flex w-full p-4 absolute bottom-0 left-0">
          <div className="flex-1 mb-8 ml-8 lg:mr-60 md:mr-40">
            <p className="text-md font-semibold pb-2">340 connections</p>
            <p className="text-md font-normal flex-1">
              I'm Imogen, but you can call me Mars! A final year Computer Science student 
              interested in UX/UI design, full-stack development, and data engineering.
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          id="introduction" 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={handleOverlayClick}
        >
          <div className="bg-[#121212] rounded-md w-180 h-150 overflow-y-scroll m-5 scrollbar-hide">
            <div className="bg-black flex justify-center px-20">
              <img src="/images/fullHeadshot.jpg" />
            </div>
            
            <div className="m-5 flex flex-row">
              <div class="ml-4 mt-4 text-sm">
                <a href="mailto:imidcen@gmail.com?subject=Inquiry">
                  <div class="flex items-center space-x-3">
                    <span class="fa fa-envelope fa-lg w-6"></span>
                    <p class="font-semibold">Gmail</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/imogen-dicen/">
                  <div class="flex items-center space-x-3 mt-3">
                    <span class="fa-brands fa-linkedin fa-lg w-6"></span>
                    <p class="font-semibold">LinkedIn</p>
                  </div>
                </a>
                
                <a href="https://github.com/mars-rei">
                  <div class="flex items-center space-x-3 mt-3">
                    <span class="fa-brands fa-github fa-lg w-6"></span>
                    <p class="font-semibold">Github</p>
                  </div>
                </a>

                <a href="https://www.datacamp.com/portfolio/marsrei">
                  <div class="flex items-center space-x-3 mt-3">
                    <span class="fa fa-magnifying-glass-chart fa-lg w-6"></span>
                    <p class="font-semibold">DataCamp</p>
                  </div>
                </a>

                <a href="https://reminiscent-flannel-fe7.notion.site/my-projects-0cd061a938b0467d98cb56019a970f6d?source=copy_link">
                  <div class="flex items-center space-x-3 mt-3">
                    <span class="fa fa-briefcase fa-lg w-6 pr-2"></span>
                    <p class="font-semibold">Backup Project Portfolio</p>
                  </div>
                </a>
              </div>

              <div class="mx-4 mt-3 space-y-3 text-faded text-md">
                <p>
                  こんにちは! Bonjour! Hallo! Hi!
                </p>

                <p>
                  I'm Imogen, but you can call me Mars! I'm a second year Computer Science student with 
                  current interests in UX/UI design, full-stack web development and data engineering.
                </p>

                <p>
                  Originally, I chose my major out of a love for coding and a desire to study the many 
                  topics this field has to offer, but of course, my creativity has gravitated me towards 
                  branches of computer science that mix technical skill with creative thinking.
                </p>

                <p>
                  Right now, I have many ideas I'm excited to pursue, but I'm currently focusing on the 
                  three projects I believe will help me grow both technically and creatively as a software 
                  engineer (see the Projects section for more information):
                </p>

                <ul className="list-disc ml-6 mr-2">
                  <li>
                    Spotify Themed Portfolio
                  </li>
                  <li>
                    Summer of '25 Blog
                  </li>
                  <li>
                    CompClub Hub 2.0
                  </li>
                </ul>

                <p>
                  Throughout my time at university, I have discovered myself to be a reliable team 
                  leader, leading my group mates to success. Highlights include:
                </p>

                <ul className="list-disc ml-6 mr-2">
                  <li>
                    Winning 3rd place in the Innovative category at BCU's Innovation Festival 
                    2024 with BookBot and TakeFive
                  </li>
                  <li>
                    Scoring the highest mark in our section on our presentation for our software 
                    design proposal and research
                  </li>
                </ul>

                <div className="mt-6 flex flex-row items-center gap-x-2">
                  <img src="/images/headshot.jpeg" className="rounded-full w-6 h-6" />
                  <p className="text-md text-gray-400">Last updated on 1st September</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



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
      <img src="./images/headshot.jpeg" className="w-full aspect-square object-cover" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="absolute inset-0 bg-[#121212]" style={{ opacity: scrollOpacity }} id="image-overlay"></div>
    </div>
  );
};



const About = () => {
  return (
    <div>
      <div className="scrollbar-hide md:overflow-hidden">
        <div className="flex flex-col min-h-screen flex-1 md:overflow-hidden bg-black">
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
                    <div class="md:ml-4 md:-mt-20 px-4 md:px-0">
                      <h1 class="md:text-7xl lg:text-8xl text-4xl font-bold">Imogen Dicen</h1>
                    </div>
                    
                    <div class="mt-3 p-4 md:p-0 md:px-5 bg-[#121212]">
                      <p class="text-xs md:text-sm text-faded md:text-white md:font-normal">320 connections</p>

                      <div>
                        <div class="mt-4 py-2 text-lg md:text-2xl font-bold">Areas of Interest</div>

                        <div class="flex flex-row items-center gap-3 mt-3 md:ml-5">
                          <div class="font-normal text-xs md:text-sm md:text-faded">
                            1
                          </div>
                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-code fa-2x text-[#121212]"></span>
                          </div>
                          <div>
                            <p class="font-normal text-md">Web development</p>
                            <p class="text-xs md:text-sm text-faded">Designing and coding full-stack websites.</p>
                          </div>
                        </div>

                        <div class="flex flex-row items-center gap-3 mt-3 md:mt-5 md:ml-5">
                          <div class="font-normal text-xs md:text-sm md:text-faded">
                            2
                          </div>
                          <div class="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                            <span class="fa fa-database fa-2x text-[#121212]"></span>
                          </div>
                          <div>
                            <p class="font-normal text-md">Data Engineering</p>
                            <p class="text-xs md:text-sm text-faded">SQL database design & data pipelines.</p>
                          </div>
                        </div>
                      </div>

                      <div class="md:hidden">
                        <ArtistPopularSongs data={educations} />
                      </div>

                      <div class="hidden md:inline-block">
                        <ArtistSection data={educations} />
                      </div>
                      
                      <PlaylistSection data={highlightedProjects} />

                      <div class="mt-6 pb-2 hidden md:inline-block">
                        <IntroductionOverlay />
                      </div>

                      <Link to="/introduction">
                        <div class="mt-6 pb-2 md:hidden">
                          <div class="py-2 text-lg font-bold">About</div>

                          <a href="introduction.html">
                            <div class="relative w-full">
                              <img src="./images/headshot.jpeg" class="w-full aspect-square object-cover rounded-xl" />
                              
                              <div class="absolute bottom-0 left-0 right-0 h-3/10 bg-[#282828] rounded-b-xl"></div>

                              <div class="flex w-full p-4 absolute bottom-0 left-0">
                                <div class="flex-1">
                                  <p class="text-xs">3rd Year Student</p>
                                  <p class="text-lg font-semibold">Imogen Dicen</p>
                                  <p class="text-xs font-normal text-faded">340 connections</p>
                                  <div class="flex items-center justify-between mt-4">  
                                    <p class="text-xs font-normal text-faded">
                                      I'm Imogen, but you can call me Mars! A final year Computer Science student 
                                      interested in UX/UI design, full-stack development, and data ...
                                      <span className='font-semibold text-white'> see more</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* closed now playing section */}
            <ClosedRightBar />

          </div>

          {/* bottom */}
          <BottomBar currentPage="/about" />

        </div>
      </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
  );
};

export default About;