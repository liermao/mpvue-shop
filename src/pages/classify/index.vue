<template>
  <div>
    <ul class="classify">
      <li>
        <div class="top-header">
          <img src="http://47.98.180.219:10085/static/images/icon/address.png" class="uesrImg" >
          <div class="top-content">
            <div class="name">李青羽</div>
            <div class="lebal">
              宁波 |<span>本地服务</span><span>在线设计</span>
            </div>
          </div>
          <div class="sell">￥15/㎡起</div>
        </div>
        <img src="http://47.98.180.219:10085/static/images/al1.png" alt="">
        <div class="tag">现代简约</div>
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    components: {},
    methods: {},
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";
  .classify {
    li {
      width: unit(750, rpx);
      height: unit(670, rpx);
      background: #fff;
      position: relative;
      box-shadow:0 unit(2,rpx) unit(12,rpx) 0 rgba(0,0,0,0.06);
      .top-header{
        width: unit(660, rpx);
        margin: 0 auto;
        display: flex;
        height: unit(126,rpx);
        align-items: center;
        img{
          display: block;
          width:unit(72,rpx);
          height:unit(72,rpx);
          border:1px solid #ccc;
          border-radius: 36px;
          margin-right: unit(24,rpx);
        }
        .sell{
          position: absolute;
          font-size:unit(28,rpx);
          font-weight:400;
          color:rgba(44,44,44,1);
          right: unit(40,rpx);
          top:unit(35,rpx)
        }
        .top-content{
          position: relative;
          .name{
            font-size:unit(24,rpx);
            font-weight:400;
            color:rgba(44,44,44,1);
            margin-bottom: unit(6,rpx);
          }
          .lebal{
            font-size:unit(22,rpx);
            font-weight:400;
            color:rgba(145,145,145,1);
            span{
              font-size:unit(16,rpx);
              font-weight:400;
              color:rgba(145,145,145,1);
              background:rgba(233,233,233,1);
              border-radius:unit(3,rpx);
              padding: unit(2,rpx) unit(8,rpx);
              margin-left: unit(8,rpx);
            }
          }
        }
      }


      >img {
        width: unit(660, rpx);
        height: unit(365, rpx);
        display: block;
        margin: 0 auto;
      }
        h3 {
          margin-top: unit(45,rpx);
          font-size: unit(28, rpx);
          margin-left: unit(40, rpx);
          font-weight: 600;
          color: rgba(44, 44, 44, 1);
        }
        p {
          width: unit(634, rpx);
          font-size: unit(24, rpx);
          margin-left: unit(40, rpx);
          font-weight: 400;
          color: rgba(44, 44, 44, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: unit(16, rpx)
        }
      .tag {
        position: absolute;
        top: unit(472, rpx);
        left: unit(64, rpx);
        width: unit(110, rpx);
        height: unit(42, rpx);
        background: rgba(44, 44, 44, 1);
        box-shadow: 0 unit(2, rpx) unit(8, rpx) 0 rgba(0, 0, 0, 0.06);
        border-radius: unit(10, rpx);
        z-index: 1;
        font-size: unit(20, rpx);
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: unit(42, rpx);
      }
    }
  }
</style>
