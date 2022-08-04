import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainEunji from './pages/eunji/Main/Main.js';
import LoginEunji from './pages/eunji/Login/Login.js';
import MainGiseon from './pages/giseon/Main/Main.js';
import LoginGiseon from './pages/giseon/Login/Login.js';
import MainJunho from './pages/junho/Main/Main.js';
import LoginJunho from './pages/junho/Login/Login.js';
import MainWonho from './pages/wonho/Main/Main.js';
import LoginWonho from './pages/wonho/Login/Login.js';
import Nav from './components/Nav/Nav.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/loginEunji" element={<LoginEunji />} />
        <Route path="/mainEunji" element={<MainEunji />} />
        <Route path="/loginGiseon" element={<LoginGiseon />} />
        <Route path="/mainGiseon" element={<MainGiseon />} />
        <Route path="/loginJunho" element={<LoginJunho />} />
        <Route path="/mainJunho" element={<MainJunho />} />
        <Route path="/loginWonho" element={<LoginWonho />} />
        <Route path="/mainWonho" element={<MainWonho />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
