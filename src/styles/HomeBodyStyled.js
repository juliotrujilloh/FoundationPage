import styled from 'styled-components';
import {Link} from "react-router-dom";

export const BodyContainerStyled = styled.div`
    width: 990px;
    height: 1700px;
    ${'' /* background-color: aqua;    */}
    margin: 0px auto; 
    

    h1{
        color: rgb(81, 200, 65);
        padding: 50px;
        margin-top: 50px;
        text-align: center;
        font-family: 'Amatic SC', cursive;
        font-size: 70px;       
    }

    @media screen and (max-width: 1010px){
        height: 1100px;
        width: 590px;
        
    }

    @media screen and (max-width: 650px){
        width: 480px;
        
    }

    @media screen and (max-width: 415px){
        height: 800px;
        width: 375px;

        h1{
            font-size: 250%; 
            margin-top: 80px;
            padding: 20px;
        }
    } 

`

export const ContentStyled = styled(Link)`
    height: 50%;
    width: 50%;    
    transition: 1s all ease;
    
    img{
        width: 100%;
        height: 100%;  
        margin-bottom: -150px;     
            
    }

    h2{
        color: white;
        font-family: 'Amatic SC', cursive;
        font-size: 50px;
        margin: 0 0 0 3%;
    }

    p{
        color: white;
        font-size: 26px;
        word-wrap: break-word;       
        margin: 0 0 0 4%; 
    }

`
export const FirstContainerStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    ${'' /* background-color: rgb(165, 242, 238,0.7); */}
    height: 600px;
    margin: 0px auto;  
    cursor: pointer;  

    a:link { text-decoration: none}

    @media screen and (max-width: 1010px){
        height: 400px;

        img{  
            margin-bottom: -130px;           
        }

        h2{
            font-size: 35px;
            margin: 0 0 0 3%;
        }

        p{
            color: white;
            font-size: 20px;
            margin: 0 0 0 4%; 
        }
    }

    @media screen and (max-width: 650px){
        h2{
            font-size: 35px;
            margin: 0 0 0 3%;
        }

        p{
            color: white;
            font-size: 17px;
            word-wrap: break-word;       
            margin: 0 0 0 4%; 
        }
    }

    @media screen and (max-width: 920px) and (max-height: 420px) {
        h2{
            font-size: 30px;
        }

        p{
            font-size: 20px;
            word-wrap: break-word;
        }

    }

    @media screen and (max-width: 415px){
        height: 300px;

        img{  
            margin-bottom: -80px;           
        }

        h2{
            font-size: 20px;
        }

        p{
            font-size: 11px;
        }
    }
`

export const SecondContainterStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    ${'' /* background-color: rgb(245, 206, 238,0.8); */}
    height: 700px;
    margin: 50px auto; 

    a:link { text-decoration: none}

    h2{
        padding: 5% 0 0 5%;
        color: rgb(81, 200, 65);
        font-family: 'Amatic SC', cursive;
        font-size: 60px;
        margin-bottom: 1%;
    }

    p{
        padding: 1%;
        color: black;
        font-size: 26px;
        word-wrap: break-word;        
    }

    @media screen and (max-width: 1010px){
        height: 400px;

        h2{
            padding: 5% 0 0 5%;
            font-size: 35px;
            margin-bottom: 1%;
        }

        p{
            padding: 1%;
            color: black;
            font-size: 13.5px;
            word-wrap: break-word;        
        }
    }

    @media screen and (max-width: 650px){
        h2{
            padding: 5% 0 0 5%;
            color: rgb(81, 200, 65);
            font-size: 35px;
        }

        p{
            padding: 1%;
            color: black;
            font-size: 13px;
            word-wrap: break-word;        
        }



    }

    @media screen and (max-width: 920px) and (max-height: 420px) {
        h2{
            font-size: 35px;
        }

        p{
            font-size: 15px;
            word-wrap: break-word;
        }

    }

    @media screen and (max-width: 415px){
    height: 300px;
    margin: 10%;

        img{  
            margin-bottom: -80px;           
        }

        h2{
            font-size: 22px;;
        }

        p{
            font-size: 9.5px;
        }
    }   
`
export const InvolvedContainerStyled = styled.div`
    width: 990px;
    height: 1700px;
    ${'' /* background-color: aqua;    */}
    margin: 0px auto; 
    transition: 1s all ease;

    h1{
        color: rgb(81, 200, 65);
        padding: 50px;
        text-align: center;
        font-family: 'Amatic SC', cursive;
        font-size: 60px;       
    }

    @media screen and (max-width: 1010px){
        height: 1300px;
        width: 590px;
    }

    @media screen and (max-width: 650px){
        width: 480px;
    }

    @media screen and (max-width: 415px){
        height: 750px;
        width: 375px;
        margin-top: 30px;

        h1{
            font-size: 250%; 
            padding: 20px;
        }


    } 

`
