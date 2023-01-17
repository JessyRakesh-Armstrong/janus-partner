<template>
  <v-app dark>
    <v-navigation-drawer permanent>
      <sidebar-item title="John Doe" :isProfile="true"/>
      <v-divider bold></v-divider>
      <sidebar-item  v-for="activity in activities" :key="activity" :info="activity"/>
      <sidebar-item title="Add" :addButton="true"/>
    </v-navigation-drawer>

    <!---FOOTER -->
    <v-footer :absolute="!fixed" class="d-flex justify-space-between" app>
      <span>DevInTraining</span>
      <span>Janus Partner </span>
      <span> {{ currDate }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SidebarItem from "../components/desktop/sidebarItem.vue";
import SidebarItemMobile from "../components/mobile/sidebarItemMobile.vue";
import navbar from "../components/desktop/navbar.vue";

export default {
  name: "DefaultLayout",
  components: {
    SidebarItem,
    navbar,
  },
  props: {},
  data() {
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      permanent: false,
      temporary: true,
      floating: false,
      clipped: false,
      width: 300,
      name: "Somebody Doe",
      activities: [],
      currDate: new Date().getFullYear(),
    };
  },
};
</script>
