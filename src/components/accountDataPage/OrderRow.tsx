import * as React from 'react';

export interface IOrderRow{
    id: string,
    creationDate: string,
    status: string
}

export class OrderRow extends React.Component<IOrderRow> {

    render() {
        return (
            <React.Fragment>
                <div className="phx-list--personal-data__section--half-height">
                    <p className="phx-list--personal-data__description">
                        <span className="phx-list--personal-data__order-date phx-t8">{this.props.id} | {this.props.creationDate}</span>
                        <span className="phx-list--personal-data__order-status">{this.props.status}</span>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}