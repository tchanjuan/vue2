<template>
  <ul class="tabbar">
    <li
      class="tabbar__item"
      v-for="(item, index) in tabs"
      :key="index"
      :class="{ 'active': myValue === index }"
      @click="myValue = index"
    >
      {{ item }}
    </li>
    <div class="lv-tabs__line" :style="lineStyle">
      <span style="width: 56px"></span>
    </div>
  </ul>
</template>

<script>
export default {
  name: "Tabbar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    tabs: {
      type: Array,
      default() {
        return ["a", "b"];
      },
    },
  },
  data() {
    return {
      myValue: this.value,
    };
  },
  watch: {
    myValue(newVal) {
      this.$emit("input", newVal);
    },
  },
  computed: {
    lineStyle() {
      return {
        transform: `transLateX(${this.myValue * 100}%)`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/mixin.scss";

.tabbar {
  @include border-bottom;
  display: flex;
  height: 50px;
  transition: transform 0.2s cybic-bezier(0.35, 0, 0.25, 1);
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 9999;
  .tabbar__item {
    flex: 1;
    line-height: 50px;
    text-align: center;
    &.active {
      color: #ff5f16;
    }
  }
  .lv-tabs__line {
    position: absolute;
    width: 50%;
    height: 2px;
    display: flex;
    justify-content: center;
    left: 0;
    bottom: 0;
    transition: transform 0.3s ease-in;
    span {
      background: #ff5f16;
    }
  }
}
</style>
