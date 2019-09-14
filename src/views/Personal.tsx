import * as React from 'react';
import { CustomerNumberRow } from '../components/accountDataPage/CustomerNumberRow';
import { DataRow } from '../components/accountDataPage/DataRow';
import PageHeader from '../page-headers';
import { AddressBox } from '../components/accountDataPage/AddressBox';
import { BankAccountBox } from '../components/accountDataPage/BankAccountBox';
import { apiService } from '../api/api.service';
import { PersonalDataSection, BillingData, Address, DrivingLicence } from '../api/api-sdk';

interface PersonalState {
    billingData: BillingData,
    contactAddress: Address,
    email: string,
    firstName: string,
    lastName: string,
    licence: DrivingLicence,
    phoneNumber: string,
    userAddress: Address,
    header: string
}

export default class Personal extends React.Component {

    state: PersonalState = {
        billingData: null,
        contactAddress: null,
        email: null,
        firstName: null,
        lastName: null,
        licence: null,
        phoneNumber: null,
        userAddress: null,
        header: null
    }
    
    componentDidMount() {
        apiService()
            .then(api => api.personalSectionUsingGET({})) //todo: cleanup
            .then(
                response => {
                    const data: PersonalDataSection = response.body;
                    this.setState({
                        billingData: data.billingData,
                        contactAddress: data.contactAddress,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        licence: data.licence,
                        phoneNumber: data.phoneNumber,
                        userAddress: data.userAddress,
                        loading: false
                    });
                })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <React.Fragment>
                <PageHeader className="phx-u-space--top_2" headerText={"Personal Page Header"} />
                <div className="row">
                    <CustomerNumberRow customerNumber={"Customer Number"} header={"Customer Number"} />
                    <div className={`phx-col-l-12 phx-col-m-12 phx-col-s-12 phx-col-xs-12`}>
                        <div className="phx-list phx-list--personal-data phx-u-space--bottom_5">
                            <DataRow description={"Opis sekcji..."} header={"Dane Personalne"}>
                                <React.Fragment>
                                    <hr />
                                    <p className="Collapsibe__section-header">{"Adres użytkownika"}</p>
                                    <AddressBox
                                        address={this.state.userAddress}
                                    />
                                </React.Fragment>
                            </DataRow>
                            <DataRow description={"Opis sekcji..."} header={"Dane Kontaktowe"}>
                                <React.Fragment>
                                    <hr />
                                    <p className="Collapsibe__section-header">{"Adres Kontaktowy"}</p>
                                    <AddressBox
                                        address={this.state.contactAddress}
                                    />
                                    <hr />
                                    <p className="Collapsibe__section-header">{"Numer telefonu"}</p>
                                    {this.state.phoneNumber}
                                    <hr />
                                    <p className="Collapsibe__section-header">{"Email"}</p>
                                    {this.state.email}
                                </React.Fragment>
                            </DataRow>
                            <DataRow description={"Opis sekcji..."} header={"Dane Billigowe"}>
                                <React.Fragment>
                                    <hr />
                                    <p className="Collapsibe__section-header">{"Adres do płatności"}</p>
                                    <AddressBox
                                        address={this.state.userAddress} //todo: change to billing addres
                                    />
                                    <hr />
                                    <p className="Collapsibe__section-header">{"Numer konta do płatności"}</p>
                                    <BankAccountBox
                                        bankAccount={this.state.billingData}
                                    />
                                </React.Fragment>
                            </DataRow>
                            <DataRow description={"Opis sekcji..."} header={"Prawo Jazdy"}>
                                {this.state.licence != null &&
                                    <div className="phx-list--personal-data__section">
                                        <p className="phx-list--personal-data__description">{this.state.licence.licenceNumber}</p>
                                        <p className="phx-list--personal-data__description">{this.state.licence.expirationDate}</p>
                                        <p className="phx-list--personal-data__description">{this.state.licence.categoryList}</p>
                                    </div>
                                }
                            </DataRow>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}