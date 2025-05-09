<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked v-model="filters.frontend" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked v-model="filters.backend" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked v-model="filters.career" />
      <label for="career">Career</label>
    </span>
    <button @click="test">Test</button>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  emits: ["change-filter"],
  watch: {
    /* 另一種寫法 handler 是約定名字 還有很多參數可用 */
    filters: {
      handler() {
        this.setFilter();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    setFilter() {
      console.log("設定Filter" + this.filters);
      console.log(this.filters);
      this.$emit("change-filter", this.filters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
