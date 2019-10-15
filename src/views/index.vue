<template>
  <div class="index">
    <index-banner :newsInfo="newsInfo"></index-banner>
    <my-section :title="product.title" :routerConfig="product.routerConfig">
      <div class="index-product">
        <a class="index-product-item bd1" @mouseenter="enter=1" @mouseleave="enter=0" @click="goProduct(0)">
          <div class="index-product-item__top">
            <!-- <img src="../assets/index/index-product-1.png" alt=""> -->
            <svg-icon icon-class="index-product-1"  class-name="icon-svg icon-svg1"></svg-icon>
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>备电业务</span>
          </div>
          <div class="mouseenter bg1" v-if="enter===1">
            <div class="mouseenter__top">
              <!-- <img src="../assets/index/index-product-enter-1.png" alt=""> -->
              <svg-icon icon-class="index-product-enter-1"  class-name="icon-svg icon-svg1"></svg-icon>
            </div>
            <div class="mouseenter__main">
              基于成熟的通信基站电力保障方案，利用锂电池和智能监控系统等产品，为客户提供不间断供电综合解决方案。
            </div>
          </div>
        </a>
        <a class="index-product-item bd2" @mouseenter="enter=2" @mouseleave="enter=0" @click="goProduct(1)">
          <div class="index-product-item__top">
            <!-- <img src="../assets/index/index-product-2.png" alt=""> -->
           <svg-icon icon-class="index-product-2"  class-name="icon-svg icon-svg2"></svg-icon>

            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>发电业务</span>
          </div>
          <div class="mouseenter bg2" v-if="enter===2">
            <div class="mouseenter__top">
              <!-- <img src="../assets/index/index-product-enter-2.png" alt=""> -->
                         <svg-icon icon-class="index-product-enter-2"  class-name="icon-svg icon-svg2"></svg-icon>

            </div>
            <div class="mouseenter__main">
              以便携式锂电池组为载体，快速响应客户的紧急用电需求，主要面向金融网点、商超餐饮、电动汽车等群体，提供专业…
            </div>
          </div>
        </a>
        <a class="index-product-item bd3"  @mouseenter="enter=3" @mouseleave="enter=0" @click="goProduct(2)">
          <div class="index-product-item__top">
            <!-- <img src="../assets/index/index-product-3.png" alt=""> -->
                       <svg-icon icon-class="index-product-3"  class-name="icon-svg icon-svg3"></svg-icon>

            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>换电业务</span>
          </div>
          <div class="mouseenter bg3" v-if="enter===3">
            <div class="mouseenter__top">
                      <svg-icon icon-class="index-product-enter-3"  class-name="icon-svg icon-svg3"></svg-icon>

              <!-- <img src="../assets/index/index-product-enter-3.png" alt=""> -->
            </div>
            <div class="mouseenter__main">
              以标准锂电池为载体，面向物流及外卖骑手提供低速电动车动力电池的换电服务。
            </div>
          </div>
        </a>
        <a class="index-product-item bd4"  @mouseenter="enter=4" @mouseleave="enter=0" @click="goProduct(3)">
          <div class="index-product-item__top">
            <!-- <img src="../assets/index/index-product-4.png" alt=""> -->
                       <svg-icon icon-class="index-product-4"  class-name="icon-svg icon-svg4"></svg-icon>

            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>售电业务</span>
          </div>
          <div class="mouseenter bg4"  v-if="enter===4">
            <div class="mouseenter__top">
           <svg-icon icon-class="index-product-enter-4"  class-name="icon-svg icon-svg4"></svg-icon>

              <!-- <img src="../assets/index/index-product-enter-4.png" alt=""> -->
            </div>
            <div class="mouseenter__main">
              为用户提供储能系统，在电价谷值时段电池储存电能，电价峰值时段停止使用市电并通过电池向客户供电。建设光伏…
            </div>
          </div>
        </a>
        <a class="index-product-item bd5"  @mouseenter="enter=5" @mouseleave="enter=0" @click="goProduct(4)">
          <div class="index-product-item__top">
            <!-- <img src="../assets/index/index-product-5.png" alt=""> -->
                       <svg-icon icon-class="index-product-5"  class-name="icon-svg icon-svg5"></svg-icon>

            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="index-product-item__bottom">
            <img style="margin-right:4px" src="../assets/index/index-product-arr.png" alt="">
            <span>回收业务</span>
          </div>
          <div class="mouseenter bg5" v-if="enter===5">
            <div class="mouseenter__top">
                         <svg-icon icon-class="index-product-enter-5"  class-name="icon-svg icon-svg5"></svg-icon>

              <!-- <img src="../assets/index/index-product-enter-5.png" alt=""> -->
            </div>
            <div class="mouseenter__main">
              通过建设覆盖全国的动力电池回收体系，开展动力电池的回收与梯次利用工作，对动力电池进行全生 命周期溯源管理…
            </div>
          </div>
        </a>
      </div>
    </my-section>
    <my-section :title="about.title" :routerConfig="about.routerConfig">
      <div class="index-about" v-if="aboutInfo">
        <div class="index-about__wrap">
          <div class="video">
            <video width="455" height="255" controls preload="auto" :poster="aboutInfo.poster">
              <source :src="aboutInfo.url" type="video/mp4">
            </video>
          </div>
          <div class="index-about__content">
            <!-- <img src="@/assets/icon-logo.png" class="index-about__logo"> -->
            <svg-icon icon-class="video-logo"  class-name="index-about__logo"></svg-icon>
            <p v-html="aboutInfo.desc" ></p>
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
      newsInfo: [],
      enter:0
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

      date.desc =   date.desc.replace(/\s\s\s\s/g,'<br>')
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
  width:146px;
  height:67px;
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
  position: relative;
}
.index-product-item__top {
  height: 152px;
  border-bottom: 2px solid #e6e6e6;
  padding-top: 35px;
  box-sizing: border-box;
  position: relative;
}
.icon-svg {
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
  background: #d62522;
  margin: 0 auto;
}
.index-product-item__bottom {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mouseenter {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: #fff;
  top: 0;
  left: 0;
}
.mouseenter__top {
  padding-top: 35px;
  box-sizing: border-box;
}
.mouseenter__top img {
  display: block;
  margin: 0 auto;
}
.mouseenter__main {
  font-size: 14px;
  padding: 0 5px;
  box-sizing: border-box;
  margin-top: 18px;
  letter-spacing:2px;
  line-height: 1.4
}
.bg1{background: #d62522;}
.bg2{background: #80c500;}
.bg3{background: #ff9300;}
.bg4{background: #006abc;}
.bg5{background: #d31a16;}
.icon-svg1{width:68px;height:75px}
.icon-svg2{width:77px;height:77px}
.icon-svg3{width:70px;height:70px}
.icon-svg4{width:77px;height:77px}
.icon-svg5{width:80px;height:77px}
.bd1{border-bottom: 2px solid #d62522;}
.bd2{border-bottom: 2px solid #80c500;}
.bd3{border-bottom: 2px solid #ff9300;}
.bd4{border-bottom: 2px solid #006abc;}
.bd5{border-bottom: 2px solid #d31a16;}
</style>
