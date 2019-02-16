import * as React from 'react';
import { Teaser } from '../../../api/api-sdk';

export interface TeaserViewProps {
    teaser: Teaser
}

export default class TeaserView extends React.Component<TeaserViewProps> {

    render() {

        return (
            <div className="TeaserView__wrapper">
                <div className="TeaserView__wrapperSecond">
                    <img className="TeaserView__image" src={this.props.teaser.iconUrl} />
                    <h4 className="TeaserView__title" data-equal-height={'title'}>{this.props.teaser.headline}</h4>
                    <p className="TeaserView__descirption">{this.props.teaser.description}</p>
                    <a className="TeaserView__link" href={this.props.teaser.url} />
                </div>
            </div>
        );
    }
};