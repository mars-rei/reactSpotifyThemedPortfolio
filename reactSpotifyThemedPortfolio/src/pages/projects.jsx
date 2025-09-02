import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

const Projects = () => {
  const [activeStatus, setActiveStatus] = useState(null);
  
  useEffect(() => {
    const urlFilter = new URLSearchParams(window.location.search);
    setActiveStatus(urlFilter.get('filter') || null);
  }, []);

  const projects = [
    { title: 'React Spotify Themed Portfolio', icon: 'fa fa-briefcase', status: 'ongoing', author: 'mars.rei', path: '' },
    { title: 'Random Lyric Generator', icon: 'fa fa-dice', status: 'ongoing', author: 'mars.rei', path: '' },
    { title: 'Summer of \'25 Blog', icon: 'fa fa-pen-to-square', status: 'ongoing', author: 'mars.rei', path: '' },
    { title: 'Mastermind Command-Line Game', status: 'complete', img: './images/p8-1.png', author: 'mars.rei + 1', path: '' },
    { title: 'BMW Group Physical Asset Tracking System', status: 'complete', img: './images/p7-1.png', author: 'mars.rei + 5', path: '' },
    { title: 'Spotify Themed Portfolio', img: './images/p5-1.png', status: 'complete', author: 'mars.rei', path: '' },
    { title: 'CompClub Hub', status: 'complete', img: './images/p4-1.png', author: 'mars.rei + 2', path: '' },
    { title: 'Flight Booking System in Java', status: 'complete', img: './images/p3-1.png', author: 'mars.rei + 1', path: '' },
    { title: 'BookBot', status: 'complete', img: './images/p2-1.jpg', author: 'mars.rei + 4', path: '' },
    { title: 'IM SwissGambit', status: 'complete', img: './images/p1-1.png', author: 'mars.rei', path: '' },
    { title: 'CompClub Hub 2.0', icon: 'fa fa-trophy', status: 'ongoing', author: 'mars.rei', path: '' },
    { title: 'Fire on Marz', icon: 'fa fa-palette', status: 'ongoing', author: 'mars.rei', path: '' },
    { title: 'Digital Scrapbook', icon: 'fa fa-memory', status: 'ongoing', author: 'mars.rei + ?', path: '' }
  ];

  const toggleStatus = (status) => {
    setActiveStatus(activeStatus === status ? null : status);
  };

  const filteredProjects = activeStatus 
    ? projects.filter(p => p.status === activeStatus)
    : projects;

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
            <div class="md:flex-1 md:bg-[#121212] md:rounded-lg md:overflow-y-auto h-[calc(100vh-9.5rem)] md:scollbar-custom">
              <div class="mx-5 pb-24 text-white">
                <div class="mt-6 flex flex-row items-center"> 
                  <div class="md:hidden">
                    <img src="./images/headshot.jpeg" class="w-8 rounded-full" />
                  </div>
                  
                  <div class="ml-2 md:ml-0 md:mt-14">
                    <p class="text-xl md:text-3xl font-bold">My Projects</p>
                  </div>
                </div>

                <div class="mt-4 space-x-1">
                  {activeStatus !== 'ongoing' && (
                    <button 
                      onClick={() => toggleStatus('complete')} 
                      className={`rounded-full inline-block py-2 px-4 ${
                        activeStatus === 'complete' 
                          ? 'bg-[#1DB954] md:bg-white text-[#121212]' 
                          : 'bg-[#282828]'
                      }`}
                    >
                      <p className="text-xs md:text-sm">Complete / Archived</p>
                    </button>
                  )}

                  {activeStatus !== 'complete' && (
                    <button 
                      onClick={() => toggleStatus('ongoing')} 
                      className={`rounded-full inline-block py-2 px-4 ${
                        activeStatus === 'ongoing' 
                          ? 'bg-[#1DB954] md:bg-white text-[#121212]' 
                          : 'bg-[#282828]'
                      }`}
                    >
                      <p className="text-xs md:text-sm">Ongoing</p>
                    </button>
                  )}
                </div>
              
                <div class="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4 md:gap-6 mt-5">
                  {filteredProjects.map(project => (
                    <Link to={project.path} className="contents" key={project.title} title={project.title}>
                      <div className="min-w-0">
                          <div className="w-full aspect-square bg-[#535353] md:rounded-md">
                              {project.img ? (
                                <img src={project.img} className="md:rounded-md" alt={project.title} />
                              ) : (
                                <div className="flex items-center justify-center h-full fa-4x">
                                  <i className={project.icon + " text-[#181818]"}></i>
                                </div>
                              )}
                          </div>
                          <p className="text-xs md:text-sm md:font-semibold truncate mt-1">{project.title}</p>
                          <p className="text-xs md:text-sm text-faded">{project.author}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* closed now playing section */}
            <ClosedRightBar />

          </div>

          {/* bottom */}
          <BottomBar currentPage="/projects" />

        </div>
      </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
  );
};

export default Projects;