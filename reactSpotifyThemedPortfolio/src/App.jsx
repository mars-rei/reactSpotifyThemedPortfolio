import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 

import About from './pages/about'; 
import Introduction from './pages/introduction'; 

import Projects from './pages/projects'; 

import Certifications from './pages/certifications'; 

import Contact from './pages/contact'; 

import E1 from './pages/e1-kevihs';
import E2 from './pages/e2-bcu';
import E3 from './pages/e3-cisco';
import E4 from './pages/e4-datacamp';
import E5 from './pages/e5-freecodecamp';

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

        <Route path="/e1-kevihs" element={<E1 />} />
        <Route path="/e2-bcu" element={<E2 />} />
        <Route path="/e3-cisco" element={<E3 />} />
        <Route path="/e4-datacamp" element={<E4 />} />
        <Route path="/e5-freecodecamp" element={<E5 />} />

      </Routes>
    </Router>
  );
}

export default App;