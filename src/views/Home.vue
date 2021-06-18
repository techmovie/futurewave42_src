<template>
  <div
    class="bgded overlay"
    style="
      background-image: url('/assets/images/background/2001_space_odessey_1.jpg');
    "
  >
    <div class="home">
      <div class="wrapper row1">
        <div id="pageintro" class="hoc clear">
          <article>
            <h3
              class="heading"
              style="color: white"
            >Future Wave</h3>
          </article>
          <article
            v-html="$store.state.config.home"
            id="slogan"
          ></article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
