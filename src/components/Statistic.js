import React, { useState } from 'react'
import styled from 'styled-components'

import { CircleChart } from 'react-svg-circle-chart'

const firstCircle = [
    {
        angle: 100, color: '#555',
    },
    {
        angle: 82, color: '#0997',

    },

]



function Statistic() {
    const stateHeader = [
        {
            id: 1,
            headerTitle: 'WE GOT SKILLS!',
            headerLorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    const stateStatistic = [
        {
            id: 1,
            static: "90%",
            nameStatic: "Web Design",

        },
        {
            id: 2,
            static: "75%",
            nameStatic: "HTML / CSS",

        },
        {
            id: 3,
            static: "70%",
            nameStatic: "GRAPHIC DESIGN",

        },
        {
            id: 4,
            static: "85%",
            nameStatic: "UI / UX",

        },
    ]
    return (
        <>
            {stateHeader.map((info) => (
                <HeaderGlobalStatic>
                    <HeaderInfo>
                        {info.headerTitle}
                    </HeaderInfo>

                    <MiniDiv />
                    <HeaderDescription>
                        {info.headerLorem}
                    </HeaderDescription>
                    <Test>
                        {stateStatistic.map((itemsStatic) => (
                            <GlobalDivForFlexStatic>
                                <ForCircle>
                                    <CircleChart values={firstCircle} size={20} radius={65} />
                                    <FirstSpan>{itemsStatic.static}</FirstSpan>
                                </ForCircle>
                                <FooterTitle>
                                    {itemsStatic.nameStatic}
                                </FooterTitle>
                            </GlobalDivForFlexStatic>
                        ))}
                    </Test>
                </HeaderGlobalStatic>
            ))
            }
        </>
    )
}

const HeaderGlobalStatic = styled.div`
text-align: center;
padding-top: 104px;
`

const HeaderInfo = styled.span`
font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 61px;
text-align: center;
color: #3C4761;
display: block;
margin-bottom: 1.5px ;
`
const MiniDiv = styled.div`
height: 4px;
max-width: 87px;
background: #DFE8ED;
margin: 0 auto;
`

const HeaderDescription = styled.span`
display: block;
font-family: 'Titillium Web';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #3C4761;
height: 54px;
max-width: 547px;
margin: 0 auto;
margin-top: 18px ;
`

const ForCircle = styled.div`
height: 440.7470703125px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
position: relative;
`
const Test = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
max-width: 1000px;
margin: 0 auto;
box-sizing: border-box;
overflow: hidden;
`

const FirstSpan = styled.span`
font-family: 'Titillium Web';
font-style: normal;
font-weight: 300;
font-size: 50.0117px;
line-height: 76px;
position: absolute;
left: -40px;
`
const GlobalDivForFlexStatic = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;

`
const FooterTitle = styled.h1`
font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 37px;
text-transform: uppercase;
color: #3C4761;
margin: -110px 0 100px 0; 
`






export default Statistic