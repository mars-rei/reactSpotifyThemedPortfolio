import projects from '../../data/projects';

const SkillsDemonstrated = ({ projectLink }) => {
  const findProjectByLink = (link) => {
    return projects.find(project => project.link === link);
  };
  
  const project = findProjectByLink(projectLink);

  const skills = project.skills;

  return (
    <div className="mt-6">
      <p className="hidden md:flex text-xl font-bold">Skills</p>
      <p className="hidden md:flex text-sm text-faded">Demonstrated in this project</p>

      <p className="md:hidden text-md font-bold">Skills demonstrated</p>

      <div className="hidden md:inline-block text-sm mt-6 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-row gap-3 items-center hover:bg-[#282828] rounded-md p-2">
            <div className="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center"></div>
            <div className="min-w-0 flex-1 pr-2">
              <p className="font-semibold text-md truncate">{skill}</p>
            </div>
          </div>
        ))}
      </div>

      <div class="md:hidden grid grid-cols-2 gap-2 items-start mt-3">
        {skills.map((skill, index) => (
          <div key={index} className="grid col-span-1 gap-y-2">
            <div className="flex-shrink-0 w-full h-12 py-2 bg-[#282828] rounded-md flex items-center justify-center gap-3">
              <p class="text-sm font-semibold">{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default SkillsDemonstrated;