const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

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
      headers: HEADERS,
      
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }
}

const moviesApi = new MoviesApi({
  address: MOVIES_URL
})

export default moviesApi;
