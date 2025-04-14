<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <button @click="setComponent('active-goals')">Active Goals</button>
    <button @click="setComponent('manage-for-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-for-goals v-if="selectedComponent === 'manage-for-goals'"></manage-for-goals> -->
    <!-- 新功能 Component標籤 -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageForGoals from "./components/ManageForGoals.vue";

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageForGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setComponent(name) {
      this.selectedComponent = name;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
