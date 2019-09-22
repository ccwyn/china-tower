<template>
  <div class="new-detail">
     <div class="new-detail-banner">
      <img src="@/assets/new-detail/new-detail-banner.png" alt="">
    </div>
    <my-section
    :title="detail.title"
    :routerConfig="detail.routerConfig">
      <div class="new-detail-main">
        <h3 class="new-detail__title">
          中国铁塔公布2019年中期业绩业务发展保持稳健 深化共享创造价值
        </h3>
        <div class="new-detail__des">
          <span>来源：中国铁塔</span>
          <span>发布时间：中国铁塔</span>
        </div>
        <div class="new-detail__content">
          为满足客户在备电、发电、换电、储能等方面的需求，公司充分发挥资源与能力优势，</div>
      </div>
    </my-section>
  </div>
</template>
<script>
import MySection from "@/components/section";
export default {
  components:{
    MySection
  },
  data () {
    return {
      detail:{
        title:'公司新闻',
        routerConfig:{
          title: "正文>新闻发布>公司新闻",
          path: "/news"
        },
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.new-detail .content {
  width: 920px;
}
.new-detail-banner {
  width: 100%;
  height: 396px;
}
.new-detail-banner img {
  display: block;
  width: 100%;
  height: 396px;
}
.new-detail-main {
  font-size: 16px;
  color: #666666;
  padding: 30px 0;
  text-align: center;
}
.new-detail__title {
  font-size: 28px;
  color:#505050;
  line-height: 1.4;
  text-align: center
}
.new-detail__des {
  font-size: 14px;
  color: #999;
  margin-top: 20px;
  margin-bottom: 36px;
  text-align: center
}
.new-detail__des span {
  margin: 0 12px;
}

.new-detail-main img {
  display: block;
  width: 100%;
  height: auto;
}
.new-detail__content {
  text-align: left
}
</style>
