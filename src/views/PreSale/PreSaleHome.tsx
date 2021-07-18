import React from 'react';
import { Text } from '@blzd-dev/uikit'
import ProjectDetails from './ProjectDetails';
import JewelPresale from './JewelPresale';
import PortionInfo from './PortionInfo';



const PreSaleHome: React.FC = () => {
    return (
        <div>
            <JewelPresale />
            <ProjectDetails />
            {/* <PortionInfo/> */}
        </div>
    )
}
export default PreSaleHome