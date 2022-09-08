import styled from "styled-components";

export const ContainerPagesStyled = styled.div`
    ${'' /* background-color: aqua; */}
    height: 1300px;
    width: 990px;     
    margin: 0px auto; 

    @media screen and (max-width: 1010px){
        height: 1100px;
        width: 590px;  
    }

    @media screen and (max-width: 650px){
        width: 480px;
        transition: 1s all ease;
    }

    @media screen and (max-width: 415px){
        height: 680px;
        width: 375px;

`
export const SubContainerStyledOne = styled.div`
    ${'' /* background-color: rgb(126, 230, 230,0.6); */}
    height: 350px;
    display: flex; 
    margin-top: 80px;

    img{
        width: 500px;
        height: 350px;        
    }
    
    @media screen and (max-width: 1010px){

        height: 250px;
        
        img{
            width: 300px;
            height: 250px;        
        }
    }

    @media screen and (max-width: 650px){
        height: 200px;
        
        img{
            width: 250px;
            height: 200px;  
            margin: 0px 0 0 5px;   
        }
    }
        

    @media screen and (max-width: 415px){
        height: 150px;
        margin-top: 80px;
        
        img{
            width: 200px;
            height: 150px;        
        }
    }
`
export const TextOne  = styled.div`
    margin: -5px 0px 0 5px;

    h2{
        font-family: 'Amatic SC', cursive;
        color: rgb(81, 200, 65, 0.8);
        font-size: 60px;
        word-wrap: break-word;
    }

    p{
        font-size: 20px;
        word-wrap: break-word;
    }

    @media screen and (max-width: 1010px){
        
        h2{
            font-size: 50px;
        }

        p{
            font-size: 13.5px;
            word-wrap: break-word;
        }
    }

    @media screen and (max-width: 650px){
        h2{
            font-size: 35px;
        }

        p{
            font-size: 12px;
            word-wrap: break-word;
        }

    }

    @media screen and (max-width: 415px){
        h2{
            font-size: 30px;
            margin-bottom: -5px;
        }

        p{
            font-size: 9.5px;
        }
    }

    @media screen and (max-width: 920px) and (max-height: 420px) {
        h2{
            font-size: 33px;
            margin-bottom: -5px;
        }

        p{
            font-size: 16px;
        }
    }
    
`

export const SubContainerStyledTwo = styled.div`
    ${'' /* background-color: rgb(126, 230, 230,0.9); */}
    height: 300px;
    margin-top: 80px;

    img{
        width:450px;
        height: 300px;
        float: right;
    }

    @media screen and (max-width: 1010px){
        height: 200px; 
        margin-bottom: -5%;

        img{
            width: 250px;
            height: 200px;
        }
    }

    @media screen and (max-width: 650px){
        img{  
            margin: 0px 0px 0 0 ;
        }
    }

    @media screen and (max-width: 415px){
        height: 150px;
        
        img{
            width: 180px;
            height: 150px;        
        }
    }
`
