import React, {FC} from 'react';
import styles from '../Styles/components/PlanetInformation.module.scss'

interface PlanetInformationProps {
    img: any,
    planetName: string,
    planetDescription: string,
    planetDistance: string,
    planetTravel: string
}

const PlanetInformation: FC<PlanetInformationProps> = ({
    img,
    planetName,
    planetDescription,
    planetDistance,
    planetTravel,
    }) => {


    return (
        <div className={styles.planetInformation}>
            <div className={styles.planetImg}>
                <img src={img} alt=""/>
            </div>
            <div className={styles.planetDescription}>
                <span>{planetName}</span>
                <p>{planetDescription}</p>
                <span>Avg.Distance {planetDistance}</span>
                <span>Est. Travel Time {planetTravel}</span>
            </div>
        </div>
    );
};

export default PlanetInformation;
