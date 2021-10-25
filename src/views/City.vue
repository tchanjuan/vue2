<template>
  <div class="container">
    <mt-header title="当前城市-">
      <i slot="left" class="iconfont icon-close" @click="goBack"></i>
    </mt-header>
    <mt-search v-model="value" placeholder="输入城市名或拼音"></mt-search>
    <div class="main">
      <div class="left" ref="left" v-show="!value">
        <div class="hotcitys">
          <p>热门城市</p>
          <ul>
            <li v-for="city in hotcityList" :key="city.cityId">
              {{ city.name }}
            </li>
          </ul>
        </div>
        <div class="cityList" v-for="item in cityList" :key="item.py"
        :ref="`list-${item.py}`"
        >
          <p class="py">
            {{ item.py }}
          </p>
          <ul>
            <li v-for="city in item.list" :key="city.cityId">
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="py in pys" :key="py" @click="fn1(py)">{{ py }}</li>
        </ul>
      </div>
    </div>
    <div class="search" v-show="value">
      <div class="left">
        <div>
          <ul>
            <li v-for="item in searchList" :key="item.cityId">{{item.name}}</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import "../css/iconfont.css";
import getCityList from "../api/city.js";
export default {
  name: "City",
  data() {
    return {
      value: "",
      cities: [],
    };
  },
  computed: {
    //获取城市列表的排序
    cityList() {
      let result = [];
      this.cities.forEach((item) => {
        let py = item.pinyin.charAt(0).toUpperCase();
        let index = result.findIndex((city) => city.py === py);
        if (index > -1) {
          result[index].list.push(item);
        } else {
          let obj = {
            py,
            list: [item],
          };
          result.push(obj);
        }

      });
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt());
    },
    hotcityList() {
      console.log(123);
      let arr = this.cities.filter((item) => item.isHot);
      return arr;
    },
    pys() {
      return this.cityList.map(item=> item.py);
    },
    searchList(){
      return this.cities.filter(item=>{
        return item.name.indexOf(this.value)>-1||item.pinyin.indexOf(this.value)>-1
      })
    }
  },
  methods: {
    goBack() {
      // console.log(456);
      this.$router.back();
    },
    fn1(py){
      console.log(py);
    
      let top=this.$refs[`list-${py}`][0].offsetTop
      this.$refs['left'].scrollTop=top
        console.log(this.$refs[`list-${py}`][0]);
    }
  },
  created() {
    getCityList().then((response) => {
      let res = response.data;
      this.cities = res.data.cities;
      console.log(this.cities);
    });
  },
};
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .mint-header {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 44px;
    background: #fff;
    color: black;
    font-size: 18px;
  }
  .iconfont {
    font-size: 24px;
    color: #000;
  }
  .mint-search {
    position: fixed;
    width: 100%;
    top: 44px;
    z-index: 9999;
    height: auto;
  }
  .main {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
    position: relative;
    margin-top: 85px;
    padding-top: 14px;
    overflow: hidden;
    .left {
      flex: 1;
      overflow-y: auto;
      margin-right: 18px;;
      .hotcitys {
        margin-top: 10px;
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
      position: fixed;
      margin-top: 94px;
      right:0;
      text-align: center;
      justify-content: center;
      
      width: 18px;
      li {
        width: 18px;
        height: 18px;
        text-align: center;
      }
    }
  }
}
</style>
