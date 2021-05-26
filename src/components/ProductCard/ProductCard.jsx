import React from 'react'
import { Container, ImageContainer, Name, Price } from './ProductCard.styled'

const ProductCard = ({ img, name, price }) => {
    return (
        <Container>
            <ImageContainer>
                <img src={img || 'https://avatars.githubusercontent.com/u/39632030?v=4'} alt="" />
            </ImageContainer>
            <Name>{name || 'amin'}</Name>
            <Price>₦{price || 1000}</Price>
        </Container>
    )
}

export default ProductCard
