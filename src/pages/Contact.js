import React from 'react';
import { ContactStyledBody, ContactContainter } from '../styles/ContactBodyStyled';

const Contact = () => {
    return (
        <>
            <ContactStyledBody>
                <ContactContainter>
                <h2>Say hi to us! :)</h2>
                <br />
                <p>leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam.</p>
                <br />
                <label htmlFor="name">Name:</label>
                <input type="text" className='name'/>
                <br />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" className='email'/>
                <br />
                <br />
                <label id="textlabel" htmlFor="message">Message:
                <textarea name="message"></textarea>
                </label>
                <br />
                <br />
                <button>Send</button>
                </ContactContainter>
            </ContactStyledBody>
        </>

    )
    
};

export default Contact;