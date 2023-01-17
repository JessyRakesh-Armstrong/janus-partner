<template>
  <v-navigation-drawer
    v-model="drawer"
    color="red"
    :mini-variant="miniVariant"
    :clipped="clipped"
    :floating="floating"
    :permanent="permanent"
    :right="right"
    :temporary="temporary"
    :width="width"
  >
    <v-list dense>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "About", icon: "mdi-account", to: "/about" },
        { title: "Contact", icon: "mdi-phone", to: "/contact" },
      ],
      miniVariant: false,
      right: false,
      permanent: false,
      temporary: true,
      floating: false,
      clipped: false,
      width: 300,
    };
  },
};
</script>
