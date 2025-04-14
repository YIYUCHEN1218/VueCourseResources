<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>請確保您的輸入正確!</p>
      <p>所有欄位皆不得為空</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          row="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enterTitle = this.$refs.titleInput.value;
      const enterDescription = this.$refs.descriptionInput.value;
      const enterLink = this.$refs.linkInput.value;

      if (enterTitle && enterDescription && enterLink) {
        const newResource = {
          id: new Date().toISOString(),
          title: enterTitle,
          description: enterDescription,
          link: enterLink,
        };
        this.addResource(newResource);
      } else {
        this.inputIsInvalid = true;
        return;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
  inject: { addResource: 'addResource' },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
