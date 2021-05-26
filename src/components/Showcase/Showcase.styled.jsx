import styled from 'styled-components'

export const Container = styled.div`
    margin: 50px 100px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E5E5E5;
`
export const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;

    h4 {
        color: #252B1D;
        letter-spacing: 0.06em;
        text-decoration-line: underline;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
    }

    button {
        color: #fff;
        background-color: #6F972D;
        border-radius: 10px;
        padding: 3px 15px;
        border: 0px;
        font-family: inherit;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
    }
`
export const SecondRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    grid-gap: 50px;
    margin-top: 40px;
`
