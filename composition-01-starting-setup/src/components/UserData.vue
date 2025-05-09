<template>
  <div>
    <p>====================</p>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <h3>{{ mood }}</h3>
    <button @click="clickBtn"></button>
    <p>====================</p>
  </div>
</template>

<!-- OptionalAPI 和 CompositionAPI可以混用 -->

<!-- <script>
export default {
  props: ['userName', 'age'],
};
</script>
 -->

<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';
import { inject } from 'vue';
import { onBeforeMount, onMounted } from 'vue';

const mood = inject('mood');
const emit = defineEmits(['log']);

onBeforeMount(function () {
  console.log('beforeMount');
});
onMounted(function () {
  console.log('mount');
});

defineProps({
  userName: String,
  age: Number,
});
function clickBtn() {
  emit('log', 'hello from child');
}
</script>
