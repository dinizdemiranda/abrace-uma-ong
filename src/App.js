import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Feed from './Feed'
import Contato from './Contato'
import Header from './Header'
import './css/style.css'



function App() {
  return (
      <BrowserRouter>

        <Header />
        <div id="page">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
     </BrowserRouter>
  );
}

export default App;
