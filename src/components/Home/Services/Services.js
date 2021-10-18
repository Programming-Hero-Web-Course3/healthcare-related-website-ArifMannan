import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setItems(data))
        
    },[])
    return (
        <div>
            <div className="container my-5 py-5">
                <h1>Our Services</h1>
            <Row xs={1} md={3} className="g-4 pt-5">
  
                {
                        items.map(item => <Service
                            item={item}
                            key={item.key}
                        ></Service>)
                }
                </Row>
                
                    
                   
                </div>
               
            </div>
    );
};

export default Services;