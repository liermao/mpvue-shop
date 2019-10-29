<template>
  <div>
    <div class="search-box" @click="turnSearch">
      <img src="http://www.shmiaosuan.com/upload/hanmo/images/yizi.png">
      <div class="search">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/icon/search.png" alt="">
        <input type="text" placeholder="搜索更多家居好物">
      </div>
      <h2 class="index-title">{{indexTitle}}</h2>
      <div class="index-btn">软装私人订制</div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in nav" :key="index" @click="allClassify(item.url,item.id,item.childId)">
          <img :src=item.icon alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="content-box" v-for="(item,index) in imgList" :key="index" @click="turnArticle(item.id)">
        <img :src=item.cover_image alt="">
        <div class="box">
          <h2>{{item.title}}</h2>
          <!--<h5>{{item.smallTitle}}</h5>-->
          <!--<div class=""><span class="iconfont icon-Shopping"></span>5</div>-->
        </div>
      </div>
    </div>
    <div class="list">
      <div class="title">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/left.png" class="left">新品上架<img
        src="http://www.shmiaosuan.com/upload/hanmo/images/right.png" alt="" class="right">
      </div>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="detial(item.id)">
          <div class="img-box">
            <img :src=item.imgSrc alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="money" v-if="item.is_pay==='1'&&item.price">¥<span>{{item.price}}</span></div>
          <div class="money" v-if="item.is_pay==='0'&&(item.price||item.max_price)">¥<span>{{item.price}}~{{item.max_price>0?item.max_price:''}}</span>
          </div>
          <div class="money" v-if="item.price===null&&item.max_price===null">¥<span>询价</span></div>
        </li>
      </ul>
    </div>
    <div class="list">
      <div class="title">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/left.png" class="left">猜你喜欢<img
        src="http://www.shmiaosuan.com/upload/hanmo/images/right.png" alt="" class="right"></div>
      <ul>
        <li v-for="(item,index) in like" :key="index" @click="detial(item.id)">
          <div class="img-box">
            <img :src=item.imgSrc alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="money" v-if="item.is_pay==='1'&&item.price">¥<span>{{item.price}}</span></div>
          <div class="money" v-if="item.is_pay==='0'&&(item.price||item.max_price)">¥<span>{{item.price}}~{{item.max_price>0?item.max_price:''}}</span>
          </div>
          <div class="money" v-if="item.price===null&&item.max_price===null">¥<span>询价</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indexTitle: "",
        nav: [
          {
            id: 1,
            childId: 3,
            icon: "http://www.shmiaosuan.com/upload/hanmo/images/icon/furniture.png",
            title: "家具",
            url: "furniture"
          },
          {
            id: 2,
            childId: 4,
            icon: "http://www.shmiaosuan.com/upload/hanmo/images/icon/Luminaire.png",
            title: "灯灯",
            url: "furniture"
          },
          {
            id: 5,
            childId: 6,
            icon: "http://www.shmiaosuan.com/upload/hanmo/images/icon/painting.png",
            title: "画廊",
            url: "furniture"
          },
          {
            id: 9,
            childId: 10,
            icon: "http://www.shmiaosuan.com/upload/hanmo/images/icon/bed.png",
            title: "床垫",
            url: "furniture"
          },
          {
            id: 5,
            icon: "http://www.shmiaosuan.com/upload/hanmo/images/icon/style.png",
            title: "其它",
            url: "allClassify"
          },
        ],
        list: [],
        like: [],
        imgList: []
      }
    },
    components: {},
    methods: {
      detial(id) {
        mpvue.navigateTo({url: '/pages/detial/main?id=' + id})
      },
      turnSearch() {
        mpvue.navigateTo({url: '/pages/search/main'})
      },
      getQuery() {
        /* 获取当前路由栈数组 */
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        const options = currentPage.options;
        return options;
      },
      /*获取code*/
      allClassify(url, id, childId) {
        mpvue.navigateTo({url: '/pages/' + url + '/main?id=' + id + '&childId=' + childId})
      },
      turnArticle(id) {
        mpvue.navigateTo({url: '/pages/article/main?id=' + id})
      },
      /*获取数据*/
      getData(){
        let _this = this;
        //首页文字

        _this.$http.get('index.php?method52=b.hanmo.getset&key=profile').then((res) => {
          _this.indexTitle = res.data.data[0].value;
          wx.stopPullDownRefresh();
        }).catch(err => {
          console.log("错误代码", err)
        });
        //获取首页文章列表
        _this.$http.get('index.php?method52=b.hanmo.listallarticles').then((res) => {
          _this.imgList = res.data.data;
          wx.stopPullDownRefresh();
        }).catch(err => {
          console.log("错误代码", err)
        });
        //新品上架
        _this.$http.get('index.php?method52=b.hanmo.getnew').then((res) => {
          _this.list = res.data.data;
          wx.stopPullDownRefresh();
        }).catch(err => {
          console.log("错误代码", err)
        });
        //猜你喜欢
        _this.$http.get('index.php?method52=b.hanmo.getcommend').then((res) => {
          _this.like = res.data.data;
          wx.stopPullDownRefresh();
        }).catch(err => {
          console.log("错误代码", err)
        })
      }
    },
    mounted() {
      this.getData();
    },
    onShareAppMessage: function (e) {
      let _this = this;
      if (e.from === 'button') {
        // 来自页面内转发按钮
        console.log(e)
      }
      if (e.from === 'menu') {
        console.log(e)
      }
      return {
        title: '墨颜软装',
        path: '/pages/index/main?open_id=' + mpvue.getStorageSync('openID'),
        success: function (res) {
          // 转发成功
          console.log(res)
          console.log("转发成功:" + JSON.stringify(res));

        },
        fail: function (res) {
          // 转发失败
          console.log("转发失败:" + JSON.stringify(res));
        }
      }
    },
    onLoad() {
      let _this = this;
      if (this.getQuery().open_id) {
        wx.login({
          success: res => {
            // ------ 获取凭证 ------
            let code = res.code;
            if (code) {
              mpvue.setStorageSync('code', code);
              this.$http.post('index.php?method52=b.hanmo.access', {
                js_code: mpvue.getStorageSync('code'),
                platform: mpvue.getStorageSync('platform'),
                system: mpvue.getStorageSync('system'),
                version: mpvue.getStorageSync('version'),
                brand: mpvue.getStorageSync('brand'),
                model: mpvue.getStorageSync('model'),
                share_id:this.getQuery().open_id
              }).then((res) => {
                mpvue.setStorageSync('openID', res.data.data);
              })
            }
          }
        })
      } else {
        wx.login({
          success: res => {
            // ------ 获取凭证 ------
            let code = res.code;
            if (code) {
              mpvue.setStorageSync('code', code);
              _this.$http.post('index.php?method52=b.hanmo.access', {
                js_code: mpvue.getStorageSync('code'),
                platform: mpvue.getStorageSync('platform'),
                system: mpvue.getStorageSync('system'),
                version: mpvue.getStorageSync('version'),
                brand: mpvue.getStorageSync('brand'),
                model: mpvue.getStorageSync('model'),
              }).then((res) => {
                mpvue.setStorageSync('openID', res.data.data);
              })
            }
          }
        })
      }
    },
    onPullDownRefresh: function() {
      this.getData();
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
      img {
        width: unit(26, rpx);
        height: unit(26, rpx);
        margin-left: unit(22, rpx);
        margin-right: unit(16, rpx);
      }
      input {
        font-size: @theme-font-size-1;
        display: block;
        width: unit(610, rpx);
      }
    }

    .index-title {
      position: absolute;
      top: unit(250, rpx);
      text-align: center;
      width: 60%;
      left: 20%;
      font-size: unit(56, rpx);
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
      margin: unit(10, rpx) auto 0;

      li {
        text-align: center;
        margin-top: unit(46, rpx);
        img {
          display: block;
          width: unit(80, rpx);
          height: unit(80, rpx);
          margin-bottom: unit(20, rpx);
        }

        span {
          font-size: @theme-font-size-1;
          font-weight: 400;
          color: rgba(145, 145, 145, 1);
          display: block;
          margin-bottom: unit(40, rpx);
        }
      }
    }
  }

  .content {
    .content-box {
      width: unit(750, rpx);
      height: unit(422, rpx);
      margin-bottom: unit(8, rpx);
      position: relative;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
        h2 {
          text-align: center;
          color: #fff;
          margin-top: unit(143, rpx);
          font-size: @theme-font-size-8;
        }
        h5 {
          text-align: center;
          color: #fff;
          font-size: @theme-font-size-2;
          font-weight: 400;
          margin-top: unit(40, rpx);
        }
        div {
          text-align: center;
          color: #fff;
          margin-top: unit(60, rpx);
          font-size: @theme-font-size-2;
          span {
            margin-right: unit(10, rpx);
          }
        }
      }
    }
  }

  .list {
    width: unit(750, rpx);
    margin: unit(16, rpx) auto 0;
    padding-bottom: unit(16, rpx);
    background: #fff;
    .title {
      text-align: center;
      margin-bottom: unit(32, rpx);
      padding-top: unit(32, rpx);
      position: relative;
      img {
        width: unit(42, rpx);
        height: unit(24, rpx);
      }
      .left {
        margin-right: unit(20, rpx);
      }
      .right {
        margin-left: unit(20, rpx);
      }
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
          height: unit(264, rpx);
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
          width: unit(290, rpx);
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
</style>
