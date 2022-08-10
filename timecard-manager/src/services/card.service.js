import ApiHandler from '@/constants/api';

class CardService {
  async getTimecards(email) {
    return ApiHandler.get('cards/all', { email });
  }
  async getTimecardsByDate(email, from, to) {
    return ApiHandler.get('cards/byDate', { email, from, to });
  }
  async clearTimecards(email) {
    return ApiHandler.get('cards/clear', { email });
  }
  async getTimecard(email, id) {
    return ApiHandler.get('card/byId', { email, id });
  }
  async clearTimecard(email, id) {
    return ApiHandler.get('card/clear', { email, id });
  }
}

export default new CardService();
