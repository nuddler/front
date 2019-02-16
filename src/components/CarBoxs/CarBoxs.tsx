import * as React from 'react';
import { Link } from 'react-router-dom';
import { CarBasicInfo, CarsSection } from '../../api/api-sdk';
import { apiService } from '../../api/api.service';
import { CarBox } from './CarBox';


interface CarBoxsState {
    carList: Array<CarBasicInfo>,
    header: string,
}

export default class CarBoxs extends React.Component {

    state: CarBoxsState = {
        carList: [],
        header: "",
    };

    componentDidMount() {
        apiService()
            .then(api => api.carsSectionUsingGET({})) //todo: cleanup
            .then(
                response => {
                    const data: CarsSection = response.body;
                    this.setState({
                        carList: data.carList,
                        header: data.headline,
                        loading: false
                    });
                })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <React.Fragment>
                <div className="row text-center text-lg-left">
                    {
                        this.state.carList.map((item, index) =><CarBox key={index} car={item} />)
                    }
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <Link to="/add">
                            <img src="https://static.thenounproject.com/png/58733-200.png" />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}