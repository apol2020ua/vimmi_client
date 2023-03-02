<template>
  <UsersListPresenter
    :users="users"
    :hoveredUserId="hoveredUserId"
    @rowClick="rowClick"
  />
</template>

<script>
import api from './api';
import UsersListPresenter from "@/entities/user-list/components/UsersListPresenter.vue";

export default {
  data() {
    return {
      hoveredUserId: null,
      users: [],
      activeUser: {},
    };
  },
  computed: {
    // ...mapState({
    //   users: (state) => state.users.users,
    // }),
  },
  methods: {
    // fetchUsers() {
    //   const response = await axios.get('https://84.246.85.252:3000/users');
    // }
    // ...mapActions({
    //   fetchUsers: 'fetchUsers',
    //   setActiveUser: 'setActiveUser',
    // }),
    rowClick(user) {
      // this.setActiveUser(user);
      this.activeUser = user;
      this.$router.push({ path: `users/${user._id}` });
    },
  },
  async created() {
    try {
      this.users = await api.fetchUsers();
    } catch (err) {
      alert(err?.message || 'Unexpected error');
    }
  },
  components: {
    UsersListPresenter,
  },
};
</script>
