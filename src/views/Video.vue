<template>
  <div class="wrapper row2">
    <section
      id="references"
      class="hoc container clear"
    >
      <div class="sectiontitle">
        <h6 class="heading uk-text-center">相关视频
          <br>Videos
        </h6>
      </div>
      <ul class="nospace group ref-img">
        <li
          v-for="(video, index) in videoList"
          :key="index"
          class="one_third uk-text-center"
        >
          <router-link :to="'/video/'+video.id">
            <a class="imgover" href="#">
              <img
                :src="fileHost+'/'+video.image"
                class="uk-height-medium"
                alt=""
              >
            </a>
            <p>
              <span
                class="uk-text-bold uk-text-large"
              >{{ video.title }}</span>
              <br>
            </p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {videoList} from '../api'
const BASE_API = process.env.VUE_APP_BASE_API
export default {
  name: "Recommendation",
  data: ()=>{
    return {
      videoList: [],
      fileHost: `${BASE_API}/files`,
    }
  },
  created(){
    this.getVideoList();
  },
  methods: {
    getVideoList(){
      videoList().then(res=>{
        this.videoList =res.data
      })
    }
  }
};

</script>
<style scoped>
.imgover::after {
  content: '\f04b';
}
</style>
