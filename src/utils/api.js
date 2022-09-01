const apiConfig = {
    baseUrl: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
};

class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getOrganizationInfo(query) {
        return fetch(`${this._baseUrl}/api/orgs/info/${query.query}`, {
            headers: this._headers,
            method: 'GET',

        })
            .then(this._checkResponse)
    }
}

const api = new Api(apiConfig);
export default api;