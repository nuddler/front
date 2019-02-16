import * as React from 'react';
import HeaderPageView from "./HeaderPageView";

export interface HeaderPageContainerProps {
    greetingText?: string,
}

export default class HeaderPageContainer extends React.Component<HeaderPageContainerProps> {

    render() {

        return (
            <HeaderPageView greetingText={this.props.greetingText} />
        )
    }
}