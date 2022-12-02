import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import About from "./components/About";
import Stack from "./components/Stack"
import Socials from "./components/Socials"
import Other from "./components/Other"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stack" element={<Stack/>}/>
                <Route path="/socials" element={<Socials/>}/>
                <Route exact path="/404" element={<Other/>}/>
                <Route path="*" element={<Navigate to={"/404"}/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

