<template>
  <div class="collectDetial">
      <div class="topimg">
        <img src="http://47.98.180.219:10085/static/images/col1.png">
      </div>
      <div class="top-detial">
          <div class="img-box"><img src="http://47.98.180.219:10085/static/images/detial-logo.png"></div>
          <h2>IKEA/宜家家居</h2>
          <p>品牌介绍：宜家家居是来自瑞典的全球知名家具和家居嗯嗯</p>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    mounted(){},
    methods: {},
    created() {
    }
  }
</script>

<style scoped lang="less" >
  @import "../../../static/bass/css/bass";
  .topimg{
    width:unit(750,rpx);
    height:unit(246,rpx);

    position: relative;
    z-index: -1;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .topimg:after{
    content: "";
    position: absolute;
    width:unit(750,rpx);
    height:unit(246,rpx);
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.4);
  }
  .top-detial{
    width:unit(750,rpx);
    height:unit(211,rpx);
    background:rgba(255,255,255,1);
    border-radius:unit(30,rpx) unit(30,rpx) 0 0;
    position: relative;
    margin-top: unit(-30,rpx);
    .img-box{
      width:unit(142,rpx);
      height:unit(142,rpx);
      background:rgba(255,255,255,1);
      box-shadow:0 unit(2,rpx) unit(12,rpx) 0 rgba(0,0,0,0.12);
      border-radius:unit(10,rpx);
      position: absolute;
      left: unit(30,rpx);
      top: unit(-30,rpx);
      img{
        width:unit(142,rpx);
        height:unit(142,rpx);
      }
    }
    h2{
      margin-left: unit(205,rpx);
      padding-top: unit(24,rpx);
      margin-bottom: unit(68,rpx);
    }
    p{
      margin: 0 auto;
      width: unit(680,rpx);
      font-size:unit(26,rpx);
      font-weight:400;
      color:rgba(0,0,0,1);
    }
  }
</style>
