<template>
    <div>
      <div class="search-box">
        <div class="search">
          <span class="iconfont icon-search"></span>
          <input type="text" placeholder="搜索更多家居好物">
        </div>
      </div>
      <ul class="collect">
        <li v-for="(item,index) in arr" :key="index" @click="detialCollent(item.id)">
          <img :src=item.img alt="">
          <div class="box">
            <h1>{{item.title}}</h1>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
              arr: [
                {id: 1, img: "http://47.98.180.219:10085/static/images/col1.png", title: "上海工厂"},
                {id: 2, img: "http://47.98.180.219:10085/static/images/col1.png", title: "广州工厂"},
                {id: 3, img: "http://47.98.180.219:10085/static/images/col1.png", title: "浙江工厂"},
                {id: 4, img: "http://47.98.180.219:10085/static/images/col1.png", title: "江苏工厂"},
                {id: 5, img: "http://47.98.180.219:10085/static/images/col1.png", title: "本土合作门店"},
              ]
            }
        },
        props: {},
        components: {},
        methods: {
          detialCollent(id){
            mpvue.navigateTo({ url: '/pages/collectDetial/main?id='+id})
          }
        },
    }
</script>

<style scoped lang="less">
  @import "../../../static/fonts/iconfont.css";
  @import "../../../static/bass/css/bass";
  .collect{
    width: unit(750,rpx);
    li{
      position: relative;
      height: unit(370,rpx);
      width: unit(750,rpx);
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
      .box{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        background: rgba(0,0,0,0.5);
        h1{
          position: absolute;
          text-align: center;
          width: 100%;
          top: unit(120,rpx);
          font-size:unit(72,rpx);
          font-weight:600;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
</style>
