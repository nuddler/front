import * as React from 'react';
import { DataRow } from './DataRow';

export interface IDateRowList{
    list: any[],
    className: string
}

export class DataRowListView extends React.Component<IDateRowList> {

    render() {
        return (
            <div className={`phx-col-l-12 phx-col-m-12 phx-col-s-12 phx-col-xs-12 ${this.props.className}`}>
                <div className="phx-list phx-list--personal-data phx-u-space--bottom_5">
                    {this.props.list.map((s, i) => <DataRow key={i} row={s} i={i} type={s.type}/>)}
                </div>
            </div>
        )
    }

}
