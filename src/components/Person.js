import React from 'react'
import styled from 'styled-components'


import FirstPerson from '../assets/persons/Base-3.svg'
import LastPerson from '../assets/persons/Base-2.svg'
import ThreePerson from '../assets/persons/Base-1.svg'
import FourPerson from '../assets/persons/Base.svg'

import Facebook from '../assets/contacts/Facebook.svg'
import Twitter from '../assets/contacts/Twitter.svg'
import Linkedin from '../assets/contacts/Linkedin.svg'
import Mail from '../assets/contacts/Mail.svg'


function Person() {
    const pesonsInfoHeader = [
        {
            id: 0,
            GlobalTitle: "MEET OUR BEAUTIFUL TEAM",
            miniTitle: "We are a small team of designers and developers, who help brands with big ideas.",
        },
    ]
    const personsState = [
        {
            id: 1,
            images: FirstPerson,
            infoTitle: "ANNE HATHAWAY",
            info: "CEO / Marketing Guru",
            infoLorem: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
            facebook: Facebook,
            twitter: Twitter,
            Linkedin: Linkedin,
            mail: Mail

        },
        {
            id: 2,
            images: LastPerson,
            infoTitle: "Kate Upton",
            info: "Creative Director",
            infoLorem: "Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.",
            twitter: Twitter,
            Linkedin: Linkedin,
            mail: Mail

        },
        {
            id: 3,
            images: ThreePerson,
            infoTitle: "Olivia Wilde",
            info: "Lead Designer",
            infoLorem: "Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.",
            facebook: Facebook,
            twitter: Twitter,
            Linkedin: Linkedin,
            mail: Mail

        },
        {
            id: 4,
            images: FourPerson,
            infoTitle: "Ashley Greene",
            info: "SEO / Developer",
            infoLorem: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            facebook: Facebook,
            twitter: Twitter,
            mail: Mail

        },
    ]

    return (


        <>
            {pesonsInfoHeader.map((item) => (
                <Global>
                    <HeaderPersonTitle>
                        {item.GlobalTitle}
                    </HeaderPersonTitle>

                    <MiniDiv />

                    <PersonDescription>
                        {item.miniTitle}
                    </PersonDescription>

                    <ParentDivCard>
                        {personsState.map((persons) => (
                            <Card>
                                <ImageHeader src={persons.images} />
                                <CardInfoTitle>
                                    {persons.infoTitle}
                                </CardInfoTitle>
                                <CardHreff href='#'>
                                    {persons.info}
                                </CardHreff>
                                <CardForSpanInfo>
                                    {persons.infoLorem}
                                </CardForSpanInfo>
                                <ParentContact>
                                    <ContactImg src={persons.facebook} />
                                    <ContactImg src={persons.twitter} />
                                    <ContactImg src={persons.Linkedin} />
                                    <ContactImg src={persons.mail} />

                                </ParentContact>
                            </Card>

                        ))}
                    </ParentDivCard>
                </Global>
            ))}
        </>



    )
}
const Global = styled.div`
text-align:center;
padding: 107.12px 0 40px 0;
max-width: 1440px;


`
const HeaderPersonTitle = styled.div`
font-family: Titillium Web;
font-size: 41px;
font-weight: 700;
line-height: 62px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 20px;
font-weight: 700;
font-size: 40.635px;
line-height: 62px;
text-align: center;
color: #3C4761;


`
const MiniDiv = styled.div`
height: 4.1300048828125px;
width: 87px;
border-radius: 0px;
background: #BDD1DF;
opacity: 0.75;
margin: 0 auto;
margin-bottom: 26px;

`
const PersonDescription = styled.span`
font-family: Titillium Web;
font-size: 18px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
font-family: 'Titillium Web';
font-style: normal;
font-weight: 400;
font-size: 18.2857px;
line-height: 28px;
/* identical to box height */

text-align: center;

color: #3C4761;

`
const ParentDivCard = styled.div`
max-width: 1040px;
margin: 0 auto;
margin-top: 73px;
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 30px;
`
const Card = styled.div`
border-radius: 0px;
margin: 0 auto;
text-align: center;



`
const ImageHeader = styled.img`
height: 200px;
width: 200px;


`
const CardInfoTitle = styled.div`
font-family: Titillium Web;
font-size: 24px;
font-weight: 700;
line-height: 37px;
letter-spacing: 0em;
background: #E7F1F8;
border-radius: nullpx;





`
const CardHreff = styled.a`
font-family: 'Titillium Web';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #30BAE7;
`
const CardForSpanInfo = styled.p`
font-family: Titillium Web;
font-size: 16px;
line-height: 24px;
letter-spacing: 0em;
width: 191px;
height: 120px;
border-radius: nullpx;
color: #3C4761;
font-weight: 300;

`
const ParentContact = styled.div`
display: flex;
margin: 0;
padding: 0;
`
const ContactImg = styled.img`
margin-top: 47px;
padding: 0 10px;
`


export default Person