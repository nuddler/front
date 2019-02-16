import * as React from 'react';
import PageHeader from '../page-headers';
import { CustomerNumberRow } from '../components/accountDataPage/CustomerNumberRow';
import { DataRowListView } from '../components/accountDataPage/DataRowListView';


export default class Personal extends React.Component {

    render() {
        const rows = [
            {
                "description": "Lorem ipsum...  MAIN_CONTACT",
                "header": "ContactHeader MAIN_CONTACT",
                "type": "MAIN_CONTACT"
            },
            {
                "description": "Lorem ipsum...  CONTACTS all",
                "header": "ContactHeaderCONTACTS all",
                "type": "CONTACTS"
            },
            {
                "description": "Lorem ipsum...  BILLING_ACCOUNTS",
                "header": "ContactHeader BILLING_ACCOUNTS",
                "type": "BILLING_ACCOUNTS"
            },
            {
                "description": "Lorem ipsum...  OPEN_ORDERS",
                "header": "ContactHeader OPEN_ORDERS",
                "type": "OPEN_ORDERS"
            },
            {
                "description": "Lorem ipsum...  BANK_ACCOUNTS",
                "header": "ContactHeader BANK_ACCOUNTS",
                "type": "BANK_ACCOUNTS"
            }
        ];

        return (
            <React.Fragment>
                <PageHeader className="phx-u-space--top_2" headerText={"this.state.accountData.header"} />
                <div className="row">
                    <CustomerNumberRow customerNumber={"Account Data Page"} header={"this.state.accountData.subHeader"} />
                    <DataRowListView className="" list={rows} />
                </div>
            </React.Fragment>
        )
    }

}