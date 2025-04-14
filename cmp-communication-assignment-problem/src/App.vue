<template>
  <ul>
    <active-user v-for="user in users" :key="user.userName" v-bind="user"></active-user>
  </ul>
  <user-data @add-user="addUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(data) {
      this.users.push(data);
    },
  },
};
</script>

<!-- <script>
export default {
  data() {
    return {
      friends: [
        {
          id: "Yu",
          name: "ZhangYuShao",
          phone: "0123 456 789",
          email: "ZhangYuShao@local.host",
          isFavorite: true,
        },
        {
          id: "01",
          name: "010101",
          phone: "0987 654 321",
          email: "01@local.host",
          isFavorite: false,
        },
      ],
    };
  },
};
</script> -->
