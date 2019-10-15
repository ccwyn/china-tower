<template>
  <div class="product">
    <div class="product-banner">
      <img src="@/assets/product/product-banner.png" alt="">
    </div>
    <my-section :title="product.title" :routerConfig="product.routerConfig">
      <div class="product-main">
        <p>为满足客户在备电、发电、换电、储能等方面的需求，公司充分发挥资源与能力优势，向客户提供标准化的能源产品及专业化的能源服务。</p>
        <div class="product-tab">
          <a
            href="javascript:;"
            :class="{'tab-active':currentTab===index}"
            @click="changeTab(index)"
            class="product-tab__item"
            v-for="(item, index) in tabs"
            :key="index"
          >
            <img src="../assets/product/tab-active-arrow.png" v-if="currentTab===index" style="margin-right:4px;" alt="">
            <img src="../assets/product/tab-arrow.png" v-else style="margin-right:4px;" alt="">
            {{item}}
          </a>
        </div>
        <div class="product-tab-main" v-if="currentTab === 0">
          <div class="tab-item">
            <div class="tab-item__title">备电业务</div>
            <p
              class="tab-item__text"
            >基于成熟的通信基站电力保障方案，利用锂电池和智能监控系统等产品，为客户提供不间断供电综合解决方案。</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">产品介绍</div>
            <div class="tab-item__main">
              <img src="../assets/product/beidian.png" class="beidian-img" alt="">
              <p class="tab-text-wrap">
                <span class="tab-text-wrap__item mbd">锂电池组</span>
                <span class="tab-text-wrap__item mbd">监控单元</span>
                <span class="tab-text-wrap__item mbd">运营平台</span>
              </p>
            </div>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">我们的优势</div>
            <p class="tab-item__text"><i class="i"></i>模块化设计、高效节能、安全稳定</p>
            <p class="tab-item__text"><i class="i"></i>环境适应能力强，不同场景自由组合</p>
            <p class="tab-item__text"><i class="i"></i>远程监控市电情况、运行状态、电池电量、故障告警等信息，助力客户实现可视、可管、可控</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">服务模式</div>
            <p class="tab-item__text" style="margin-bottom:10px;">租凭模式：我公司向客户提供备电服务综合解决方案，进行设备采购、建设、交付、维护及智能监控等服务，还可根据客户需求提供配套的应急发电服务。</p>
            <p class="tab-item__text">集成模式：我公司向客户提供系统集成、维护及智能监控等服务，还可根据客户需求提供配套的应急发电服务。求提供配套的应急发电服务。</p>
          </div>
        </div>
        <div class="product-tab-main" v-if="currentTab === 1">
          <div class="tab-item">
            <div class="tab-item__title">发电业务</div>
            <p
              class="tab-item__text"
            >以便携式锂电池组为载体，快速响应客户的紧急用电需求，主要面向金融网点、商超餐饮、电动汽车等群体，提供专业化、规范化、快捷化的静音发电和道路应急充电等服务。</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">产品介绍</div>
            <div class="tab-item__main">
              <img src="../assets/product/fadian.png"  class="fadian-img" alt="">
              <p class="tab-text-wrap">
                <span class="tab-text-wrap__item mfd">便携式发电设备</span>
                <span class="tab-text-wrap__item mfd">小型移动发电车</span>
                <span class="tab-text-wrap__item mfd">大型移动发电车</span>
              </p>
            </div>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">我们的优势</div>
            <p class="tab-item__text"><i class="i"></i>客户可根据自身需求灵活选择不同容量、不同类型的交直流发电设备</p>
            <p class="tab-item__text"><i class="i"></i>为客户提供互联网化的智能充发电解决方案，快速高效满足客户需求</p>
            <p class="tab-item__text"><i class="i"></i>与传统油机相比具有明显的静音、环保、安全、低成本等优势</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">服务模式</div>
            <p class="tab-item__text" style="margin-bottom:10px;">包干模式：根据客户需求采用包干模式快速满足客户的充电和发电需求。</p>
            <p class="tab-item__text">按次模式：按次为客户提供充发电服务，收取出车费、发电费等。</p>
          </div>
        </div>
        <div class="product-tab-main" v-if="currentTab === 2">
          <div class="tab-item">
            <div class="tab-item__title">换电业务</div>
            <p
              class="tab-item__text"
            >　　以标准锂电池为载体，面向物流及外卖骑手提供低速电动车动力电池的换电服务。</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">产品介绍</div>
            <div class="tab-item__main">
              <img src="../assets/product/huandian.png"  class="huandian-img" alt="">
              <p class="tab-text-wrap">
                <span class="tab-text-wrap__item mhd">智能锂电池</span>
                <span class="tab-text-wrap__item mhd">智能换电池</span>
                <span class="tab-text-wrap__item mhd">客户APP</span>
              </p>
            </div>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">我们的优势</div>
            <p class="tab-item__text"><i class="i"></i>简单易用-下载APP，即刻拿走电池，开启您的飞驰之旅</p>
            <p class="tab-item__text"><i class="i"></i>方便快捷-站点多，换电快，不限次数，无限续航</p>
            <p class="tab-item__text"><i class="i"></i>智能安全-智能锂电，自动定位，故障预警，防水防爆不怕丢</p>
            <p class="tab-item__text"><i class="i"></i>值得信赖-上市央企，产品可靠，服务优质，您身边的换电专家</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">服务模式</div>
            <p class="tab-item__text" style="margin-bottom:10px;">换电模式：我公司提供锂电池、换电柜和换电平台，为客户提供换电服</p>
            <p class="tab-item__text">租凭模式：我公司提供锂电池等产品，租赁给客户，客户自行充电。</p>
          </div>
        </div>
        <div class="product-tab-main" v-if="currentTab === 3">
          <div class="tab-item">
            <div class="tab-item__title">售电业务</div>
            <p
              class="tab-item__text"
            >为用户提供储能系统，在电价谷值时段电池储存电能，电价峰值时段停止使用市电并通过电池向客户供电。建设光伏、风力发电新能源系统，利用太阳能和风力资源，向客户提供新能源系统集成或售电服务。</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">产品介绍</div>
            <div class="tab-item__main">
              <img src="../assets/product/shoudian.png"  class="shoudian-img" alt="">
              <p class="tab-text-wrap">
                <span class="tab-text-wrap__item msd">储能集装箱</span>
                <span class="tab-text-wrap__item msd">光伏控制器</span>
                <span class="tab-text-wrap__item msd">储能电源</span>
                <span class="tab-text-wrap__item msd">储能用锂电池组</span>
              </p>
            </div>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">我们的优势</div>
            <p class="tab-item__text"><i class="i"></i>模块化设计：无缝切换的并/离网运行模式、支持多种分布式能源接入</p>
            <p class="tab-item__text"><i class="i"></i>实时监控：监测设备运行状态、故障报警等信息，保障系统安全运行</p>
            <p class="tab-item__text"><i class="i"></i>多元化功能：可实现削峰填谷、动态增容、辅助调频、应急供电、能量调度等多种功能</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">服务模式</div>
            <p class="tab-item__text" style="margin-bottom:10px;">削峰填谷：我公司在客户侧部署储能系统，利用分时电价政策，在电价谷值时段电池储存电能，电价峰值时段停止使用市电并通过电池向客户供电。</p>
            <p class="tab-item__text">风光新能源：我公司在光照和风力条件较好的地区建设光伏、风力新能源系统，利用太阳能和风力资源，向客户提供新能源系统集成或售电服务。</p>
          </div>
        </div>
        <div class="product-tab-main" v-if="currentTab === 4">
          <div class="tab-item">
            <div class="tab-item__title">回收业务</div>
            <p
              class="tab-item__text">通过建设覆盖全国的动力电池回收体系，开展动力电池的回收与梯次利用工作，对动力电池进行全生 命周期溯源管理，成为国家循环经济的主力军。</p>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">回收流程</div>
            <div class="tab-item__main">
              <p class="tab-item__text">按次模式：按次为客户提供充发电服务，收取出车费、发电费等。</p>
              <img class="huishou-img" src="../assets/product/huishou.png" alt="">
            </div>
          </div>
          <div class="tab-item">
            <div class="tab-item__title">行业成就</div>
            <p class="tab-item__text"><i class="i"></i>2018年1月4日，中国汽车动力电池产业联盟回收利用分会在京成立，大会选举中国铁塔股份有限公司为回收利用分会理事长单位。</p>
            <p class="tab-item__text"><i class="i"></i>2018年10月31日，中国铁塔在京主持召开新能源汽车动力电池回收利用体系建设论坛。</p>
          </div>
          <!-- <div class="tab-item">
            <div class="tab-item__title">合作伙伴</div>
            <div style="margin:50px 0;width:920px;">
                    <svg-icon icon-class="hezuo-title"  class-name="hezuo-title-img"></svg-icon>
              <p class="tab-item__text" style="text-align:center;margin-top:24px;">按次模式：按次为客户提供充发电服务，收取出车费、发电费等。</p>
            </div>
            <img class="hezuo-img" src="../assets/product/hezuo.png" alt="">
          </div> -->
        </div>
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
      product: {
        title: "产品与服务",
        routerConfig: {
          title: "产品与服务>回收业务",
          path: "/product"
        }
      },
      tabs: ["备电业务", "发电业务", "换电业务", "售电业务", "回收业务"],
      currentTab: 0
    };
  },
  mounted(){
    this.currentTab = parseInt(this.$route.query.currentTab || 0)
  },
  methods: {
    changeTab(e) {
      this.currentTab = e;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.product .content {
  width: 920px;
}
.product-banner {
  width: 100%;
  height: 396px;
}
.product-banner img {
  display: block;
  width: 100%;
  height: 396px;
}
.product-main {
  font-size: 18px;
  color: #828282;
  padding: 30px 0;
   width: 762px;
}
.product-main p {
  line-height: 24px;
}
.product-main .tab-item__text {
  text-indent: 2em;
  line-height: 24px;
}
.product-img {
  margin: 50px auto 90px auto;
}
.product-tab {
  width: 762px;
  height: 41px;
  background: url("../assets/product/tab-bg.png") no-repeat center;
  background-size: 100% 100%;
  display: flex;
  margin-top: 42px;
  overflow: hidden;
}
.product-tab__item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-active {
  background: url("../assets/product/tab-active.png") no-repeat left;
  background-size: 100% 100%;
  color: #fff;
}
.tab-item {
  margin-bottom: 40px;
}
.product-tab-main {
  margin-top: 30px;
  font-size: 14px;
  color: #828282;
}
.tab-item__title {
  border-left: 3px solid #d62522;
  padding-left: 8px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}
.tab-item__text {
  line-height: 1.4;
  text-indent: 2em;
}
.tab-text-wrap {
  margin: 10px;
}
.tab-text-wrap__item {
  color: #d62522;
}
.tab-item__text .i {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d62522;
  margin-right: 6px;
}
.mbd { padding: 0 130px 0 58px;}
.mfd {  padding-right: 67px;}
.mhd {margin-right: 67px;}
.msd {padding: 0 35px 0 25px;}
.huishou-img {
  display: block;
  margin: 0 auto;
  width: 734px;
  height: 141px;
}
.hezuo-img {
  display: block;
  margin: 0 auto;
  width: 919px;
  height: 251px;
}
.hezuo-title-img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 29px;
}
.beidian-img {
  width: 656px;
}
.fadian-img {
  width: 491px;
}
.shoudian-img {
  width: 524px;
}
.huandian-img {
  width: 346px;
}
</style>
