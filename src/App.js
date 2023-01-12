import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';
import HistoryPage from './pages/HistoryPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<GamePage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/statistics' element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
