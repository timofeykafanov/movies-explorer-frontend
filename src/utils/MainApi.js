const MAIN_URL = 'http://localhost:3001';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

class MainApi {
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

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      credentials: 'include',
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  updateUserInfo(email, name) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, name }),
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }
}

const mainApi = new MainApi({
  address: MAIN_URL,
  headers: HEADERS,
})

export default mainApi;