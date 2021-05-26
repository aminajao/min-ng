import styled from 'styled-components'

export const Container = styled.div`
    margin: 25px 100px;
`
export const Heading = styled.div`
    letter-spacing: 0.06em;
    text-decoration-line: underline;
    color: #252B1D;
    font-weight: 500;
    font-size: 20px;
`
export const TableHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #A0B1C4;
    margin-top: 25px;
    
    p {
        width: 50%;
        text-align: center;
        margin-right: 1px solid red;
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 20px;
    }
    `
export const TableContent = styled.div`
    display: flex;
    border: 1px solid #A0B1C4;
    border-top: 0px;

    
    p {
        width: 50%;
        padding: 25px;
        padding-bottom: 40px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    p.first-child {
        border-right: 1px solid #A0B1C4;
    }
`