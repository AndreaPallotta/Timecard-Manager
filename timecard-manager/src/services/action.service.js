import ApiHandler from '@/constants/api';

class ActionService {
  async getLastAction(email) {
    return ApiHandler.get('action/last', { email });
  }
  async getTotalHours(email) {
    return ApiHandler.get('action/total', { email });
  }
}

export default new ActionService();
