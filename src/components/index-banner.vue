<template>
<div class="index-banner">
  <div class="content index-main">
    <div class="index-main__slide">
      <div class="slide-item--title">公司新闻</div>
      <div style="height:272px">
        <a class="slide-item" @click="goDetail(item)" v-for="(item,index) in newsInfo" :key="index">{{item.title}}</a>
      </div>
      <a class="slide-item--foot" @click="goList">查看全部</a>
    </div>
    <div class="index-main__swiper">
        <el-carousel 
        :loop="true"
        height="372px"
        :interval="5000" arrow="never">
          <el-carousel-item v-for="(item,index) in newsInfo" :key="index">
            <img style="display:block;width:100%" :src="item.avatarSrc" alt="">
          </el-carousel-item>
        </el-carousel>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "indexBanner",
  props:['newsInfo'],

  data() {
    return {

    };
  },
  methods:{
    goDetail(item){
      this.$router.push({name:'newDetail',query:{
        cid:item.cid
      }})
    },
    goList(item){
      this.$router.push({name:'news'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-banner{
  height: 432px;
  background: #f4f4f4;
  box-sizing: border-box;
  padding: 30px 0;

}
.index-main {
  display: flex;
  height: 432px;
  height: 100%;
}
.index-main__slide {
  width: 238px;
  height: 100%;
  margin-right: 20px;
  box-sizing: border-box;
  background: #fff;
}
.index-main__swiper {
  flex: 1;
  width: 942;
}
.slide-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  font-size: 14px;
  color: #505050;
  padding: 15px 0;
  text-align: center;
  border-bottom: 1px solid #f7f7f7;
  box-sizing: border-box;
  background: #fff;

}
.slide-item p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding: 0 32px;
  box-sizing: border-box
}

.slide-item--foot:hover,
.slide-item:hover {
  background: #d62522;
  color: #fff;
}
.slide-item--foot{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  font-size: 14px;
  padding: 15px 0;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  color: #d62522;
  background: #fff;
}
.slide-item--title{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  font-size: 14px;
  color: #505050;
  padding: 15px 0;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  background: #d62522;
  color: #fff;
}
.slide-item--title::after{
    content: '';
    height: 0;
    width: 0;
    display: block;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #d62522;
    border-bottom-color: #d62522;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 48px;
}
.index-main__swiper /deep/ .el-carousel__indicators--horizontal{
  left: 55px;
  bottom:15px;

}
.index-main__swiper /deep/ .el-carousel__button{
  height: 5px;
}
.index-main__swiper /deep/ .is-active .el-carousel__button{
  background: #d62522;
}
</style>
