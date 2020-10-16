<template>
  <v-app>
    <v-main width="75%">
      <router-view />
      <Navigation />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/InputMesseng";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>
 