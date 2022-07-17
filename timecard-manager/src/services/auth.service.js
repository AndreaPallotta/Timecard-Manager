import ApiHandler from '@/constants/api';

class AuthService {
  async login(user) {
    const data = await ApiHandler.post('auth/login', user);
    if (data.authToken && data.refreshToken) {
      localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
  }

  async signup(user) {
    return await ApiHandler.post('auth/signup', user);
  }

  async signout(email) {
    // localStorage.removeItem('user');
    return await ApiHandler.post('auth/signout', { email });
  }
}

export default new AuthService();
