import React from 'react'
import styled from 'styled-components'



import Flag from '../assets/news/Flag.png'
import Pencil from '../assets/news/Pencil.png'
import Settings from '../assets/news/Settings.png'
import Rocket from '../assets/news/Rocket.png'

function Servise() {
    const stateAllComponentServise = [
        {
            title: "SERVICES WE PROVIDE"
        },
    ]
    const groups = [
        {
            id: 1,
            image: Flag,
            name: "Branding",
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh.'


        },
        {
            id: 2,
            image: Pencil,
            name: "Design",
            info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem  '


        },
        {
            id: 3,
            image: Settings,
            name: "Development",
            info: 'At vero eos et accusamus et iusto odio dignissimos qui  blanditiis praesentium.'


        },
        {
            id: 4,
            image: Rocket,
            name: "ROCKET SCIENCE",
            info: 'Et harum quidem rerum est et expedita distinctio. Nam libero tempore.'


        },
    ]
    return (
        <ServiseInfoHeader>
            <WorkServise>
                {stateAllComponentServise.map((item) => <ForTitle>{item.title}</ForTitle>)}
                <SmallDiv />
                <DescriptionInfo>
                    We are working with both individuals and businesses from all over the globe <br />  to create awesome websites and applications.
                </DescriptionInfo>
                <DivForComponents>
                    <ServiseSettings>
                        {groups.map((item) =>
                            <Card>
                                <CardImage src={item.image} />
                                <Cardtitle>
                                    {item.name}
                                </Cardtitle>
                                <CardInfo>
                                    {item.info}
                                </CardInfo>
                            </Card>
                        )}
                    </ServiseSettings>
                </DivForComponents>
            </WorkServise>
        </ServiseInfoHeader >
    )
}
const ServiseInfoHeader = styled.div`
font-family: 'Titillium Web';
font-style: normal;

color: #FFFFFF;
`
const WorkServise = styled.div`
padding-top: 106px;
display: flex;
align-items: center;
flex-direction: column;
`
const ForTitle = styled.span`
font-family: Titillium Web;
font-size: 40px;
font-weight: 700;
line-height: 61px;
letter-spacing: 0em;
text-align: center;

`
const SmallDiv = styled.div`
height: 4px;
width: 87px;
left: 677px;
top: 765px;
border-radius: 0px;
margin: 15px 0 18px;
background: #000000;
opacity: 0.15;
`
const DescriptionInfo = styled.span`
font-family: Titillium Web;
font-size: 18px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: center;

`
const DivForComponents = styled.div`
 max-width: 1050px;
border-radius: 0px;
box-sizing: border-box;
background: #17C2A4;

`
const ServiseSettings = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    margin-top: 71px;
gap:30px;

    
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
`
const CardImage = styled.img`
width: 100px;
height: 100px;
border-radius: 0px;
text-align: center;

`
const Cardtitle = styled.span`
font-family: Titillium Web;
font-size: 24px;
font-weight: 700;
line-height: 37px;
letter-spacing: 0em;
text-align: left;

`
const CardInfo = styled.span`
font-family: Titillium Web;
font-size: 16px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
width: 190px;
`
export default Servise