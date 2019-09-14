import * as React from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

export function FeatureBadge(feature) {
    console.log(feature);
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null);
    const handleClick = event => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <span ref={ref}>
            <span onClick={handleClick} className="card-detail-badge">{feature.feature.name}</span>
            <Overlay show={show} target={target} placement="bottom" container={ref.current}>
                <Popover id="popover-contained">
                    <Popover.Title as="h3">{feature.feature.prettyName}</Popover.Title>
                    <Popover.Content>
                        <strong>{feature.feature.name}</strong> {feature.feature.description}
                    </Popover.Content>
                </Popover>
            </Overlay>
        </span>);
}
