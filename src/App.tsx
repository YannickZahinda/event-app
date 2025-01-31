
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.tsx/Navbar';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>A propos</h1>} />
        <Route path="/manage-events" element={<h1>Manage Events</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/planning" element={<h1>Communication Planning Page</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
