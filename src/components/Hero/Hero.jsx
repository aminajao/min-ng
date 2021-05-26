import React from 'react'
import { Container, Heading, Text, SearchContainer, SellButton, SearchInput, SearchButton } from './Hero.styled'
import HeroPattern from '../../assets/hero-pattern.svg'

const Hero = () => {
    return (
        <Container bgPattern={HeroPattern}>
            <Heading>Nigeria’s Biggest B2B ECommerce Platform</Heading>
            <Text>One stop site for connecting businesses through ecommerce</Text>
            <SearchContainer>
                <SellButton>Sell on min</SellButton>
                <SearchInput type="search" placeholder="Search by product name or category" />
                <SearchButton>Search</SearchButton>
            </SearchContainer>
        </Container>
    )
}

export default Hero
