<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in slides" :key="item">
        <img :src="item" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Swiper",
  props: {
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch:{
    slides(){
      this.$nextTick(()=>{
        console.log(this.$el.innerHTML)
             this.mySwiper.update()
      })
    }
  },
  mounted() {
      this.mySwiper = new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination", 
        },
        observer: true,
        autoplay: 5000,
        loop: true,
        observeParents: true,
    });
  },
};
</script>

<style scoped lang="scss">
.swiper-container {
  .swiper-wrapper {
    .swiper-slide {
      height: 210px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
