<template>
  <!-- for transparent effect -->
  <div
    class="bgded overlay"
    style="
      background-image: url('/assets/images/background/2001_space_odessey_1.jpg');
    "
  >
    <CommonHead></CommonHead>

    <router-view />
  </div>
  <CommonFooter></CommonFooter>
</template>

<script>
import CommonHead from "./components/CommonHead.vue";
import CommonFooter from "./components/CommonFooter.vue";
export default {
  name: "App",
  components: {
    CommonHead,
    CommonFooter,
  },
};
</script>

<style>
</style>
