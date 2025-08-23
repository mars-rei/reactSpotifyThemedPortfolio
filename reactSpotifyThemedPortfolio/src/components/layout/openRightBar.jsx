const OpenRightBar = () => {
  return (
    <div class="bg-[#121212] w-68 p-2 flex flex-col overflow-y-auto scrollbar-hide h-[calc(100vh-9.5rem)] relative rounded-lg">
      <div class="absolute inset-0 overflow-hidden">
        <img src="../imgs/p1-1.png" class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent"></div>
      </div>

      <div class="relative z-10 mx-2 my-4"> 
        <p class="text-xl font-bold">Project 1</p>
        <p class="text-2xl font-bold mt-48">IM SwissGambit</p>
        <p class="text-lg font-semibold text-faded -mt-1">Imogen Dicen</p>
      </div>

      <div class="relative z-10"> 
        <div class="rounded-lg mx-2 bg-[#282828] flex mt-4 p-3 flex-col">
          <p class="font-bold text-md">Project Details</p>

          <p class="text-md font-semibold mt-5">Duration</p>
          <p class="text-sm text-faded">Nov 2022 - Apr 23</p>

          <p class="text-md font-semibold mt-5">Built for</p>
          <p class="text-sm text-faded">A-Level Computer Science NEA</p>

          <p class="text-md font-semibold mt-5">Collaboration</p>
          <p class="text-sm text-faded">Individual</p>

          <p class="text-md font-semibold mt-5">Level of Completion</p>
          <p class="text-sm text-faded">Incomplete</p>

          <a href="https://github.com/mars-rei/IM-SwissGambit">
            <p class="text-md font-semibold mt-5">GitHub</p>
            <p class="text-sm text-faded">Link to IM SwissGambit</p>
          </a>
        </div>

        <div class="rounded-lg mx-2 bg-[#282828] flex mt-4 p-3 flex-col">
          <p class="font-bold text-md">Technologies Used</p>

          <div class="flex flex-row items-center mt-5">
            <div class="w-14 h-14 flex items-center justify-center bg-[#121212] rounded-md">
              <span class="fa fa-code"></span>
            </div>
            <p class="text-sm font-semibold ml-2">Python</p>
          </div>

          <div class="flex flex-row items-center mt-5">
            <div class="w-14 h-14 flex items-center justify-center bg-[#121212] rounded-md">
              <span class="fa fa-code"></span>
            </div>
            <p class="text-sm font-semibold ml-2">HTML</p>
          </div>

          <div class="flex flex-row items-center mt-5">
            <div class="w-14 h-14 flex items-center justify-center bg-[#121212] rounded-md">
              <span class="fa fa-code"></span>
            </div>
            <p class="text-sm font-semibold ml-2">CSS</p>
          </div>
        </div>

        <div class="rounded-lg mx-2 bg-[#282828] flex mt-4 p-3 flex-col">
          <p class="font-bold text-md">Technologies Learnt</p>

          <div class="flex flex-row items-center mt-5">
            <div class="w-14 h-14 flex items-center justify-center bg-[#121212] rounded-md">
              <span class="fa fa-code"></span>
            </div>
            <p class="text-sm font-semibold ml-2">Pygame</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenRightBar;