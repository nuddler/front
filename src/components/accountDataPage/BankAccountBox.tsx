import * as React from 'react';
import { BillingData } from '../../api/api-sdk';

export interface IBankAccountBox{
    bankAccount: BillingData
}

export class BankAccountBox extends React.Component<IBankAccountBox> {

    render() {
        return (
            <React.Fragment>
                <div className="phx-list--personal-data__section">
                    <p className="phx-list--personal-data__description">{this.props.bankAccount.name}</p>
                    <p className="phx-list--personal-data__description">{this.props.bankAccount.iban}</p>
                    <p className="phx-list--personal-data__description">{this.props.bankAccount.swift}</p>
                    <p className="phx-list--personal-data__description">{this.props.bankAccount.bankName}</p>
                </div>
            </React.Fragment>
        )
    }
}