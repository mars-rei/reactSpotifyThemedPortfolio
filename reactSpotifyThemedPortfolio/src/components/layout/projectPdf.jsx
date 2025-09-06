const ProjectPdf = ({ items }) => {
  return (
    <div class="md:flex md:justify-center md:items-center">
      <div class="hidden md:inline-block md:w-full h-full bg-[#282828] rounded-md overflow-x-auto scrollbar-hide">
        <div class="md:flex md:flex-nowrap">
          <div class="flex-shrink-0 md:w-full flex justify-center items-center mt-5 mb-2">
            <figure class="space-y-1">
              <iframe 
                src={items[0]} 
                class="w-full md:h-100 lg:h-160"
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

export default ProjectPdf;