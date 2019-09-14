import * as React from 'react';

import TeaserView from "../Teaser/TeaserView";
import { Teaser } from '../../../api/api-sdk';

export interface TeaserViewProps {
    teaserList: Teaser[],
    headline: string
}

const TeasersList = (props: TeaserViewProps) => {

    const carouselSettings: {} = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 951,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div>
            <h3 className="TeasersList__headline">{props.headline}</h3>
            <div className="TeaserList_flex">
                {props.teaserList.map((item, index) =>
                    <TeaserView key={index} teaser={item} />
                )}
            </div>
        </div>
    );
};

export default TeasersList;