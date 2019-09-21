<template>
  <div class="about">
    <div class="about-banner">
      <img src="@/assets/about/about-banner.png" alt="">
    </div>
    <my-section :title="about.title" :routerConfig="about.routerConfig">
      <div class="about-main">
        <p>铁塔能源有限公司为中国铁塔全资子公司，注册资本50亿元人民币，在全国各省和地市均设立分公司。</p>
        <p>铁塔能源有限公司依托中国铁塔电力保障运营经验、专业化维护能力和可视、可管、可控的智能监控系统，向社会提供多元化能源服务，致力成为世界一流的分布式能源运营商。</p>
        <img class="about-img" src="@/assets/about/about-main.png" alt="">
      </div>
    </my-section>
  </div>
</template>

<script>
import MySection from "@/components/section";
export default {
  components: {
    MySection
  },
  data() {
    return {
      about: {
        title: "公司简介",
        routerConfig: {
          title: "关于我们>公司简介",
          path: "/about"
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.about .content {
  width: 920px;
}
.about-banner {
  width: 100%;
  height: 396px;
}
.about-banner img {
  display: block;
  width: 100%;
  height: 396px;
}
.about-main {
  font-size: 18px;
  color: #828282;
  padding: 30px 0;
}
.about-main p {
  text-indent: 2em;
}
.about-img {
  margin: 50px auto 90px auto;
}
.about-main p {
  line-height: 24px;
}
</style>
