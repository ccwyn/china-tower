<template>
  <div class="index">
    <index-banner></index-banner>
    <my-section
    :title="product.title"
    :routerConfig="product.routerConfig"></my-section>
    <my-section
    :title="about.title"
    :routerConfig="about.routerConfig">
     <div class="index-about">
       <div class="index-about__wrap">
         <div class="video">
           <video width="455" height="255" controls="" preload="auto" poster="@/assets/icon-logo.png">  
              <source src="http://120.52.40.38:1032/file/video/4c1cf72ccf424b0295295817f8e94bf4.mp4" type="video/mp4">  
          </video>
         </div>
          <div class="index-about__content">
            <img src="@/assets/icon-logo.png" class="index-about__logo">
            <p>铁塔能源有限公司为中国铁塔全资子公司，注册资本50亿元人民币，在全国各省和地市均设立分公司。
铁塔能源有限公司依托中国铁塔电力保障运营经验、专业化维护能力和可视、可管、可控的智能监控系统，向社会提供多元化能源服务，致力成为世界一流的分布式能源运营商。</p>
          </div>
       </div>
     </div>
    </my-section>
  </div>
</template>

<script>
import IndexBanner from '@/components/index-banner'
import MySection from '@/components/section'
export default {
  components:{
    IndexBanner,
    MySection
  },
  data () {
    return {
      product:{
        title:'产品与业务',
        routerConfig:{
          title: "更多>",
          path: "/product"
        },
      },
      about:{
        title:'关于我们',
        routerConfig:{
          title: "更多>",
          path: "/about"
        },
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-about {
  padding: 50px  0 40px 0;
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
  line-height:1.4;
  width: 360px;
  padding-top: 20px;

}
</style>
