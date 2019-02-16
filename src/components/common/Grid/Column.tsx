import * as React from "react";

// export type ColumnsType = 'xl' | 'l' | 'm' | 's' | 'xs';

export interface InterfaceColumn {
    columns: string[];
    children?: any;
}

const Column = (props: InterfaceColumn) => {

    let columns = '';

    for (let i = 0, length = props.columns.length; i < length; i++) {
        columns += 'col-' + props.columns[i] + ' ';
    }

    return (
        <div className={columns}>
            {props.children}
        </div>
    );
};


export default Column;