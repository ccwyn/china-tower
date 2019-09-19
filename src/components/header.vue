<template>
  <header>
    <div class="content">
      <img src="@/assets/icon-logo.png" class="logo">
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
        <img src="@/assets/index/dianhua.png" alt="">
        <span>客服热线：10096</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
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
  methods: {
    changeRoute() {
      console.log(this.$route);
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
}
.nav-item--active::after {
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #d70c19;
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
</style>
