import React from 'react'
import styled from 'styled-components'


function IntroDecription() {


    return (
        <Wrapper>
            <h3>
                Hi there! We are the new kids on the block
                and we build awesome websites and mobile apps.
            </h3>
            <WorkWithUs >
                WORK WITH US!
            </WorkWithUs>
        </Wrapper>


    )
}


const Wrapper = styled.div`
margin: 0 auto;
max-width : 1011.02px;
padding: 60px;
display: flex;
height: auto;
justify-content: space-between;    
align-items: center;
flex-direction: column;

h3 {
font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 42px;
line-height: 64px;
text-align: center;
color: #F7F3EA;
margin-top: 102px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}



`

const WorkWithUs = styled.button`
Width:293px;
Height:70px;

font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 18.0002px;
line-height: 27px;
color: #FFFFFF;
background: #EB7D4B;
border: none;
margin-top: 25px;
border-radius: 10px;
`
export default IntroDecription