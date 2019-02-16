import * as React from 'react';
import { OrderRow } from './OrderRow';

export interface IOpenOrdersViewState {
    data?: any,
    header: string,
    showMore: boolean;
    list: any[];
    moreLinkLabel: string
}

export class OpenOrdersView extends React.Component {

    state: IOpenOrdersViewState = {
        header: "",
        showMore: false,
        list: [],
        moreLinkLabel: ""
    };

    // componentDidMount() {
    //     this.getLimitedData();
    // }

    // private communication = phoenixCommunicationService();

    // private getLimitedData() {
    //     apiService()
    //         .then(api => api.ordersUsingGET({}))
    //         .then(
    //             response => {
    //                 const res: OrdersData = response.body;
    //                 this.setState({
    //                     data: res,
    //                     header: res.header,
    //                     list: res.orders,
    //                     showMore: res.moreOrders,
    //                     moreLinkLabel: res.moreLinkLabel
    //                 });
    //                 this.communication.send('SET_HEIGHT', getPageHeight());
    //             })
    //         .catch(err => console.error(err));
    // }


    // private getAllData() {
    //     apiService()
    //         .then(api => api.allOrdersUsingGET({}))
    //         .then(
    //             response => {
    //                 const res: OrdersData = response.body;
    //                 this.setState({
    //                     data: res,
    //                     header: res.header,
    //                     list: res.orders,
    //                     showMore: res.moreOrders
    //                 });
    //                 this.communication.send('SET_HEIGHT', getPageHeight());
    //             })
    //         .catch(err => console.error(err));
    // }

    render() {
        // const handleClick = () => this.getAllData();
        if (this.state.data && this.state.data.noDataMessage) {
            return (
                <React.Fragment>
                    <p className="Collapsibe__section-header">{this.state.data.noDataMessage}</p>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <p className="Collapsibe__section-header">{this.state.header}</p>

                    {this.state.list.map((s, i) => <OrderRow id={s.id} creationDate={s.creationDate} status={s.status} key={i} />)}

                    {this.state.showMore && <button type='button' className={"phx-list--personal-data__more-button"} /* onClick={handleClick} */> {this.state.moreLinkLabel} </button>}
                </React.Fragment>
            )
        }
    }

}