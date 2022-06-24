
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Pages/About/About';

// Pages
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
