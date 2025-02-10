
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.tsx/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Communication from './pages/Communication';
import Planning from './pages/Planning';
import Services from './pages/Strategy';

function App() {

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manage-events" element={<Communication />} />
        <Route path="/services" element={<Services />} />
        <Route path="/planning" element={<Planning />} />
      </Routes>
    </Router>
  )
}

export default App;
