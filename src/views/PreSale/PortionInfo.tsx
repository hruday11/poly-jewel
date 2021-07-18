import React from 'react';
import { Text } from '@blzd-dev/uikit'



const PortionInfo: React.FC = () => {
 return(
     <div className="infoBlock">
        <div className="infoTabHeader">
            <Text className="infoText">Potion information</Text>
            <Text className="infoText">Token information</Text>
        </div>
        <div className="tabContent">
            <div className="tabDesc">
                <Text className="leftDesc">Potion begins brewing...</Text>
                <Text className="rightDesc">Fri, 16 Jul 2021 12:00:00 GMT</Text>
            </div>
            <div className="tabDesc">
                <Text className="leftDesc">Potion stops brewing...</Text>
                <Text className="rightDesc">Sat, 17 Jul 2021 12:00:00 GMT</Text>
            </div>
            <div className="tabDesc">
                <Text className="leftDesc">Total Raising</Text>
                <Text className="rightDesc">400,000 USDC</Text>
            </div>
            <div className="tabDesc">
                <Text className="leftDesc">Total Offering</Text>
                <Text className="rightDesc">4,000,000 PIRATEP</Text>
            </div>
            <div className="tabDesc">
                <Text className="leftDesc">Price per PIRATEP</Text>
                <Text className="rightDesc">0.10 USDC</Text>
            </div>
            <div className="tabDesc">
                <Text className="leftDesc">Access type</Text>

                <Text className="rightDesc "><span className="commPotion">Community Potion</span></Text>
            </div>
            <div className="tabDesc">
                <Text className="leftDesc">Requirements to join</Text>
                <Text className="rightDesc">None</Text>
            </div>
        </div>
     </div>
 )
}
export default PortionInfo