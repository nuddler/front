import * as React from 'react';

export interface ICustomerNumberRow{
    customerNumber: string,
    header: string
}

export class CustomerNumberRow extends React.Component<ICustomerNumberRow> {

    render() {
        return (
                <React.Fragment>
                    <div className="row">
                        <div className="phx-col-l-12 phx-col-m-12 phx-col-s-12 phx-col-xs-12">
                            <div className="Collapsible">
                                <span className="phx-list--personal-data__header">{this.props.header}</span>
                                <span className="phx-list--personal-data__description">{this.props.customerNumber}</span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        )
    }

}