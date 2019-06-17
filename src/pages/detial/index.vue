<template>
  <div>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="500">
      <block v-for="(item, index) in movies" :index="index" :key="key">
        <swiper-item>
          <image :src="item.img" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="title">
      <div class="menber">￥<span>3452</span><span v-show="true" class="meber-icon">会员价</span></div>
      <div class="price">价格<span>￥3298</span></div>
      <h1>宜家家居粉色双人沙发</h1>
      <div class="share"><img src="../../../static/images/icon/sharebag.png" alt="">分享有礼</div>
    </div>
    <div class="information">
        <h2>商品信息</h2>
        <div>品牌:<span>宜家家居</span></div>
        <div>规格:<span>123x87x145cm</span></div>
        <div>颜色:<span>粉色+黑色</span></div>
        <div>风格:<span>简约现代</span></div>
        <div>材质:<span>棉、纤维</span></div>
        <div>产地:<span>西班牙</span></div>
        <div>物流:<span>顺丰货运</span></div>
    </div>
    <div class="address">
        <div class="address-icon">
          <img src="../../../static/images/icon/address.png" >
        </div>
         <div class="address-text">
           <h3>宜家家居(漕溪路店)</h3>
           <p>漕溪路126号（距地铁3号线漕溪路站3号口步行960m）</p>
         </div>
        <div class="phone">
          <img src="../../../static/images/icon/phone.png" >
        </div>
    </div>
    <div class="img-detial">
      <h3>商品详情</h3>
      <div class="img-box">
        <img src="../../../static/images/big.png">
        <div class="particulars">
            <h3>推荐搭配</h3>
            <ul>
              <li>
                <img src="../../../static/images/small.png" alt="">
              </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="safeguard">
      <div class="safeguard-title">省心服务保障</div>
      <ul class="safeguard-list">
          <li>
            <img src="../../../static/images/icon/bz1.png" alt="">
            <p class="title1">正品保证</p>
            <p class="title2">厂家正品直供</p>
          </li>
        <li>
          <img src="../../../static/images/icon/bz2.png" alt="">
          <p class="title1">破损保障</p>
          <p class="title2">破损免费补发</p>
        </li>
        <li>
          <img src="../../../static/images/icon/bz3.png" alt="">
          <p class="title1">退换无忧</p>
          <p class="title2">赠送运费险</p>
        </li>
        <li>
          <img src="../../../static/images/icon/bz4.png" alt="">
          <p class="title1">三年质保</p>
          <p class="title2">官方质保 售后无忧</p>
        </li>
      </ul>
    </div>
    <!--<div class="bottom">-->
      <!--<ul>-->
        <!--<li>-->
            <!--<span class="iconfont icon-home"></span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<span class="iconfont icon-share"></span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<span class="iconfont icon-share"></span>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        movies: [
          {id: 1, img: require("../../../static/images/sofa.png"), name: "宜家家居床", sell: "2442"},
          {id: 2, img: require("../../../static/images/sofa.png"), name: "宜家家居床", sell: "2442"},
          {id: 3, img: require("../../../static/images/sofa.png"), name: "宜家家居床", sell: "2442"},
          {id: 4, img: require("../../../static/images/sofa.png"), name: "宜家家居床", sell: "2442"},
          {id: 5, img: require("../../../static/images/sofa.png"), name: "宜家家居床", sell: "2442"},
          {id: 6, img: require("../../../static/images/sofa.png"), name: "宜家家居床", sell: "2442"},
        ]
      }
    },
    props: {},
    components: {}
  }
</script>

