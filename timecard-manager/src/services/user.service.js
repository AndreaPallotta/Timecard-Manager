import ApiHandler from '@/constants/api';

class UserService {
  async getPreferences(email) {
    return ApiHandler.get('user/preferences', { email });
  }
  async setPreferences(email, preferences) {
    return ApiHandler.post('user/preferences', { email, preferences });
  }
}

export default new UserService();
