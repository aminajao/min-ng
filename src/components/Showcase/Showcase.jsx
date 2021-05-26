import React from 'react'
import { Container, FirstRow, SecondRow } from './Showcase.styled'
import ProductCard from '../ProductCard/ProductCard'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

const Showcase = ({ heading, data }) => {

    
    return (
        <Container>
            <FirstRow>
                <h4>{heading}</h4>
                <button>See all <Arrow /></button>
            </FirstRow>
            <SecondRow>
                {
                    data?.map((each) => {
                        return (
                            <ProductCard img={each.img} name={each.name} price={each.price} />
                        )
                    })
                }
            </SecondRow>
        </Container>
    )
}

export default Showcase
