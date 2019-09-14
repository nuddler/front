import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { apiService } from '../../api/api.service';
import { CarDetails, Feature } from '../../api/api-sdk';
import { oc } from 'ts-optchain';

import { FeatureBadge } from './FeatureBadge';

interface ShowCarState {
    car: CarDetails
}

interface ShowCarProps {
    id: string
}
export class ShowCar extends React.Component<RouteComponentProps<ShowCarProps>> {

    state: ShowCarState = {
        car: null,
    };

    componentDidMount() {
        apiService()
            .then(api => api.carDetailsUsingGET({ id: this.props.match.params.id }))
            .then(
                response => {
                    const data: CarDetails = response.body;
                    this.setState({
                        car: data,
                    });
                })
            .catch(err => console.error(err));
    }

    render() {

        let carObject = oc(this.state.car);

        return (
            <div className="container p-0 card-modal">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={carObject.iconUrl()} /></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{carObject.prettyName()}</h3>
                                <h4 className="price">{carObject.brand()} : {carObject.model()}</h4>
                                <div className="rating">
                                    <span className="review-no">{carObject.name()}</span>
                                </div>
                                <h4 className="price">Description:</h4>
                                <p className="product-description">{carObject.description()}</p>
                                <h4 className="price">Features:</h4>
                                <div className="card-image-overlay">
                                    {
                                        this.state.car != null && this.state.car.features != null &&
                                        this.state.car.features.map((item, index) => <FeatureBadge key={index} feature={item} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

