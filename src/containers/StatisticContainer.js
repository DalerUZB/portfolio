import React from 'react'
import Statistic from '../components/Statistic'

import styled from 'styled-components'

function StatisticContainer() {
    return (
        <StatisticContainerDiv>
            <Statistic />
        </StatisticContainerDiv>
    )
}

const StatisticContainerDiv = styled.div`
max-width: 1440px;
height: 655px auto;
background: #FFFFFF;

`

export default StatisticContainer