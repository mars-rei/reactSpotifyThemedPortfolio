import projects from '../../data/projects'; 

const OpenRightBar = ({ projectLink }) => {
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
  
  const details = project.details[0];
  const {
    title,
    subtitle,
    author,
    duration,
    builtFor,
    collaboration,
    levelOfCompletion,
    backgroundImage,
    projectLinks,
    technologiesUsed,
    technologiesLearnt
  } = details;
  
  return (
    <div class="bg-[#121212] w-68 p-2 flex flex-col overflow-y-auto scrollbar-hide h-[calc(100vh-9.5rem)] relative rounded-lg">
      <div class="absolute inset-0 overflow-hidden">
        <img src={backgroundImage} class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent"></div>
      </div>

      <div class="relative z-10 mx-2 my-4"> 
        <p class="text-xl font-bold">{title}</p>
        <p class="text-2xl font-bold mt-48">{subtitle}</p>
        <p class="text-lg font-semibold text-faded -mt-1">{author}</p>
      </div>

      <div class="relative z-10"> 
        <div class="rounded-lg mx-2 bg-[#282828] flex mt-4 p-3 flex-col">
          <p class="font-bold text-md">Project Details</p>

          <p class="text-md font-semibold mt-5">Duration</p>
          <p class="text-sm text-faded">{duration}</p>

          <p class="text-md font-semibold mt-5">Built for</p>
          <p class="text-sm text-faded">{builtFor}</p>

          <p class="text-md font-semibold mt-5">Collaboration</p>
          <p class="text-sm text-faded">{collaboration}</p>

          <p class="text-md font-semibold mt-5">Level of Completion</p>
          <p class="text-sm text-faded">{levelOfCompletion}</p>

          {projectLinks.map(link => (
            <a href={link.url} key={link.platform}>
              <p class="text-md font-semibold mt-5">{link.platform}</p>
              <p class="text-sm text-faded">{link.text}</p>
            </a>
          ))}
        </div>

        <div class="rounded-lg mx-2 bg-[#282828] flex mt-4 p-3 flex-col">
          <p class="font-bold text-md">Technologies Used</p>
          
          {technologiesUsed.map(tech => (
            <div class="flex flex-row items-center mt-5" key={tech.tech}>
              <div class="w-14 h-14 flex items-center justify-center bg-[#121212] rounded-md">
                <span class={tech.icon}></span>
              </div>
              <p class="text-sm font-semibold ml-2">{tech.tech}</p>
            </div>
          ))}
        </div>

        <div class="rounded-lg mx-2 bg-[#282828] flex mt-4 p-3 flex-col">
          <p class="font-bold text-md">Technologies Learnt</p>
          
          {technologiesLearnt.map(tech => (
            <div class="flex flex-row items-center mt-5" key={tech.tech}>
              <div class="w-14 h-14 flex items-center justify-center bg-[#121212] rounded-md">
                <span class={tech.icon}></span>
              </div>
              <p class="text-sm font-semibold ml-2">{tech.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenRightBar;