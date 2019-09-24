import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AvailableCars, CarBasicInfo } from '../../api/api-sdk';
import { apiService } from '../../api/api.service';
import { Card, CardDeck, Button, ButtonToolbar } from 'react-bootstrap';

interface AddCarState {
    carList: Array<AvailableCar>,
    header: string,
    selectedCar?: AvailableCar,
    selectedCarBasicInfo?: CarBasicInfo

}

interface AvailableCar {
    value: string;
    label: string;
}

export default class AddCar extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSend = this.onSend.bind(this);
    }
    state: AddCarState = {
        carList: [],
        header: "Dodaj Auto",
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

    getCar(id: string) {
        apiService()
            .then(api => api.carBasicInfoUsingGET({ id: id }))
            .then(
                response => {
                    const data: CarBasicInfo = response.body;
                    this.setState({
                        selectedCarBasicInfo: data,
                    });
                })
            .catch(err => console.error(err));
    }

    leaseCar(id: string) {
        apiService()
            .then(api => api.leaseCarUsingPOST({ id: id }))
            .then(
                response => {
                    const data: string = response.body;
                })
            .catch(err => console.error(err));
    }

    onChange(selectedOption) {
        this.setState({ selectedCar: selectedOption })
        this.getCar(selectedOption.value);
        console.log(JSON.stringify(this.state.carList));
    }

    onSend() {
        this.leaseCar(this.state.selectedCar.value);
    }
    

    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="add-car-card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="add-car-card__header-container">
                                    <h3 className="add-car-card__header">{this.state.header}</h3>
                                    <Dropdown options={this.state.carList} onChange={this.onChange} value={this.state.selectedCar} placeholder="Cars" />
                                </div>
                            </div>
                            {
                                this.state.selectedCar && this.state.selectedCarBasicInfo &&
                                <React.Fragment>
                                    <CardDeck>

                                        <Card>
                                            <Card.Img variant="top" src={this.state.selectedCarBasicInfo.iconUrl} />
                                            <Card.Body>
                                                <Card.Title>{this.state.selectedCarBasicInfo.name}</Card.Title>
                                                <Card.Text>
                                                    {this.state.selectedCarBasicInfo.prettyName}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">{this.state.selectedCarBasicInfo.totalMileage}</small>
                                            </Card.Footer>
                                        </Card>
                                    </CardDeck>

                                    <div className="wrapper row">
                                        <ButtonToolbar >
                                            <Button
                                                onClick={this.onSend}
                                                variant="success">
                                                Lease
                                            </Button>
                                        </ButtonToolbar>
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