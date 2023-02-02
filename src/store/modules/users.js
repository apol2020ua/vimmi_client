import axios from 'axios';

const state = () => ({
  users: [],
  activeUser: null,
});

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_ACTIVE_USER(state, user) {
    state.activeUser = user;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get('https://84.246.85.252:3000/users');
    commit('SET_USERS', response.data);
  },
  setActiveUser({ commit }, user) {
    commit('SET_ACTIVE_USER', user);
  },
};

export default {
  state,
  mutations,
  actions,
};
