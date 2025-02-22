import './App.css'
import ArtsPage from './pages/ArtsPage'
import MainPage from './pages/MainPage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SportsPage from './pages/SportsPage'
import RuleBook from './pages/RulePage'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} /> 
          <Route path="/arts" element={<ArtsPage/>} /> 
          <Route path="/sports" element={<SportsPage/>} /> 
          <Route path="/rulebook" element={<RuleBook/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
