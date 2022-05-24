const MAIN_URL = process.env.REACT_APP_MAIN_URL || 'http://localhost:3001';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

class Auth {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  login(email, password) {
    return fetch(`${this._address}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  register(email, password, name) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name}),
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  logout() {
    return fetch(`${this._address}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }
}

const auth = new Auth({
  address: MAIN_URL, 
  headers: HEADERS
});

export default auth;
