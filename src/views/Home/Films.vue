<template>
  <div class="container">
    <swiper class="swiper" :slides="bannerList"></swiper>
    <tabbar v-model="curTabIndex" :tabs="['正在热映', '即将上映']"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from "@/components/swiper.vue";
import Tabbar from "@/components/tabBar.vue";
import { getBannerList } from "@/api/film";

export default {
  name: "Films",

  components: {
    Swiper,
    Tabbar,
    // getBannerList,
    // getFilmList
  },
  data() {
    return {
      bannerList: [],
      curTabIndex: this.$route.name === "nowPlaying" ? 0 : 1,
    };
  },
  watch: {
    curTabIndex(newVal) {
      let name = newVal === 0 ? "nowPlaying" : "comingSoon";
      this.$router.replace({ name });
    },
  },

  created() {
    getBannerList({
      type: 2,
      cityId: 440300,
      k: 1506931,
    }).then((response) => {
      let res = response.data;
      if (res.status === 0) {
        this.bannerList = res.data.map((item) => item.imgUrl);
      }
    });
  },
};
</script>
<style scoped lang="scss">
</style>
