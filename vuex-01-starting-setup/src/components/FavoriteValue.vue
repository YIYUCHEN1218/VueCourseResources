<template>
  <h3>{{ counter }}</h3>
  <p>We do more......</p>
</template>
<script>
export default {
  computed: {
    counter() {
      /* return this.$store.getters.normalizeCounter; */
      /* 因加入了namespaced 要改用此讀取 */
      return this.$store.getters['numbers/normalizeCounter'];
    },
  },
};
</script>
