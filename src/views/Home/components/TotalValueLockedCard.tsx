import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from '@blzd-dev/uikit'
import useI18n from 'hooks/useI18n'
// import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import './TotalValueLockedCard.css'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background-color: #211938;
  border-radius: 8px;
  padding: 14px;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody className="fullWidth">
        <div className="alignBlock">
          <Heading className="totalVal" size="lg">
            {TranslateString(999, 'Total Value Locked (TVL)')}
          </Heading>
          <Text className="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </div>

        <div className="alignBlock">
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
        </div>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
