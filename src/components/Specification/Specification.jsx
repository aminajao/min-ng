import React from 'react'
import { Container, Heading, TableHeading, TableContent } from './Specification.styled'

const Specification = () => {
    return (
        <Container>
            <Heading>Specification</Heading>
            <div>
                <TableHeading>
                    <p className='first-child'>Key features</p>
                    <p>Specifications</p>
                </TableHeading>
                <TableContent>
                    <p className='first-child'>Screen: 6.5 inch screen</p>
                    <p>Weight: </p>
                </TableContent>
                <TableContent>
                    <p className='first-child'>Battery: 5,000Mah Battery</p>
                    <p>Lenght:</p>
                </TableContent>
                <TableContent>
                    <p className='first-child'>Memory: 2/32GB</p>
                    <p>Breadth:</p>
                </TableContent>
                <TableContent>
                    <p className='first-child'>Camera: Rear Camera - 13.0 MP + 2.0 MP</p>
                    <p>Height:</p>
                </TableContent>
                <TableContent>
                    <p className='first-child'>Sim: Dual SIM</p>
                    <p>Height:</p>
                </TableContent>
                <TableContent>
                    <p className='first-child'>Guatanty: 24-month Warranty</p>
                    <p>Material:</p>
                </TableContent>
            </div>
        </Container>
    )
}

export default Specification
