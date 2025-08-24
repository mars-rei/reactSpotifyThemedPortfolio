import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

import Profile from '../components/layout/profile'; 

import PlaylistSection from '../components/layout/playlistSection'; 
import archivedProjects from '../data/archivedProjects'; 
import ongoingProjects from '../data/ongoingProjects'; 
import topCertifications from '../data/topCertifications'; 

import PlaylistButtons from '../components/layout/playlistButtons'; 
import skills from '../data/skills'; 
import links from '../data/links'; 


import ArtistSection from '../components/layout/artistSection'; 
import educations from '../data/educations'; 

const Home = () => {
  return (
    <div>
      <div className="scrollbar-hide md:overflow-hidden">
        <div className="hidden md:flex flex-col min-h-screen flex-1 overflow-hidden bg-black">
          {/* top */}
          <TopBar />

          {/* middle */}
          <div class="flex flex-1 overflow-hidden mx-2 space-x-2">

            {/* nav bar */}
            <LeftBar />

            {/* scrollable content*/}
            <div className="flex-1 bg-[#121212] rounded-lg overflow-y-auto h-[calc(100vh-9.5rem)] overflow-x-hidden" id="mainContent">
              <div class="relative text-white min-h-screen">
                <div class="absolute inset-0 bg-gradient-to-b from-[#8094af] to-[#121212] opacity-20 h-90 z-0"></div>

                <div class="relative z-10">
                  <Profile/>

                  <div class="mx-5 pb-24 text-white">
                    <div class="my-8">
                      <p class="text-2xl font-bold">About Me</p>
                      <p class="mt-2 mb-4 text-sm">
                        Hi, my name is Imogen, but you can call me Mars! I'm interested in web development, full-stack development, and data engineering.
                      </p>
                    </div>

                    <PlaylistSection data={archivedProjects} />

                    <PlaylistSection data={ongoingProjects} />

                    <PlaylistButtons data={skills} />

                    <PlaylistSection data={topCertifications} />

                    <ArtistSection data={educations} />

                    <PlaylistButtons data={links} />

                  </div>
                </div>
              </div>
            </div>


            {/* closed now playing section */}
            <ClosedRightBar />

          </div>

          {/* bottom */}
          <BottomBar />

        </div>
      </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
    
  );
};

export default Home;