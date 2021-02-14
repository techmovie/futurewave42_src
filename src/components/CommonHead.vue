<template>
  <header id="header" class="hoc clear">
    <div id="logo" class="fl_left" style="height: 100px">
      <a href="index.html" style="color: white">
        <img
          src="/assets/images/logo/logo_futurewave_bianco.png"
          class="uk-height-1-1"
        />
      </a>
    </div>
    <nav id="mainav" class="fl_right">
      <ul class="clear uk-text-center">
        <li class="active">
          <router-link to="/">首页<br />Home</router-link>
        </li>
        <li>
          <router-link to="/about">公司介绍<br />About Us</router-link>
        </li>
        <li>
          <router-link to="/recommendation"
            >作品推荐<br />Recommandation</router-link
          >
        </li>
        <li>
          <a href="#">相关视频<br />Video</a>
        </li>
        <li>
          <a href="#">联系我们<br />Contect Us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "CommonHead",
};
</script>

<style scoped>
#mainav ul li {
  margin-left: 20px;
}
</style>
