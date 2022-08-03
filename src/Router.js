import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/eunji/Main/Main.js';
import Login from './pages/eunji/Login/Login.js';

const Router = () => {
    return ( 
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/main' element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;