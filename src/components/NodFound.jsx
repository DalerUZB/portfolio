import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { CircleSpinner } from 'react-spinners-kit'
const NodFound = () => {
    return (
        <Wrapper>
            <GlobalDiv>
                <h1>NodFound</h1>
                <CircleSpinner size={50} color="#ffffff" loading={true} />
                <div className='settingsBtn'>
                    <Button to={'/'}>clickToHome</Button>
                </div>
            </GlobalDiv>
        </Wrapper>
    )
}

export default NodFound
const Button = styled(Link)`
    font-size: 32px;
    background-color: yellow;
    color: #ffffffff;
    text-decoration: none;
    margin-top: 30px;
    padding: 2px;
    border-radius:100% 0 0 100%;
    padding: 20px;
   
`
const Wrapper = styled.div`
    background: #3C5499;
    max-width : 100%;
    height:100vh;    
    position: relative;
    .settingsBtn{
        margin-top: 20px;
        position: absolute;
        top: 100%;
        transform: translateY(10%);
    }
    `

const GlobalDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-weight: 700;
        font-size: 64px;
    }
`