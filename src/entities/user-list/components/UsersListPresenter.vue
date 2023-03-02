<template>
  <div>
    <h1>User List</h1>
    <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              City
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
              class="user-row"
              :class="{ 'hover-class': hoveredUserId === user._id }"
              @mouseenter="hoveredUserId = user._id"
              @mouseleave="hoveredUserId = null"
              @click="rowClick(user)"
              v-for="user in users"
              :key="user._id"
          >
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.city }}</td>
          </tr>
        </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  props: {
    users: Array,
    hoveredUserId: Number,
  },
  methods: {
    rowClick(user) {
      this.$emit('rowClick', user);
    },
  },
};
</script>

<style>
  h1 {
    text-align: center;
  }

  .hover-class {
    cursor: pointer;
    background-color: rgba(0, 166, 255, 0.59);
  }
</style>
