import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Feed from './Feed'
import Ong from './Ong'
import Profile from './Profile'
import './css/style.css'
import Menu from './Menu'


function App() {
  return (
      <BrowserRouter>
        <div id="page">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="ong/:id" element={<Ong />} />
            <Route path="profile/:id" element={<Profile />} />
          </Routes>
        </div>
        <Menu />
     </BrowserRouter>
  );
}

export default App;
