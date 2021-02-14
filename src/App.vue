<template>
  <div
    class="bgded overlay"
    style="
      background-image: url('/assets/images/backgound/2001_space_odessey_1.jpg');
    "
  >
    <CommonHead></CommonHead>
  </div>
  <router-view />
</template>

<script>
import CommonHead from "./components/CommonHead.vue";
export default {
  name: "App",
  components: {
    CommonHead,
  },
};
</script>

<style>
</style>
