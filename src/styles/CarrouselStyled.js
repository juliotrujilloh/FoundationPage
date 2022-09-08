import styled from 'styled-components';

export const CarrouselStyled = styled.div`
    position: relative;
    display: flex;
    margin: -90px auto;
    height: 750px;
    overflow: hidden;
       
    
    @media screen and (max-width: 1010px){
        margin-top: 33px;
        height: 450px;
        
    } 

    @media screen and (max-width: 650px){
        margin-top: 33px;
        height: 300px;
        
    } 

    @media screen and (max-width: 415px){
        height: 220px;
        
    } 
`
export const SlideShow = styled.div`
    display: flex; 
    height: 100%;
    flex-wrap: nowrap;       
`
export const Slide = styled.div`
    position: relative;
    min-width: 100%;
    height: 100%;
    display: flex;
    

    @media screen and (max-width: 1010px){
        min-width: 100%;
        height: 100%;
        
    }
    
    img{
        display: block;
        width: 100%;
        height: auto;
    }
`

export const BoxInsideImage = styled.div`
    position: absolute;
    display: block;
    border-radius: 10px;
    height: 200px;
    width: 600px;
    background-color: rgb(81, 200, 65, 0.95);
    align-items: center;
    color: #f5f1f0;
    padding: 10px 0 0 25px;
    top: 500px;
    left: 270px;
    z-index: 0;
    word-wrap: break-word;

    h2{
        display: block;
        font-family: 'Amatic SC', cursive;
        font-size: 55px;
    }

    p{
        font-size: 28px;
        word-wrap: break-word;
    }

    @media screen and (max-width: 1010px){
        height: 140px;
        width: 350px;
        top: 290px;
        left: 170px;
        padding: 10px 0 0 15px;

        h2{
            font-size: 35px;
        }

        p{
            font-size: 17px;
            word-wrap: break-word;
        }

    }

    @media screen and (max-width: 920px) and (max-height: 420px) {
        height: 120px;
        width: 350px;
        padding: 10px 0 0 7px;

        h2{
            font-size: 30px;
        }

        p{
            font-size: 15px;
            word-wrap: break-word;
        }

    }

    @media screen and (max-width: 650px){
        height: 100px;
        width: 350px;
        top: 180px;
        left: 50px;
        padding: 5px 0 0 7px;

        h2{
            font-size: 30px;
        }

        p{
            font-size: 14px;
            word-wrap: break-word;
        }
    }

    @media screen and (max-width: 415px){
        height: 75px;
        width: 260px;
        top: 140px;
        left: 30px;
        padding: 5px 0 0 7px;
        

        h2{
            display: block;
            font-family: 'Amatic SC', cursive;
            font-size: 20px;
            
        }

        p{
            font-size: 11px;
            
            word-wrap: break-word;
        }
 
    }
    
`