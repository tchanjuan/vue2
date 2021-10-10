<template>
  <div class="container">
    <mt-header fixed title="当前城市——">
      <i slot="left" class="iconfont icon-guanbi"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="scss">
.container {
  .is-fixed {
    background: #fff;
    color: black;
    font-size: 19px;

    .icon-guanbi {
      font-size: 24px;
      color: #000;
    }
  }
}
</style>
