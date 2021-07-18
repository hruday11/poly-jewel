import React from 'react';
import { Text, Heading } from '@blzd-dev/uikit'
import PortionInfo from './PortionInfo';



const ProjectDetails: React.FC = () => {
    return (
        <div className="projectDetails">
            <Heading className="projectHeading">Project Details</Heading>
            <div className="projectExplorer">
                <div className="projectLeftBlock">
                    <div className="btnBllock">
                        <a href="https://t.me/BlizzardMoney" target="_blank" rel="noreferrer" className="sc-fTABeZ gHveVL gitBook">GitBook</a>
                        <a href="https://t.me/BlizzardMoney" target="_blank" rel="noreferrer" className="sc-fTABeZ gHveVL gitBook">Polygon Explorer</a>
                    </div>
                    <Text className="projectDesc">TreasureKey is the #1 Gambling Dapp on Binance Smart Chain crossing over to Polygon. It is a collection of decentralized, trustless, and immutable blockchain games running on the blockchain.
                    </Text>
                    <Text className="projectDesc">They will be building on the polygon chain with support from polygon official team and augury finance and aims to be the #1 Gambling Dapp on Polygon.
                    </Text>
                    <Text className="projectDesc">$PIRATEP token holders will receive profit sharing from TreasureKey and also $PIRATEP will be the main token used in the entire polygon ecosystem on TreasureKey. There is a fixed supply to $PIRATEP. No more will ever be minted.
                    </Text>
                    <Text className="projectDesc">NOTE: All unsold tokens will be burnt to prevent any dilution of $PIRATEP holders.
                    </Text>
                </div>
                <div className="projectRightBlock">
                    <PortionInfo />
                </div>

            </div>
        </div>
    )
}
export default ProjectDetails