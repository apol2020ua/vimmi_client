<template>
  <div class="wrapper">
    <router-link to="/users">
      <v-btn class="btn" stacked variant="tonal" height="50" >
        Back
      </v-btn>
    </router-link>
    <v-card
      :title="activeUser.name"
      :subtitle="activeUser.city + ' ' + activeUser.email"
      :text="activeUser.description"
      variant="tonal"
    ></v-card>
  </div>
</template>

<script>
export default {
  props: {
    activeUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.btn {
  margin-right: 3rem;
}
.wrapper {
  display: flex;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}
</style>
