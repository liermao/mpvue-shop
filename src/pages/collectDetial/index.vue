<template>
  <div class="collectDetial">
    <div class="topimg">
      <img src="http://www.shmiaosuan.com/upload/hanmo/images/col1.png">
    </div>
    <div class="top-detial">
      <div class="img-box"><img :src="data.imgSrc"></div>
      <h2>{{data.name}}</h2>
      <p>{{data.desc}}</p>
    </div>
    <scroll-view scroll-x="true"
                 :class="fixtop? 'fix':''"
                 style=" white-space: nowrap; display: flex"
                 class="nav"
                 :scroll-into-view="navId"
                 scroll-with-animation="true">
      <div class="name"
           v-for="(item,index) in nav"
           :key="index"
           :id="'nav_'+index"
           :class="index===currentIndex ? 'active' : ''"
           @tap="toContent(index,item.id)">{{item.name}}
      </div>
    </scroll-view>
    <div
      class="scroll-content"
      style="height: 800px"
      :style="{marginTop: mgTop + 'rpx'}"
    >
      <div  class="scroll-item">
        <ul>
          <li v-for="(item1,index1) in list" :key="index1" @click="turnDetial(item1.id)" v-if="item1.class_id == activeID">
            <div class="img-box">
              <img :src="item1.imgSrc" alt="">
            </div>
            <div class="name">{{item1.name}}</div>
            <div class="money">¥<span>{{item1.price}}</span></div>
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
        contentId: "con_0",
        fixtop: false, //是否吸顶
        currentIndex: 0,
        navId: "nav_0",
        scrollContent: true,
        nav:[],
        list: [],
        data:"",
        top: 215,
        mgTop: 0,
        activeID:0,
      }
    },
    components: {},
    onLoad(option){
      let _this=this;
      _this.$http.get('index.php?method52=b.hanmo.'+option.type+'&id='+option.id).then((res) => {
        console.log(res.data.data);
        _this.data=res.data.data;
        _this.nav=res.data.data.classes;
        _this.list=res.data.data.goods;
      }).catch(err => {
        console.log("错误代码", err)
      })
    },
    methods: {
      toContent(index,id) {
        this.currentIndex = index;
        this.contentId = `con_${index}`;
        this.navId = `nav_${index}`;
        this.activeID=id;
      },
      turnDetial(id){
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
    onPageScroll: function (e) {
      let that = this;
      if (e.scrollTop >= that.top) {
        that.fixtop = true;
        that.scrollContent = true;
        that.mgTop = 85;
      } else {
        that.fixtop = false;
        that.scrollContent = true;
        that.mgTop = 0;
      }
    },
    watch: {},
    mounted() {
      let _this=this;
      _this.$http.get('index.php?method52=b.hanmo.'+_this.getQuery().type+'&id='+_this.getQuery().id).then((res) => {
        _this.data=res.data.data;
        _this.nav=res.data.data.classes;
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

  .topimg {
    width: unit(750, rpx);
    height: unit(246, rpx);

    position: relative;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .topimg:after {
    content: "";
    position: absolute;
    width: unit(750, rpx);
    height: unit(246, rpx);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .top-detial {
    width: unit(750, rpx);
    height: unit(211, rpx);
    background: rgba(255, 255, 255, 1);
    border-radius: unit(30, rpx) unit(30, rpx) 0 0;
    position: relative;
    margin-top: unit(-30, rpx);
    .img-box {
      width: unit(142, rpx);
      height: unit(142, rpx);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 unit(2, rpx) unit(12, rpx) 0 rgba(0, 0, 0, 0.12);
      border-radius: unit(10, rpx);
      position: absolute;
      left: unit(30, rpx);
      top: unit(-30, rpx);
      img {
        width: unit(142, rpx);
        height: unit(142, rpx);
      }
    }
    h2 {
      margin-left: unit(205, rpx);
      padding-top: unit(24, rpx);
      margin-bottom: unit(68, rpx);
    }
    p {
      margin: 0 auto;
      width: unit(680, rpx);
      font-size: unit(26, rpx);
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }

  .menu {
    height: unit(85, rpx);
    width: unit(750, rpx);
  }

  .nav {
    height: unit(85, rpx);
    background: #fff;
    box-shadow: 0 unit(6, rpx) unit(10, rpx) 0 rgba(0, 0, 0, 0.1);
    line-height: unit(85, rpx);
    .name {
      position: relative;
      padding: 0 unit(35, rpx);
      display: inline-block;
      font-size: unit(28, rpx);
      font-weight: 400;
      color: rgba(145, 145, 145, 1);
    }
    .name.active {
      color: #EAC34E;
      border-bottom: 2px solid #EAC34E;
    }
  }

  .scroll-content {
    padding-top: unit(40, rpx);
    h2 {
      font-size: unit(30, rpx);
      font-weight: 600;
      color: rgba(44, 44, 44, 1);
      margin-bottom: unit(40, rpx);
      margin-top: unit(40, rpx);
      margin-left: unit(30, rpx);
      text-indent: unit(20, rpx);
      position: relative;
    }
    h2:before {
      content: "";
      position: absolute;
      width: unit(6, rpx);
      height: unit(40, rpx);
      top: 0;
      left: 0;
      background: rgba(234, 195, 78, 1);
    }
    ul {
      width: unit(720, rpx);
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      li {
        width: unit(330, rpx);
        height: unit(485, rpx);
        margin: unit(12, rpx) unit(15, rpx);
        box-shadow: 0 unit(2, rpx) unit(12, rpx) 0 rgba(0, 0, 0, 0.06);
        border-radius: unit(16, rpx);
        background: #fff;
        .img-box {
          width: unit(264, rpx);
          height: unit(320, rpx);
          margin: unit(40, rpx) auto unit(16, rpx);
          display: flex;
          justify-content: center; /* 水平居中 */
          align-items: center;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .name {
          font-size: @theme-font-size-1;
          font-weight: 400;
          color: rgba(44, 44, 44, 1);
          margin-left: unit(24, rpx);
          margin-bottom: unit(8, rpx);
        }
        .money {
          font-size: @theme-font-size-2;
          font-weight: 600;
          margin-left: unit(24, rpx);
          color: rgba(235, 195, 78, 1);
        }

      }
    }
  }

  .fix {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    animation: move 0.2s linear;
  }
</style>
