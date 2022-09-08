import React, {useState} from 'react';
import { DonateStyled, ButtonOutside, CloseStyled, DonateContainer } from '../styles/DonateStyled';

function Donate () {

    const [openDonate, setOpenDonate] = useState(false);

    return(      
        <DonateStyled open={openDonate}>
            <ButtonOutside onClick={()=> setOpenDonate(!openDonate)}>
                Donate
            </ButtonOutside>  
                <h1>Donate</h1>  
                <DonateContainer>
                    <CloseStyled open={openDonate} onClick={()=> setOpenDonate(false)}/>
                    <br />    
                    <label htmlFor="FirstName">First Name:</label>
                    <input className="FirstName" type="text"/>
                    <br />
                    <label htmlFor="LastName">Last Name:</label>
                    <input className="LastName"type="text"/>
                    <br/>
                    <br />
                    <label htmlFor="amount">Amount:</label>
                    <input className='amount' type="text" name="amount" placeholder='$'/>
                    <br />
                    <br />
                    <label htmlFor="CN">Card Number: </label>
                    <input type="text" className='CN' />
                    <br />
                    <div className="space1"></div>
                    <label htmlFor="months">Month: </label>
                    <select name='months'>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <div className="space"></div>
                    <label htmlFor="years">Year: </label>
                    <select name='years'>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                        <option>2031</option>
                        <option>2032</option>
                        <option>2033</option>
                    </select>
                    <br />
                    <label htmlFor="CVV">Cvv: </label>
                    <input type="text" className='CVV' />
                    <br />    
                    <button>Submit</button>                
                </DonateContainer>
                
        </DonateStyled>
    )
};

export default Donate;