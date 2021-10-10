<template>
  <div
    class="container"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
  >
    <form-item v-for="item in filmList" filmType="nowPlaying" :key="item.filmId" :filmInfo="item">
    </form-item>
    <div v-show="loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      <span>加载更多......</span>
    </div>
    <div class="noMore" v-show="noMore">
      <span>别拉了，到底了.......</span>
    </div>
  </div>
</template>

<script>
import formItem from "@/components/formItem";
import { getFilmList } from "@/api/film";

export default {
  name:'NowPlaying',
   components: {
    formItem,
  },
  data() {
    return {
      filmList: [],
      loading: false, //数据加载更多
      pageSize: 10, // 每页加载数量
      pageNum: 0, //页数
      totalPages: 1, //总的页数
      noMore: false, //是否有更多
    };
  },
 
  methods: {
    loadMore() {
     
      if (this.pageNum >= this.totalPages) {
        this.noMore = true;
        return;
      }
      this.loading = true;
      this.pageNum++;
      setTimeout(() => {
        getFilmList({
          cityId: 440300,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 1,
          k: 2196972,
        }).then((response) => {
          let res = response.data;
          console.log(res);
          if (res.status === 0) {
            this.filmList = [...this.filmList, ...res.data.films];
            this.totalPages = Math.ceil(res.data.total / this.pageSize);
            this.loading = false;
          }
        });
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
