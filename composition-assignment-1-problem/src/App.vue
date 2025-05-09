<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isCourseGoalShow">{{ courseGoalObj2.goal1 }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { ref, reactive } from 'vue';

const isCourseGoalShow = ref(true);
const courseGoal1 = ref('To Be a gooooooooooooood Person');
const courseGoal2 = ref('Enginner');
const courseGoalObj1 = ref({
  goal1: '@@To Be a gooooooooooooood Person',
  goal2: '@@Enginner',
});
const courseGoalObj2 = reactive({
  goal1: '@@@@To Be a gooooooooooooood Person',
  goal2: '@@@@Enginner',
});

console.log(courseGoal1);
console.log(courseGoal2);
console.log(courseGoalObj1);
console.log(courseGoalObj2);

function toggleGoal() {
  isCourseGoalShow.value = !isCourseGoalShow.value;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
