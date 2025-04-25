<template>
  <button @click="increment">Add_2</button>
  <button @click="increase({ value: 5 })">Add_3</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    /*     addOne() {
      this.$store.commit('increase', { value: 5 });
    }, */
    ...mapActions('numbers', ['increment', 'increase']),
    /* 也可以這樣寫 */
    /* ...mapActions({
      inc: 'increment',
      incc: 'increase',
    }), */
  },
};
</script>
