const BottomBar = () => {
  return (
    <div class="flex-shrink-0 flex items-center py-4">
      <div class="flex w-1/3 items-center justify-start space-x-4 pl-4">
        <div class="rounded-md h-14 w-14 bg-[#535353] text-[#181818] flex justify-center items-center">
          <i class="fa fa-home fa-xl"></i>
        </div>
        <div>
          <p class="font-normal text-sm">こんにちは! Bonjour! Hallo! Hi!</p>
          <p class="text-xs text-faded">Home</p>
        </div>
      </div>
        
      <div class="flex flex-col items-center justify-center w-1/3">
        <div class="flex items-center justify-center space-x-6">
          <span class="fa fa-shuffle fa-xl text-[#1DB954]"></span>
          <span class="fa fa-backward-step fa-xl text-faded"></span>
          <span class="fa fa-circle-play fa-2x text-white"></span>
          <span class="fa fa-forward-step fa-xl text-faded"></span>
          <span class="fa fa-repeat fa-xl text-[#1DB954]"></span>
        </div>

        <div class="flex items-center w-full space-x-2 mt-2">
          <p class="text-xs text-faded w-10 text-right">0:20</p>
            
          <div class="flex-1 h-1">
            <div class="w-full h-full bg-gray-600 rounded-full overflow-hidden">
              <div class="h-full bg-white rounded-full relative w-2/3"></div>
            </div>
          </div>
            
          <p class="text-xs text-faded w-10">0:30</p>
        </div>
      </div>
        
      <div class="flex items-center justify-end w-1/3 mr-4">
      </div>
    </div>
  );
};

export default BottomBar;