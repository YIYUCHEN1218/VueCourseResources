<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanged">Save Changed</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';
export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      dataSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanged() {
      this.dataSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('CMP beforeRouteEnter');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('CMP beforeRouteLeave');
    if (this.dataSaved) {
      next();
    } else {
      const answer = confirm(
        'Are you sure you want to leave? All unsaved changes will be lost!'
      );
      next(answer);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
