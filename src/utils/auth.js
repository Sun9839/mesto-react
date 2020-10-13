class Auth {
    constructor({ baseUrl }) {
        this._url = baseUrl;
    }
    _handleResponse(response){
        if (response.ok) {
            return response.json();
        } else {
            console.log('_handleResponse rejection')
            return Promise.reject(response.statusText)
        }
    }
    _handleResponseError(err){
        console.log('_handleResponseError')
        return Promise.reject(err.message)
    }
    postUser(url,password,email){
        return fetch(`${this._url}/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "password": password,
                "email": email
            })
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }
    signin(url,password,email){
        return fetch(`${this._url}/signin`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "password": password,
                "email": email
            })
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }
}

export const auth = new Auth({
    baseUrl: "https://auth.nomoreparties.co"
})