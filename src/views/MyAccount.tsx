import * as React from 'react';
import CarBoxs from "../components/CarBoxs/CarBoxs";
import PageHeader from '../page-headers';

export interface MyAccountState {
    greetingText?: string,
    loading: boolean
}

export default class MyAccount extends React.Component {

    state: MyAccountState = {
        greetingText: "Grting Heder",
        loading: true
    };

    render() {
        return (
            <React.Fragment>
                <PageHeader className="phx-u-space--top_2" headerText={"this.state.accountData.header"} />
                <CarBoxs />
            </React.Fragment>
        )
    }
}