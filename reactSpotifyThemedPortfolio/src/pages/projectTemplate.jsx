import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import OpenRightBar from '../components/layout/openRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

import ProjectHeader from '../components/layout/projectHeader';
import MobileProjectDetails from '../components/layout/mobileProjectDetails';
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

                <MobileProjectDetails projectLink={project} />

                <ProjectContent projectLink={project} />

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