import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@blzd-dev/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import BlzdHarvestBalance from './BlzdHarvestBalance'
// import BlzdWalletBalance from './BlzdWalletBalance'
import './FarmStakingCard.css'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
  background-color: #211938;
  border-radius: 8px;
`

// const Block = styled.div`
//   margin-bottom: 16px;
// `

const TokenImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-right: 8px;
`

// const Label = styled.div`
//   color: ${({ theme }) => theme.colors.textSubtle};
//   font-size: 14px;
// `

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  // const addWatchBlzdToken = useCallback(async () => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   const provider = window.ethereum
  //   if (provider) {
  //     try {
  //       // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  //       const wasAdded = await provider.request({
  //         method: 'wallet_watchAsset',
  //         params: {
  //           type: 'ERC20',
  //           options: {
  //             address: '0x57067A6BD75c0E95a6A5f158455926e43E79BeB0',
  //             symbol: 'BLZD',
  //             decimals: '18',
  //             image:
  //               'https://PolyJewelhttps://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/farms/blzd.png',
  //           },
  //         },
  //       })

  //       if (wasAdded) {
  //         console.log('Token was added')
  //       }
  //     } catch (error) {
  //       // TODO: find a way to handle when the user rejects transaction or it fails
  //     }
  //   }
  // }, [])

  return (
    <StyledFarmStakingCard>
      <CardBody className="cardBodyMb">
        <div className="borderBtm">
          <Heading className="cardHeading" as="h6" size="md" mb="24px">
            {TranslateString(542, 'Farms & Staking')}
          </Heading>
          <TokenImageWrapper className="tokenImageWrapperMb">
            <div className="alignInline">
              <CardImage
                className="cardIcon"
                src="/images/farms/PolyJewel-Icon.png"
                alt="icon"
                width={64}
                height={64}
              />
              <BlzdHarvestBalance />
            </div>
            <div>
              <CardImage
                className="cardIcon"
                src="/images/farms/PolyJewel-Icon.png"
                alt="icon"
                width={64}
                height={64}
              />
              <BlzdHarvestBalance />
            </div>
          </TokenImageWrapper>
        </div>
        <div>
          <Heading className="cardHeading" as="h6" size="md" mb="24px">
            {TranslateString(542, 'Farms & Staking')}
          </Heading>
          <TokenImageWrapper className="tokenImageWrapperMb">
            <div className="alignInline">
              <CardImage
                className="cardIcon"
                src="/images/farms/PolyJewel-Icon.png"
                alt="icon"
                width={64}
                height={64}
              />
              <BlzdHarvestBalance />
            </div>
            <div>
              <CardImage
                className="cardIcon"
                src="/images/farms/PolyJewel-Icon.png"
                alt="icon"
                width={64}
                height={64}
              />
              <BlzdHarvestBalance />
            </div>
          </TokenImageWrapper>
        </div>
        <Actions>
          {account ? (
            <Button id="harvest-all" disabled={balancesWithValue.length <= 0 || pendingTx} onClick={harvestAllFarms}>
              {pendingTx
                ? TranslateString(548, 'Collecting BLZD')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton className="unlockBtn" fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
