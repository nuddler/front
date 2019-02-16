import * as React from 'react';
import { RouteProps, RouteComponentProps } from 'react-router';
import { apiService } from '../../api/api.service';
import { CarDetails } from '../../api/api-sdk';
import { oc } from 'ts-optchain';

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
            .then(api => api.carDetailsUsingGET({id: this.props.match.params.id}))
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
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{carObject.prettyName()}</h3>
                                <div className="rating">
                                    <span className="review-no">{carObject.name()}</span>
                                </div>
                                <p className="product-description">{carObject.description()}</p>
                                <h4 className="price">{carObject.brand()} : {carObject.model()}</h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <h5 className="colors">colors: zielony</h5>
                                <h5 className="sizes">sizes:
                                <span className="size" data-toggle="tooltip" title="small">s</span>
                                    <span className="size" data-toggle="tooltip" title="medium">m</span>
                                    <span className="size" data-toggle="tooltip" title="large">l</span>
                                    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

