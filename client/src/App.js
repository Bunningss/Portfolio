import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hamburger from './Components/Hamburger/Hamburger';
import Sidebar from './Components/Sidebar/Sidebar';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';

function App() {
  const [ active, setActive ] = useState(false);
  return (
    <BrowserRouter>
      <Sidebar/>
      <Hamburger active={active} setActive={setActive}/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
