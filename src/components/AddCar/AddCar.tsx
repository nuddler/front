import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AvailableCars, CarBasicInfo } from '../../api/api-sdk';
import { apiService } from '../../api/api.service';

interface AddCarState {
    carList: Array<AvailableCar>,
    header: string,
    selectedCar?: AvailableCar
}

interface AvailableCar {
    value: string,
    label: string
}

export default class AddCar extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    state: AddCarState = {
        carList: [],
        header: "Add car",
    };

    createAvaliableCar(car: CarBasicInfo): AvailableCar {
        return {
            label: car.prettyName,
            value: car.id
        };
    }

    componentDidMount() {
        apiService()
            .then(api => api.availableCarsUsingGET({}))
            .then(
                response => {
                    const data: AvailableCars = response.body;
                    this.setState({
                        carList: data.carList.map(this.createAvaliableCar),
                    });
                })
            .catch(err => console.error(err));
    }

    onChange(selectedOption) {
        this.setState({ selectedCar: selectedOption })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <h1>{this.state.header}</h1>
                            </div>
                            <div className="wrapper row">
                                <div className="row text-center text-lg-left">
                                    <Dropdown options={this.state.carList} onChange={this.onChange} value={this.state.selectedCar} placeholder="Cars" />
                                </div>
                            </div>
                            {
                                this.state.selectedCar &&
                                <React.Fragment>
                                    <div className="wrapper row">

                                        <div className="tile-progress tile-primary">
                                            <div className="tile-header">
                                                <h3>{this.state.selectedCar.label}</h3>
                                                <span>this.props.car.takenBy</span>
                                            </div>
                                            <div className="tile-progressbar">
                                                {/* <span data-fill="65.5%" style="width: 65.5%;"></span> */}
                                                {/* <span data-fill="65.5%" style={pStyle}></span> */}
                                            </div>
                                            <div className="tile-footer">
                                                <h4><span className="pct-counter">this.props.car.brand</span></h4>
                                                <span>this.props.car.model</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrapper row">
                                        BUTTON
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>

            </React.Fragment >
        );
    }
}