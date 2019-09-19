<template>
<div class="index-banner">
  <div class="content index-main">
    <div class="index-main__slide">

    </div>
    <div class="index-main__swiper">

    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {

    };
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
  background: #000;
  margin-right: 20px;
}
.index-main__swiper {
  flex: 1;
  background: red
}
</style>
