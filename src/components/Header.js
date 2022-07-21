import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { Link, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    const navLinks = [
        {
            id: 1,
            title: "Home",
            where: "/"
        },
        {
            id: 2,
            title: "Services",
            where: "/services"
        },
        {
            id: 3,
            title: "Team",
            where: "/team"
        },
        {
            id: 4,
            title: "Blog",
            where: "/blog"
        },
        {
            id: 5,
            title: "Contact",
            where: "/contact"
        },
    ]
    return (

        <Navbar >
            <Link to={"/"}>
                <LogoHeader />
            </Link>

            <NewsDiv>
                {navLinks.map((item) =>
                    <Link
                        className='stylesLink'
                        key={item.id}
                        to={item.where}
                    >
                        {item.title}
                    </Link>)}
            </NewsDiv>

        </Navbar >

    )
}
export default Header


const Navbar = styled.div`
                margin: 0 auto;
                max-width : 1011.02px;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;    
                position: absolute;
                width: 100%;
                left: 50%;
                z-index: 1;
                transform: translateX(-50%);
                .stylesLink{
                    max-width: 1011.02px;
                    height: 36.29px;
                    text-decoration: none;
                    color: #FFFFFF;
                }
                &.active{
                    background: #643A79;
                }

                
            `

const NewsDiv = styled.div`
            max-width: 100%;
            display: flex;
            align-items: center;
            justify-content:space-between;
            line-height: 40px;
            gap: 40px;
            font-family: 'Titillium Web';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            text-transform: uppercase;
            color: #FFFFFF;
            `
const LogoHeader = styled(Logo)`
            Width:116.4px;
            Height:36.29px;

            `
