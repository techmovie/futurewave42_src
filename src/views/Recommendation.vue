<template>
  <div class="wrapper row2">
    <section id="references" class="hoc container clear">
      <div class="sectiontitle">
        <h6 class="heading">作品推荐<br />Recommandation</h6>
      </div>
      <ul class="nospace group ref-img">
        <li
          v-for="(book, index) in books"
          :key="index"
          class="one_third uk-text-center"
        >
          <a class="imgover" href="#"><img :src="book.image" alt="" /></a>
          <p>{{ book.name }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  data() {
    return {
      books: [
        {
          id: 0,
          name: "nexhuman",
          image: "/assets/images/books/nexhuman.jpeg",
        },
      ],
    };
  },
};
</script>
