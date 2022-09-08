import styled from 'styled-components';

export const ContactStyledBody = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* background-color: aqua; */}
    width: 800px;
    height: 1300px;    
    margin: 0 auto; 
    transition: 1s all ease;

    @media screen and (max-width: 1010px){
        width: 450px;        
    }

    @media screen and (max-width: 415px){
        width: 300px;
        height: 800px;  
    }
`
export const ContactContainter = styled.div`
    border-radius: 15px;
    margin: 0 auto 200px; 
    height: 700px;  
    background-color: rgb(81, 200, 65, 0.8);
    padding: 30px 0 0 50px;

    h2{
        font-family: 'Amatic SC', cursive;
        color: white;
        font-size: 90px;
    }

    p{
        font-size: 33px;
    }
    
    input {
        border-radius: 5px;
        box-shadow: 0 2px 5px #ccc;
        margin-left: 10px;
        font-size: 27px;
        padding: 5px;
        resize: none;
    }

    label{
        font-family: 'Amatic SC', cursive;
        font-size: 30px;
    }

    #textlabel{
        display: inline-block;        
    }

    textarea {
        height: 150px;
        width: 350px;
        font-size: 20px;
        padding: 10px;
        border-radius: 10px;
        resize: none;
        vertical-align: top;
        box-shadow: 0 2px 5px #ccc;
    }

    button{
        font-family: 'Amatic SC', cursive;
        height: 50px;
        width: 60px;
        font-size: 30px;
        border-radius: 7px;
    }

    @media screen and (max-width: 1010px){
        height: 730px;
        padding: 27px 20px 0 22px;

        h2{
            font-family: 'Amatic SC', cursive;
            color: white;
            font-size: 60px;
        }

        p{
            font-size: 27px;
        }

        input {
            font-size: 25px;
        }

        textarea {
            width: 320px;
        }
    }

    @media screen and (max-width: 415px){
        margin: 0 auto 0px;
        padding: 50px 30px 0 30px;

        label{
            font-size: 25px;
        }

        h2{
            font-family: 'Amatic SC', cursive;
            color: white;
            font-size: 50px;
        }

        p{
            font-size: 20px;
        }

        input {
            font-size: 20px;
        }

        textarea {
            width: 320px;
        }
    }

`