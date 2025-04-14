<template>
  <li>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    userName: String,
    age: Number,
  },
};
</script>
