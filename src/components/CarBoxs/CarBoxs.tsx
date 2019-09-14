import * as React from 'react';
import { Link } from 'react-router-dom';
import { CarBasicInfo, CarsSection } from '../../api/api-sdk';
import { apiService } from '../../api/api.service';
import { CarBox } from './CarBox';
import { CardDeck, Card } from 'react-bootstrap';


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
                <CardDeck>
                    {
                        this.state.carList.map((item, index) => <CarBox key={index} car={item} />)
                    }

                </CardDeck>
                <Link to="/add" className="add-new-car__link">
                    <div className="add-new-car">
                        <h4 className="add-new-car__label">Dodaj nowe auto</h4>
                        <svg height="50pt" viewBox="0 0 512 512" width="50pt">
                            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="0" y2="512"><stop offset="0" stopColor="#2af598" /><stop offset="1" stopColor="#009efd" /></linearGradient><path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 397.019531c-119.101562 0-216-96.898438-216-216s96.898438-216 216-216 216 96.898438 216 216-96.898438 216-216 216zm20-236.019531h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0" fill="url(#a)" />
                        </svg>
                    </div>
                </Link>
            </React.Fragment >
        )
    }
}