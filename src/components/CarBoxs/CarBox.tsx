import * as React from 'react';
import { CarBasicInfo } from '../../api/api-sdk';
import "./CarBox.css";
import { Link } from 'react-router-dom';

interface CarBoxProps {
    car: CarBasicInfo;
}

export class CarBox extends React.Component<CarBoxProps> {

    render() {

        const pStyle = {
            width: '65.5%'
        };

        return (
            <div className="col-lg-3 col-md-4 col-sm-12">
                <Link to={"/car/" + this.props.car.id}>
                    <div className="tile-progress tile-primary">
                        <div className="tile-header">
                            <h3>{this.props.car.name}</h3>
                            <span>{this.props.car.takenBy}</span>
                        </div>
                        <div className="tile-progressbar">
                            {/* <span data-fill="65.5%" style="width: 65.5%;"></span> */}
                            <span data-fill="65.5%" style={pStyle}></span>
                        </div>
                        <div className="tile-footer">
                            <h4><span className="pct-counter">{this.props.car.brand}</span></h4>
                            <span>{this.props.car.model}</span>
                        </div>
                    </div>
                </Link>
            </div>

        )
    }

}

