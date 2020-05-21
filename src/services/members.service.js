import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api0/members/';

class MembersService {
  getMembers() {
    return axios.get(API_URL + 'members', { headers: authHeader() });
  }

  getMember(id) {
    return axios.get(API_URL + `members/${id}`, { headers: authHeader() });
  }
}

export default new MembersService();
