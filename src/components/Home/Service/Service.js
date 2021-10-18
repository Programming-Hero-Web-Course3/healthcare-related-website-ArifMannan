import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const history = useHistory();

    const {key, name, img, description } = props.item;
    const detailsHandler = () => {
        history.push('/servicesdetails');
    }
    
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" className="img-responsive" src={img} />
                    <Card.Body>
                        <h3>{name}</h3>
          <Card.Text className="text-start">
                            <p>{description}</p>
                            
              </Card.Text>
                        <Link to ={`/servicesdetails/${key}`}>
                        <Button onClick={detailsHandler} variant="primary" className="btn btn-primary">Details</Button>
                        </Link>
            </Card.Body>
            
      </Card>
    </Col>
        </div>
    );
};

export default Service;