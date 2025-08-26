const ArtistSection = ({ data }) => {
  return (
    <div className="my-8">
      <p className="text-lg md:text-2xl font-bold">{data.title}</p>
      <div className="hidden md:flex flex-row justify-between"> 
        <p className="mb-4 text-sm text-faded">As of {data.date}</p> 
      </div>

      <div className="flex overflow-x-auto md:overflow-x-hidden scrollbar-hide md:flex-row lg:gap-x-3 lg:justify-normal md:gap-x-3 -mx-4 -space-x-4 md:-mx-0 md:space-x-0">
        {data.education.map(education => (
          <a 
            key={education.id} 
            href={education.link}
            className={`${education.visibleOnTablet ? "" : "flex md:hidden lg:flex"} ${education.visibleOnDesktop ? "" : "lg:hidden"}`}
          >
            <div className="flex-shrink-0 p-4 md:p-0 w-40 rounded-lg md:w-50 lg:w-40">
              {education.image ? (
                <div className="w-full">
                  <img 
                    src={education.image} 
                    className="rounded-full" 
                    alt={education.title} 
                  />
                </div>
              ) : education.icon ? (
                <div class="w-full h-32 lg:h-40 bg-[#535353] flex items-center justify-center rounded-full md:h-50">
                  <i className={`fa-4x text-[#121212] ${education.icon}`}></i>
                </div>
              ) : (
                <div class="w-full h-32 lg:h-40 bg-[#535353] flex items-center justify-center rounded-full md:h-50">
                  <i className="fa fa-question fa-4x text-[#121212]"></i>
                </div>
              )}

              <p className="mt-3 text-sm md:font-semibold">{education.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;