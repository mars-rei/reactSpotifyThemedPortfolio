import { useState } from 'react';

import projects from '../../data/projects';

import VideoSlideshow from './videoSlideshow';
import ImageSlideshow from './imageSlideshow';

const ProjectContent = ({ projectLink }) => {
  const findProjectByLink = (link) => {
    return projects.find(project => project.link === link);
  };
  
  const project = findProjectByLink(projectLink);
  
  if (!project) {
    return (
      <div className="bg-[#121212] w-68 p-2 flex items-center justify-center h-[calc(100vh-9.5rem)] rounded-lg">
        <p className="text-white">Project not found</p>
      </div>
    );
  }


  const [openTrack, setOpenTrack] = useState(null);

  const toggleTrack = (track) => {
    setOpenTrack(openTrack === track ? null : track);
  };

  return (
    <div>
      <div class="mt-6">
        <p class="ml-16 text-sm text-faded">Stage of Project</p>
        <hr class="mt-2 border-[#535353]" />

        <div className="mt-2">
          {project.tracks.map((track) => (
            <div key={track.name}>
              <div 
                onClick={() => toggleTrack(track.name)}
                className="flex flex-row gap-3 items-center hover:bg-[#282828] rounded-md p-2 cursor-pointer"
              >
                <div className="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center"></div>
                <div className="min-w-0 flex-1 pr-2">
                  <p className="font-semibold text-md truncate">{track.name}</p>
                </div>
                <div className="min-w-0 flex-1 pr-2">
                  <p className="font-semibold text-sm text-faded">Project Showcase</p>
                </div>
              </div>

              {openTrack === track.name && (
                <div className="bg-[#282828] rounded-md p-4">
                  <p className="text-md font-bold mb-4">{track.name}</p>
                  <p className="text-sm text-faded">{track.description}</p>

                  {track.type === "slideshow" && (
                    <ImageSlideshow items={track.items} />
                  )}
                
                  {track.type === "videos" && (
                    <VideoSlideshow items={track.items} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div> 
  );
};

export default ProjectContent;