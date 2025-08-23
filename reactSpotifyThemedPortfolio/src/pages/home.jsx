import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ScrollableContent from '../components/layout/scrollableContent';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

const Home = () => {
  return (
    <div>
      <div className="scrollbar-hide md:overflow-hidden">
        <div className="hidden md:flex flex-col min-h-screen flex-1 overflow-hidden bg-black">
          {/* top */}
          <TopBar />

          {/* middle */}
          <div class="flex flex-1 overflow-hidden mx-2 space-x-2">

            {/* nav bar */}
            <LeftBar />

            {/* scrollable content*/}
            <ScrollableContent />

            {/* closed now playing section */}
            <ClosedRightBar />

          </div>

          {/* bottom */}
          <BottomBar />

        </div>
      </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
    
  );
};

export default Home;