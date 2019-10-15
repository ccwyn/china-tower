<template>
  <div>
    <div class="content">
      <svg-icon icon-class="iconLogo"  class-name="logo"></svg-icon>
      <div class="nav">
        <div
          class="nav-item"
          :class="{'nav-item--active': curName===item.name}"
          @click="changeRoute"
          v-for="(item,index) in menu"
          :key="index"
        >
          <router-link :to="item.path">{{item.title}}</router-link>
        </div>
      </div>
      <div class="nav-right">
        <svg-icon icon-class="icon-call"  class-name="icon-call"></svg-icon>
        <span>客服热线：10096</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myheader",
  data() {
    return {
      curName: "index",
      menu: [
        {
          title: "首页",
          path: "/index",
          name: "index"
        },
        {
          title: "关于我们",
          path: "/about",
          name: "about"
        },
        {
          title: "产品与服务",
          path: "/product",
          name: "product"
        },
        {
          title: "新闻发布",
          path: "/news",
          name: "news"
        }
      ]
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "changeRoute"
  },
  mounted(){
    this.changeRoute()
  },
  methods: {
    changeRoute() {

      this.curName = this.$route.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 85px;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.05);
}
.content {
  overflow: hidden;
}
.logo {
  display: inline-block;
  vertical-align: middle;
  margin-right: 40px;
  width:155px;
  height:80px;
}
.nav {
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  height: 85px;
}
.nav-item {
  display: inline-block;
  font-size: 16px;
  color: #333;
  width: 130px;
  position: relative;
  text-align: center;
}
.nav-item a {
  display: block;
  height: 100%;
  text-align: center;
  line-height: 85px;
  font-weight: bold;
}
.nav-item--active a{
  color: #d62522;
}
.nav-item--active::after {
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #d62522;
}
.nav-right {
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  height: 85px;
}
.nav-right img {
  margin-right: 5px;
}
.nav-right span {
  font-size: 16px;
  text-align: right;
  line-height: 30px;
  float: left;
  color: #c4382d;
}
.icon-call {
  width:30px;
  height:30px;
}
</style>
