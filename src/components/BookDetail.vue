<template>
  <div class="about">
    <div class="wrapper row2">
      <section id="references" class="hoc container clear">
        <!-- ################################################################################################ -->
        <div class="sectiontitle">
          <h6 class="heading uk-text-center">
            <span v-html="book.detail.title"></span>
          </h6>

          <div
            class="uk-child-width-expand@s uk-grid uk-margin-large-top"
          >
            <div v-for="(img, index) in book.detail.images" :key="index" class="uk-text-center">
              <img class="uk-height-large uk-margin-small" :src="img" alt="" />
            </div>
          </div>

          <div class="uk-padding">
            <span v-html="book.detail.context"></span>
          </div>

        </div>
        <!-- ################################################################################################ -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  computed: {
    book: function () {
      return this.$store.getters.getById(this.$route.params.id);
    },
  },
};
</script>