import projects from '../../data/projects';

const SkillsDemonstrated = ({ projectLink }) => {
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

  return (
    <div>
      <div class="flex justify-start items-end mt-16"> 
        <div class="flex-shrink-0 md:w-36 lg:w-56 aspect-square flex justify-center items-center rounded-md">
          <img src={project.image} class="rounded-md" />
        </div>
        <div class="md:ml-4 lg:ml-8">
          <div>
            <p class="md:text-3xl lg:text-6xl font-bold">{project.title}</p>
          </div>
          <div 
            class="mt-4"
            title={project.description}
          > 
            <p class="text-sm text-faded md:line-clamp-1 lg:line-clamp-none">
              {project.description}
            </p>
          </div>
          <div class="mt-2 flex flex-row items-center space-x-2">
            <img src="./images/headshot.jpeg" class="w-6 rounded-full" />
            <p class="text-sm text-white">{project.creators}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1 text-sm text-faded">
        {project.furtherDescription.map((line, index) => (
          <p key={index}>
            {line}
          </p>        
        ))}
      </div>
    </div> 
  );
};

export default SkillsDemonstrated;