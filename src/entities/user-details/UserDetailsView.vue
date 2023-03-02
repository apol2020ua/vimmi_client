<template>
  <div>
    <UserDetailsContainer
      :activeUser="activeUser"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserDetailsContainer from "@/entities/user-details/UserDetailsContainer.vue";

export default {
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser,
    }),
  },
  methods: {
    ...mapActions({
      fetchUsers: 'fetchUsers',
    }),
  },
  components: {
    UserDetailsContainer
  },
};
</script>
