<template>
  <div class="page-home">
    <div class="page-home__film">
      <router-view></router-view>
    </div>

    <mt-tabbar v-model="selected">
      <mt-tab-item
        v-for="item in tab"
        :id="item.id"
        :key="item.id"
        :href="item.href"
      >
        <i slot="icon" :class="['iconfont', item.icon]"></i>
        {{ item.name }}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>


<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  name: "Home",
  provide() {
    return {
      home: this,
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabItem.name]: TabItem,
  },
  data() {
    return {
      selected: 1,
      tab: [
        {
          id: 1,
          name: "电影",
          icon: "icon-dianyingpiaoiocn",
          href: "/#/films",
        },
        {
          id: 2,
          name: "影院",
          icon: "icon-yingyuan",
          href: "/#/cinemas",
        },
        {
          id: 3,
          name: "资讯",
          icon: "icon-zixun",
          href: "http://www.baidu.com",
        },
        {
          id: 4,
          name: "我的",
          icon: "icon-yixianshi_huaban",
          href: "/#/center",
        },
      ],
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        this.selected = newVal.meta.tabId;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  &__film {
    flex: 1;
    overflow-y: auto;
  }
  .mint-tabbar {
    position: fixed;
    background-color: #fff;
    margin-bottom: 0;

    .mint-tab-item {
      color: #797d82;
      &.is-selected {
        background-color: transparent;
        color: #ff5f16;
      }
    }
    .iconfont {
      font-size: 26px;
    }
  }
}
</style>
