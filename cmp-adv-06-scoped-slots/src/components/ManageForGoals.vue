<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="inputElement" />
  <button @click="setGoal">setGoal</button>
  <Teleport to="body">
    <ErrorAlert v-if="showError">
      <h2>Input is Error</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirm">Okay</button>
    </ErrorAlert>
  </Teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      showError: false,
    };
  },
  methods: {
    setGoal() {
      const enterValue = this.$refs.inputElement.value;
      if (enterValue === "") {
        this.showError = true;
      }
    },
    confirm() {
      this.showError = false;
    },
  },
};
</script>
