import styled from 'styled-components'

export const Container = styled.div`
    margin: 150px 100px;
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 100px;
`
export const Text = styled.div`
font-size: 12px;
font-weight: 500;
letter-spacing: 0.02em;
color: #252B1D;
line-height: 272.5%;
`
export const RightContainer = styled.div`
display: flex;
justify-content: space-between;
`
export const EachSection = styled.div`
display: flex;
flex-direction: column;

h4 {
    font-weight: 600;
    font-size: 16px;
    color: #252B1D;
    margin-bottom: 30px;
}
a {
    font-size: 12px;
    font-weight: 500;
    color: #252B1D;
    text-decoration: none;
    line-height: 18px;
    margin-bottom: 20px;
}
`
export const MobileContainer = styled.div`
    margin: 10px 100px;
    display: flex;
    justify-content: center;
    margin-bottom: 120px;

    svg {
        margin: 0px 25px;
    }
`
export const FooterLinks = styled.div`
    display: flex;
    margin: 80px 100px;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: #252B1D;
        font-size: 14px;
        weight: 100;
        opacity: 0.5;
    }
`