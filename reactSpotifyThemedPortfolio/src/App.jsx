import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 

import About from './pages/about'; 
import Introduction from './pages/introduction'; 

import Projects from './pages/projects'; 

import Certifications from './pages/certifications'; 

import Contact from './pages/contact'; 

import Education from './pages/educationTemplate';

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

      </Routes>
    </Router>
  );
}

export default App;