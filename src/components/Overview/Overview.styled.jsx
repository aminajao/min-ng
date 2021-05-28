import styled from 'styled-components'

export const Container = styled.div`
    margin: 25px 100px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 50px;
    @media only screen and (max-width: 1280px) {
        margin: 25px;
        grid-gap: 20px;
    }
    @media only screen and (max-width: 876px) {
        display: block;
    }
`
export const LeftContainer = styled.div`
    // display: grid;

`
export const ColorSection = styled.div`
    h4 {
        font-size: 20px;
        color: #252B1D;
        font-weight: 400;
        margin-bottom: 25px;
    }
    .color-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

        .text {
            font-size: 14px;
            color: #252B1D;
        }
        .black {
            width: 25px;
            height: 25px;
            background-color: #000;
            border-radius: 3px;
        }
        .white {
            width: 25px;
            height: 25px;
            background-color: #fff;
            border-radius: 3px;
            border: 1px solid #000;
            border: 0.2px solid #9098B0;
            box-sizing: border-box;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }
        .green {
            width: 25px;
            height: 25px;
            background-color: green;
            border-radius: 3px;
            border: 1px solid #000;
        }
        .red {
            width: 25px;
            height: 25px;
            background-color: red;
            border-radius: 3px;
            border: 1px solid #000;
        }
        .blue {
            width: 25px;
            height: 25px;
            background-color: blue;
            border-radius: 3px;
            border: 1px solid #000;
        }
        .yellow {
            width: 25px;
            height: 25px;
            background-color: yellow;
            border-radius: 3px;
        }
    }
`
export const FirstRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 20px;

    .left {
        .first__image {
            display: flex;
            justify-content: center;

            @media only screen and (max-width: 480px) {
               width: 100%;

               img {
                   width: 100%;
                   height: 100%;
               }
            }
        }
        .second-image-container {
            display: flex;
            justify-content: center;
            align-items: center;

            @media only screen and (max-width: 1280px) {
                flex-direction: column;
            }
            @media only screen and (max-width: 680px) {
                flex-direction: row;
            }
            @media only screen and (max-width: 480px) {
                width: 100%;

                img {
                    width: 50%;
                }
            }
        }

        @media only screen and (max-width: 1180px) {
            display: flex;
        }
        @media only screen and (max-width: 680px) {
            flex-direction: column;
        }
    }
    .right > h3 {
        font-weight: 500;
        font-size: 24px;
        padding-top: 5px;
        color: #22262A;
    }
    .right > h4 {
        font-weight: 400;
        font-size: 20px;
        padding-top: 5px;
        color: #22262A;
    }
    .right {
        .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;         

            .green_text {
                font-weight: 600;
                font-size: 20px;
                color: #6F972D;
            }
            p {
                color: #C1C8CE;
                font-size: 14px;
            }
            a {
                text-decoration: none;
                color: #33A0FF;
                font-size: 14px;
            }

            @media only screen and (max-width: 500px) {
                width: 100%;
            }
        }
        .flex-border-bottom {
            border-bottom: 0.5px solid rgba(160, 177, 196, 0.3);
            padding-bottom: 10px;
            margin-bottom: 15px;


        }
    }

    @media only screen and (max-width: 1180px) {
        display: block;
    }
`
export const RightContainer = styled.div`
    .heading__underline {
        letter-spacing: 0.06em;
        text-decoration-line: underline;
        color: #252B1D;
        font-weight: 400;
        font-size: 20px;
    }
    .heading {
        letter-spacing: 0.06em;
        color: #252B1D;
        font-weight: 400;
        font-size: 20px;
    }
    .heading_tick {
        font-weight: 500;
        font-size: 20px;
        color: #252B1D;
    }
    .return-policy {
        border-top: 0.5px solid rgba(160, 177, 196, 0.3);
        padding-top: 25px;
    }
    .text {
        padding-bottom: 15px;
        letter-spacing: 0.06em;
        color: #252B1D;
        font-weight: normal;
        font-size: 14px;
        border-bottom: 0.5px solid rgba(160, 177, 196, 0.3);
    }
    .text-nopad {
        letter-spacing: 0.06em;
        color: #252B1D;
        font-weight: normal;
        font-size: 14px;
    }
    .text-decorated {
        text-decoration: underline;
        letter-spacing: 0.06em;
        color: #252B1D;
        font-weight: normal;
        font-size: 14px;
        padding-bottom: 10px;
    }
    .pad {
        padding-bottom: 25px;
    }
    .faint {
        letter-spacing: 0.06em;
        color: #A0B1C4;
        font-size: 14px;
        font-weight: 400;
    }
    .flex {
        display: flex;
        flex-direction: column;
    }

    ul {
        padding-left: 20px;
    }
    ul > li {
        color: #252B1D;
        font-size: 14px;
        padding-bottom: 10px;
    }
    ul > li::marker {
        color: rgba(111, 151, 45, 1);

    }
`

export const Description = styled.div`
    margin-top: 50px;

    h4 {
        font-weight: 500;
        font-size: 20px;
        text-decoration-line: underline;
        color: #252B1D;  
        margin-bottom: 25px; 
    }
    .heading {
        font-weight: 500;
        font-size: 16px;
        color: #252B1D;
    }
    .text {
        font-weight: 400;
        font-size: 14px;
        color: #252B1D;
        margin-bottom: 25px;
    }
`