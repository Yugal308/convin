import './App.css';
import HomeScreen from './Components/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import History from './Components/History';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <HomeScreen />} />
          <Route path="/history" element={ <History/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
