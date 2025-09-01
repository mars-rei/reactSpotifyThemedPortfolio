import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 

import About from './pages/about'; 
import Introduction from './pages/introduction'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;