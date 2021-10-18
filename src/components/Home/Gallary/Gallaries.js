import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Gallaries = () => {
    return (
        <div className="container my-5">
            <h2 className="py-5">Our Gallary</h2>
            <Row xs={1} md={3} className="">
                <Col>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                </Col>
                <Col>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                </Col>
                <Col>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1588776814610-a14d0dfc6f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </Col>
                <Col>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGRlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </Col>
                
                <Col>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1626878880028-0438b1403b3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGRlbnRhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </Col>
                <Col>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1525786210598-d527194d3e9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRlbnRhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </Col>
                
           </Row>
        </div>
    );
};

export default Gallaries;