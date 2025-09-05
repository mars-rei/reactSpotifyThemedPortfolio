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

  const skills = project.skills;

  return (
    <div className="mt-6">
      <p className="text-xl font-bold">Skills</p>
      <p className="text-sm text-faded">Demonstrated in this project</p>

      <div className="text-sm mt-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-row gap-3 items-center hover:bg-[#282828] rounded-md p-2">
          <div className="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center"></div>
          <div className="min-w-0 flex-1 pr-2">
            <p className="font-semibold text-md truncate">{skill}</p>
          </div>
        </div>
      ))}
      </div>
    </div> 
  );
};

export default SkillsDemonstrated;