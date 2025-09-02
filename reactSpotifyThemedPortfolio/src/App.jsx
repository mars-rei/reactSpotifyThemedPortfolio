import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 

import About from './pages/about'; 
import Introduction from './pages/introduction'; 

import Projects from './pages/projects'; 

import Certifications from './pages/certifications'; 

import Contact from './pages/contact'; 

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

      </Routes>
    </Router>
  );
}

export default App;