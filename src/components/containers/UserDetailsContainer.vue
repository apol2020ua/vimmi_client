<template>
  <div>
    <UserDetailsPresenter
      :activeUser="activeUser"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserDetailsPresenter from '@/components/presenters/UserDetailsPresenter.vue';

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
    UserDetailsPresenter,
  },
};
</script>
