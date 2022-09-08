import React from 'react';
import ContentBox from '../components/ContentBox';
import {InvolvedData} from './data/data';
import {InvolvedContainerStyled, FirstContainerStyled} from '../styles/HomeBodyStyled';

const Involved = () => {
    return (
        <InvolvedContainerStyled>
            <h1>Ways to get Involved</h1>
            <FirstContainerStyled>
            {InvolvedData.map((content,index)=>{
                return(                    
                    <ContentBox key={index} image={content.image} title={content.title} content={content.body} route={content.route}/>                   
                )
            })}
            </FirstContainerStyled>        
        </InvolvedContainerStyled>
    )
    
};

export default Involved;