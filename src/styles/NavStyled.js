import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav`
    position: sticky; top: 0;
    font-family: 'Amatic SC', cursive;
    font-size: 25px;
    background-color: rgb(0, 0, 0,0.9);
    color: #f5f1f0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -15px;
    margin-left: -15px;
    margin-right: 0px;
    margin-bottom: -20px;
    padding: 1rem calc((100vw - 10000px) / 2);
    z-index: 999;

    @media screen and (max-width: 768px){
        position: sticky; 
    }
`

export const Logo = styled.img`
    width: 60px;
    margin-left: 30px;
    cursor: pointer;
    
    &.active{
        color: #51C841;
    }
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        background-color: #555;
        transition: 0.5s all ease;
    }

    &.active{
        color: #51C841;
    }

    @media screen and (max-width: 768px){
        padding: 4rem 4rem 4rem ;
    }

`
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 20px;
    

    @media screen and (max-width: 768px){
        position: fixed;
        top: 100px;
        left: ${({open})=> open ? "0": "100%"};
        width: 100%;
        height: calc(100vh - 70px);
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: rgb(0, 0, 0,0.9);
        transition: 1s all ease;
    }
`
