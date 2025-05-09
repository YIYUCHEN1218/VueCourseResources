<template>
  <div>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
          <base-button v-if="!isCoach && isAuth" to="/register">Register as coach</base-button>
          <base-button v-if="!isCoach && !isAuth" to="/auth?redirect=register">Login to be a coach</base-button>
        </div>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from "../components/coaches/CoachItem.vue";
import CoachFilter from "../components/coaches/CoachFilter.vue";

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coach/coaches"];
      const filteredCoaches = coaches.filter((coach) => {
        if (this.filters.frontend && coach.areas.includes("frontend")) return true;
        else if (this.filters.backend && coach.areas.includes("backend")) return true;
        else if (this.filters.career && coach.areas.includes("career")) return true;
        else return false;
      });
      return filteredCoaches;
    },
    hasCoaches() {
      return this.filteredCoaches.length > 0;
    },
    isCoach() {
      return this.$store.getters["coach/isCoach"];
    },
    isAuth() {
      return this.$store.getters["isAuthenticated"];
    },
  },
  methods: {
    setFilters(filters) {
      this.filters = { ...filters };
    },
    async loadCoaches(refresh = false) {
      this.$store.dispatch("startRequest");
      try {
        await this.$store.dispatch("coach/loadCoaches", { forceRefresh: refresh });
      } catch (error) {
        this.$store.dispatch("setError", error);
      }
      this.$store.dispatch("endRequest");
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
