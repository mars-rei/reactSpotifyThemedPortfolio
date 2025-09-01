import { Link } from 'react-router-dom';

const LeftBar = () => {
  return (
    <div class="hidden md:flex bg-[#121212] w-18 rounded-lg p-2 flex-col space-y-4 items-center">
      <span class="fa fa-bookmark text-xl text-faded pt-5"></span>

      <Link to="/about" >
        <div class="bg-[#535353] w-12 h-12 rounded-md justify-center flex items-center mt-4">
          <span class="fa fa-user text-xl text-faded"></span>
        </div>
      </Link>
    
        <div class="bg-[#535353] w-12 h-12 rounded-md justify-center flex items-center">
          <span class="fa fa-folder text-xl text-faded"></span>
        </div>

        <div class="bg-[#535353] w-12 h-12 rounded-md justify-center flex items-center">
          <span class="fa fa-certificate text-xl text-faded"></span>
        </div>
    </div>
  );
};

export default LeftBar;