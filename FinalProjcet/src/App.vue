<template>
  <the-header></the-header>
  <div v-if="isLoad">
    <base-spinner></base-spinner>
  </div>
  <base-dialog :show="errorMessage !== null" title="Error" @close="handleError">
    <p>{{ errorMessage }}</p>
  </base-dialog>
  <router-view v-slot="slotProps" mode="out-in">
    <transition name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import { handleError } from "vue";
import TheHeader from "./components/layout/TheHeader.vue";
import router from "./router";

export default {
  components: { TheHeader },
  computed: {
    isLoad() {
      return this.$store.getters["isLoad"];
    },
    errorMessage() {
      return this.$store.getters["errorMessage"];
    },
    didAutoLogout() {
      return this.$store.getters["autoLogout"];
    },
  },
  methods: {
    handleError() {
      return this.$store.dispatch("setError", null);
    },
  },
  watch: {
    didAutoLogout(currentValue, oldValue) {
      if (currentValue && currentValue != oldValue) {
        this.$router.replace("/coaches");
      }
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30), scale(0.8);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30), scale(0.8);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0), scale(1);
}
</style>
