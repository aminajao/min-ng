import React from 'react'
import { Container } from './Header.styled'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => {
    return (
        <Container>
            <Logo />
            <div>
                {/* <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">ENG</a></li>
                </ul> */}
            </div>
        </Container>
    )
}

export default Header
