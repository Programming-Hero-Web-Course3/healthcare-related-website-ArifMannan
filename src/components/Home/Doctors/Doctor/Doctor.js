import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, img, title } = props.item;
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h3>{name}</h3>
          <Card.Text>
                            <p>{title}</p>
                            
              </Card.Text>
              <Button variant="primary" className="btn btn-primary">Details</Button>
            </Card.Body>
            
      </Card>
    </Col>
            
        </div>
    );
};

export default Doctor;