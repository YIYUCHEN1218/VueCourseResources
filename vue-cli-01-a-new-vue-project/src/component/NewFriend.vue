<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="this.contact.enterName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="this.contact.enterPhone" />
    </div>
    <div>
      <label>email</label>
      <input type="email" v-model="this.contact.enterEmail" />
      <!-- <input type="email"></input> -->
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      contact: {
        enterName: "",
        enterPhone: "",
        enterEmail: "",
      },
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.contact);
    },
  },
};
</script>
