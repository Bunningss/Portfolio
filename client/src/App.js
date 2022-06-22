import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';

// Pages
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
