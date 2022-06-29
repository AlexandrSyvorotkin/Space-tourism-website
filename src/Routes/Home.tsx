import React, {FC} from 'react';
import styles from '../Styles/Routes/Home.module.scss'
import {Children} from "react";

const Home: FC = () => {
    console.log(Children)
    return (
        <div className={styles.home}>
            <div className={styles.description_wrapper}>
                <div className={styles.home_description}>
                    <span>SO, YOU WANT TO TRAVEL TO</span>
                    <span className={styles.space}>SPACE</span>
                    <span>Let’s face it; if you want to go to space, you might as well <br/>
                        genuinely go to outer space and not hover kind of on the <br/>
                        edge of it. Well sit back, and relax because we’ll give you a <br/>
                        truly out of this world experience!</span>
                </div>
                <div className={styles.button}>
                    Explore
                </div>
            </div>
        </div>
    );
};

export default Home;
