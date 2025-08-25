const ArtistSection = ({ data }) => {
  return (
    <div className="my-8">
      <p className="text-lg md:text-2xl font-bold">{data.title}</p>
      <div className="hidden md:flex flex-row justify-between"> 
        <p className="mb-4 text-sm text-faded">As of {data.date}</p> 
      </div>

      <div className="flex flex-row lg:gap-x-3 lg:justify-normal md:gap-x-3">
        {data.education.map(education => (
          <a 
            key={education.id} 
            href={education.link}
            className={`flex-shrink-0 lg:w-40 rounded-lg md:w-50 ${education.visibleOnTablet ? "" : "hidden lg:block"}`}
          >

            <div className="flex-shrink-0 lg:w-40 rounded-full md:w-50">
              {education.image ? (
                <img 
                  src={education.image} 
                  className="rounded-full w-full h-full object-cover" 
                  alt={education.title} 
                />
              ) : education.icon ? (
                <div class="w-full lg:h-40 bg-[#535353] flex items-center justify-center rounded-full md:h-50">
                  <i className={`fa-4x text-[#121212] ${education.icon}`}></i>
                </div>
              ) : (
                <div class="w-full lg:h-40 bg-[#535353] flex items-center justify-center rounded-full md:h-50">
                  <i className="fa fa-question fa-4x text-[#121212]"></i>
                </div>
              )}

              <p className="mt-3 text-sm font-semibold">{education.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;