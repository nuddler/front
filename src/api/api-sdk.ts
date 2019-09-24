import * as request from "superagent";
import {
    SuperAgentStatic
} from "superagent";

export type SuperAgentResponse = request.Response;
export type SuperAgentCallbackHandler = (err: any, res ? : SuperAgentResponse) => void;

export interface Address {
    'city': string

        'id': string

    'name': string

        'street': string

}

export interface AvailableCars {
    'carList': Array < CarBasicInfo >

}

export interface BillingData {
    'bankName': string

        'iban': string

    'id': string

        'name': string

    'swift': string

}

export interface CarBasicInfo {
    'brand': string

        'colour': string

    'endOfInsurance': string

        'endOfTechnicalInspection': string

    'engine': string

        'fuelType': string

    'iconTitle': string

        'iconUrl': string

    'id': string

        'model': string

    'name': string

        'prettyName': string

    'taken': boolean

        'takenBy': string

    'totalMileage': number

}

export interface CarDetails {
    'brand': string

        'colour': string

    'description': string

        'endOfInsurance': string

    'endOfTechnicalInspection': string

        'engine': string

    'features': Array < Feature >

        'fuelType': string

    'iconTitle': string

        'iconUrl': string

    'id': string

        'model': string

    'name': string

        'prettyName': string

    'totalMileage': number

        'working': boolean

}

export interface CarsSection {
    'carList': Array < CarBasicInfo >

        'headline': string

}

export interface DrivingLicence {
    'categoryList': Array < string >

        'expirationDate': string

    'id': string

        'licenceNumber': string

}

export interface Feature {
    'description': string

        'iconTitle': string

    'iconUrl': string

        'id': string

    'name': string

        'prettyName': string

}

export interface GreetingsSection {
    'greetingText': string

}

export interface PersonalDataSection {
    'billingData': BillingData

        'contactAddress': Address

    'email': string

        'firstName': string

    'lastName': string

        'licence': DrivingLicence

    'phoneNumber': string

        'userAddress': Address

}

export interface Teaser {
    'description': string

        'headline': string

    'iconTitle': string

        'iconUrl': string

    'id': string

        'url': string

}

export interface TeasersListSection {
    'header': string

        'teaserList': Array < Teaser >

}

type Logger = {
    log: (line: string) => any
};

/**
 * Api Documentation
 * @class ApiSdk
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class ApiSdk {

    private domain: string = "";
    private errorHandlers: SuperAgentCallbackHandler[] = [];
    private headers = {};

    constructor(domain ? : string, private logger ? : Logger, headers ? : {}) {

        if (domain) {
            this.domain = domain;
        }

        if (logger) {
            this.logger = logger;
        }

        if (headers) {
            this.headers = headers;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: SuperAgentCallbackHandler) {
        this.errorHandlers.push(handler);
    }

    private request(method: string, url: string, body: any, headers: any, queryParameters: any, form: any, reject: SuperAgentCallbackHandler, resolve: SuperAgentCallbackHandler) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        let req = (request as SuperAgentStatic)(method, url).query(queryParameters).withCredentials();

        Object.keys(Object.assign(headers, this.headers)).forEach(key => {
            req.set(key, headers[key]);
        });

        if (body) {
            req.send(body);
        }

        if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
            req.set('Content-Type', 'application/json');
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        req.end((error, response) => {
            if (error || !response.ok) {
                if (response && response.body && response.body.message) {
                    reject(response);
                } else {
                    reject(error);
                }
                this.errorHandlers.forEach(handler => handler(error, response));
            } else {
                resolve(response);
            }
        });
    }

    carBasicInfoUsingGETURL(parameters: {
        'id': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/car/basic/{id}';

        path = path.replace('{id}', `${parameters['id']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get a CarBasicInfo objects with car basic info
     * @method
     * @name ApiSdk#carBasicInfoUsingGET
     * @param {string} id - id
     */
    carBasicInfoUsingGET(parameters: {
        'id': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/car/basic/{id}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    carDetailsUsingGETURL(parameters: {
        'id': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/car/{id}';

        path = path.replace('{id}', `${parameters['id']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get a CarDetails objects with car details
     * @method
     * @name ApiSdk#carDetailsUsingGET
     * @param {string} id - id
     */
    carDetailsUsingGET(parameters: {
        'id': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/car/{id}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    leaseCarUsingPOSTURL(parameters: {
        'id': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/car/{id}';

        path = path.replace('{id}', `${parameters['id']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Lease a car with id in path
     * @method
     * @name ApiSdk#leaseCarUsingPOST
     * @param {string} id - id
     */
    leaseCarUsingPOST(parameters: {
        'id': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/car/{id}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    carsSectionUsingGETURL(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/cars';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get a CarsSection objects with car lists which belongs to user
     * @method
     * @name ApiSdk#carsSectionUsingGET
     */
    carsSectionUsingGET(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/cars';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    availableCarsUsingGETURL(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/cars/available';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get a AvailableCars objects with car lists which could be taken by user
     * @method
     * @name ApiSdk#availableCarsUsingGET
     */
    availableCarsUsingGET(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/cars/available';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    greetingsSectionUsingGETURL(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/greetings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get a GreetingsSection object.
     * @method
     * @name ApiSdk#greetingsSectionUsingGET
     */
    greetingsSectionUsingGET(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/greetings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    personalSectionUsingGETURL(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/personalData';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * TODO!!!!
     * @method
     * @name ApiSdk#personalSectionUsingGET
     */
    personalSectionUsingGET(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/personalData';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    teasersSectionUsingGETURL(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/teasers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get a TeasersListSection objects with teaser lists to show below cars section.
     * @method
     * @name ApiSdk#teasersSectionUsingGET
     */
    teasersSectionUsingGET(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        // CHANGE: Prefix with base path from specification
        let path = '/api/teasers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
}