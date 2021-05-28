import React from 'react'
import { Container, LeftContainer, FirstRow, RightContainer, ColorSection, Description } from './Overview.styled'
import Button from '../Button'
import ShoeLarge from '../../assets/shoe-large.png'
import ShoeSmall from '../../assets/shoe-small.png'
import ShoeSmall1 from '../../assets/shoe-small-2.png'
import { ReactComponent as Rate } from '../../assets/rate.svg'

const Overview = () => {
    return (
        <Container>
            <LeftContainer>
                <FirstRow>
                    <div className="left">
                        <div className="first__image">
                            <img src={ShoeLarge} alt="" />
                        </div>
                        <div className="second-image-container">
                            <img src={ShoeSmall} alt="" />
                            <img src={ShoeSmall1} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h3>Nike Airmax 720 React</h3>
                        <div className="flex  flex-border-bottom">
                            <Rate />
                            <p>0 reviews</p>
                            <a href="/">Submit a review</a>
                        </div>
                        <h4>Price</h4>
                        <div className="flex">
                            <p>1 - 100pieces</p>
                            <p>100 - 1000pieces</p>
                            <p> 1000 pieces</p>
                        </div>
                        <div className="flex flex-border-bottom">
                            <h4 className="green_text">#1000</h4>
                            <h4 className="green_text">#900</h4>
                            <h4 className="green_text">#800</h4>
                        </div>
                        <p>Unit available: 200</p>
                        <ColorSection>
                            <h4>Select color</h4>
                            <div className="color-container">
                                <div>
                                    <div className="black"></div>
                                    <p className="text">Black</p>
                                </div>
                                <div >
                                    <div className="white"></div>
                                    <p className="text">White</p>
                                </div>
                                <div>
                                    <div className="red"></div>
                                    <p className="text">Red</p>
                                </div>
                                <div>
                                    <div className="blue"></div>
                                    <p className="text">Blue</p>
                                </div>
                                <div>
                                    <div className="green"></div>
                                    <p className="text">Green</p>
                                </div>
                                <div>
                                    <div className="yellow"></div>
                                    <p className="text">Yellow</p>
                                </div>
                            </div>
                        </ColorSection>
                    </div>
                </FirstRow>
                <Description>
                    <h4>Product description</h4>
                    <h5 className="heading">Appearance</h5>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio interdum dictumst duis eget.
                        Rhoncus odio pellentesque tellus blandit tempor id. Aliquam auctor viverra purus at. Sed lacus
                        aliquam pellentesque viverra massa ipsum ac. Purus bibendum nunc rhoncus, massa sit aliquet.
                        Non amet porta scelerisque massa pulvinar vulputate. Porttitor id turpis ipsum, pellentesque
                        sagittis vel enim turpis fermentum. Tortor, orci malesuada donec ut. Id platea sit gravida leo,
                        quis sit. Massa, id euismod nunc ut Test lacus ut. Faucibus eu id turpis ut nulla blandit porttitor.
                    </p>

                    <h5 className="heading">Comfort</h5>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio interdum dictumst duis eget.
                        Rhoncus odio pellentesque tellus blandit tempor id. Aliquam auctor viverra purus at. Sed lacus
                        aliquam pellentesque viverra massa ipsum ac. Purus bibendum nunc rhoncus, massa sit aliquet.
                        Non amet porta scelerisque massa pulvinar vulputate. Porttitor id turpis ipsum, pellentesque
                        sagittis vel enim turpis fermentum. Tortor, orci malesuada donec ut. Id platea sit gravida leo,
                        quis sit. Massa, id euismod nunc ut Test lacus ut. Faucibus eu id turpis ut nulla blandit porttitor.
                    </p>

                    <h5 className="heading">Durability</h5>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio interdum dictumst duis eget.
                        Rhoncus odio pellentesque tellus blandit tempor id. Aliquam auctor viverra purus at. Sed lacus
                        aliquam pellentesque viverra massa ipsum ac. Purus bibendum nunc rhoncus, massa sit aliquet.
                        Non amet porta scelerisque massa pulvinar vulputate. Porttitor id turpis ipsum, pellentesque
                        sagittis vel enim turpis fermentum. Tortor, orci malesuada donec ut. Id platea sit gravida leo,
                        quis sit. Massa, id euismod nunc ut Test lacus ut. Faucibus eu id turpis ut nulla blandit porttitor.
                    </p>

                    <h5 className="heading">Strength</h5>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio interdum dictumst duis eget.
                        Rhoncus odio pellentesque tellus blandit tempor id. Aliquam auctor viverra purus at. Sed lacus
                        aliquam pellentesque viverra massa ipsum ac. Purus bibendum nunc rhoncus, massa sit aliquet.
                        Non amet porta scelerisque massa pulvinar vulputate. Porttitor id turpis ipsum, pellentesque
                        sagittis vel enim turpis fermentum. Tortor, orci malesuada donec ut. Id platea sit gravida leo,
                        quis sit. Massa, id euismod nunc ut Test lacus ut. Faucibus eu id turpis ut nulla blandit porttitor.
                    </p>
                </Description>
            </LeftContainer>
            <RightContainer>
                <h4 className="heading__underline">Delivery</h4>
                <p className="text">
                    This product can only be shipped to Lagos, Ibadan Abuja Benin, Kano,
                    Kaduna, Ogun, Portharcut, and sokoto.
                </p>

                <h4 className="heading">Shipping Method</h4>
                <p className="faint">Available Shipping cargos: </p>

                <ul>
                    <li>Express shipping by DHL</li>
                    <li>Gig logistics</li>
                    <li>Min shipping cargos</li>
                    <li>DHL Regular</li>
                </ul>
                <Button>
                    Contact seller
                </Button>

                <h4 className="heading return-policy">Return policy</h4>
                <p className="text pad">
                    Free return within 15 days for Min shipping cargos items and 7 days
                    for other eligible items. terms and condition apply.
                </p>

                <h4 className="heading">Warranty</h4>
                <p className="text">1 year warranty</p>

                <h4 className="heading">Seller’s information</h4>
                <h3 className="heading_tick">Tripple B‘n’B </h3>
                <p className="text-nopad">Verified by Min.ng</p>
                <p className="text-nopad">1200 Followers</p>

                <div className="flex">
                    <a href="/" className="text-decorated">Contact</a>
                    <a href="/" className="text-decorated">See more</a>
                    <Button>Follow</Button>
                </div>

                <h4>Seller’s Rating</h4>
            </RightContainer>
        </Container>
    )
}

export default Overview
