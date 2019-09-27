<template>
  <div id="app">
    <my-header></my-header>
      <router-view/>
    <footer>
      <div class="section">
        <p>北京市海淀区阜成路73号裕惠大厦A座8层</p>
        <p>邮箱：news@chinatowercom.cn</p>
      </div>
      <div class="section">
        <p>Copyright©2018中国铁塔股份有限公司 版权所有</p>
      </div>
      <div class="section" style="margin-top:20px;"><p>京ICP备14039488号</p></div>
    </footer>
  </div>
</template>

<script>
import MyHeader from '@/components/header'
export default {
  name: 'App',
  components:{
    MyHeader
  },
  methods:{},
  mounted(){
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
  min-width: 1275px;
}

footer {
  width: 100%;
  height: 130px;
  background: #828282;
  font-size: 16px;
  color: #fff;
  overflow: hidden;
}
footer .section {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center

}
footer p {
  margin: 0 25px;
}
</style>
