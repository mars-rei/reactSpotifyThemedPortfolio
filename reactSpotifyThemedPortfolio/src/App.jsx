import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 

import About from './pages/about'; 
import Introduction from './pages/introduction'; 

import Projects from './pages/projects'; 

import Certifications from './pages/certifications'; 

import Contact from './pages/contact'; 

import Education from './pages/educationTemplate';

import Project from './pages/projectTemplate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/introduction" element={<Introduction />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/certifications" element={<Certifications />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/e1-kevihs" element={<Education education="/e1-kevihs"/>} />
        <Route path="/e2-bcu" element={<Education education="/e2-bcu"/>} />
        <Route path="/e3-cisco" element={<Education education="/e3-cisco"/>} />
        <Route path="/e4-datacamp" element={<Education education="/e4-datacamp"/>} />
        <Route path="/e5-freecodecamp" element={<Education education="/e5-freecodecamp"/>} />

        <Route path="/p1-im-swissgambit" element={<Project project="/p1-im-swissgambit"/>} />
        <Route path="/p2-bookbot" element={<Project project="/p2-bookbot"/>} />
        <Route path="/p3-flight-booking-system-in-java" element={<Project project="/p3-flight-booking-system-in-java"/>} />
        <Route path="/p4-compclub-hub" element={<Project project="/p4-compclub-hub"/>} />
        <Route path="/p5-spotify-themed-portfolio" element={<Project project="/5-spotify-themed-portfolio"/>} />
        <Route path="/p6-compclub-hub-2" element={<Project project="/p6-compclub-hub-2"/>} />
        <Route path="/p7-bmw-group-physical-asset-tracking-system" element={<Project project="/p7-bmw-group-physical-asset-tracking-system"/>} />
        <Route path="/p8-mastermind" element={<Project project="/p8-mastermind"/>} />
        <Route path="/p9-summer-of-25-blog" element={<Project project="/p9-summer-of-25-blog"/>} />
        <Route path="/p10-fire-on-marz" element={<Project project="/p10-fire-on-marz"/>} />
        <Route path="/p11-pinterest-themed-digital-scrapbook" element={<Project project="/p11-pinterest-themed-digital-scrapbook"/>} />
        <Route path="/p12-random-lyric-generator" element={<Project project="/p12-random-lyric-generator"/>} />
        <Route path="/p13-react-spotify-themed-portfolio" element={<Project project="/p13-react-spotify-themed-portfolio"/>} />

      </Routes>
    </Router>
  );
}

export default App;