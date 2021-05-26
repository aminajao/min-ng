import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button

const StyledButton = styled.button`
    color: #fff;
    background: #6F972D;
    border-radius: 10px;
    border: 0px;
    padding: 12px 40px;
    cursor: pointer;
    width: 200px;
    font-family: inherit;
    font-size: 16px;
    margin-bottom: 25px;
`