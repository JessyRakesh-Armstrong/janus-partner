<template>
  <v-list-item class="pt-5 pb-5" v-bind:class="getClass()">
    <v-list-item-avatar v-if="isProfile" color="grey darken-3">
    </v-list-item-avatar>
    {{ title }}
  </v-list-item>
</template>

<script>
export default {
  name: "sidebar-item",
  setup() {},
  props: {
    title: "",
    isProfile: false,
    addButton: false,
  },
  data() {
    return {
      isProfile: false,
      profileImgLink: "",
    };
  },
  methods: {
    getClass() {
      return {
        secondary: this.isProfile,
        add: this.addButton,
      };
    },
  },
};
</script>
