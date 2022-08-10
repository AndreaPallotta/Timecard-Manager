import ApiHandler from '@/constants/api';

class StatsService {
  async getStats(email) {
    return ApiHandler.get('stats/all', { email });
  }
  async getStatsByDate(email, from, to) {
    return ApiHandler.get('stats/byDate', { email, from, to });
  }
}

export default new StatsService();
