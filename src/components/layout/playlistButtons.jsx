const PlaylistButtons = ({ data }) => {
  return (

    <div className="my-8">
      <p className="text-2xl font-bold pb-4">{data.title}</p>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 items-start">
        {data.buttons.map(button => (
          <div key={button.id} className="grid col-span-1 gap-y-2">
            <a 
            href={button.link}
            >
              <div className="flex-shrink-0 w-full py-2 bg-[#282828] rounded-md flex items-center gap-3 pl-2 pr-4">
                <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center">
                  <span className={`fa ${button.icon}`}></span>
                </div>
                <p className="text-sm font-semibold">{button.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>

  );
};

export default PlaylistButtons;