<template>
  <div class="container">
    <mt-header title="当前城市-">
      <i slot="left" class="iconfont icon-close" @click="goBack"></i>
    </mt-header>
    <mt-search v-model="value" placeholder="输入城市名或拼音"></mt-search>
    <div class="main">
       <div class="left">
        <div class="hotcitys">
          <p>热门城市</p>
          <ul>
            <li>深圳</li>
            <li>上海</li>
            <li>北京</li>
            <li>天津</li>
          </ul>
        </div>
        <p>A</p>
        <ul>
          <li>安徽</li>
          <li>安徽</li>
          <li>安徽</li>
          <li>安徽</li>
          <li>安徽</li>
        </ul>
        <p>B</p>
        <ul>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
        </ul>
        <p>C</p>
        <ul>
          <li>常德</li>
          <li>常德</li>
          <li>常德</li>
          <li>常德</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/iconfont.css";
import cityList from "../api/city.js";
export default {
  name: "City",
  data() {
    return {
      value:"",
      cities:[]
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.back();
    },
    created() {
      cityList().then((response) => {
        let res = response.data;
        // console.log(res );
        this.cities = res.data.cities;
      });
    },
  },
};
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .mint-header {
    position:fixed;
    z-index:999;
    width:100%;
    height:44px;
    background: #fff;
    color: black;
    font-size: 18px;
  }
  .iconfont {
    font-size: 24px;
    color: #000;
  }
  .mint-search {
    position:fixed;
    width: 100%;
    top:44px;
    z-index:9999;
    height: auto;
  }
  .main {
    flex: 1;
    width:100%;
    position:relative;
  margin-top:85px;
  padding-top:14px;;
    display: flex;
    overflow: hidden;
    .left {
      flex: 1;
      overflow-y: auto;
      .hotcitys{
        margin-top:10px;
      }
      p {
        padding-left: 10px;
        background-color: #b3b9c0;
        height: 30px;
        line-height: 30px;
      }
      li {
        margin-left: 20px;
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid rgb(216, 191, 191);
      }
    }
    .right {
      display: flex;
      align-items: center; 
      width: 18px;
      li{
        width:18px;
        height:18px;
        text-align: center;
      }
    }
  }
}
</style>
