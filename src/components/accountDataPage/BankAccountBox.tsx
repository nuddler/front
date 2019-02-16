import * as React from 'react';

export interface IBankAccountBox{
    name: string,
    iban: string,
    swift: string,
    bankName: string
}

export class BankAccountBox extends React.Component<IBankAccountBox> {

    render() {
        return (
            <React.Fragment>
                <div className="phx-list--personal-data__section">
                    <p className="phx-list--personal-data__description">{this.props.name}</p>
                    <p className="phx-list--personal-data__description">{this.props.iban}</p>
                    <p className="phx-list--personal-data__description">{this.props.swift}</p>
                    <p className="phx-list--personal-data__description">{this.props.bankName}</p>
                </div>
            </React.Fragment>
        )
    }
}