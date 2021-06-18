<template>
  <div class="about">
    <div class="wrapper row2">
      <section
        id="references"
        class="hoc container clear"
      >
        <!-- ################################################################################################ -->
        <div class="sectiontitle">
          <h6 class="heading uk-text-center">公司介绍</h6>
          <div
            class="company-about"
            v-html="$store.state.config.company"
          ></div>
        </div>
        <!-- ################################################################################################ -->
      </section>
    </div>
  </div>
</template>
<style scoped>
.company-about {
  padding-top: 20px;
}
</style>


