<template>
  <div class="news">
    <div class="news-banner">
      <img src="@/assets/new-detail/new-detail-banner.png" alt="">
    </div>
    <my-section :title="detail.title" :routerConfig="detail.routerConfig">
      <div class="news-main">
        <section class="news-main__section" @click="goDetail(item)" v-for="(item,index) in list" :key="index">
          <img class="news-main__section-img" v-if="item.isImage" :src="item.avatarSrc" alt="">
          <div class="news-main__section-main">
            <div class="section-main__top">
              <a href="javascript:;">{{item.title}}</a>
              <span style="text-align:right">{{item.gtmCreate}}</span>
            </div>
            <a href="javascript:;" class="section-main__content">{{item.content}}</a>
          </div>
        </section>
      </div>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </my-section>
  </div>
</template>
<script>
import { getOpenList } from "@/http/api";
import MySection from "@/components/section";
export default {
  components: {
    MySection
  },
  data() {
    return {
      detail: {
        title: "公司新闻",
        routerConfig: {
          title: "新闻发布>公司新闻",
          path: "/news"
        }
      },
      currentPage: 0,
      total: 400,
      pageSize: 10,
      list: []
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
        goDetail(item){
      this.$router.push({name:'newDetail',query:{
        cid:item.cid
      }})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async fetchList() {
      const { date } = await getOpenList();
      this.currentPage = date.page;
      this.total = date.total;
      this.list = date.rows;
      console.log(date);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.news .content {
  width: 920px;
}
.news a:hover {
  color: #d62522;
}
.news-banner {
  width: 100%;
  height: 396px;
}
.news-banner img {
  display: block;
  width: 100%;
  height: 396px;
}
.news-main {
  font-size: 16px;
  color: #666666;
  padding-bottom: 30px;
  text-align: center;
}
.news-main__section {
  display: flex;
  padding-bottom: 36px;
    padding-top: 30px;
  border-bottom: 1px solid #e8e8e8;
}
.news-main__section-img {
  display: block;
  width: 270px;
  height: 174px;
  margin-right: 25px;
}
.news-main__section-main {
  flex: 1;
  color: #828282;
}
.section-main__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #828282;
  margin-bottom: 20px;
}
.section-main__top a {
  font-weight: bold;
  font-size: 20px;
  color: #333;
  line-height: 1.4;
  
  text-align: left;
}

.section-main__top span {
  font-size: 16px;
  width: 120px;
  margin-bottom: 4px;
  margin-left: 40px;
}
.section-main__content {
  font-size: 18px;
  line-height: 26px;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #828282;
}
.section-main__content:hover {
  text-decoration: underline;
}
.pagination {
  text-align: center;
  margin-bottom: 60px;
}
.pagination .el-pager li.active,
.pagination .el-pager li:hover,
.pagination .el-pagination button:hover {
  color: #d62522;
}
</style>
