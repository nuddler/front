import * as React from 'react';
import TeasersList from "./TeasersList/TeasersList";
import { apiService } from '../../api/api.service';
import { TeasersListSection, Teaser } from '../../api/api-sdk';

export interface TeasersSectionContainerState {
    teaserList: Teaser[],
    header: string
}

export default class TeasersContainer extends React.Component<TeasersSectionContainerState> {

    state: TeasersSectionContainerState = {
        teaserList: [],
        header: ""

    };


    componentDidMount() {
        apiService()
            .then(api => api.teasersSectionUsingGET({}))
            .then(
                response => {
                    const data: TeasersListSection = response.body;
                    this.setState({
                        teaserList: data.teaserList,
                        header: data.header,
                    });
                })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <TeasersList teaserList={this.state.teaserList} headline={this.state.header} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}