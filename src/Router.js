import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Main from "./pages/eunji/Main/main.js";
import Login from "./pages/eunji/Login/login.js";


const Router =() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
