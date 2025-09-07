const pageData = {
  '/': {
    icon: 'fa fa-home',
    song: 'こんにちは! Bonjour! Hallo! Hi!',
    artist: 'Home'
  },
  '/about': {
    icon: 'fa fa-user',
    song: 'Highlights',
    artist:'About'
  },
  '/projects': {
    icon: 'fa fa-folder',
    song: 'Project Directory',
    artist:'Projects'
  },
  '/certifications': {
    icon: 'fa fa-certificate',
    song: 'Formal & Acknowledged',
    artist:'Certifications'
  },
  '/contact': {
    icon: 'fa fa-address-card',
    song: 'Links & Contact',
    artist:'Contact Me'
  },
  '/e1-kevihs': {
    icon: 'fa fa-school',
    song: 'King Edward VI Handsworth',
    artist:'Education'
  },
  '/e2-bcu': {
    icon: 'fa fa-school',
    song: 'Birmingham City University',
    artist:'Education'
  },
  '/e3-cisco': {
    icon: 'fa fa-school',
    song: 'Cisco Networking Academy',
    artist:'Education'
  },
  '/e4-datacamp': {
    icon: 'fa fa-school',
    song: 'DataCamp',
    artist:'Education'
  },
  '/e5-freecodecamp': {
    icon: 'fa fa-school',
    song: 'freeCodeCamp',
    artist:'Education'
  },
  '/p1-im-swissgambit': {
    icon: 'fa fa-chess',
    song: 'IM SwissGambit',
    artist:'Project'
  },
  '/p2-bookbot': {
    icon: 'fa fa-robot',
    song: 'BookBot',
    artist:'Project'
  },
  '/p3-flight-booking-system-in-java': {
    icon: 'fa fa-plane',
    song: 'Flight Booking System in Java',
    artist:'Project'
  },
  '/p4-compclub-hub': {
    icon: 'fa fa-trophy',
    song: 'CompClub Hub',
    artist:'Project'
  },
  '/p5-spotify-themed-portfolio': {
    icon: 'fa fa-briefcase',
    song: 'Spotify Themed Portfolio',
    artist:'Project'
  },
  '/p6-compclub-hub-2': {
    icon: 'fa fa-trophy',
    song: 'CompClub Hub 2.0',
    artist:'Project'
  },
  '/p7-bmw-group-physical-asset-tracking-system': {
    icon: 'fa fa-truck-ramp-box',
    song: 'BMW Group Physical Asset Tracking System',
    artist:'Project'
  },
  '/p8-mastermind': {
    icon: 'fa fa-chess-board',
    song: 'Mastermind Command-Line Game',
    artist:'Project'
  },
  '/p9-summer-of-25-blog': {
    icon: 'fa fa-pen-to-square',
    song: 'Summer of \'25 Blog',
    artist:'Project'
  },
  '/p10-fire-on-marz': {
    icon: 'fa fa-palette',
    song: 'Fire on Marz',
    artist:'Project'
  } ,
  '/p11-pinterest-themed-digital-scrapbook': {
    icon: 'fa fa-memory',
    song: 'Pinterest Themed Digital Scrapbook',
    artist:'Project'
  },
  '/p12-random-lyric-generator': {
    icon: 'fa fa-dice',
    song: 'Random Lyric Generator',
    artist:'Project'
  },
  '/p13-react-spotify-themed-portfolio': {
    icon: 'fa fa-briefcase',
    song: 'Spotify Themed Portfolio in React',
    artist:'Project'
  }
};

const BottomBar = ({ currentPage }) => {
  const currentPageData = pageData[currentPage] || pageData['/'];
  const { icon, song, artist } = currentPageData;

  return (
    <div className="hidden md:flex flex-shrink-0 items-center py-4">
      <div className="flex w-1/3 items-center justify-start space-x-4 pl-4">
        <div className="rounded-md h-14 w-14 bg-[#535353] text-[#181818] flex justify-center items-center">
          <i className={`${icon} fa-xl`}></i>
        </div>
        <div>
          <p className="font-normal text-sm">{song}</p>
          <p className="text-xs text-faded">{artist}</p>
        </div>
      </div>
        
      <div className="flex flex-col items-center justify-center w-1/3">
        <div className="flex items-center justify-center space-x-6">
          <span className="fa fa-shuffle fa-xl text-[#1DB954]"></span>
          <span className="fa fa-backward-step fa-xl text-faded"></span>
          <span className="fa fa-circle-play fa-2x text-white"></span>
          <span className="fa fa-forward-step fa-xl text-faded"></span>
          <span className="fa fa-repeat fa-xl text-[#1DB954]"></span>
        </div>

        <div className="flex items-center w-full space-x-2 mt-2">
          <p className="text-xs text-faded w-10 text-right">0:20</p>
            
          <div className="flex-1 h-1">
            <div className="w-full h-full bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full relative w-2/3"></div>
            </div>
          </div>
            
          <p className="text-xs text-faded w-10">0:30</p>
        </div>
      </div>
        
      <div className="flex items-center justify-end w-1/3 mr-4">
      </div>
    </div>
  );
};

export default BottomBar;