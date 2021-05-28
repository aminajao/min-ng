import styled from 'styled-components'

export const Container = styled.div`
    background-color: #6F972D;
    height: 300px;
    background-image:  ${props => props.bgPattern};

    @media only screen and (max-width: 768px) {
        height: min-content;
        padding-bottom: 50px;
    }
`

export const Heading = styled.h1`
    color: #ffffff;
    font-weight: 700;
    line-height: 37px;
    font-size: 25px;
    padding-top: 30px;
    text-align: center;

    @media only screen and (max-width: 768px) {
        margin: 0px 5px;
    }
`
export const Text = styled.p`
    color: #ffffff;
    text-align: center;
    font-weight: 400px;
    font-size: 16px;
`
export const SearchContainer = styled.div`
    display: flex;
    margin: 50px 100px;

    @media only screen and (max-width: 768px) {
        margin: 10px 25px;
        flex-direction: column;
    }
`
export const SellButton = styled.button`
    padding: 15px 45px;
    background-color: #fff;
    border: 0px;
    color: #6F972D;
    font-size: 16px;
    font-family: inherit;
    font-weight: 700;
    border-radius: 10px 0 0 10px;
    margin-right: 20px;
    min-width: fit-content;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        border-radius: 10px;
        margin-bottom: 10px;
        margin-right: 0px;
    }
`
export const SearchInput = styled.input`
    padding: 0px 25px;
    font-weight: 400;
    font-size: 14px;
    color: rgba(37, 43, 29, 0.5);
    width: 100%;
    font-family: inherit;

    @media only screen and (max-width: 768px) {
        padding: 15px 25px;
        border-radius: 10px;
        border: 0px;
        outline: none;
        margin-bottom: 10px;
    }
`
export const SearchButton = styled.button`
    background: #F79033;
    border-radius: 0px 10px 10px 0px;
    border: 0px;
    font-family: inherit;
    padding: 0 50px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        padding: 15px 0px;
        border-radius: 10px;
        border: 0px;
        outline: none;
    }
`