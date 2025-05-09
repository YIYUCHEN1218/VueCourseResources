<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form
    ></base-card>
  </section>
</template>

<script>
import CoachForm from "../components/coaches/CoachForm.vue";

export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch("coach/registerCoach", data);
      /* replace 是取代 所以不會在瀏覽器上留下紀錄 */
      /* this.$router.push("/coaches"); */
      this.$router.replace("/coaches");
    },
  },
};
</script>
