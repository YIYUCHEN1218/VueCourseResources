<template>
  <section>
    <header>
      <h1>Friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite-event="toggleFavoriteStatus"
        @delete-friend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "Yu",
          name: "ZhangYuShao",
          phone: "0123 456 789",
          email: "ZhangYuShao@local.host",
          isFavorite: true,
        },
        {
          id: "01",
          name: "010101",
          phone: "0987 654 321",
          email: "01@local.host",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const selectedFriend = this.friends.find((friend) => friend.id === friendId);
      selectedFriend.isFavorite = !selectedFriend.isFavorite;
    },
    addContact(contact) {
      const newData = {
        id: new Date().toISOString(),
        name: contact.enterName,
        phone: contact.enterPhone,
        email: contact.enterEmail,
        isFavorite: false,
      };
      this.friends.push(newData);
    },
    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
  computed: {},
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
