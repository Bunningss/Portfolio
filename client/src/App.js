import './global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar/Sidebar';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Hamburger from './components/Hamburger/Hamburger';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';
import { useState } from 'react';

function App() {
  const [ active, setActive ] = useState(false);

  return (
    <Router>
      <Sidebar/>
      <Hamburger active={active} setActive={setActive}/>
      <ToggleMenu active={active} setActive={setActive}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
