import { useState, useEffect } from 'react';
import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 
import educations from '../data/educations'; 

const findEduByLink = (link) => {
  return educations.education.find(edu => edu.link === link);
};

const ImageOverlay = ({ link }) => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const edu = findEduByLink(link); 
  const image = edu?.image; 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 150;
      const opacity = Math.min(scrollY / maxScroll, 0.8);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div>
      {image ? (
        <div className="fixed top-0 left-0 right-0 z-0 md:hidden">
          <img src={image} className="w-full aspect-square object-cover" alt={edu?.title} />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-[#121212]" style={{ opacity: scrollOpacity }} id="image-overlay"></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const EduHeader = ({ link }) => {
  const edu = findEduByLink(link); 

  return (
    <div>
      <div className="hidden md:inline-block absolute inset-0 bg-gradient-to-b from-teal-600 to-[#121212] opacity-20 h-90"></div>

      <div className="relative z-10 min-h-screen md:min-h-auto">
        <div className="mt-64 md:mt-0 md:pt-80 pb-24">
          <div className="px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{edu.title}</h1>
          </div>

          <div className="mt-3 p-4 bg-[#121212]">
            <p className="text-xs text-faded md:text-sm md:text-white">{edu.duration}</p>
            <EduData edu={edu} />
          </div>
        </div>
      </div>
    </div>
  );
};


const EduData = ({ edu }) => {
  return (
    <div>
      <EducationDetails education={edu} />
    </div>
  );
};


const renderEducationContent = (data, depth = 0) => {
  if (data.name) {
    return (
      <div className="flex flex-row gap-3 mt-3 items-center md:ml-5">
        <div class="flex items-center justify-center w-2 font-normal text-xs md:text-faded md:text-sm">{data.num}</div>
        <div class="bg-[#535353] aspect-square md:rounded-lg rounded-md w-12 h-12 flex justify-center items-center">
          <span class={`${data.icon} fa-2x text-[#121212]`}></span>
        </div>
        <div>
          <p class="font-normal text-md">{data.name}</p>
          <p class="md:text-sm text-xs text-faded">{data.grade}</p>
        </div>
      </div>
    );
  }

  if (data.items && Array.isArray(data.items)) {
    const isMainSection = depth === 0; 
    const isSubSection = depth === 1; 
    
    return (
      <div>
        {data.title && (
          <>
            {isMainSection && (
              <div className="mt-4 py-2 font-bold text-xl md:text-2xl">{data.title}</div>
            )}
            {isSubSection && (
              <div className="mt-4 py-2 text-lg md:text-xl font-bold">{data.title}</div>
            )}
          </>
        )}
        <div>
          {data.items.map((item, index) => (
            <div key={index}>
              {renderEducationContent(item, depth + 1)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{JSON.stringify(data)}</div>;
};


function EducationDetails({ education }) {
  return (
    <div>
      {education.details.map((section, index) => (
        <div key={index}>
          {renderEducationContent(section)}
        </div>
      ))}
    </div>
  );
}


const Education = ({ education }) => {
  const edu = findEduByLink(education);
  
  if (!edu) {
    return <div>Education not found: {education}</div>;
  }

  return (
    <div>
      <div className="scrollbar-hide md:overflow-hidden">
        <div className="flex flex-col min-h-screen flex-1 md:overflow-hidden md:bg-black">
          <TopBar />

          <div className="md:flex md:flex-1 md:overflow-hidden md:mx-2 md:space-x-2">
            <LeftBar />

            <div className="md:flex-1 md:bg-[#121212] md:rounded-lg md:overflow-y-auto md:h-[calc(100vh-9.5rem)]">
              <div className="md:relative text-white md:min-h-full">
                <div className="relative">
                  <ImageOverlay link={education}/>
                </div>
                <EduHeader link={education} />
              </div>
            </div>

            <ClosedRightBar />
          </div>

          <BottomBar currentPage={education} />
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Education;