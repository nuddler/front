import * as React from 'react';
import { Address } from '../../api/api-sdk';

export interface IAddressBox{
    address: Address
}

export class AddressBox extends React.Component<IAddressBox> {

    render() {
        return (
            <React.Fragment>
                <div className="phx-list--personal-data__section">
                    <p className="phx-list--personal-data__description">{this.props.address.name}</p>
                    <p className="phx-list--personal-data__description">{this.props.address.street}</p>
                    <p className="phx-list--personal-data__description">{this.props.address.city}</p>
                </div>
            </React.Fragment>
        )
    }
}