<style scoped lang="less">
  .swiper {
    width: unit(750, rpx);
    height: unit(600, rpx);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 unit(8, rpx) unit(12, rpx) 0 rgba(0, 0, 0, 0.06);
    swiper-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .title {
    width: unit(690, rpx);
    height: unit(163, rpx);
    background: #fff;
    padding:unit(30,rpx);
    margin: unit(16, rpx) auto;
    position: relative;
    .menber {
      font-size: unit(30, rpx);
      font-weight: 600;
      color: rgba(234, 195, 78, 1);
      span {
        font-size: unit(40, rpx);
      }
      .meber-icon {
        line-height: unit(25, rpx);
        text-align: center;
        background: rgba(253, 237, 190, 1);
        border-radius: unit(13, rpx);
        font-size: unit(18, rpx);
        font-weight: 400;
        color: rgba(220, 169, 17, 1);
        margin-left: unit(16, rpx);
        padding: unit(4,rpx) unit(14,rpx);
      }

    }
    .price {
      margin: 8px 0;
      font-size: unit(26, rpx);
      font-weight: 400;
      color: rgba(127, 131, 137, 1);
      span {
        text-decoration: line-through;
      }
    }
    h1 {
      font-size: unit(36, rpx);
      font-weight: 600;
      color: rgba(44, 44, 44, 1);
    }
    .share {
      position: absolute;
      bottom: unit(32,rpx);
      right:0;
      width: unit(190, rpx);
      height: unit(50, rpx);
      background: rgba(245, 245, 247, 1);
      border-radius: unit(100, rpx) 0 0 unit(100, rpx);
      font-size: unit(26, rpx);
      font-weight: 400;
      color: rgba(127, 131, 137, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: center;
      img {
        margin-right: unit(2, rpx);
        width: unit(26, rpx);
        height: unit(32, rpx);
      }
    }

  }
  .information {
    background: #fff;
    padding: unit(24, rpx) unit(30, rpx);
    h2 {
      font-size: unit(30, rpx);
      font-weight: 400;
      color: rgba(44, 44, 44, 1);
      margin-bottom: unit(24,rpx);

    }

    div {
      margin-left: unit(24, rpx);
      font-size: unit(26, rpx);
      font-weight: 400;
      color: rgba(127, 131, 137, 1);
      margin-bottom: unit(16,rpx);
      span{
        color:rgba(44,44,44,1);
        margin-left: unit(14,rpx);
      }
    }
  }
  .address{
    margin: unit(16,rpx) 0;
    width: unit(690,rpx);
    display: flex;
    align-items: center;
    background: #fff;
    padding: unit(24,rpx) unit(30,rpx);
    .address-icon{
      img{
        width: unit(32,rpx);
        height:unit(32,rpx)
      }
    }
    .address-text{
      width: unit(540,rpx);
      margin-left: unit(24,rpx);
      margin-right: unit(54,rpx);
      position: relative;
      h3{
        font-size:unit(26,rpx);
        font-weight:400;
        color:rgba(44,44,44,1);
        margin-bottom: unit(14,rpx);
      }
      p{
        font-size:unit(22,rpx);
        font-weight:400;
        color:rgba(127,131,137,1);
      }
    }
    .address-text:after{
      content:"";
      position: absolute;
      width:unit(1,rpx);
      height:unit(42,rpx);
      top:unit(25,rpx);
      right: unit(0,rpx);
      background: #D8D8D8;
    }
    .phone{
      img{
        width: unit(42,rpx);
        height: unit(42,rpx);
      }
    }
  }
  .img-detial{
    width: unit(690,rpx);
    position: relative;
    padding: unit(24,rpx) unit(30,rpx);
    background:#fff;
    h3{
      font-size:unit(30,rpx);
      margin-bottom: unit(24,rpx);
      font-weight:400;
      color:rgba(44,44,44,1);
    }
    .img-box{
      position:relative;
      img{
        display: block;
        width: unit(690,rpx);
        height:unit(690,rpx);
      }
      .particulars{
        position: absolute;
        width: unit(188,rpx);
        background:rgba(0,0,0,0.2);
        border:1px solid rgba(255,255,255,1);
        padding: unit(18,rpx);
        right: 0;
        top: unit(40,rpx);
        h3{
          text-align: center;
          font-size:unit(18,rpx);
          font-weight:400;
          color:rgba(255,255,255,1);
          margin-bottom: unit(16,rpx);
        }
        ul{
          li{
            margin-bottom: unit(18,rpx);
            img{
              margin: 0 auto;
              display: block;
              width: unit(120,rpx);
              height: unit(120,rpx);
            }
          }
        }
      }
    }
  }
  .safeguard{
    width: unit(750,rpx);
    background: #fff;
    padding-top: unit(32,rpx);
    .safeguard-title{
      width:unit(260,rpx);
      height:unit(50,rpx);
      background:rgba(234,195,78,1);
      border-radius:unit(25,rpx);
      font-size:unit(28,rpx);
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:unit(50,rpx);
      text-align: center;
      margin: 0 auto unit(40,rpx);
    }
    .safeguard-list{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: unit(600,rpx);
      margin: 0 auto;
      padding-bottom: unit(130,rpx);
      li{
        text-align: center;
        width: unit(150,rpx);
        img{
          width: unit(50,rpx);
          height:unit(50,rpx);
          padding: unit(16,rpx);
          border-radius:5px;
          border:2px solid rgba(131,69,13,1);
        }
        .title1{
          font-size:unit(24,rpx);
          font-weight:400;
          color:rgba(44,44,44,1);
        }
        .title2{
          font-size:unit(18,rpx);
          font-weight:400;
          color:rgba(44,44,44,1);
        }
      }
    }
  }

</style>
