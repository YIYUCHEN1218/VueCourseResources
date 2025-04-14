<template>
  <form @submit.prevent="addUser">
    <input type="text" v-model="enterData.userName" />
    <input type="number" v-model="enterData.age" />
    <button>Add</button>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enterData: {
        userName: "",
        age: 0,
      },
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", this.enterData);
    },
  },
};
</script>
