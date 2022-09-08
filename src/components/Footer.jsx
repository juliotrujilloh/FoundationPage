import React from 'react';
import { FooterStyled, LefSideFooter, CenterFooter, RightSideFooter, IgStyled, FbStyled, TwStyled} from '../styles/FooterStyled';

function Footer () {

    const year = new Date().getFullYear();

    return(
        <FooterStyled>
            <LefSideFooter>
                <p>123 E 123 st</p>
                <p className="parr">New York, New York</p>
            </LefSideFooter>
            <CenterFooter>
                <p>Copyright @JulioTrujilloH Web Developer ⓒ {year}</p>
            </CenterFooter>
            <RightSideFooter>
                <IgStyled/>
                <FbStyled/>
                <TwStyled/>
            </RightSideFooter>
        </FooterStyled>
        
    )
};

export default Footer;