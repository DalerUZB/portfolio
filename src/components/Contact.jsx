import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper>
            <h3 className='infoContact'>GET IN TOUCH</h3>
            <MiniDiv />
            <span className='infoSpan'>
                1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111
            </span>
            <div className='inputs'>
                <Input>
                    <InnerSpan  >
                        Your Name*
                    </InnerSpan>
                </Input>
                <Input>
                    <InnerSpan  >
                        Your Email*
                    </InnerSpan>
                </Input>
            </div>
            <div className='texarea'>
                <TexareaInput />
                <span className='forTexarea'>
                    Your Message*
                </span>
            </div>
        </Wrapper>
    )
}

export default Contact


const Wrapper = styled.div`
    padding-top: 60%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    .infoContact{
    left: 633.9990234375px;
    top: 254px;
    border-radius: nullpx;
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
    color: #FFFFFF;
    z-index: 0;
    }
    .infoSpan{
    height: 27px;
    max-width: 746px;
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
    margin: 0 auto;
    }
    .inputs{
    display: flex;
    gap: 40px;
    margin: 72px auto;
    flex-wrap: wrap;
    align-items: center;
    }
    .texarea{
        margin: 0 auto;
        height: 200px;
        max-width: 860px;
        position: relative;
.forTexarea{
    position: absolute;
    top: 10px;
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    margin-left: 23px;
}
    }
`
const MiniDiv = styled.div`
    width: 87px;
    height: 4px;
    background: #273A71;
    margin: 0 auto;
`
const Input = styled.div`
    height: 56px;
    width: 414px;
    background: #273A71;
    display: inline-block;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
        `
const InnerSpan = styled.span`
    font-family: Titillium Web;
    font-size: 24px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    height: 55px;
    width: 123px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px ;
        `

const TexareaInput = styled.textarea`
height: 200px;
width: 860px;
left: 290px;
top: 5604px;
background: #273A71;
border-radius: 0px;

`
