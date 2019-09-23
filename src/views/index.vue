<template>
  <div class="index">
    <index-banner :newsInfo='newsInfo'></index-banner>
    <my-section :title="product.title" :routerConfig="product.routerConfig">
      <div class="index-product">
        <div class="index-product-item">
          <div class="index-product-item__wrap">
            <img src="" alt="">
            <div class="line"></div>
          </div>
        </div>
      </div>
    </my-section>
    <my-section :title="about.title" :routerConfig="about.routerConfig">
      <div class="index-about">
        <div class="index-about__wrap">
          <div class="video">
            <video width="455" height="255" controls preload="auto" poster="@/assets/icon-logo.png">
              <source
                :src="aboutInfo.url"
                type="video/mp4"
              >
            </video>
          </div>
          <div class="index-about__content">
            <img src="@/assets/icon-logo.png" class="index-about__logo">
            <p>
              {{aboutInfo.desc}}
            </p>
          </div>
        </div>
      </div>
    </my-section>
  </div>
</template>

<script>
import { getAbout, getOpenListIndex } from "@/http/api";
import IndexBanner from "@/components/index-banner";
import MySection from "@/components/section";
export default {
  components: {
    IndexBanner,
    MySection
  },
  data() {
    return {
      product: {
        title: "产品与业务",
        routerConfig: {
          title: "更多>",
          path: "/product"
        }
      },
      about: {
        title: "关于我们",
        routerConfig: {
          title: "更多>",
          path: "/about"
        }
      },
      aboutInfo: null,
      newsInfo: []
    };
  },
  mounted() {
    this.fetchNews();
    this.fetchAbout();
  },
  methods: {
    async fetchNews() {
      const { date } = await getOpenListIndex();
      this.newsInfo = date;
    },
    async fetchAbout() {
      const { date } = await getAbout();
      this.aboutInfo = date;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-about {
  padding: 50px 0 40px 0;
}
.index-about__wrap {
  background: #f4f4f4;
  padding: 40px 38px;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.index-about__wrap .video {
  height: 255px;
  width: 452px;
  margin-right: 70px;
}
.index-about__wrap .main {
  flex: 1;
  height: 100%;
}
.index-about__logo {
  margin-bottom: 30px;
}
.index-about__content {
  font-size: 14px;
  color: #828282;
  line-height: 1.4;
  width: 360px;
  padding-top: 20px;
}
</style>
