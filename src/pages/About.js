import React from 'react';
import {ContainerPagesStyled, SubContainerStyledOne, TextOne, SubContainerStyledTwo} from '../styles/PagesStyled'

const About = () => {
    return (
        <ContainerPagesStyled>
            <SubContainerStyledOne>
                <img src="../Images/The_Family2.jpg" alt="" />
                <TextOne>
                <h2>The Family</h2>
                <br />
                <p>sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi</p>
                </TextOne>
            </SubContainerStyledOne>
            <SubContainerStyledTwo>
                <img src="../Images/Why_Boys.jpg" alt="" />
                <TextOne>
                <h2>Why Boys</h2>
                <br />
                <p>sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi</p>
                </TextOne>
            </SubContainerStyledTwo>
            <SubContainerStyledOne>
                <img src="../Images/Our_Mission.jpg" alt="" />
                <TextOne>
                <h2>Our Mission</h2>
                <br />
                <p>sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi</p>
                </TextOne>
            </SubContainerStyledOne>
        </ContainerPagesStyled>
    )
    
};

export default About;