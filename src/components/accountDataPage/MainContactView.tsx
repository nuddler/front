import * as React from 'react';
import { AddressBox } from './AddressBox';


export interface IMainContactView {
    type: string;
}

export interface IMainContactViewState {
    data?: any,
    header: string,
    address: any;
}

export class MainContactView extends React.Component<IMainContactView> {

    state: IMainContactViewState = {
        header: "",
        address: { city: "", name: "", street: "" }
    };

    render() {

        if (this.state.data && this.state.data.noDataMessage) {
            return (
                <React.Fragment>
                    <p className="Collapsibe__section-header">{this.state.data.noDataMessage}</p>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <p className="Collapsibe__section-header">{this.state.header}</p>
                    <AddressBox address={this.state.address.street} city={this.state.address.city} name={this.state.address.name} />
                </React.Fragment>
            )
        }
    }

}