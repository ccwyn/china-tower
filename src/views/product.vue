<template>
  <div class="product">
    <div class="product-banner">
      <img src="@/assets/product/product-banner.png" alt="">
    </div>
    <my-section :title="product.title" :routerConfig="product.routerConfig">
      <div class="product-main">
        <p>为满足客户在备电、发电、换电、储能等方面的需求，公司充分发挥资源与能力优势，向客户提供标准化的能源产品及专业化的能源服务。</p>
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
      }
    };
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
}
.product-main p {
  text-indent: 2em;
   line-height: 24px;
}
.product-img {
  margin: 50px auto 90px auto;
}

</style>
