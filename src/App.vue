<template>
  <main class="debug-screens font-Gothic">
    <navigation-bar> </navigation-bar>
    <router-view></router-view>
  </main>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "base-layout",
  components: {
    NavigationBar,
  },
};
</script>
