<template>
  <div>
    <div class="search-box">
      <img src="../../../static/images/yizi.png">
      <div class="search">
        <span class="iconfont icon-search"></span>
        <input type="text" placeholder="搜索更多家居好物">
      </div>
      <h2 class="index-title">{{indexTitle}}</h2>
      <div class="index-btn">软装私人订制</div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <img :src=item.icon alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        indexTitle: "文案",
        nav: [
          {icon: require("../../../static/images/icon/furniture.png"), title: "家具"},
          {icon: require("../../../static/images/icon/furniture.png"), title: "家具"},
          {icon: require("../../../static/images/icon/furniture.png"), title: "家具"},
          {icon: require("../../../static/images/icon/furniture.png"), title: "家具"},
          {icon: require("../../../static/images/icon/furniture.png"), title: "家具"},
        ]
      }
    },
    components: {},

    methods: {},
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/fonts/iconfont.css";
  @import "../../../static/bass/css/bass";

  .search-box {
    width: unit(750, rpx);
    height: unit(750, rpx);
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .search {
      top: unit(32, rpx);
      position: absolute;
      width: unit(690, rpx);
      height: unit(80, rpx);
      left: unit(30, rpx);
      background: rgba(255, 255, 255, 0.9);
      border-radius: 5px;
      display: flex;
      align-items: center;

      .icon-search {
        margin: 0 10px;
        color: #2C2C2C;
      }

      input {
        font-size: @theme-font-size-1;
        display: block;
        width: unit(610, rpx);
      }
    }

    .index-title {
      position: absolute;
      top: unit(234, rpx);
      text-align: center;
      width: 80%;
      left: 10%;
      font-size: unit(80, rpx);
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }

    .index-btn {
      position: absolute;
      width: unit(240, rpx);
      height: unit(56, rpx);
      background: @theme-color;
      box-shadow: 0 unit(2, rpx) unit(4, rpx) 0 rgba(0, 0, 0, 0.22);
      border-radius: unit(10, rpx);
      font-size: @theme-font-size-1;
      font-weight: 400;
      text-align: center;
      line-height: unit(56, rpx);
      color: #fff;
      top: unit(483, rpx);
      left: unit(255, rpx);
    }
  }

  .nav {
    background: #FFF;
    ul {
      display: flex;
      justify-content: space-between;
      width: unit(690, rpx);
      margin: unit(10,rpx) auto 0;

      li {
        text-align: center;
        margin-top: unit(46,rpx);
        img {
          display: block;
          width: unit(80, rpx);
          height: unit(80, rpx);
          margin-bottom: unit(20,rpx  );
        }

        span {
          font-size: @theme-font-size-1;
          font-weight: 400;
          color: rgba(145, 145, 145, 1);
          display: block;
          margin-bottom: unit(40,rpx);
        }
      }
    }
  }
</style>
