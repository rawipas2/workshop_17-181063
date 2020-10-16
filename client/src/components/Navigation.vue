<template>
  <v-navigation-drawer 
  width="25%"
  permanent 
  right
  app
  >
    <v-list 
    dense 
    rounded>
      <v-list-item 
      v-for="menu in menus" 
      :key="menu.title" 
      link>
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    menus: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
  }),
};
</script>