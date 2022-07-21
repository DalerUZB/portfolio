import React from 'react'
import styled from 'styled-components'

import Servise from '../components/Servise'

function ServisesContainer() {
    return (
        <ContainerServiseDiv>
            <Servise />
        </ContainerServiseDiv>
    )
}

const ContainerServiseDiv = styled.div`
max-width: 1440px;
height: 747px;
border-radius: 0px;
background: #17C2A4;
`

export default ServisesContainer