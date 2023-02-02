<template>
  <UsersListPresenter
    :users="users"
    :hoveredUserId="hoveredUserId"
    @rowClick="rowClick"
  />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UsersListPresenter from '@/components/presenters/UsersListPresenter.vue';

export default {
  data() {
    return {
      hoveredUserId: null,
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users.users,
    }),
  },
  methods: {
    ...mapActions({
      fetchUsers: 'fetchUsers',
      setActiveUser: 'setActiveUser',
    }),
    rowClick(user) {
      this.setActiveUser(user);
      this.$router.push({ path: `users/${user._id}` });
    },
  },
  created() {
    this.fetchUsers();
  },
  components: {
    UsersListPresenter,
  },
};
</script>
