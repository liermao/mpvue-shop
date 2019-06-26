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
          <li v-for="(detial,indexd) in item.list" :key="indexd">
            <div class="img-box">
              <img :src="detial.img">
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
        arr: [
          {
            name: "家具",
            id: 0,
            list: [
              {id: 1, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},
              {id: 2, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "茶几"},
              {id: 3, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "床床"},
              {id: 4, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "餐桌"},
              {id: 5, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "椅类"},
              {id: 6, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "柜类"},
              {id: 7, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "架类"},
              {id: 8, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "凳类"},
              {id: 9, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "儿童"},
              {id: 10, img: "http://47.98.180.219:10085/static/images/sofa.png", name: "其它"},
            ]
          },
          {
            name: "灯灯",
            id: 1,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},
            ]
          },
          {
            name: "画廊",
            id: 0,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},
            ]
          },
          {
            name: "床垫",
            id: 2,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},
            ]
          },
          {
            name: "床品",
            id: 3,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},

            ]
          },
          {
            name: "抱枕",
            id: 4,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},
            ]
          },
          {
            name: "窗帘",
            id: 5,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},

            ]
          },
          {
            name: "地毯",
            id: 6,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},

            ]
          },
          {
            name: "摆件",
            id: 7,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},
            ]
          },
          {
            name: "风水",
            id: 8,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},

            ]
          },
          {
            name: "百货",
            id: 9,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},

            ]
          },
          {
            name: "家电",
            id: 10,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},

            ]
          },
          {
            name: "其他",
            id: 11,
            list: [
              {id: "1", img: "http://47.98.180.219:10085/static/images/sofa.png", name: "沙发"},

            ]
          },
        ]
      }
    },
    components: {},
    mounted() {
    },
    methods: {
      selectFun(index, title) {
        this.activeCla = index;
        this.title = title;
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
