import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Heading, Text } from '@blzd-dev/uikit'
import { BLOCKS_PER_YEAR } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceBlzdBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'
import './Farms.css'
import PercentCardImg from '../../assets/images/percentCardImg.svg'

const FarmsImage = styled.div`
  background-image: url('/images/polyjewel/farms.png');
  background-size: 150px;
  width: 200px;
  height: 60px;
  display: block;
  margin: 0px auto;
  margin-bottom: 20px;
`

const PoolsImage = styled.div`
  background-image: url('/images/polyjewel/pools.png');
  background-size: 150px;
  width: 200px;
  height: 60px;
  display: block;
  margin: 0px auto;
  margin-bottom: 20px;
`

export interface FarmsProps {
  tokenMode?: boolean
}

const loopData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
]

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceBlzdBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  console.log(tokenMode)

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  // const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      console.log(farmsToDisplay)
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.blzdPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum],
  )

  return (
    <Page>
      {/* <Hero> */}
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {/* <img src='/images/polyjewel/farms.png' alt="farmsimg" /> */}
        {tokenMode ? <PoolsImage /> : <FarmsImage />}
        {tokenMode
          ? TranslateString(10002, 'Stake tokens to earn BLZD')
          : TranslateString(320, 'Stake LP tokens to earn BLZD')}
      </Heading>
      {/* </Hero> */}
      <FarmTabButtons />
      <div>
        <Divider />
        {/* <Heading>sjdf</Heading> */}
        <FlexLayout>
          <Route exact path={`${path}`}>
            {/* {farmsList(activeFarms, false)} */}
            {loopData.map((data) => {
              return (
                <div key={data.id} className="activeCard">
                  <img
                    className="activeImg"
                    src="https://raw.githubusercontent.com/blzd-dev/blzd-assets/main/farms/xblzd-busd.png"
                    alt="logo"
                  />
                  <div className="noFeesBlock">
                    <Text className="noFeesHeader">xBLZD-BUSD LPv2</Text>
                    <div>
                      <button className="unstyledBtn" type="button">
                        Unstyled Button
                      </button>
                    </div>
                  </div>
                  <div className="percentCard">
                    <Text className="percentCardText">229.69%</Text>
                    <img src={PercentCardImg} alt="PercentCardImg" />
                  </div>
                  <div className="depositCard">
                    <div className="">
                      <Text className="depositFee font14">Deposit Fee</Text>
                      <Text className="depositFeepercent font14">0%</Text>
                    </div>
                    <div className="">
                      <Text className="depositFee font14">Deposit Fee</Text>
                      <Text className="depositFeepercent font14">0%</Text>
                    </div>
                  </div>
                  <div className="liquidityCard">
                    <Text className="liquidityText">Liquidity</Text>
                    <Text className="liquidityAmt">$2.08m</Text>
                  </div>
                  <div className="earnedCard">
                    <Text className="earnedText">Earned</Text>
                    <Text className="earnedAmt">0</Text>
                  </div>
                </div>
              )
            })}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
    </Page>
  )
}

export default Farms
