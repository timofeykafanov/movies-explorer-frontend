const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor({address}) {
    this._address = address;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._address}`, {
      method: 'GET',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }
}

const moviesApi = new MoviesApi({
  address: MOVIES_URL,
})

export default moviesApi;
