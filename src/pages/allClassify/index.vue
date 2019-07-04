<template>
  <div class="allClassfy">
    <scroll-view :style="{'height': '1210rpx'}" :scroll-y="true" class="left">
      <ul>
        <li v-for="(item,index) in arr" :key="index" :class="{active:activeCla==index}"
            @click="selectFun(index,item.name)">{{item.name}}
        </li>
      </ul>
    </scroll-view>
    <scroll-view :style="{'height': '1210rpx'}" :scroll-y="true" class="right">
      <div v-for="(item,index) in arr" :key="index" :class="{active:activeCla==index}">
        <h3 class="title">{{item.name}}</h3>
        <ul>
          <li v-for="(detial,indexd) in item.children" :key="indexd" @click="turnFurniture(detial.parent_id)">
            <div class="img-box">
              <img :src="detial.img_url">
            </div>
            <span>{{detial.name}}</span>
          </li>
        </ul>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeCla: 0,
        title: "",
        arr: []
      }
    },
    components: {},
    mounted() {
      let _this=this;
      _this.arr=mpvue.getStorageSync('data');
    },
    methods: {
      selectFun(index, title) {
        this.activeCla = index;
        this.title = title;
      },
      // 跳到分类详情页面
      turnFurniture(id){
        mpvue.navigateTo({url: '/pages/furniture/main?id=' + id});
      }
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .allClassfy {
    display: flex;
    padding-top: unit(16, rpx);
    .left {
      width: unit(170, rpx);
      ul {
        li {
          width: unit(170, rpx);
          height: unit(98, rpx);
          background: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: unit(98, rpx);
          position: relative;
        }
        li.active {
          background: rgba(245, 245, 247, 1);
          color: #EAC34E;
        }
        li.active:before {
          content: "";
          position: absolute;
          top: unit(15, rpx);
          left: 0;
          background: #EAC34E;
          border-radius: unit(6, rpx);
          width: unit(6, rpx);
          height: unit(60, rpx)
        }
      }
    }
    .right {
      background: #fff;
      width: unit(570, rpx);
      margin-left: unit(16, rpx);
      .title {
        font-size: unit(26, rpx);
        font-weight: 600;
        color: rgba(44, 44, 44, 1);
        margin-left: unit(30, rpx);
        margin-top: unit(30, rpx);
      }
      div{
        display: none;
        ul {
          padding: unit(24, rpx) unit(10, rpx) unit(24, rpx) unit(10, rpx);
          display: flex;
          display: -webkit-flex;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            width: unit(156, rpx);
            margin-left: unit(20, rpx);
            text-align: center;
            margin-bottom: unit(32, rpx);
            .img-box {
              width: unit(156, rpx);
              height: unit(156, rpx);
              display: flex;
              align-items: center;
              justify-content: center;

              img {
                width: 80%;
                height: 80%;
              }
            }
            span {
              font-size: unit(26, rpx);
              font-weight: 400;
              color: rgba(145, 145, 145, 1);
            }
          }
        }
      }
      div.active{
        display: block;
      }
    }
  }
</style>
