import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
