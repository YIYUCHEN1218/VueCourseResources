<template>
  <section class="container">
    <user-data :userName="fullName" :age="uAge" @log="printLog"></user-data>
    <h2>{{ fullName }}</h2>
    <h3>{{ uAge }}</h3>
    <h3>{{ user }}</h3>
    <h3>{{ user.Height }}</h3>
    <h3>{{ user.Width }}</h3>
    <h3>{{ userTime.Time }}</h3>
    <h3>{{ userTime.Fre }}</h3>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <!--       <input
        type="text"
        placeholder="Last Name"
        ref="lastNameInput"
        v-model="lastName"
      /> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set LastName</button>
    </div>
  </section>
</template>

<!-- 修改data methods computed watch -->

<script setup>
import { ref, reactive, isReactive, isRef, computed, watch } from 'vue';
import { toRefs } from 'vue';
import { provide } from 'vue';
import UserData from './components/UserData.vue';

const uName = ref('Maximilian');
const firstName = ref('');
const lastName = ref('');
const uAge = ref(31);
const user = ref({ Height: 100, Width: 100 });
const userTime = reactive({ Time: 10, Fre: 2 });

const mood = ref('Happy');
provide('mood', mood);

/* 可確認是否為響應資料 */
console.log(isRef(uAge.value));
console.log(isReactive(user.value.Height, user.value.Width));

/* 把物件的所有屬性都變成響應 */
const userTimeRefs = toRefs(userTime);
console.log(isRef(userTime.Time));
console.log(isRef(userTimeRefs.Time));
console.log(uName);
// function setTimeoutEvent() {
//   setTimeout(() => {
//     uAge.value = 32;
//     uName.value = 'Max';
//     user.value.Height = 120;
//     user.value.Width = 120;
//     /* 不用.value 直接進proxy */
//     userTime.Time = 50;
//     userTime.Fre = 4;
//   }, 2000);
// }

const fullName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});

/* watch 也可以傳陣列 */
watch([uAge, fullName], function (newValue, oldValue) {
  console.log('Old Age:' + oldValue[0]);
  console.log('New Age:' + newValue[0]);
  console.log('Old Name:' + oldValue[1]);
  console.log('New Name:' + newValue[1]);
});

function setNewData() {
  uAge.value += 1;
}

function setFirstName(event) {
  firstName.value = event.target.value;
}

function printLog(msg) {
  console.log(msg);
}

const lastNameInput = ref(null);
function setLastName() {
  /* 這不起作用 */
  /* lastName.value = this.$refs.lastNameInput.value; */
  /* lastNameInput.value存的是有REF標籤的那個DOM元素 */
  lastName.value = lastNameInput.value.value;
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
