import styled from "styled-components";
import {FaRegTimesCircle as Close} from 'react-icons/fa';

export const DonateStyled = styled.div`
    height: 1200px;
    float: right;
    margin: 32px 0;
    justify-content: space-between;
    background-color: rgb(0, 0, 0,0.9);
    ${'' /* box-shadow: 0 2px 5px #ccc; */}
    position: fixed;
    top: 68px;
    right: 0;
    left: ${({open})=> open ? "70%": "100%"};
    color: #f5f1f0;
    font-family: 'Amatic SC', cursive;
    text-align: center;
    padding: 150px 100px 0px 40px;
    transition: 1s all ease;
    z-index: 9;

    input {
        border-radius: 5px;
        text-align: center;
        font-size: 17px;
        width: 150px;

        @media screen and (max-width: 768px){
            width: 90%
        }
    }

    .amount{
        width: 150px;
        margin-left: 15px;
    }

    label{
        font-size: 25px;
    }

    select{
        border-radius: 5px;
        vertical-align: top;
        transition: 0.5s all ease;
        height: 30px;
        width: 55px;
    }

    .space1{
        margin-top: 10px;
    }

    .space{
        width: 40px;
    }

    button{
        font-family: 'Amatic SC', cursive;
        font-size: 25px;
        color: #f5f1f0;
        background-color: rgb(81, 200, 65, 0.9);
        border-radius: 5px;
        height: 45px;
        width: 70px;
        text-align: center;
        cursor: pointer;
        margin: 15px 80px 0 0;
    }

    @media screen and (max-width: 1010px){
        margin: 32px 0;
        left: ${({open})=> open ? "50%": "100%"};
        flex-direction: column;
        align-items: center;
        padding: 50px 10px 0 10px;
    }    

    @media screen and (max-width: 920px) and (max-height: 420px) {
        top: 15px;
        margin-top: -80px;
        height: 120%;
        padding: 140px 60px 500px 40px;

        h1{
            display: none;
        }

        .space1{
             margin-top: 2px;
        }



        button{
            height: 30px;
            width: 70px;
            font-size: 20px;
            margin-top: 0px;
        }
    }
`
export const DonateContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: inline-block;
    text-align: right;
`
export const ButtonOutside = styled.div`
    background-color: rgb(81, 200, 65, 0.9);
    font-size: 35px;
    position: absolute;
    top: 270px;
    left: -75px;
    height: 50px;
    width: 100px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    transform: rotate(-0.25turn);
    padding: 5px;
    cursor: pointer;
    
`
export const CloseStyled = styled(Close)`
    ${({open})=> open ? null : "display : none"};
    position: absolute;
    top: 0;
    right: 10px;
    height: 50px;
    width: 30px;
    cursor: pointer;

`