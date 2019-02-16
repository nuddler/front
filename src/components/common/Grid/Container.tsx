import * as React from "react";


/*export interface InterfaceContainer {
    fixed?: string;
    children?: any;
}*/

const Container = (props/*: InterfaceContainer*/) => {

    return (
        <div className={props.fixed ? `container-fixed` : `container`}>
            {props.children}
        </div>
    );
};

export default Container;