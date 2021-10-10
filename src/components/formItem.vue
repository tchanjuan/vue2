<template>
  <div class="formItem">
    <div class="left">
      <img :src="filmInfo.poster" alt="" />
    </div>
    <div class="center">
      <h2 class="title">{{ filmInfo.name }}</h2>
      <p>观众评分：{{ filmInfo.grade }}</p>
      <p>主演：{{ filmInfo.actors | formatActors }}</p>
      <p>{{ filmInfo.nation }} | {{ filmInfo.runtime }}分钟</p>
    </div>
    <div class="right">
      <button class="buy" v-show="filmType==='nowPlaying'">购票</button>
      <button class="buy" v-show="filmType==='comingSoon'">预购</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmItem",
  props: {
    filmInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    //影片类型选择：nowpalying comingSoon
    filmType: {
      validator(value) {
        return ["nowPlaying", "comingSoon"].indexOf(value) !== -1;
      },
    },
  },

  filters: {
    formatActors(value) {
      console.log(value);
      let tmp = value.map((item) => item.name);
      return tmp.join("、");
    },
  },

  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss">
.formItem {
  display: flex;
  margin-top: 16px;
  flex-shrink: 0;
  margin-left: 17px;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  img {
    width: 66px;
    height: 93px;
  }
  .center {
    margin-left: 17px;
    flex: 1;
    width: 0;
    .title {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      height: 22px;
    }
    p {
      line-height: 25px;
      height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .right{
    margin-left: 20px;
    margin-right: 14px;
    color: #ff5f16;
    font-size: 13px;
    position: relative;
    width: 50px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    .buy{
      background-color: #fff;
      border:none;
      color:#ff5f16;
    }
   
    &::after {
      content: "";
      position: absolute;
      transform: scale(0.5);
      border: 1px solid #ff5f16;
      border-radius: 4px;
      left: -50%;
      bottom: -50%;
      top: -50%;
      right: -50%;
    }
  }
}
</style>
