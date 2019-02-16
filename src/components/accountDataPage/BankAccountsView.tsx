import * as React from 'react';
import { BankAccountBox } from './BankAccountBox';


export interface IBankAccountsView {
    type: string;
}

export interface IBankAccountsViewState {
    data?: any,
    header: string,
    showMore: boolean;
    list: any[];
    moreLinkLabel: string
}

export class BankAccountsView extends React.Component<IBankAccountsView> {

    state: IBankAccountsViewState = {
        header: "",
        showMore: false,
        list: [],
        moreLinkLabel: ""
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

                    {this.state.list.map((s, i) => <BankAccountBox bankName={s.bankName} iban={s.iban} name={s.name} swift={s.swift} key={i} />)}

                    {this.state.showMore && <button type='button' className={"phx-list--personal-data__more-button"} > {this.state.moreLinkLabel} </button>}
                </React.Fragment>
            )
        }
    }

}