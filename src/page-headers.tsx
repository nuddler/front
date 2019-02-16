import * as React from "react";

export interface PageHeaderProps {
    headerText: string;
    subHeaderText?: string;
    dataQaAttribute?: string;
    className?: string;
}

export default function PageHeader({ headerText, subHeaderText, dataQaAttribute, className }: PageHeaderProps) {
    return (
        <div className="row">
            <div className={`phx-page-header ${className}`}>
                <h1 data-qa={dataQaAttribute} className={"hx-page-header__header phx-t1 phx-u-text-center"}>{headerText}</h1>
                {!subHeaderText ? <h2 className="phx-page-header__subheader">{subHeaderText}</h2> : null}
            </div>
        </div>
    );
}