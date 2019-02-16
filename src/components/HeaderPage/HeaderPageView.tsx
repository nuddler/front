import * as React from 'react';

export interface HeaderPageViewProps {
    greetingText?: string
}

const HeaderPageView = (props: HeaderPageViewProps) => {

    return (
        <React.Fragment>
            <h1 data-qa="label_HeaderGreeting">
                {props.greetingText}
            </h1>
            <p>Dies eine Testseite und enthält nicht die volle Funktion der Startseite. Die Startseite finden Sie hier: <a href="https://www.telekom.de/kundencenter/startseite">https://www.telekom.de/kundencenter/startseite</a></p>
        </React.Fragment>
    );
};

export default HeaderPageView;