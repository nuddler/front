import * as React from 'react';
import CarBoxs from "../components/CarBoxs/CarBoxs";
import Teasers from "../components/Teasers";
import AddCar from '../components/AddCar/AddCar';
import { ModalRoute } from 'react-router-modal';
import { ShowCar } from '../components/ShowCar/ShowCar';

export interface HomeState {
    greetingText?: string,
}

export default class Home extends React.Component {

    state: HomeState = {
        greetingText: "Witaj w aplikacji Fleeter",
    };

    render() {
        return (
            <React.Fragment>
                <h1 className="my-4 text-center text-lg-left">{this.state.greetingText}</h1>
                <ModalRoute path='/add' component={AddCar} parentPath='/' />
                <ModalRoute path='/car/:id' component={ShowCar} parentPath='/' />
                <CarBoxs />
                <Teasers />
            </React.Fragment>
        )
    }
}