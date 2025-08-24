const PlaylistSection = ({ data }) => {
  return (
    <div className="my-8">
      <p className="text-2xl font-bold">{data.title}</p>
      <div className="flex flex-row justify-between"> 
        <p className="mb-4 text-sm text-faded">As of {data.date}</p> 
        <a href={data.viewAllLink}>
          <p className="mb-4 text-sm text-faded font-semibold">Show All</p>
        </a>
      </div>

      <div className="flex flex-row lg:gap-x-3 lg:justify-normal md:gap-x-3">
        {data.projects.map(project => (
          <a 
            key={project.id} 
            href={project.link}
            className={`flex-shrink-0 lg:w-40 rounded-lg md:w-50 ${project.visibleOnTablet ? "" : "hidden lg:block"}`}
          >

            <div className="flex-shrink-0 lg:w-40 rounded-lg md:w-50">
              {project.image ? (
                <img 
                  src={project.image} 
                  className="rounded-md w-full h-full object-cover" 
                  alt={project.title} 
                />
              ) : project.icon ? (
                <div class="w-full lg:h-40 bg-[#535353] flex items-center justify-center rounded-md md:h-50">
                  <i className={`fa-4x text-[#121212] ${project.icon}`}></i>
                </div>
              ) : (
                <div class="w-full lg:h-40 bg-[#535353] flex items-center justify-center rounded-md md:h-50">
                  <i className="fa fa-question fa-4x text-[#121212]"></i>
                </div>
              )}

              <p className="mt-3 text-sm font-semibold">{project.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSection;