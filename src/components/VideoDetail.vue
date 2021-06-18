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
            <span v-html="videoData.title"></span>
          </h6>
          <div
            class="uk-child-width-expand@s uk-grid uk-margin-large-top"
          >
            <video
              class="video-play"
              controls
              :poster="`${fileHost}/${videoData.image}`"
              :src="`${fileHost}/${videoData.video}`"
            ></video>
          </div>
          <div class="uk-text-center download">
            <a
              class="uk-button uk-button-secondary"
              download
              :href="`${fileHost}/${videoData.video}`"
            >下载</a>
          </div>
          <div class="uk-padding">
            <span v-html="videoData.context"></span>
          </div>
        </div>
        <!-- ################################################################################################ -->
      </section>
    </div>
  </div>
</template>

<script>
import {videoData} from '../api'
const BASE_API = process.env.VUE_APP_BASE_API
export default {
  name: "VideoDetail",
  data: ()=>{
    return {
      videoData: [],
      videoId: '',
      fileHost: `${BASE_API}/files`,
    }
  },
  created(){
    this.videoId = this.$route.params.id
    this.getVideoList();
  },
  methods: {
    getVideoList(){
      videoData({id:this.videoId}).then(res=>{
        this.videoData =res.data
      })
    }
  }
};
</script>
<style scoped>
.video-play {
  height: 300px;
}
.download {
  padding-top: 20px;
}
</style>
