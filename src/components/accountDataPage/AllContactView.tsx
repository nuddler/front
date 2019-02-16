import * as React from 'react';
import { AddressBox } from './AddressBox';


export interface IAllContactView {
    type: string;
}

export interface IAllContactViewState {
    data?: any,
    header: string,
    showMore: boolean;
    list: any[];
    moreLinkLabel: string
}

export class AllContactView extends React.Component<IAllContactView> {

    state: IAllContactViewState = {
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

                    {this.state.list.map((s, i) => <AddressBox address={s.street} city={s.city} name={s.name} key={i} />)}

                    {this.state.showMore && <button type='button' className={"phx-list--personal-data__more-button"} > {this.state.moreLinkLabel} </button>}
                </React.Fragment>
            )
        }

    }

}