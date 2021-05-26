import React from 'react'
import { Container, RightContainer, EachSection, Text, MobileContainer, FooterLinks } from './Footer.styled'
import { ReactComponent as FooterLogo } from '../../assets/footer-logo.svg'
import { ReactComponent as Android } from '../../assets/android.svg'
import { ReactComponent as Ios } from '../../assets/ios.svg'

const Footer = () => {
    return (
        <>
            <Container>
                <div>
                    <FooterLogo />
                    <Text>
                        min.ng is Nigeria’s #1 B2B market for made in Nigeria goods.
                        We offer a wide array of ready-to-ship and customizable products in
                        Food & Beverages, Fashion, Mechanical Parts & Fabrication Services,
                        Auto and Transportation, Health& Beauty, Furniture and ther categories
                </Text>
                </div>
                <RightContainer>
                    <EachSection>
                        <h4>About us</h4>
                        <a href="/">Our Mission</a>
                        <a href="/">Our Vision</a>
                        <a href="/">Who we are</a>
                    </EachSection>
                    <EachSection>
                        <h4>Our Partners</h4>
                        <a href="/">Partners</a>
                        <a href="/">Premium</a>
                        <a href="/">Logistics</a>
                    </EachSection>
                    <EachSection>
                        <h4>Our Services</h4>
                        <a href='/'>Trade Finance</a>
                        <a href='/'>Marketing</a>
                        <a href="/">Services</a>
                        <a href="/">Business</a>
                        <a href="/">Verification</a>
                        <a href="/">Inventory</a>
                        <a href="/">Subscription</a>
                    </EachSection>
                    <EachSection>
                        <h4>Sell on min.ng</h4>
                        <a href="/">Create store</a>
                        <a href="/">Manage</a>
                        <a href="/">Inventory</a>
                    </EachSection>
                    <EachSection>
                        <h4>Contact us</h4>
                        <a href="/">info@mini.ng</a>
                        <a href="/">09090000452</a>
                        <a href="/">Social media</a>
                    </EachSection>
                </RightContainer>
            </Container>
            <MobileContainer>
                <Android />
                <Ios />
            </MobileContainer>
            <FooterLinks>
                <a href='/'>Privacy & Policy</a>
                <a href='/'>Terms of service</a>
                <a href='/'>©2021 min.ng. All Rights Reserved</a>
            </FooterLinks>
        </>
    )
}

export default Footer
