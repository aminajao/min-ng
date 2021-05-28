import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;  
    
    @media only screen and (max-width: 400px) {
        max-width: 250px;
    }
`
export const ImageContainer = styled.div`
    padding: 25px 10px;
    border-radius: 15px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    min-height: 250px;
    
    img {
        width: 100%;
        height: 100%;
    }
    `
export const Name = styled.div`
    color: #252B1D;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding-left: 5px;
    `

export const Price = styled.div`
    font-weight: 500;
    padding-left: 5px;
    font-size: 16px;
    line-height: 24px;
    color: #252B1D;
`
