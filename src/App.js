import React, {Component} from "react";

import Celeb_boa from "./page/celeb_boa";
import Celeb_nct from "./page/celeb_nct";
import Celeb_exo from "./page/celeb_exo";

import Main from './page/main-page';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/'  element={<Main/>} />
                <Route path='/celeb_boa'  element={<Celeb_boa/>} />
                <Route path='/celeb_nct'  element={<Celeb_nct/>} />
                <Route path='/celeb_exo'  element={<Celeb_exo/>} />
            </Routes>
        </Router>
    </div>
  );

}

export default App;
