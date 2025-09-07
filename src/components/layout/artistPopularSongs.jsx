const ArtistPopularSongs = ({ data }) => {
  return (
    <div className="mt-6">
      <p className="py-2 text-lg font-bold">{data.title}</p>

      {data.education.map(education => (
        <a key={education.id} href={education.link} >
          <div class="flex flex-row gap-3 mt-3 justify-start items-center">
            <div class="aspect-square w-20 flex">
              {education.image ? (
                <img 
                  src={education.image} 
                  className="rounded-md" 
                />
              ) : (
                <img 
                  src="/images/blank.png" 
                  className="rounded-md" 
                />
              )}
            </div>

            <div className="flex flex-col">
              <p className="font-normal text-md">{education.title}</p>
              <p className="text-xs text-faded">{education.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ArtistPopularSongs;