import axios from 'axios';

const API_URL = 'https://84.246.85.252:3000';
export default {
  fetchUsers() {
    return axios.get(`${API_URL}/users`);
  },
};
