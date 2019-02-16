import { ApiSdk, SuperAgentCallbackHandler, SuperAgentResponse } from '../api/api-sdk';

let resolve;
let reject;
const apiPromise = new Promise<ApiSdk>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
});

export interface ApiServiceConfig {
    domain?: string;
}

class ApiService {

    private readonly config: ApiServiceConfig = {
        domain: process.env.APIURL || 'http://localhost:8080'
    };

    private readonly headers: {};

    public apiSdk: ApiSdk;

    constructor(config: ApiServiceConfig, headers?: {}) {
        this.config = Object.assign({}, this.config, config);
        this.headers = Object.assign({}, this.headers, headers);

        this.apiSdk = new ApiSdk(this.config.domain, null, this.headers);
        this.apiSdk.addErrorHandler(this.ErrorHandler404);
    }

    private readonly ErrorHandler404: SuperAgentCallbackHandler = (err, res: SuperAgentResponse) => {
        if (res.status === 404) {
            console.log(err);
            console.log(res);
        }
    };

}

export function configureApiService(config?: ApiServiceConfig, headers?: {}) {
    const instance: ApiService = new ApiService(config, headers);
    resolve(instance.apiSdk);
}

export function apiService(): Promise<ApiSdk> {
    return apiPromise;
}
