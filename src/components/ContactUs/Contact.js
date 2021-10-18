import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'
//--------------------- contact us site 

const Contact = () => {
    return (
        <div className="bg-colour">
            
            <div>
            <h1 className="py-5">Have some quetions?</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>Your quetions</Form.Label>
<Form.Control className="w-50 margin" as="textarea" rows={3} />
            </Form.Group>
            
            <Button className="btnClr btn">Send Message</Button>
            
        </div>
        <div className="p-5">
            <h1 className="p-5 mb-5">Contact</h1>
            <h3 className="p-3">New York,United States</h3>
            <h3 className="p-3">tel. +88018XXXXXXXX</h3>
            <h3 className=" pb-5 padding">xxxxxxxx@gmail.com</h3>
                </div>

        </div>
                
    );
};

export default Contact;