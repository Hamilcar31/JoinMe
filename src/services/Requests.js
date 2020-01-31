// TODO: Get from a file config
const API_URL = 'https://join-me-api.herokuapp.com';

class Request {
    constructor() {
        this.oui = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    async get(url) {
        try {
            const response = await fetch(API_URL + url,
                {
                    method: 'GET',
                    headers: this.headers,
                });
            return { response: response.json(), error: null };
        } catch (error) {
            return { response: null, error };
        }
    }

    async post(url, body = {}) {
        try {
            const response = await fetch(API_URL + url,
                {
                    method: 'POST',
                    headers: this.headers,
                    body,
                });
            return { response: response.json(), error: null };
        } catch (error) {
            return { reponse: null, error };
        }
    }
}

export default new Request();
