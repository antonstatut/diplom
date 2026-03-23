

class CinemaApi {
  constructor() {
    this.baseUrl = 'https://shfe-diplom.neto-server.ru';
  }

  // Универсальный внутренний метод для обработки запросов
  async _request(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);
      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Ошибка API');
      return data.result;
    } catch (error) {
      console.error(`Ошибка при вызове ${endpoint}:`, error.message);
      throw error;
    }
  }

  // --- ПУБЛИЧНАЯ ЧАСТЬ (ДАННЫЕ) ---

  getInitialData() {
    return this._request('/alldata');
  }

  getSeanceHallConfig(seanceId, date) {
    return this._request(`/hallconfig?seanceId=${seanceId}&date=${date}`);
  }

  // --- АДМИНКА (POST/DELETE) ---

  createHall(hallName) {
    const params = new FormData();
    params.set('hallName', hallName);
    // Передаем объект с методом и телом, как ожидает _request
    return this._request('/hall', { 
      method: 'POST', 
      body: params 
    });
  }

  deleteHall(hallId) {
    return this._request(`/hall/${hallId}`, { method: 'DELETE' });
  }

  updateHallConfig(hallId, rowCount, placeCount, config) {
    const params = new FormData();
    params.set('rowCount', rowCount);
    params.set('placeCount', placeCount);
    params.set('config', JSON.stringify(config));
    return this._request(`/hall/${hallId}`, { 
      method: 'POST', 
      body: params 
    });
  }

  updatePrices(hallId, priceStandart, priceVip) {
    const params = new FormData();
    params.set('priceStandart', priceStandart);
    params.set('priceVip', priceVip);
    return this._request(`/price/${hallId}`, { 
      method: 'POST', 
      body: params 
    });
  }

  toggleSales(hallId, status) {
    const params = new FormData();
    params.set('hallOpen', status);
    return this._request(`/open/${hallId}`, { method: 'POST', body: params });
  }

  addMovie(movieData) {
    const params = new FormData();
    params.set('filmName', movieData.name);
    params.set('filmDuration', movieData.duration);
    params.set('filmDescription', movieData.description);
    params.set('filmOrigin', movieData.origin);
    params.set('filePoster', movieData.poster);
    return this._request('/film', { method: 'POST', body: params });
  }

  deleteMovie(filmId) {
    return this._request(`/film/${filmId}`, { method: 'DELETE' });
  }

  addSeance(hallId, filmId, time) {
    const params = new FormData();
    params.set('seanceHallid', hallId);
    params.set('seanceFilmid', filmId);
    params.set('seanceTime', time);
    return this._request('/seance', { method: 'POST', body: params });
  }
  // Удаление сеанса
  deleteSeance(seanceId) {
    return this._request(`/seance/${seanceId}`, { method: 'DELETE' });
  }

  // --- КЛИЕНТ (ПОКУПКА) ---

  buyTicket(orderData) {
    const params = new FormData();
    params.set('seanceId', orderData.seanceId);
    params.set('ticketDate', orderData.ticketDate);
    params.set('tickets', JSON.stringify(orderData.tickets));
    return this._request('/ticket', { method: 'POST', body: params });
  }
}

export const api = new CinemaApi();