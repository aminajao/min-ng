import React from 'react'
import Showcase from '../../components/Showcase/Showcase'
import { firstData, secondData, thirdData } from './data'

const ProductShowcase = () => {
    return (
        <div>
            <Showcase heading='More from this seller' data={firstData} />
            <Showcase heading='People that bought this product also viewed' data={secondData} />
            <Showcase heading='Recently viewed products' data={thirdData} />
        </div>
    )
}

export default ProductShowcase
