import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div class="hidden md:flex flex-shrink-0 items-center p-2">
      <div class="flex items-center justify-start ml-5 space-x-4 lg:w-1/4 md:w-18">
        <span class="fa fa-briefcase text-3xl text-white"></span>
      </div>
        
      <div class="flex items-center gap-x-2 w-2/4 justify-center">
        <Link to="/" >
          <div class="rounded-full bg-[#282828] h-12 w-12 flex items-center justify-center">
            <span class="fa fa-home text-xl text-faded"></span>
          </div>
        </Link>
        
        <div class="rounded-full bg-[#282828] px-4 h-12 flex items-center text-faded justify-start space-x-4 lg:w-3/5 md:w-4/5">
          <span class="fa fa-handshake text-xl text-faded"></span>
          <p class="font-normal">Welcome to my portfolio!</p>
        </div>
      </div>
        
      <div class="flex items-center justify-end mr-2 lg:w-1/4 md:w-2/4">
        <Link to="/contact" >
          <div class="rounded-full bg-white px-4 h-8 flex items-center text-faded mr-4">
            <p class="font-bold text-[#121212]">Contact me</p>
          </div>
        </Link>
    
        <div class="rounded-full bg-[#282828] h-12 w-12 flex items-center justify-center">
          <img src="/images/headshot.jpeg" class="rounded-full h-8 w-8" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;