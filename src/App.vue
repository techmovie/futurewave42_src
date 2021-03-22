<template>
  <!-- for transparent effect -->

  <CommonHead></CommonHead>

  <router-view />

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
