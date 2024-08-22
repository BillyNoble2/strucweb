"use client"

import Image from "next/image";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPass from "./components/ResetPass";
import MainMenu from "./components/MainMenu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './components/css/Login.css'
import AlertButton from "./components/Login";


export default function page() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/Register" element = {<Register />} />
          <Route path = "/ResetPass" element = {<ResetPass />} />
          <Route path = "/MainMenu" element = {<MainMenu />} />

        </Routes>
    </Router>
    </div>
  );
}
