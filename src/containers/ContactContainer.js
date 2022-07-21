import React from 'react'
import styled from 'styled-components'
import Contact from '../components/Contact'

const ContactContainer = () => {
    return (
        <Wrapper>
            <Contact />
        </Wrapper>
    )
}

export default ContactContainer

const Wrapper = styled.div`
max-width: 1511.9998779296875px;
height: 982px;
background: #3C5499;
`