import React, {useEffect, useState} from 'react';
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
import Technologies from "./Routes/Technologies";
import axios from "axios";

const App = () => {

    const [data, setData] = useState<[]>([])

    useEffect(()=> {
        fetchData()
    }, [])


    async function fetchData() {
        try {
            axios.get('http://localhost:3001/db.json').then(response => {
                setData(response.data)
            })
        } catch (e) {
            // alert(e)
        }
    }
    console.log(data)


    return (
        <div className={styles.app}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="destination/*" element={<Destination/>}/>
                <Route path="crew" element={<Crew/>}/>
                <Route path="technology" element={<Technologies/>}/>
            </Routes>
        </div>
        )

}

export default App;
