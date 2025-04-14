<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "123" }}</h2>
    <button @click="toggleFavorite">{{ isFavorite ? "Remove Favorite" : "Add Favorite" }}</button>
    <button @click="toggleDetail">{{ isDetailVisible ? "Hide" : "Show" }}</button>
    <ul v-if="isDetailVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend', this.id)">Delete</button>
  </li>
</template>

<script>
export default {
  /* props: ["name", "phoneNumber", "emailAddress", "isFavorite"], */
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      /* 驗證器 驗證輸入的值是否符合要求 應回傳Boolean 若False會在瀏覽器回傳Warn */
      /* validator: function (value) {}, */
    },
  },
  /* 可以在此定義你的所有emit 若之後呼叫emit 未符合設定 會回傳Warm */
  emits: ["toggle-favorite-event", "delete-friend"],
  /*   emits: {
    "toggle-favorite-event": function (id) {
      if (id) return true;
      else return false;
    },
    "delete-friend": function (id) {
      return true;
    },
  }, */
  data() {
    return {
      isDetailVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetail() {
      this.isDetailVisible = !this.isDetailVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite-event", this.id);
    },
    deleteFriend() {},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
