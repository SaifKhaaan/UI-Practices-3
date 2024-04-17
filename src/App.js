
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Stake from './views/Stake';
import Swap from './views/Swap';
import Pool from './views/Pool';
import History from './views/History';
import Connect from './views/Connect';


function App() {
  return (
    <div className="App">
         <Router>
      <Navbar />
      <Routes>
        <Route path="/Swap" element={<Swap />} />
        <Route path="/Stake" element={<Stake />} />
        <Route path="/Pool" element={<Pool />} />
        <Route path="/History" element={<History />} /> 
        <Route path="/Connect" element={<Connect />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
