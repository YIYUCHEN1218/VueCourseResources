<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script setup>
import { inject, defineProps, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);

const products = inject('products');
const props = defineProps({ pid: String });
const selectedProduct = computed(() =>
  products.value.find((product) => product.id === props.pid)
);
const title = computed(() => selectedProduct.value.title);
const price = computed(() => selectedProduct.value.price);
const description = computed(() => selectedProduct.value.description);
/* 以下寫法非響應資料 所以畫面不會更新 */
/* const selectedProduct = products.value.find(
  (product) => product.id === props.pid
);
const title = selectedProduct.title;
const price = selectedProduct.price;
const description = selectedProduct.description; */
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
