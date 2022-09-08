import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Nav, Logo, NavLink, Bars, NavMenu} from '../styles/NavStyled';



function Navbar() {
    const [open, setOpen] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })};

    return(
        <>
            <Nav>
                <Link to='/' style={{ textDecoration: 'none', color: '#fff'}} onClick={()=> {setOpen(false);goToTop()}}>
                <h1> <Logo src='./Images/map.png' alt=''/> Foundation</h1>
                </Link>  
                              
                <Bars onClick={()=> setOpen(!open)}/>
                <NavMenu open={open}>
                    <NavLink to="/about" onClick={()=> {setOpen(!open);goToTop()}}>
                        About Us
                    </NavLink>
                    <NavLink to="/ourWork" onClick={()=> {setOpen(!open);goToTop()}}>
                        Our Work
                    </NavLink>
                    <NavLink to="/involved" onClick={()=> {setOpen(!open);goToTop()}}>
                        Get Involved
                    </NavLink>
                    <NavLink to="/contact" onClick={()=> {setOpen(!open);goToTop()}}>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>       
        </>
    )

}

export default Navbar;