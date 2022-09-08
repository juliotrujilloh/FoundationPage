import React, {useRef, useEffect} from 'react';
import ContentBox from '../components/ContentBox';
import { CarrouselStyled, BoxInsideImage, Slide, SlideShow} from '../styles/CarrouselStyled';
import {BodyContainerStyled, FirstContainerStyled, SecondContainterStyled} from '../styles/HomeBodyStyled';
import { sliderData, contentData, secondContentData } from './data/data';

const Home = () => {

    const slideshow = useRef(null); //useref is used to access the component without re-rendering;
    const intervalSlideShow = useRef(null);

    const moveSlide = () => {
        if (slideshow.current.children.length > 0) {
            // console.log("It works!");

            const firstElement = slideshow.current.children[0]; //first element of slideshow

            slideshow.current.style.transition = `4000ms ease-out all`;     //speed of transition

            const slideSize = slideshow.current.children[0].offsetWidth;    //amount of px we want it to slide (the width of the element);

            slideshow.current.style.transform = `translateX(-${slideSize}px)`; //to move carrousel;

            const transition = () =>{
                slideshow.current.style.transition = 'none';    //we are restarting the position of slideshow;
                slideshow.current.style.transform = `translateX(0)`; //moving back the slideshow to position 0;

                slideshow.current.appendChild(firstElement); //we are adding the first element to the end of the slideshow;
            }

            slideshow.current.addEventListener('transitionend', transition); //Event Listener for when the transition is over;
                                                                            //the transition function is called afterwards;
            
        }        
    };

    useEffect(()=>{  
        
        intervalSlideShow.current = setInterval(()=>{moveSlide()}, 2000); //automatic movement;

        slideshow.current.addEventListener('mouseenter', ()=> {clearInterval(intervalSlideShow.current)}); //event listener to stop the slideshow;

        slideshow.current.addEventListener('mouseleave', ()=> {intervalSlideShow.current = setInterval(()=>{ //event listener to re-start the slideshow;
            moveSlide()}, 2000);});        
    
        return () =>{
            clearInterval(intervalSlideShow.current); //We stop the whole process when the page is exited;
        }        

    },[])
        

    return (        
        <>
        <CarrouselStyled>    
            <SlideShow ref={slideshow}>
            {sliderData.map((slide, index)=>{
                return(                    
                    <Slide key={index}>
                        <img src={slide.image} alt="slide" />
                        <BoxInsideImage>
                            <h2>{slide.title}</h2>
                            <p>{slide.body}</p>
                        </BoxInsideImage>                      
                    </Slide>
                    )})
            }
            </SlideShow>
        </CarrouselStyled>
        <BodyContainerStyled>
            <h1>This Foundation</h1>
            <FirstContainerStyled>
            {contentData.map((content,index)=>{
                return(                    
                    <ContentBox key={index} image={content.image} title={content.title} content={content.body} route={content.route}/>                   
                )
            })}
            </FirstContainerStyled>
            
            <SecondContainterStyled>
            {secondContentData.map((content,index)=>{
                return(
                    <ContentBox key={index} image={content.image} title={content.title} content={content.body} route={content.route}/>
                )
            })}
            </SecondContainterStyled>            
        </BodyContainerStyled>
        </>
    );
    
};

export default Home;

