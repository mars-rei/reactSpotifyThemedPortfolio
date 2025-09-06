import projects from '../../data/projects';

const SkillsDemonstrated = ({ projectLink }) => {
  const findProjectByLink = (link) => {
    return projects.find(project => project.link === link);
  };
  
  const project = findProjectByLink(projectLink);

  return (
    <div>
      <div class="flex justify-center md:justify-start items-center md:items-end mt-8 md:mt-16"> 
        <div class="w-56 mx-8 md:mx-0 md:flex-shrink-0 md:w-36 lg:w-56 aspect-square flex justify-center items-center md:rounded-md">
          <img src={project.image} class="md:rounded-md" />
        </div>

        <div class="hidden md:inline-block md:ml-4 lg:ml-8">
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

      <div class="md:hidden mt-6">
        <p class="text-xl font-bold">{project.title}</p>
      </div>

      <div className="mt-3 md:mt-4 space-y-3 md:space-y-1 text-sm text-faded">
        <div class="md:hidden" title={project.description}> 
          <p class="text-sm text-faded md:line-clamp-1 lg:line-clamp-none">
            {project.description}
          </p>
        </div>

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