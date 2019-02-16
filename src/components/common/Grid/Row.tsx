import * as React from "react";

/*
export interface InterfaceRow {
    className?: string;
    children?: any;
}

export const Row = (props: InterfaceRow) => <div className={`phx-row ${props.className ? props.className : ''}`}>{props.children}</div>;*/


const Row = (props) => {

    return (
        <div className={"row"}>
            {props.children}
        </div>
    );
};


export default Row;