const PlaylistSection = ({ data }) => {
  return (
    <div className="my-8">
      <p className="text-lg md:text-2xl font-bold">{data.title}</p>
      <div className="hidden md:flex flex-row justify-between"> 
        <p className="mb-4 text-sm text-faded">As of {data.date}</p> 
        <a href={data.viewAllLink} className={data.viewAllLink ? "md:inline-flex hidden" : "hidden"}>
          <p className="mb-4 text-sm text-faded font-semibold">Show All</p>
        </a>
      </div>

      <div className="flex overflow-x-auto md:overflow-x-hidden scrollbar-hide -mx-4 md:-mx-0">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 -space-x-4 md:gap-x-5 md:space-x-0">
          {data.projects.map(project => (
            <a 
              key={project.id} 
              href={project.link}
              className={`
                ${project.visibleMd === false ? 'md:hidden lg:block' : ''}
                ${project.visibleLg === false ? 'md:hidden xl:block' : ''}
                ${project.visibleXl === false ? 'md:hidden 2xl:block' : ''}
              `}
            >
              <div className="rounded-lg flex-shrink-0 p-4 md:p-0 w-54 md:w-full">
                <div className="w-full">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      className="rounded-md" 
                    />
                  ) :  (
                    <img 
                      src="/images/blank.png" 
                      className="rounded-md" 
                    />
                  )}
                </div>

                <p className="mt-3 text-sm md:font-semibold">{project.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistSection;