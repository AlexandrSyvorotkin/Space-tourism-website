import React from 'react';
import './App.module.scss';
import Home from "./Routes/Home";
import styles from '../src/App.module.scss'
import {
    Route,
    Routes
} from "react-router-dom";
import Destination from "./Routes/Destination";
import Crew from "./Routes/Crew";
import Header from "./Layout/Header";

const App = () => (
    <div className={styles.app}>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="destination" element={<Destination/>}/>
            <Route path="crew" element={<Crew/>}/>
            <Route path="technology" element={<Crew/>}/>
        </Routes>
    </div>
);

export default App;
