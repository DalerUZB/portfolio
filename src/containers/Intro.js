import React from 'react'
import IntroDecription from '../components/IntroDecription'

import styled from 'styled-components'
function IntroContainer() {
    return (
        <IntroContainerDiv>
            <IntroDecription />
        </IntroContainerDiv>
    )
}

const IntroContainerDiv = styled.div`
    height: 100vh;
    background-color: #87509C;
    padding: 20px 0;
`



export default IntroContainer