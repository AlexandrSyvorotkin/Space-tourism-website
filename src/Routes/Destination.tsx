import React from 'react'
import styles from '../Styles/Routes/Destination.module.scss'
import RoutingInformation from "../Components/RoutingInformation";
import {NavLink} from "react-router-dom";

const Destination = () => {
    return (
        <div className={styles.destination}>
            <div className={styles.destination_information}>
                <RoutingInformation pageNumber='01' pageDescription='pick your destination'/>
                <div className={styles.planetRoutes}>
                    <ul>
                        {/*<NavLink to={}>Moon</NavLink>*/}
                        {/*<NavLink to={}>Mars</NavLink>*/}
                        {/*<NavLink to={}>Europa</NavLink>*/}
                        {/*<NavLink to={}>Titan</NavLink>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Destination;
