import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Feed from './Feed'
import Coins from './Coins'
import Ong from './Ong'
import Explore from './Explore'
import Profile from './Profile'
import './css/style.css'
import Menu from './Menu'
import DesktopHeader from './DesktopHeader'


function App() {
  return (
      <BrowserRouter>
        <div id="page">
          <DesktopHeader />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="ong/:id" element={<Ong />} />
            <Route path="explore" element={<Explore />} />
            <Route path="coins" element={<Coins />} />
            <Route path="profile/:id" element={<Profile />} />
          </Routes>
        </div>
        <Menu />
     </BrowserRouter>
  );
}

export default App;
