<template>
  <div class="wrapper row4">
    <footer id="footer" class="hoc clear">
      <div class="uk-flex uk-flex-center">
        <div class="uk-width-2-5 uk-text-center">
          <h6 class="heading">联系我们</h6>
          <div
            v-html="$store.state.config.contact"
          ></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
