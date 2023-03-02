<template>
  <UsersListContainer></UsersListContainer>
</template>

<script>
import UsersListContainer from "@/entities/user-list/UsersListContainer.vue";

export default {
  // data() {
  //   return {
  //     hoveredUserId: null,
  //   };
  // },
  // computed: {
  //   ...mapState({
  //     users: (state) => state.users.users,
  //   }),
  // },
  // methods: {
  //   ...mapActions({
  //     fetchUsers: 'fetchUsers',
  //     setActiveUser: 'setActiveUser',
  //   }),
  //   rowClick(user) {
  //     this.setActiveUser(user);
  //     this.$router.push({ path: `users/${user._id}` });
  //   },
  // },
  // created() {
  //   this.fetchUsers();
  // },
  components: {
    UsersListContainer
  },
};
</script>
