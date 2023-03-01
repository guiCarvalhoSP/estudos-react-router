import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
