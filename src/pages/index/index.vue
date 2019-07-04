<template>
  <div>
    <div class="search-box">
      <img src="http://47.98.180.219:10085/static/images/yizi.png">
      <div class="search">
        <img src="http://47.98.180.219:10085/static/images/icon/search.png" alt="">
        <input type="text" placeholder="搜索更多家居好物">
      </div>
      <h2 class="index-title">{{indexTitle}}</h2>
      <div class="index-btn">软装私人订制</div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in nav" :key="index" @click="allClassify(item.url,item.id)">
          <img :src=item.icon alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="content">
        <div class="content-box" v-for="(item,index) in imgList" :key="index" >
          <img :src=item.img alt="">
          <div class="box">
            <h2>{{item.title}}</h2>
            <h5>{{item.smallTitle}}</h5>
            <div class=""><span class="iconfont icon-Shopping"></span>5</div>
          </div>
        </div>
    </div>
    <div class="list">
       <div class="title">
         <img src="http://47.98.180.219:10085/static/images/left.png" class="left">新品上架<img src="http://47.98.180.219:10085/static/images/right.png" alt="" class="right">
       </div>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="detial(item.id)">
          <div class="img-box">
            <img :src=item.img alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="money">¥<span>{{item.sell}}</span></div>
        </li>
      </ul>
    </div>
    <div class="list">
      <div class="title">
        <img src="http://47.98.180.219:10085/static/images/left.png" class="left">猜你喜欢<img src="http://47.98.180.219:10085/static/images/right.png" alt="" class="right"></div>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="detial(item.id)">
          <div class="img-box">
            <img :src=item.img alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="money">¥<span>{{item.sell}}</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indexTitle: "文案",
        nav: [
          {id:1,icon: "http://47.98.180.219:10085/static/images/icon/furniture.png", title: "家具",url:"furniture"},
          {id:2,icon: "http://47.98.180.219:10085/static/images/icon/Luminaire.png", title: "灯灯",url:"furniture"},
          {id:3,icon:"http://47.98.180.219:10085/static/images/icon/painting.png", title: "画廊",url:"furniture"},
          {id:4,icon: "http://47.98.180.219:10085/static/images/icon/bed.png", title: "床垫",url:"furniture"},
          {id:5,icon: "http://47.98.180.219:10085/static/images/icon/style.png", title: "其它",url:"allClassify"},
        ],
        list:[
          {id:1,img:"http://47.98.180.219:10085/static/images/sofa.png",name:"宜家家居床",sell:"2442"},
          {id:2,img:"http://47.98.180.219:10085/static/images/sofa.png",name:"宜家家居床",sell:"2442"},
          {id:3,img:"http://47.98.180.219:10085/static/images/sofa.png",name:"宜家家居床",sell:"2442"},
          {id:4,img:"http://47.98.180.219:10085/static/images/sofa.png",name:"宜家家居床",sell:"2442"},
          {id:5,img:"http://47.98.180.219:10085/static/images/sofa.png",name:"宜家家居床",sell:"2442"},
          {id:6,img:"http://47.98.180.219:10085/static/images/sofa.png",name:"宜家家居床",sell:"2442"},
        ],
        imgList:[
          {id:1,img:"http://47.98.180.219:10085/static/images/1.png",title:"彩色元素,轻松打造艺术感的家。",smallTitle:"彩色元素合集",number:5},
          {id:2,img:"http://47.98.180.219:10085/static/images/1.png",title:"彩色元素,轻松打造艺术感的家。",smallTitle:"彩色元素合集",number:5},
        ]
      }
    },
    components: {},
    methods: {
      detial(id){
        mpvue.navigateTo({ url: '/pages/detial/main?id='+id})
      },
      allClassify(url,id){
        mpvue.navigateTo({ url: '/pages/'+url+'/main?id='+id})
      }
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
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
      background: rgba(255, 255, 255, 1);
      border-radius: 5px;
      display: flex;
      align-items: center;
      img{
        width:unit(26,rpx);
        height:unit(26,rpx);
        margin-left: unit(22,rpx);
        margin-right: unit(16,rpx);
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

  .content{
    .content-box{
      width: unit(750,rpx);
      height: unit(422,rpx);
      margin-bottom: unit(8,rpx);
      position: relative;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
      .box{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.2);
        h2{
          text-align: center;
          color: #fff;
          margin-top: unit(143,rpx);
          font-size: @theme-font-size-8;
        }
        h5{
          text-align: center;
          color: #fff;
          font-size: @theme-font-size-2;
          font-weight:400;
          margin-top: unit(40,rpx);
        }
        div{
            text-align: center;
            color: #fff;
             margin-top: unit(60,rpx);
          font-size: @theme-font-size-2;
          span{
            margin-right: unit(10,rpx);
          }
        }
      }
    }
  }
   .list{
      width: unit(750,rpx);
      margin: unit(16,rpx) auto 0;
     padding-bottom:  unit(16,rpx);
     background: #fff;
     .title{
       text-align: center;
       margin-bottom: unit(32,rpx);
       padding-top: unit(32,rpx);
       position: relative;
       img{
         width: unit(42,rpx);
         height: unit(24,rpx);
       }
       .left{
         margin-right: unit(20,rpx);
       }
       .right{
         margin-left: unit(20,rpx);
       }
     }

      ul{
        width: unit(720,rpx);
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        li{
          width: unit(330,rpx);
          height: unit(485,rpx);
          margin: unit(12,rpx) unit(15,rpx);
          box-shadow:0 unit(2,rpx) unit(12,rpx) 0 rgba(0,0,0,0.06);
          border-radius:unit(16,rpx);
          background: #fff;
         .img-box{
           width: unit(264,rpx);
           height: unit(320,rpx);
           margin:unit(40,rpx) auto unit(16,rpx);
           display: flex;
           justify-content: center; /* 水平居中 */
           align-items: center;
           img{
             display: block;
             width: 100%;
             height: 100%;
           }
         }
          .name{
            font-size:@theme-font-size-1;
            font-weight:400;
            color:rgba(44,44,44,1);
            margin-left: unit(24,rpx);
            margin-bottom: unit(8,rpx);
          }
          .money{
            font-size:@theme-font-size-2;
            font-weight:600;
            margin-left: unit(24,rpx);
            color:rgba(235,195,78,1);
          }

        }
      }
   }
</style>
