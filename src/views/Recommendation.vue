<template>
  <div class="wrapper row2">
    <section
      id="references"
      class="hoc container clear"
    >
      <div class="sectiontitle">
        <h6 class="heading uk-text-center">作品推荐
          <br>Recommandation
        </h6>
      </div>
      <ul class="nospace group ref-img">
        <li
          v-for="(book, index) in bookList"
          :key="index"
          class="one_third uk-text-center"
        >
          <router-link
            :to="'/recommendation/'+book.id"
          >
            <a class="imgover" href="#">
              <img
                :src="fileHost+'/'+book.image"
                class="uk-height-medium"
                alt=""
              >
            </a>
            <p>
              <span
                class="uk-text-bold uk-text-large"
              >{{ book.name }}</span>
              <br>
              {{ book.author }}
              <br>
              {{ book.language}}
            </p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {artworkList} from '../api'
const BASE_API = process.env.VUE_APP_BASE_API
export default {
  name: "Recommendation",
  data: ()=>{
    return {
      bookList: [],
      fileHost: `${BASE_API}/files`,
    }
  },
  created(){
    this.getBookList();
  },
  methods: {
    getBookList(){
      artworkList().then(res=>{
        this.bookList =res.data
      })
    }
  }
};

</script>
