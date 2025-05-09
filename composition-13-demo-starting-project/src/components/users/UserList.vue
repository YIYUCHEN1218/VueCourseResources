<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup>
import UserItem from './UserItem.vue';
import { ref, defineProps, computed, watch } from 'vue';

const props = defineProps({ users: Object });
const enteredSearchTerm = ref();
const activeSearchTerm = ref();
const sorting = ref(null);

const availableUsers = computed(function () {
  let usersList = [];
  if (activeSearchTerm.value) {
    usersList = props.users.filter((usr) =>
      usr.fullName.includes(activeSearchTerm.value)
    );
  } else if (props.users) {
    usersList = props.users;
  }
  return usersList;
});

const displayedUsers = computed(function () {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

watch(enteredSearchTerm, function (val) {
  setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 300);
});

function updateSearch(val) {
  enteredSearchTerm.value = val;
}

function sort(mode) {
  sorting.value = mode;
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
