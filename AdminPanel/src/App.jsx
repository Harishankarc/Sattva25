import './App.css'
import Arts from './pages/Arts';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Sports from './pages/Sports';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route path="/arts" element={<Arts/>} /> 
        <Route path="/sports" element={<Sports/>} /> 
      </Routes>
    </Router>
  );
}