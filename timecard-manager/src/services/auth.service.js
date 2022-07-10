import ApiHandler from '@/constants/api';

class AuthService {
  async login(user) {
    const data = await ApiHandler.post('auth/signin', user);

    if (data.accessToken) {
      localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
  }

  async signup(user) {
    return await ApiHandler.post('auth/signup', user);
  }

  async logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
