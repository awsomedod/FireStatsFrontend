import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Global/Home/HomePage';
import { Box } from '@radix-ui/themes';
import './index.css';
const PlayerPage = () => <div className="page-content"><h2>Player Page Content</h2></div>;
const TeamPage = () => <div className="page-content"><h2>Team Page Content</h2></div>;

function App() {
  return (
    <div className="App">
      <Box className="bg-green-200 min-h-screen">
      {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/team" element={<TeamPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Box>
      {/* You might have a footer or other global elements here */}
    </div>
  );
}

export default App
