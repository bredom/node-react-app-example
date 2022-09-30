import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
