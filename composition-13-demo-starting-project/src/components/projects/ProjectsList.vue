<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';
import { ref, defineProps, computed, watch, toRefs } from 'vue';

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');
const props = defineProps({ user: Object });

const hasProjects = computed(function () {
  return props.user.projects && availableProjects.value.length > 0;
});
const availableProjects = computed(function () {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});

function updateSearch(val) {
  enteredSearchTerm.value = val;
}

watch(enteredSearchTerm, function (val) {
  setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 300);
});

/* 因為props.user不是響應 可使用toRefs解決 */
const { user } = toRefs(props);
watch(user, function () {
  enteredSearchTerm.value = '';
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
