const MAIN_URL = 'http://localhost:3001';

class MainApi {
  constructor(address) {
    this._address = address;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`http://localhost:3001/users/me`, {
      credentials: 'include',
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }
}

const mainApi = new MainApi({
  address: MAIN_URL,
})

export default mainApi;
