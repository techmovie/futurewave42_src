<template>
  <div class="about">
    <div class="wrapper row2">
      <section
        id="references"
        class="hoc container clear"
      >
        <!-- ################################################################################################ -->
        <div class="sectiontitle">
          <h6 class="heading uk-text-center">
            <span v-html="bookData.title"></span>
          </h6>
          <div
            class="uk-child-width-expand@s uk-grid uk-margin-large-top"
          >
            <div
              v-for="(img, index) in bookData.images"
              :key="index"
              class="uk-text-center"
            >
              <img
                class="uk-height-large uk-margin-small"
                :src="`${fileHost}/${img}`"
                alt=""
              >
            </div>
          </div>
          <div class="uk-text-center download">
            <a
              class="uk-button uk-button-secondary"
              download
              :href="`${fileHost}/${bookData.doc}`"
            >下载</a>
          </div>
          <div class="uk-padding">
            <span v-html="bookData.context"></span>
          </div>
        </div>
        <!-- ################################################################################################ -->
      </section>
    </div>
  </div>
</template>

<script>
import {bookData} from '../api'
const BASE_API = process.env.VUE_APP_BASE_API
export default {
  name: "BookDetail",
  data: ()=>{
    return {
      bookData: [],
      bookId: '',
      fileHost: `${BASE_API}/files`,
    }
  },
  created(){
    this.bookId = this.$route.params.id
    this.getBookList();
  },
  methods: {
    getBookList(){
      bookData({id:this.bookId}).then(res=>{
        this.bookData =res.data
      })
    }
  }
};
</script>
<style scoped>
.download {
  padding-top: 20px;
}
</style>
