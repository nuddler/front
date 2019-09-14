import * as React from 'react';
import { CarBasicInfo } from '../../api/api-sdk';
import "./CarBox.css";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

interface CarBoxProps {
    car: CarBasicInfo;
}

export class CarBox extends React.Component<CarBoxProps> {

    render() {

        return (

            <Card>
                <Link to={"/car/" + this.props.car.id}>
                    <Card.Img variant="top" src={this.props.car.iconUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.car.name}</Card.Title>
                        <Card.Text>
                            {this.props.car.prettyName}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{this.props.car.totalMileage}</small>
                    </Card.Footer>
                </Link>
            </Card>

        )
    }

}

