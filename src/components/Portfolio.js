import React, { useState } from 'react'
import styled from 'styled-components'


import FirstImage from '../assets/forPersonsNews/1.svg'
import SecondImage from '../assets/forPersonsNews/2.svg'
import ThreeImage from '../assets/forPersonsNews/3.svg'
import FourImage from '../assets/forPersonsNews/4.svg'
function Portfolio() {
    // const [click, setClick] = useState(false)
    const statePersonHeader = [
        {
            id: 1,
            FirstTitle: 'OUR PORTFOLIO',
            PortfolioDescription: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit ametconsectetur, adipisci velit, sed quia non numquam",

        },

        {
            buttons: {
                id: 10,
                name: "ALL"
            },
            buttons: {
                id: 11,
                name: "WEB"
            },
            buttons: {
                id: 12,
                name: "APPS"
            },
            buttons: {
                id: 13,
                name: "ICONS"
            },
        },
        {
            images: {
                id: 20,
                image: FirstImage,
                title: "Isometric Perspective Mock-Up"

            }, images: {
                id: 21,
                image: SecondImage,
                title: "Time Zone App UI"

            },
            images: {
                id: 22,
                image: SecondImage,
                title: "Viro Media Players UI"

            },
            images: {
                id: 23,
                image: FourImage,
                title: "Blog / Magazine Flat UI Kit"

            },
        },
        {
            footerBtn: {
                btn: "LOAD MORE PROJECTS"
            }
        }
    ]




    return (
        <>
            <HeaderPortfolioTitle>
                OUR PORTFOLIO
            </HeaderPortfolioTitle>
            <MiniDiv />
            <PortfolioDescription>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam
            </PortfolioDescription>
            <GlobalHreffDiv>
                <HreffA>ALL</HreffA>
                <HreffA>WEB</HreffA>
                <HreffA>APPS</HreffA>
                <HreffA>ICONS</HreffA>
            </GlobalHreffDiv>

            <ParentCardDiv>
                <EncompassingWithin>
                    <CardImages src={FirstImage} />
                    <CardinTheLowerPartSpan>
                        Isometric Perspective Mock-Up
                    </CardinTheLowerPartSpan>
                </EncompassingWithin>

                <EncompassingWithin>
                    <CardImages src={SecondImage} />
                    <CardinTheLowerPartSpan>
                        Isometric Perspective Mock-Up
                    </CardinTheLowerPartSpan>
                </EncompassingWithin>

                <EncompassingWithin>
                    <CardImages src={ThreeImage} />
                    <CardinTheLowerPartSpan>
                        Isometric Perspective Mock-Up
                    </CardinTheLowerPartSpan>
                </EncompassingWithin>

                <EncompassingWithin>
                    <CardImages src={FourImage} />
                    <CardinTheLowerPartSpan>
                        Isometric Perspective Mock-Up
                    </CardinTheLowerPartSpan>
                </EncompassingWithin>
                <PortfolioFooterBtn>
                    LOAD MORE PROJECTS
                </PortfolioFooterBtn>
            </ParentCardDiv>

        </>
    )
}
const AllGlobal = styled.div`

`

const HeaderPortfolioTitle = styled.div`
font-family: Titillium Web;
font-size: 40px;
font-weight: 700;
line-height: 61px;
letter-spacing: 0em;
text-align: center;
font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 61px;
text-align: center;
color: #393939;
`
const MiniDiv = styled.span`
height: 4px;
width: 87px;
left: 677px;
top: 3082px;
border-radius: 0px;
background: #E5C37F;
display: block;
margin: 0 auto;

`
const PortfolioDescription = styled.span`
height: 54px;
width: 498px;
left: 470.5px;
top: 3104.8740234375px;
border-radius: nullpx;

font-family: Titillium Web;
font-size: 18px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: center;
color: #393939;
display: block;
margin: 18px auto;
`

const GlobalHreffDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 304px;
margin: 0 auto;
gap: 30px;

`
const HreffA = styled.a`
height: 38px;
width: 90px;
background: rgba(0, 0, 0, 0.08);
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;

font-family: Titillium Web;
font-size: 18px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
padding: 4px;
`

const ParentCardDiv = styled.div`
max-width: 1103px;
height: auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
border: 1px solid red;
margin: 62px auto;
gap: 20px;
`
const EncompassingWithin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CardImages = styled.img`
max-width: 441px;
height: 311px;
border-radius: 0px;
`

const CardinTheLowerPartSpan = styled.p`
font-family: 'Titillium Web';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-transform: uppercase;
color: #393939;
`

const PortfolioFooterBtn = styled.button`
height: 70px;
width: 293px;
border-radius: 0px;
background: #17C2A4;


font-family: 'Titillium Web';
font-style: normal;
font-weight: 600;
font-size: 18.0002px;
line-height: 27px;

color: #FFFFFF;

border: none;
border-radius: 5px;
margin-top: 75px;

`

export default Portfolio