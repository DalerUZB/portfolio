import React from 'react'
import styled from 'styled-components'
import Person from '../components/Person'

function PersonsContainer() {
    return (
        <ContainerPerson>
            <Person />
        </ContainerPerson>
    )
}

const ContainerPerson = styled.div`
max-width: 1440px;
height: auto;
border-radius: 0px;
background: #E7F1F8;


`

export default PersonsContainer