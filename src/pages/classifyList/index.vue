<template>
  <div>
    <div class="navbar">
      <block v-for="(item,index) in tabs" :key="index">
        <div  :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick(index,item.id)">
          <div class="navbar_title">{{item.name}}({{item.count}})</div>
        </div>
      </block>
      <!--<div class="navbar_slider" :class="navbarSliderClass"></div>-->
    </div>
    <div class="content">
      <div>
        <ul>
          <li v-for="(item1,index1) in list" :key="index1" @click="turnDetail(item1.id)" v-if="item1.class_id == activeID">
            <div class="img-box">
              <img :src="item1.imgSrc">
            </div>
            <h3>{{item1.name}}</h3>
            <div class="sell">￥{{item1.price}}</div>
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
        tabs: [],
        list:[],
        activeIndex: 0,
        activeID:0,
      }
    },
    components: {},
    computed: {},
    methods: {
      tabClick(index,id) {
        this.activeIndex = index;
        this.activeID=id;
      },
      turnDetail(id){
        mpvue.navigateTo({ url: '/pages/detial/main?id='+id})
      },
      getQuery() {
        /* 获取当前路由栈数组 */
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        const options = currentPage.options;
        return options;
      }
    },
    mounted() {
      let _this=this;
      _this.$http.get('index.php?method52=b.hanmo.getcasegoods&id='+_this.getQuery().id).then((res) => {
        console.log(res.data.data);
        _this.tabs=res.data.data.classes;
        _this.list=res.data.data.goods;
        _this.activeID=res.data.data.classes[0].id;
      }).catch(err => {
        console.log("错误代码", err)
      })
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
  /*.navbar_slider {*/
    /*position: absolute;*/
    /*content: " ";*/
    /*left: 0;*/
    /*bottom:unit(10,rpx);*/
    /*width: unit(120,rpx);*/
    /*height: unit(6,rpx);*/
    /*background-color: #EAC34E;*/
    /*-webkit-transition: -webkit-transform 0.1s;*/
    /*transition: -webkit-transform 0.1s;*/
    /*transition: transform 0.1s;*/
    /*transition: transform 0.1s, -webkit-transform 0.1s;*/
  /*}*/
  /*.navbar_slider_0 {*/
    /*left: unit(65,rpx);*/
    /*transform: translateX(0);*/
  /*}*/
  /*.navbar_slider_1 {*/
    /*left: unit(65,rpx);*/
    /*transform: translateX(250rpx);*/
  /*}*/
  /*.navbar_slider_2 {*/
    /*left: unit(65,rpx);*/
    /*transform: translateX(500rpx);*/
  /*}*/
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
