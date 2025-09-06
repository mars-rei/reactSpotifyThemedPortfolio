const ProjectPowerpoint = ({ items }) => {
  return (
    <div class="md:flex md:justify-center md:items-center">
      <div class="hidden md:inline-block md:w-full lg:w-200 h-full bg-[#282828] rounded-md overflow-x-auto scrollbar-hide">
        <div class="md:flex md:flex-nowrap">
          <div class="flex-shrink-0 md:w-full lg:w-200 flex justify-center items-center mt-5 mb-2">
            <figure class="space-y-1">
              <iframe 
                src={items[0]} 
                class="md:w-75 md:h-45 lg:w-135 lg:h-70 xl:w-180 xl:h-120"
              >
                <p class="text-sm">Your browser does not support PDFs. 
                  <a href={items[0]} class="text-sm">Download the PDF.</a>
                </p>
              </iframe>
              <figcaption class="text-xs text-faded text-center">{items[1]}</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <a href={items[0]} class="text-sm text-faded">View the PDF <span className="font-bold text-white">here</span>.</a>
      </div>
    </div>
  );
};

export default ProjectPowerpoint;