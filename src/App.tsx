import React from 'react';
import './App.module.scss';
import Home from "./Routes/Home";
import styles from '../src/App.module.scss'

const App = () => (
    <div className={styles.app}>
        <Home/>
    </div>
);

export default App;
