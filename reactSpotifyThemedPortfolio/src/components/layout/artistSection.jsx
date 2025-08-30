const ArtistSection = ({ data }) => {
  return (
    <div className="my-8">
      <p className="text-lg md:text-2xl font-bold">{data.title}</p>
      <div className="hidden md:flex flex-row justify-between"> 
        <p className="mb-4 text-sm text-faded">As of {data.date}</p> 
      </div>

      <div className="flex overflow-x-auto md:overflow-x-hidden scrollbar-hide -mx-4 md:-mx-0">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 -space-x-4 md:gap-x-5 md:space-x-0">
          {data.education.map(education => (
            <a 
              key={education.id} 
              href={education.link}
              className={`
                ${education.visibleMd === false ? 'md:hidden lg:block' : ''}
                ${education.visibleLg === false ? 'md:hidden xl:block' : ''}
                ${education.visibleXl === false ? 'md:hidden 2xl:block' : ''}
              `}
            >
              <div className="rounded-lg flex-shrink-0 p-4 md:p-0 w-54 md:w-full">
                <div className="w-full">
                  {education.image ? (
                    <img 
                      src={education.image} 
                      className="rounded-full" 
                    />
                  ) : (
                    <img 
                      src="/images/blank.png" 
                      className="rounded-full" 
                    />
                  )}
                </div>

                <p className="mt-3 text-sm md:font-semibold truncate">{education.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistSection;