import axios from 'axios';


class HttpClient {
    constructor() {
        this.validRequestTypes = ['get', 'post', 'patch', 'put', 'delete'];
        this.client = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            // withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const savedToken = window.localStorage.getItem('token');
        if (savedToken) {
            this.client.interceptors.request.use((config) => {
                config.headers.common['Authorization'] = savedToken;
                return config;
            });
        }
    }

    static resetConstructor() {
        return new HttpClient();
    }

    requestType(type) {
        if (this.validRequestTypes.includes(type)) {
            this.requestMethod = type;
            return this;
        } else {
            throw new Error(`Your request type ${type} is not valid. Valid requests are: ${(this.validRequestTypes).toString()}`);
        }
    }

    formBody(data) {
        this.formData = data
        return this;
    }

    isMultimedia() {
        this.multimedia = true;
        // for image upload
        this.client.default.headers['Content-Type'] = 'multipart/form-data'
        return this;
    }

    request(url) {
        const requestShouldCarryFormData = this.validRequestTypes.map(type => type !== 'get' || type !== 'delete');

        // validating request type
        if (this.requestMethod === undefined) {
            throw new Error('Request Method Type is not found. Please use requestType(param) method')
        }

        let requestConfig = {
            method: this.requestMethod,
            url: url,
        }
        let formData;
        // validating request
        if (requestShouldCarryFormData.includes(this.requestMethod) && this.formData !== undefined) {
            throw new Error('Form Data not found. Please use formBody() method to set form data.')
        } else {
            // setting form body
            if (this.multimedia) {
                formData = new FormData();
                for (const [key, value] of Object.entries(this.formData)) {
                    formData.append(key, value);
                }
            } else {
                formData = this.formData;
            }
            requestConfig.data = formData;
        }


        // sending request
        return this.client(requestConfig)
            .then(response => response)
            .catch(error => error.response)
    }
}

export default HttpClient;
