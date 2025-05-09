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
        v-for="prj in availableItems"
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
import { defineProps, computed, watch, toRefs } from 'vue';
import useSearch from '../../hooks/search';
import { isReactive, isRef } from 'vue';

const props = defineProps({ user: Object });

console.log('=============');
console.log(isReactive(props)); // ✅ true
console.log(isReactive(props.user)); // ❌ false
console.log(isRef(props.user)); // ❌ false（不是 ref）

/* 因為props.user不是響應 可使用toRefs解決 */
const { user } = toRefs(props);

// 取得 projects（computed 是響應式）
const projects = computed(function () {
  return user.value ? user.value.projects : [];
});

const { enteredSearchTerm, activeSearchTerm, availableItems, updateSearch } =
  useSearch(projects, 'title');

// 判斷是否有專案（正確寫法）
const hasProjects = computed(function () {
  return user.value.projects && availableItems.value.length > 0;
});

watch(user, function () {
  updateSearch('');
});
/* const projects = computed(function () {
  return props.user ? props.user.projects : [];
}); */
/* const projects = user.value ? user.value.projects : []; */
console.log(activeSearchTerm);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
