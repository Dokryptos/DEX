import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './composents/Navbar';
import Home from "./pages/Home"
import List from './pages/List'
import Portfolio from './pages/Portfolio'
import Detail from './pages/Details'
import Connexion from './pages/Connexion'
 
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/List' element={ <List /> } />
        <Route path='/list/details' element={ <Detail /> } />
        <Route path='/portfolio' element={ <Portfolio />} />
        <Route path='/connexion' element={ <Connexion />} />
      </Routes>
    </>
  );
}

export default App;
