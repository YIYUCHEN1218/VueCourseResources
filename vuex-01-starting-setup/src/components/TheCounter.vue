<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    /* counter() {
      return this.$store.getters.finalCounter;
    }, */

    /* ...mapGetters(['finalCounter']), */
    /* 因加入了namespaced 要改用此讀取 */
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
