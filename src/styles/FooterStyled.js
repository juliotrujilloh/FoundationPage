import styled from "styled-components";
import {FaInstagram, FaFacebookF, FaTwitter} from 'react-icons/fa';

export const FooterStyled = styled.footer`
    position: absolute;
    font-family: 'Amatic SC', cursive;
    background-color: rgb(0, 0, 0,0.9);
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f5f1f0;

    @media screen and (max-width: 768px){
        height: 120px;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }    
`

export const LefSideFooter = styled.div`
        color: rgb(255, 255, 255,0.9);
        font-size: 21px;
        margin-left: 50px;

        @media screen and (max-width: 768px){
            display: flex;
            font-size: 15px;
            margin-top: 10px;
            margin-left: 0;

            .parr{
                margin-left: 5px;
            }
        }
`

export const CenterFooter = styled.div`
    color: rgb(255, 255, 255,0.9);
    font-size: 20px;

    @media screen and (max-width: 768px){
            font-size: 15px;
            margin-top: 10px;
        }

`

export const RightSideFooter = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-right: 50px;

    @media screen and (max-width: 768px){
        margin-top: 10px;
        margin-right: 0;
    }
`
export const IgStyled = styled(FaInstagram)`
    height: 50px;
    width: 30px;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        background-color: #555;
        transition: 0.5s all ease;
    }
`
export const FbStyled = styled(FaFacebookF)`
    margin-top: 10px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        background-color: #555;
        transition: 0.5s all ease;
    }

`
export const TwStyled = styled(FaTwitter)`
    height: 50px;
    width: 30px;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        background-color: #555;
        transition: 0.5s all ease;
    }

`