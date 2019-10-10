<template>
  <div class="new-detail">
     <div class="new-detail-banner">
      <img src="@/assets/new-detail/new-detail-banner.png" alt="">
    </div>
    <my-section
    :title="detail.title"
    :routerConfig="detail.routerConfig">
      <div class="new-detail-main" v-if="detailInfo">
        <h3 class="new-detail__title">
          {{detailInfo.title}} 
        </h3>
        <div class="new-detail__des">
          <span>来源：铁塔能源</span>
          <span>发布时间：{{detailInfo.gtmCreate}}</span>
        </div>
        <img v-if="detailInfo.isImage" style="margin-bottom:36px" :src="detailInfo.avatarSrc" alt="">
        <div class="new-detail__content" v-html="detailInfo.content">
        </div>
      </div>
    </my-section>
  </div>
</template>
<script>
import MySection from "@/components/section";
import {getNewsDetail} from '@/http/api'
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
      detailInfo:null
    }
  },
  mounted(){
    this.fetchNewsDetail()
  },
  methods:{
   async fetchNewsDetail(){
     let cid = this.$route.query.cid||''
     const {date} =await getNewsDetail({cid})
     console.log(date)
     this.detailInfo =date

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
.new-detail__content p{
  line-height: 1.2

}
</style>
