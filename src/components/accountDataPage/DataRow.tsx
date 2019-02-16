import * as React from 'react';
import Collapsible from 'react-collapsible';
import { AllContactView } from './AllContactView';
import { BankAccountsView } from './BankAccountsView';
import { BillingAccountsView } from './BillingAccountsView';
import { MainContactView } from './MainContactView';
import { OpenOrdersView } from './OpenOrdersView';

export interface IDateRow{
    i: number,
    row: any,
    type: string
}

export class DataRow extends React.Component<IDateRow> {

    components = {
        CONTACTS: AllContactView,
        BILLING_ACCOUNTS: BillingAccountsView,
        MAIN_CONTACT: MainContactView,
        OPEN_ORDERS: OpenOrdersView,
        BANK_ACCOUNTS: BankAccountsView
    };

    render() {
        const RowViewImpl = this.components[this.props.type];

        return (
            <Collapsible trigger={
                <React.Fragment>
                    <span className="phx-list--personal-data__header">{this.props.row.header}</span>
                    <span className="phx-list--personal-data__description">{this.props.row.description}</span>
                </React.Fragment>
            } lazyRender={true}>
                <RowViewImpl type={this.props.type}/>
            </Collapsible>
        )
    }

}