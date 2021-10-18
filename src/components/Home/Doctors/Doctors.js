import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./doctorData.json')
            .then(res => res.json())
            .then(data => setItems(data))
        
    },[])
    return (
        <div>
            <div className="container my-5 py-5">
                <h1>Meet the team</h1>
            <Row xs={1} md={3} className="g-4 pt-5">
  
                {
                        items.map(item => <Doctor
                            item={item}
                            key={item.key}
                        ></Doctor>)
                }
                </Row>
                
                    
                   
                </div>
        </div>
    );
};

export default Doctors;