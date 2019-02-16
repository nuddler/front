import * as React from 'react';

export interface IAddressBox{
    name: string,
    address: string,
    city: string
}

export class AddressBox extends React.Component<IAddressBox> {

    render() {
        return (
            <React.Fragment>
                <div className="phx-list--personal-data__section">
                    <p className="phx-list--personal-data__description">{this.props.name}</p>
                    <p className="phx-list--personal-data__description">{this.props.address}</p>
                    <p className="phx-list--personal-data__description">{this.props.city}</p>
                </div>
            </React.Fragment>
        )
    }
}