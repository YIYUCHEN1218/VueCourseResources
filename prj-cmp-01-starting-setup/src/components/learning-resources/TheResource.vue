<template>
  <base-card>
    <base-button
      @click="setSelectTab('stored-resources')"
      :mode="storeButtonStyle"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectTab('add-resource')" :mode="addButtonStyle"
      >Add Resources</base-button
    >
  </base-card>
  <KeepAlive>
    <component :is="selectedTab"></component>
  </KeepAlive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'offical-guide',
          title: 'Offical Guide',
          description: 'The offical Vue.js documents',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com',
        },
      ],
    };
  },
  methods: {
    setSelectTab(tab) {
      this.selectedTab = tab;
    },
    addResource(res) {
      console.log(this.storedResources);
      this.storedResources.unshift(res);
      this.setSelectTab('stored-resources');
      console.log(this.storedResources);
    },
    removeResource(resid) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resid
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storeButtonStyle() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addButtonStyle() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>
