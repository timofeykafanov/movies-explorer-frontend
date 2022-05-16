const MAIN_URL = 'https://api.movie.diploma.nomoredomains.work';

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

  
}

const mainApi = new MainApi({
  address: MAIN_URL
})

export default mainApi;