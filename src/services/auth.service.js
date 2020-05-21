import axios from 'axios';

const API_URL = 'http://localhost:8081/api0/auth/';

class AuthService {
  login(member) {
    return axios
      .post(API_URL + 'login', {
        email: member.email,
        password: member.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('member', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('member');
  }

  signup(member) {
    return axios.post(API_URL + 'signup', {
      email: member.email,
      password: member.password,
      fullName: member.fullName,
    });
  }
}

export default new AuthService();
