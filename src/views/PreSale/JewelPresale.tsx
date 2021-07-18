import React from 'react';
import { Text, Button } from '@blzd-dev/uikit'
import './PreSaleHome.css'
import ProgressImg from '../../assets/images/viewImg.svg';
import Caution from '../../assets/images/caution.svg';

const JewelPresale: React.FC = () => {
    return (
        <div className="jewelPresale">
            <div className="trasureBlock">
                <div className="btmSpace">
                    <div className="treasure">
                        <img className="treasureImg" alt="treasureImg" src="https://augury.finance/_nuxt/img/piratep.2b26101.png" />
                        <Text className="treasureText">Jewel Presale</Text>
                    </div>
                    <div className="communityBlock">
                        <Text className="communityText">Community Potion</Text>
                        <Text className="communityBrewed"> Brewed </Text>
                    </div>
                </div>
                <div className="totalBlock">
                    <div className="totalLeftBlock">
                        <Text className="value">4,000,000 PIRATEP</Text>
                        <Text className="desc"> Total offering  </Text>
                    </div>
                    <div className="totalRightBlock">
                        <Text className="value">0.1 USDC</Text>
                        <Text className="desc">  Per PIRATEP   </Text>
                    </div>
                </div>
                <div className="progressBar">
                    <hr className="progress" />
                    <Text className="progressText">Total Raised: 1,649,725.06 USDC</Text>
                </div>
                <div className="userPortion">
                    <div className="totalLeftBlock">
                        <Text className="value">4,000,000 PIRATEP</Text>
                        <Text className="desc"> Total offering  </Text>
                    </div>
                    <div className="alignCenter">
                        <Text className="value">0%</Text>
                        <Text className="desc">  Your share   </Text>
                    </div>
                    <div className="totalRightBlock">
                        <Text className="value">0.1 USDC</Text>
                        <Text className="desc">  Per PIRATEP   </Text>
                    </div>
                </div>
            </div>
            <div className="portionReady">
                <div className="portionHeading">
                    <Text className="portionText">The Potion is ready!</Text>
                    <img className="progressImg" src={ProgressImg} alt="progressImgSVG" />
                </div>
                <div className="portionsubHeading">
                    <Text className="subHeading">  Our records indicate that you did not add to the Treasure Key (PIRATEP) potion. Therefore, you have
                        no tokens that need claiming.</Text>
                    <Text className="subHeading"> If you feel that this an error, please contact an Augury Finance administrator.</Text>
                </div>
                <Button className="connectWallet">Connect Wallet</Button>
                <div className="cautionText">
                    {/* <img src={ProgressImg} alt="cautionImg" /> */}
                    <Text className="cautionDesc">USDC can not be withdrawn after contributing. Tokens can be claimed after Sat, 17 Jul 2021 12:00:00 GMT</Text>
                </div>
            </div >

        </div>
    )
}
export default JewelPresale