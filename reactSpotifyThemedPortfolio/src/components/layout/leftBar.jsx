const LeftBar = () => {
  return (
    <div class="bg-[#121212] w-18 rounded-lg p-2 flex flex-col space-y-4 items-center">
      <span class="fa fa-bookmark text-xl text-faded pt-5"></span>

      <a href="about.html">
        <div class="bg-[#535353] w-12 h-12 rounded-md justify-center flex items-center mt-4">
          <span class="fa fa-user text-xl text-faded"></span>
        </div>
      </a>
    
      <a href="projects.html">
        <div class="bg-[#535353] w-12 h-12 rounded-md justify-center flex items-center">
          <span class="fa fa-folder text-xl text-faded"></span>
        </div>
      </a>

      <a href="certifications.html">
        <div class="bg-[#535353] w-12 h-12 rounded-md justify-center flex items-center">
          <span class="fa fa-certificate text-xl text-faded"></span>
        </div>
      </a>
    </div>
  );
};

export default LeftBar;