import React, {Component} from "react";

import Celeb_boa from "./page/celeb_boa";
import Celeb_nct from "./page/celeb_nct";
import Celeb_exo from "./page/celeb_exo";

import Main from './page/main-page';
import Login_page from './page/login_page';
import AfterLogin from './page/afterLoinMainPage';
import PickKey from './page/pick/pickKeyFace';
import Pick from './page/pick/pickMain';

import './css/header.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/'  element={<Main/>} />
                <Route path='/login'  element={<Login_page/>} />
                <Route path='/afterLogin'  element={<AfterLogin/>} />
                <Route path='/pick'  element={<Pick/>} />
                <Route path='/pickKey'  element={<PickKey/>} />
                <Route path='/celeb_boa'  element={<Celeb_boa/>} />
                <Route path='/celeb_nct'  element={<Celeb_nct/>} />
                <Route path='/celeb_exo'  element={<Celeb_exo/>} />
            </Routes>
        </Router>
    </div>
  );

}

export default App;
