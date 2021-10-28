<template>
  <div class="container">
    <mt-header title="当前城市-">
      <i slot="left" class="iconfont icon-close"></i>
    </mt-header>
    <mt-search v-model="value"></mt-search>
    <div class="main" v-show="!value">
      <div class="left" ref="left">
        <div class="cityList"
        
        >
          <p>热门城市</p>
          <ul>
            <li v-for="city in hotCityList" :key="city.cityId">
              {{ city.name }}
            </li>
          </ul>
        </div>
        <div class="cityList" v-for="item in cityList" :key="item.py"
        :ref="`list-${item.py}`"
        >
          <p class="py">{{ item.py }}</p>
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
    <!-- 搜索结果 -->
    <div class="main" v-show="value">
      <div class="left">
        <div class="cityList">
          <ul>
            <li v-for="city in searchList" :key="city.cityId">
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCityList from "../api/city";
import "../css/iconfont.css";
export default {
  data() {
    return {
      value: "",
      cities: [],
    };
  },
  computed: {
    cityList() {
      let result = [];
      this.cities.forEach((item) => {
        let py = item.pinyin.charAt(0).toUpperCase();
        let index = result.findIndex(item => item.py === py);
        if (index > -1) {
          result[index].list.push(item);
        } else {
          let obj = {
            py: py,
            list: [item],
          };
          result.push(obj);
        }
      });
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt());
    },
    hotCityList() {
      // console.log(123);
      let arr = this.cities.filter(item => item.isHot);
      // console.log(arr)
      return arr;
    },
    pys() {
      return this.cityList.map(item => item.py);
    },
    searchList() {
      return this.cities.filter(item => {
        return (
          item.name.indexOf(this.value) > -1 ||
          item.pinyin.indexOf(this.value) > -1
        );
      });
    },
  },
  methods: {
    fn1(py){
      //拿到点击py对应的城市列表实例距离顶部的高度
      let top=this.$refs[`list-${py}`][0].offsetTop
      //然后把该高度就是整个左边滚动的距离
      this.$refs['left'].scrollTop=top
    }
  },

  created() {
    //获取城市数据
    getCityList().then(response => {
      let res = response.data
      this.cities = res.data.cities
    })
  }
}
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .mint-header {
    position: fixed;
    width: 100%;
    height: 44px;
    line-height: 44px;
    z-index: 9999;
    color: #000;
    background: #fff;
    .mint-header-title {
      font-size: 18px;
    }
    .iconfont {
      font-size: 18px;
    }
  }
  .mint-search {
    margin-top: 44px;
    width: 100%;
    position: fixed;
    z-index: 9999;
    height: auto;
  }
  .main {
    flex: 1;
    display: flex;
    overflow: hidden;
    position: relative;
    margin-top: 94px;
    .left {
      position:relative;
      flex: 1;
      overflow-y: auto;
      .hotCity {
        padding-left: 14px;
        p {
          height: 44px;
          line-height: 44px;
        }
        li {
          height: 44px;
          line-height: 44px;
        }
      }
      .cityList {
        p {
          height: 34px;
          padding-left: 14px;
          line-height: 34px;
          background: #ccc;
        }
        li {
          margin-left: 14px;
          height: 34px;
          line-height: 34px;
          border-bottom: 1px solid #ccc;
        }
      }
    }

    .right {
      margin-top: 88px;
      width: 18px;
      text-align: center;
      justify-content: center;
      li {
        width: 18px;
        height: 18px;
        text-align: center;
      }
    }
  }
}
</style>
