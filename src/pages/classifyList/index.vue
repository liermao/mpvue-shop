<template>
  <div>
    <div class="navbar">
      <block v-for="(item,index) in tabs" :key="index">
        <div :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
          <div class="navbar_title">{{item.name}}({{item.list.length}})</div>
        </div>
      </block>
      <div class="navbar_slider" :class="navbarSliderClass"></div>
    </div>
    <div class="content">
      <div :hidden="activeIndex != index" v-for="(item,index) in tabs" :key="index">
        <ul>
          <li v-for="(item1,index1) in item.list" :key="index1" @click="turnDetail(id)">
            <div class="img-box">
              <img :src="item1.img">
            </div>
            <h3>{{item1.name}}</h3>
            <div class="sell">￥{{item1.sell}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabs: [
          {
            id:1,
            name: "家具",
            list:[
              {id:1,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
              {id:2,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
              {id:3,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
              {id:4,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
              {id:5,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
              {id:6,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
            ],
          },
          {
            id:2,
            name: "饰品",
            list:[
              {id:1,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
              {id:2,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"},
              {id:3,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"}
            ],
          },
          {
            id:3,
            name: "硬装",
            list:[
              {id:1,img:"http://47.98.180.219:10085/static/images/shafa12.png",name:"宜家家居床",sell:"2442"}
            ],
          }
        ],
        list:[

        ],
        activeIndex: 0,
      }
    },
    components: {},
    computed: {
      navbarSliderClass() {
        if (this.activeIndex == 0) {
          return "navbar_slider_0";
        }
        if (this.activeIndex == 1) {
          return "navbar_slider_1";
        }
        if (this.activeIndex == 2) {
          return "navbar_slider_2";
        }
      },
    },
    methods: {
      tabClick(e) {
        this.activeIndex = e.currentTarget.id;
      },
      caseDetails(id) {
        mpvue.navigateTo({url: '/pages/classifyDetails/main?id=' + id})
      },
      turnDetail(id){
        mpvue.navigateTo({ url: '/pages/detial/main?id='+id})
      }
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";
  .swiper-item {
    height: 100%;
    text-align: center;
  }
  .navbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: fixed;
    z-index: 500;
    top: 0;
    height: unit(85,rpx);
    width: unit(750,rpx);
    background-color: #fff;
    box-shadow:0 unit(6,rpx) unit(10,rpx) 0 rgba(0,0,0,0.1);
    .navbar_item {
      position: relative;
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      padding: 13px 0;
      text-align: center;
      font-size: 0;
    }
  }
  .navbar_item_on {
    .navbar_title{
      color: #EAC34E;
    }
  }
  .navbar_title {
    color: #919191;
    font-weight: 500;
    display: inline-block;
    font-size: unit(28,rpx);
    max-width: unit(100,rpx);
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .navbar_slider {
    position: absolute;
    content: " ";
    left: 0;
    bottom:unit(10,rpx);
    width: unit(120,rpx);
    height: unit(6,rpx);
    background-color: #EAC34E;
    -webkit-transition: -webkit-transform 0.1s;
    transition: -webkit-transform 0.1s;
    transition: transform 0.1s;
    transition: transform 0.1s, -webkit-transform 0.1s;
  }
  .navbar_slider_0 {
    left: unit(65,rpx);
    transform: translateX(0);
  }
  .navbar_slider_1 {
    left: unit(65,rpx);
    transform: translateX(250rpx);
  }
  .navbar_slider_2 {
    left: unit(65,rpx);
    transform: translateX(500rpx);
  }
  .content {
    padding-top:  unit(85,rpx);
    background: #fff;
      ul{
        display: flex;
        flex-wrap:wrap;
        li{
          width:unit(220,rpx);
          margin: unit(32,rpx) unit(16,rpx) unit(32,rpx);
          .img-box{
            width:unit(220,rpx);
            height:unit(220,rpx);
            background:#F5F5F7;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                max-width:unit(143,rpx);
                max-height: unit(143,rpx);
            }
          }
          h3{
            font-size:unit(26,rpx);
            color:rgba(44,44,44,1);
            margin:unit(16,rpx) auto;
          }
          .sell{
            font-size:unit(26,rpx);
            color:rgba(234,195,78,1);
          }
        }
      }
  }
</style>
