import React, {FC} from 'react';
import styles from '../Styles/components/RoutingInformation.module.scss'

interface RoutingInformationProps {
    pageNumber: string,
    pageDescription: string
}

const RoutingInformation:FC<RoutingInformationProps> = ({pageNumber, pageDescription}) => {
    return (
        <div className={styles.routingInformation}>
            <span className={styles.pageNumber}>{pageNumber}</span>
            <span className={styles.pageDescription}>{pageDescription}</span>
        </div>
    );
};

export default RoutingInformation;
