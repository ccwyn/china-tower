<template>
  <div class="index">
    <index-banner :newsInfo="newsInfo"></index-banner>
    <my-section :title="product.title" :routerConfig="product.routerConfig">
      <div class="index-product">
        <a class="index-product-item" @click="goProduct(0)">
          <div class="index-product-item__top">
            <img src="../assets/index/index-product-1.png" alt="">
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>备电业务</span>
          </div>
        </a>
        <a class="index-product-item" @click="goProduct(1)">
          <div class="index-product-item__top">
            <img src="../assets/index/index-product-2.png" alt="">
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>发电业务</span>
          </div>
        </a>
        <a class="index-product-item" @click="goProduct(2)">
          <div class="index-product-item__top">
            <img src="../assets/index/index-product-3.png" alt="">
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>换电业务</span>
          </div>
        </a>
        <a class="index-product-item" @click="goProduct(3)">
          <div class="index-product-item__top">
            <img src="../assets/index/index-product-4.png" alt="">
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>售电业务</span>
          </div>
        </a>
        <a class="index-product-item" @click="goProduct(4)">
          <div class="index-product-item__top">
            <img src="../assets/index/index-product-5.png" alt="">
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>回收业务</span>
          </div>
        </a>
      </div>
    </my-section>
    <my-section :title="about.title" :routerConfig="about.routerConfig">
      <div class="index-about" v-if="aboutInfo">
        <div class="index-about__wrap">
          <div class="video">
            <video width="455" height="255" controls preload="auto" poster="@/assets/icon-logo.png">
              <source :src="aboutInfo.url" type="video/mp4">
            </video>
          </div>
          <div class="index-about__content">
            <img src="@/assets/icon-logo.png" class="index-about__logo">
            <p>{{aboutInfo.desc}}</p>
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
    },
    goProduct(currentTab){
      this.$router.push({name:'product',query:{currentTab:currentTab}})
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
.index-product {
  padding: 45px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.index-product-item {
  background: #fafafa;
  display: block;
  height: 245px;
  width: 188px;
  box-sizing: border-box;
  margin: 0 20px;
  overflow: hidden;
  border-top: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-bottom: 2px solid #e70008;
}
.index-product-item__top {
  height: 152px;
  border-bottom: 2px solid #e6e6e6;
  padding-top: 35px;
  box-sizing: border-box;
  position: relative;
}
.index-product-item__top img {
  display: block;
  margin: 0 auto;
}
.index-product-item__top .line {
  width: 30px;
  height: 2px;
  background: #fafafa;
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.index-product-item__top .line span {
  display: block;
  width: 15px;
  height: 2px;
  background: #d70c19;
  margin: 0 auto;
}
.index-product-item__bottom {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
