<template>
<div class="section">
  <div class="content">
    <div class="section-title">
      <h3>{{title}}</h3>
      <router-link v-if="Object.keys(routerConfig).length>0" :to="routerConfig.path">{{routerConfig.title}}</router-link>
    </div>
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "mysection",
  props:{
    title:{
      type:String,
      default:''
    },
    routerConfig:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  data() {
    return {

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-title {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dddddd;
}
.section-title  h3{
  font-weight: bold;
  font-size: 24px;
  height: 100%;
  line-height: 60px;
  color: #404040;
  position: relative;
  display: inline-block;
}
.section-title h3::after{
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  background: #d62522;
}
.section-title a{
  color: #8f8f8f;
  font-weight: bold;
  font-size: 14px;

}
.section-title a:hover{

  color: #d62522;
}

.index-main {
  display: flex;
  height: 432px;
  height: 100%;
}
.index-main__slide {
  width: 238px;
  height: 100%;
  background: #000;
  margin-right: 20px;
}
.index-main__swiper {
  flex: 1;
  background: red
}
</style>
