<template>
  <div class="lazyImg">
    <div class="box" v-for="(item, index) in imgs" :key="index">
      <img alt="Vue logo" v-lazy="item.src" />
      <div class="title"> {{ item.title }} </div>
    </div>
  </div>
</template>

<script>
import imgs from "./../api/index"
export default {
  name: "lazyImg",
  data() {
    return {
      msg: "this is lazyImg",
      imgs: [],
    }
  },
  created() {
    this.imgs = imgs
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="less">
.lazyImg {
  overflow: scroll;
  height: 100%;
  .box {
      position: relative;
      height: 110px;
      padding: 5px;
  }
  img {
      height: 100%;
      background-size: 100% 100%;
      float: left;
      margin-right: 10px;
  }
  .title {
      height: 100%;
      font-size: 14px;
  }
}
</style>
