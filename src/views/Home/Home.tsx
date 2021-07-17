import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@blzd-dev/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
import BlzdStats from './components/BlzdStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
// import TwitterCard from './components/TwitterCard'
import './Home.css'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/polyjewel/homePage.png');
  background-size: 110px;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background: no-repeat;
    background-image: url(/images/polyjewel/homePage.png);
    background-size: 325px;
    background-position: right center;
    height: 330px;
    padding-top: 0;
    background-color: #6b1658;
    border-radius: 8px;
    display: flex;
    align-items: start;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero className="HeroCard">
        <Heading className="titleText" as="h1" size="xl" mb="24px" color="primary">
          {TranslateString(576, 'PolyJewel')}
        </Heading>
        {/* <Text className="titleText" >{TranslateString(578, 'The best DEFI app on Binance Smart Chain.The best DEFI app on Binance Smart Chain.')}</Text> */}
        <Text className="titleText">
          Custom color from themeCustom color from themeCustom color from themeCustom color from themeCustom color from
          themeCustom color from themeCustom color from themeCustom color from themeCustom color from themeCustom color
          from themeCustom color from theme
        </Text>
        <a href="https://t.me/BlizzardMoney" target="_blank" rel="noreferrer" className="sc-fTABeZ gHveVL joinusBtn">
          JOIN US
        </a>
        <img className="showMb" src="/images/polyjewel/homePage.png" alt="logo" />
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <BlzdStats />
        </Cards>
      </div>
      <TotalValueLockedCard />
      {/* <TwitterCard/> */}
    </Page>
  )
}

export default Home
