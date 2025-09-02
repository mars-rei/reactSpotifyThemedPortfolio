import { useState, useEffect } from 'react';

import TopBar from '../components/layout/topBar';
import LeftBar from '../components/layout/leftBar';
import ClosedRightBar from '../components/layout/closedRightBar';
import BottomBar from '../components/layout/bottomBar'; 
import MobileNav from '../components/layout/mobileNav'; 

const Certifications = () => {
  const [activeType, setActiveType] = useState(null);
  
  useEffect(() => {
    const urlFilter = new URLSearchParams(window.location.search);
    setActiveType(urlFilter.get('filter') || null);
  }, []);

  const certifications = [
    {icon: 'fa fa-brain', name: 'Understanding Prompt Engineering', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-brain', name: 'Introduction to Microsoft Copilot', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-brain', name: 'Understanding ChatGPT', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Associate Data Scientist in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Machine Learning with Tree-Based Models in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Unsupervised Learning in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Supervised Learning with scikit-learn', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Experimental Design in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Hypothesis Testing in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Sampling in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Regression with statsmodels in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-code', name: 'Writing Functions in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Working with Dates and Times in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Cleaning Data in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Importing Data in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Working with Categorical Data in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-ear-listen', name: 'Active Listening', from: 'Bodyswaps', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Exploratory Data Analysis in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-code', name: 'Python Toolbox', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-code', name: 'Introduction to Functions in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Data Visualization with Seaborn', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Data Visualization with Matplotlib', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Statistics in Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Joining Data with pandas', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Data Manipulation with pandas', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-code', name: 'Intermediate Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-code', name: 'Introduction to Python', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Associate Data Engineer in SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Introduction to Snowflake', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Data Warehousing Concepts', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Database Design', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Introduction to Relational Databases in SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Data Literacy Professional', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Data Literacy Case Study: Remote Working Analysis', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Data Storytelling Concepts', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Forming Analytical Questions', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Data Culture', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Data Literacy', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Communicating Data Insights', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Data', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Understanding Data Engineering', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Associate Data Analyst in SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Data Communication Concepts', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Understanding Data Visualization', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Data-Driven Decision Making in SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Exploratory Data Analysis in SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-chart-line', name: 'Introduction to Statistics', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Functions for Manipulating Data in PostgreSQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'PostgreSQL Summary Stats and Window Functions', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Data Manipulation in SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Joining Data in SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Intermediate SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-database', name: 'Introduction to SQL', from: 'DataCamp', type: 'acknowledgement'},
    {icon: 'fa fa-network-wired', name: 'CCNA: Introduction to Networks', from: 'Cisco', type: 'formal'},
    {icon: 'fa fa-code', name: 'Python Essentials 1', from: 'Cisco Networking Academy', type: 'acknowledgement'},
    {icon: 'fa fa-music', name: 'Grade 5 Violin', from: 'Trinity College London', type: 'formal'},
    {icon: 'fa fa-map', name: 'Enterprise Design Thinking Practitioner', from: 'IBM', type: 'acknowledgement'},
    {icon: 'fa fa-computer', name: 'Computer Hardware Basics', from: 'Cisco Networking Academy', type: 'acknowledgement'},
    {icon: 'fa fa-shield-halved', name: 'CyberFirst Advanced (SCQF Level 6)', from: 'National Cyber Security Centre', type: 'formal'},
    {icon: 'fa fa-music', name: 'Grade 8 Piano', from: 'ABRSM', type: 'formal'},
    {icon: 'fa fa-music', name: 'Grade 5 Music Theory', from: 'ABRSM', type: 'formal'}
  ];

  const toggleType = (type) => {
    setActiveType(activeType === type ? null : type);
  };

  const filteredCerts = activeType
      ? certifications.filter(p => p.type === activeType)
      : certifications;

  return (
    <div>
      <div className="scrollbar-hide md:overflow-hidden">
        <div className="flex flex-col min-h-screen flex-1 md:overflow-hidden md:bg-black">
          {/* top */}
          <TopBar />

          {/* middle */}
          <div class="md:flex md:flex-1 md:overflow-hidden md:mx-2 md:space-x-2">

            {/* nav bar */}
            <LeftBar />

            {/* scrollable content*/}
            <div class="md:flex-1 md:bg-[#121212] md:rounded-lg md:overflow-y-auto md:h-[calc(100vh-9.5rem)] md:scollbar-custom" id="mainContent">
              <div class="mx-5 pb-24 text-white">
                <div class="flex justify-center md:justify-start items-center md:items-end mt-8 md:mt-16"> 
                  <div class="bg-[#535353] w-56 mx-8 md:mx-0 aspect-square flex justify-center items-center rounded-md">
                    <span class="fa fa-certificate fa-8x text-[#121212]"></span>
                  </div>

                  <div class="hidden md:inline-block md:mt-0 md:ml-8">
                    <div>
                      <p class="text-5xl lg:text-6xl font-bold">My Certifications</p>
                    </div>
                    <div class="flex mt-4">
                      <p class="text-sm text-faded">All formal certifications and badges and certificates of acknowledgement as of August 2025.</p>
                    </div>
                    <div class="mt-2 flex flex-row items-center space-x-2">
                      <img src="./images/headshot.jpeg" class="w-6 rounded-full" />
                      <p class="text-sm text-white">Imogen Dicen • <span class="text-sm text-faded">5 formal, 56 acknowledged.</span></p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 md:hidden">
                  <p class="text-xl md:text-5xl lg:text-6xl font-bold">My Certifications</p>
                </div>

                <div className="mt-4 md:mt-6 space-x-1">
                  {activeType !== 'acknowledgement' && (
                    <button 
                      onClick={() => toggleType('formal')} 
                      className={`rounded-full inline-block py-2 px-4 ${
                        activeType === 'formal' 
                          ? 'bg-[#1DB954] md:bg-white text-[#121212]' 
                          : 'bg-[#282828]'
                      }`}
                    >
                      <p className="text-xs md:text-sm">Formal</p>
                    </button>
                  )}

                  {activeType !== 'formal' && (
                    <button 
                      onClick={() => toggleType('acknowledgement')} 
                      className={`rounded-full inline-block py-2 px-4 ${
                        activeType === 'acknowledgement' 
                          ? 'bg-[#1DB954] md:bg-white text-[#121212]' 
                          : 'bg-[#282828]'
                      }`}
                    >
                      <p className="text-xs md:text-sm">Acknowledgement</p>
                    </button>
                  )}
                </div>
              
                <div className="text-sm mt-6 space-y-4">
                  {filteredCerts.map((cert, index) => (
                    <div 
                      key={cert.name + index} 
                      className="flex flex-row gap-3 items-center" 
                      title={cert.name}
                    >
                      <div className="bg-[#535353] aspect-square rounded-md w-12 flex justify-center items-center">
                        <span className={`${cert.icon} fa-2x text-[#121212]`}></span>
                      </div>

                      <div className="min-w-0 flex-1 mr-2">
                        <p className="font-normal text-md truncate">{cert.name}</p>
                        <p className="text-xs md:text-sm text-faded truncate">{cert.from}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* closed now playing section */}
            <ClosedRightBar />

          </div>

          {/* bottom */}
          <BottomBar currentPage="/certifications" />

        </div>
      </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
  );
};

export default Certifications;