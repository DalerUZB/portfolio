import React from 'react'
import styled from 'styled-components'

import Portfolio from '../components/Portfolio'

function PortfolioContainer() {
    return (
        <PortfolioContainerDiv>
            <Portfolio />
        </PortfolioContainerDiv>
    )
}

const PortfolioContainerDiv = styled.div`
height: 1423.009765625px;
 max-width: 1440px;
border-radius: 0px;
background: #FFDD99;
text-align: center;
padding-top: 107px;

`

export default PortfolioContainer