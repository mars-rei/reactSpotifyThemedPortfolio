import projects from '../../data/projects'; 

const MobileProjectDetails = ({ projectLink }) => {
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
    author,
    duration,
    builtFor,
    collaboration,
    levelOfCompletion,
    projectLinks,
    technologiesUsed,
    technologiesLearnt
  } = details;
  
  return (
    <div class="md:hidden mt-6">
      <p class="text-lg font-bold">Project Details</p>

      <div class="mt-3 space-y-4">
        <div class="flex flex-row gap-2 justify-center items-center">
          <div class="bg-[#282828] aspect-square rounded-md w-12 flex justify-center items-center">
            <span class="fa fa-timeline fa-xl"></span>
          </div>
          <div class="min-w-0 flex-1 mr-2">
            <p class="font-normal text-md">Duration</p>
            <p class="text-xs text-faded">{duration}</p>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center items-center">
          <div class="bg-[#282828] aspect-square rounded-md w-12 flex justify-center items-center">
            <span class="fa fa-user fa-xl"></span>
          </div>
          <div class="min-w-0 flex-1 mr-2">
            <p class="font-normal text-md">Built for</p>
            <p class="text-xs text-faded">{builtFor}</p>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center items-center">
          <div class="bg-[#282828] aspect-square rounded-md w-12 flex justify-center items-center">
            <span class="fa fa-user-group fa-xl"></span>
          </div>
          <div class="min-w-0 flex-1 mr-2">
            <p class="font-normal text-md">Collaboration</p>
            <p class="text-xs text-faded">{collaboration}</p>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center items-center">
          <div class="bg-[#282828] aspect-square rounded-md w-12 flex justify-center items-center">
            <span class="fa fa-list fa-xl"></span>
          </div>
          <div class="min-w-0 flex-1 mr-2">
            <p class="font-normal text-md">Level of Completion</p>
            <p class="text-xs text-faded">{levelOfCompletion}</p>
          </div>
        </div>

        {projectLinks.map(link => (
          <a href={link.url} key={link.platform}>
            <div class="flex flex-row gap-2 justify-center items-center">
              <div class="bg-[#282828] aspect-square rounded-md w-12 h-12 flex justify-center items-center">
                <span class="fa-brands fa-github fa-xl"></span> {/* have to get proper icon per link too */}
              </div>
              <div class="min-w-0 flex-1 mr-2">
                <p class="font-normal text-md">{link.platform}</p>
                <p class="text-xs text-faded">{link.text}</p>
              </div>
            </div>
          </a>
        ))}

        <div class="mt-6">
          <p class="text-md font-bold">Technologies Used</p>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 items-start mt-3">
            {technologiesUsed.map(tech => (
              <div class="grid col-span-1 gap-y-2" key={tech.tech}>
                <div className="flex-shrink-0 w-full py-2 bg-[#282828] rounded-md flex items-center gap-3 pl-2 pr-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span class={tech.icon}></span>
                  </div>
                  <p class="text-sm font-semibold">{tech.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="mt-6">
          <p class="text-md font-bold">Technologies Learnt</p>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 items-start mt-3">
            {technologiesLearnt.map(tech => (
              <div class="grid col-span-1 gap-y-2" key={tech.tech}>
                <div className="flex-shrink-0 w-full py-2 bg-[#282828] rounded-md flex items-center gap-3 pl-2 pr-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span class={tech.icon}></span>
                  </div>
                  <p class="text-sm font-semibold">{tech.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MobileProjectDetails;