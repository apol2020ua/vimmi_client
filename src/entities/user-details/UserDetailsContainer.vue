<template>
  <div>
    <UserDetailsPresenter
      :activeUser="activeUser"
    />
  </div>
</template>

<script>
import api from './api';
import UserDetailsPresenter from '@/entities/user-details/components/UserDetailsPresenter.vue';

export default {
  data() {
    return {
      activeUser: {},
    };
  },
  computed: {
    // ...mapState({
    //   activeUser: (state) => state.users.activeUser,
    // }),
  },
  methods: {
    // ...mapActions({
    //   fetchUsers: 'fetchUsers',
    // }),
  },
  async created() {
    try {
      const id = '269cac82-98ae-43f7-813b-a7ff55220655';
      this.activeUser = await api.fetchUser(id);
    } catch (e) {
      alert(e?.message || 'Unexpected error');
    }
  },
  components: {
    UserDetailsPresenter,
  },
};
</script>
