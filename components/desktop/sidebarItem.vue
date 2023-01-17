<template>
  <div>
    <!----AVATAR ITEM-->
    <v-list-item v-if="isProfile" class="primary px-2 pb-5">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Sandra Adams </v-list-item-title>
        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <!---ADD BUTTON-->
    <v-list-item v-if="addButton" class="add">
      <v-list-item-title class="text-h6">
        {{ title }}
      </v-list-item-title>

      <font-awesome-icon :icon="['fas', 'plus']" />
    </v-list-item>
    <!--Habit ITEM-->
    <v-list-item v-if="!addButton && !isProfile"> </v-list-item>
  </div>
</template>
<script>
export default {
  name: "sidebar-item",
  setup() {},
  props: {
    title: {
      type: String,
      required: true,
    },
    isProfile: {
      type: Boolean,
      required: false,
      default: false,
    },
    addButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    activity: {
      type: Object,
      required: false,
      default: {},
    },
  },
  data() {
    return {};
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
