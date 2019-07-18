<template>
  <div>
    <div class="screen">
      <div class="screen-box">
        <h3 @click="spaceFun"><span>风格</span><img
          src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="space" v-show="spaceShow">
          <ul>
            <li v-for="(item,index) in space" :class="index===spaceIndex ? 'active' : ''" :key="index"
                @click="spaceSelect(index,item.id)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="screen-box">
        <h3 @click="styleFun"><span>地区</span><img
          src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="style" v-show="styleShow">
          <ul>
            <li v-for="(item,index) in style" :class="index===styleIndex ? 'active' : ''" :key="index"
                @click="styleSelect(index,item.id)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="screen-box">
        <h3 @click="priceFun"><span>设计师</span><img src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="price" v-show="priceShow">
          <ul>
            <li v-for="(item,index) in price" :class="index===priceIndex ? 'active' : ''" :key="index"
                @click="priceSelect(index,item.id)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="screen-box">
        <h3 @click="colorFun"><span>设计费</span><img src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="color" v-show="colorShow">
          <ul>
            <li v-for="(item,index) in color" :class="index===colorIndex ? 'active' : ''" :key="index"
                @click="colorSelect(index,item.val)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="classify">
      <li v-for="(item,index) in list" :key="index" @click="caseDetails(item.id)">
        <div class="top-header">
          <img :src="item.writer_avator" class="uesrImg">
          <div class="top-content">
            <div class="name">{{item.writer_name}}</div>
            <div class="lebal">
              {{item.writer_region}} |<span>{{item.serv_names}}</span>
            </div>
          </div>
          <div class="sell">￥{{item.price}}/㎡起</div>
        </div>
        <img :src="item.imgSrc" alt="">
        <div class="tag">{{item.type_name}}</div>
        <h3>{{item.name}} | {{item.title}}</h3>
        <p>{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [],

        space: [],
        spaceShow: false,
        spaceID: "",
        spaceIndex: 0,

        style: [],
        styleShow: false,
        styleID: "",
        styleIndex: 0,

        price: [],
        priceShow: false,
        priceID: "",
        priceIndex: 0,

        color: [],
        colorShow: false,
        colorTxt: "",
        colorIndex: 0,
      }
    },
    components: {},
    methods: {
      caseDetails(id) {
        mpvue.navigateTo({url: '/pages/classifyDetails/main?id=' + id})
      },
      spaceFun() {
        if (this.spaceShow === true) {
          this.spaceShow = false
        } else {
          this.spaceShow = true;
          this.styleShow = false;
          this.colorShow = false;
          this.priceShow = false;
        }
      },
      styleFun() {
        if (this.styleShow === true) {
          this.styleShow = false;
        } else {
          this.styleShow = true;
          this.spaceShow = false;
          this.priceShow = false;
          this.colorShow = false;
        }
      },
      priceFun() {
        if (this.priceShow === true) {
          this.priceShow = false;
        } else {
          this.priceShow = true;
          this.spaceShow = false;
          this.styleShow = false;
          this.colorShow = false;
        }
      },
      colorFun() {
        if (this.colorShow === true) {
          this.colorShow = false;
        } else {
          this.colorShow = true;
          this.spaceShow = false;
          this.styleShow = false;
          this.priceShow = false;
        }
      },
      spaceSelect(index, id) {
        this.spaceIndex = index;
        this.spaceID = id;
        this.spaceShow = false;
        this.search(this.spaceID, this.styleID, this.priceID, this.colorTxt);
      },
      styleSelect(index, id) {
        this.styleIndex = index;
        this.styleID = id;
        this.styleShow = false;
        this.search(this.spaceID, this.styleID, this.priceID, this.colorTxt);
      },
      priceSelect(index, id) {
        this.priceIndex = index;
        this.priceID = id;
        this.priceShow = false;
        this.search(this.spaceID, this.styleID, this.priceID, this.colorTxt);
      },
      colorSelect(index, val) {
        this.colorIndex = index;
        this.colorTxt = val;
        this.search(this.spaceID, this.styleID, this.priceID, this.colorTxt);
      },
      /*搜索案例*/
      search(type_id,writer_id,region_id,price) {
        this.$http.get('index.php?method52=b.hanmo.listcases&type_id='+type_id+'&writer_id='+writer_id+'&region_id='+region_id+'&price='+price+'&min_id=&iDisplayLength=10').then((res) => {
          this.list = res.data.data.aaData;
          this.colorShow = false;
          this.spaceShow = false;
          this.styleShow = false;
          this.priceShow = false;
        }).catch(err => {
          console.log("错误代码", err);
        });
      }
    },
    created() {
    },
    mounted() {
      // 获取案例列表
      let _this = this;
      _this.$http.get('index.php?method52=b.hanmo.listcases').then((res) => {
        _this.list = res.data.data.aaData;
      }).catch(err => {
        console.log("错误代码", err)
      });
      _this.$http.get('index.php?method52=b.hanmo.getcasetypes').then((res) => {

        _this.space = res.data.data.types.data;
        _this.space.unshift({
          id: "",
          name: "不限"
        });
        _this.style = res.data.data.regions.data;
        _this.style.unshift({
          id: "",
          name: "不限"
        });
        _this.price = res.data.data.writers.data;
        _this.price.unshift({
          id: "",
          name: "不限"
        });


        for (let i = 0; i < res.data.data.prices.length; i++) {
          _this.color.push({
            name: res.data.data.prices[i] + "/㎡起",
            val:'['+res.data.data.prices[i]+',)'
          })
        }
        _this.color.unshift({
          name: "不限",
          val: ""
        })
      }).catch(err => {
        console.log("错误代码", err)
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .screen {
    width: unit(750, rpx);
    height: unit(85, rpx);
    display: flex;
    box-shadow: 0 unit(6, rpx) unit(10, rpx) rgba(0, 0, 0, 0.1);
    background: #fff;
    position: relative;
    z-index: 11;
    .screen-box {
      width: unit(187.5, rpx);
      height: unit(85, rpx);
      display: flex;
      text-align: center;
      align-items: center;
      position: relative;
      h3 {
        margin: 0 auto;
        span {
          font-size: unit(28, rpx);
          color: rgba(44, 44, 44, 1);
          line-height: unit(40, rpx);
        }
        img {
          width: unit(18, rpx);
          height: unit(18, rpx);
          margin-left: unit(9, rpx);
        }
      }
      .space, .style, .price, .color {
        position: absolute;
        width: unit(750, rpx);
        background: rgba(245, 245, 247, 1);
        top: unit(85, rpx);
        left: 0;
        ul {
          display: flex;
          flex-wrap: wrap;
          padding: unit(16, rpx) 0;
          li {
            width: unit(190, rpx);
            height: unit(60, rpx);
            background: rgba(255, 255, 255, 1);
            font-size: unit(26, rpx);
            color: rgba(44, 44, 44, 1);
            border-radius: unit(30, rpx);
            margin: unit(16, rpx) unit(30, rpx);
            line-height: unit(60, rpx);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          li.active {
            background: rgba(234, 195, 78, 1);
            font-size: unit(26, rpx);
            font-weight: 400;
            color: #fff;
          }
        }
      }
      .style {
        left: unit(-187.5, rpx);
      }
      .price {
        left: unit(-375, rpx);
      }
      .color {
        left: unit(-562.5, rpx);
        h3 {
          margin-top: unit(40, rpx);
          font-size: unit(28, rpx);
          color: rgba(44, 44, 44, 1);
          text-align: left;
          margin-left: unit(60, rpx);
        }
        .color-icon {
          display: block;
          width: unit(42, rpx);
          height: unit(42, rpx);
          border-radius: 50%;
          margin-right: unit(20, rpx);
        }
      }
    }
  }

  .classify {
    li {
      width: unit(750, rpx);
      height: unit(670, rpx);
      background: #fff;
      position: relative;
      box-shadow: 0 unit(2, rpx) unit(12, rpx) 0 rgba(0, 0, 0, 0.06);
      .top-header {
        width: unit(660, rpx);
        margin: 0 auto;
        display: flex;
        height: unit(126, rpx);
        align-items: center;
        img {
          display: block;
          width: unit(72, rpx);
          height: unit(72, rpx);
          border: 1px solid #ccc;
          border-radius: 36px;
          margin-right: unit(24, rpx);
        }
        .sell {
          position: absolute;
          font-size: unit(28, rpx);
          font-weight: 400;
          color: rgba(44, 44, 44, 1);
          right: unit(40, rpx);
          top: unit(35, rpx)
        }
        .top-content {
          position: relative;
          .name {
            font-size: unit(24, rpx);
            font-weight: 400;
            color: rgba(44, 44, 44, 1);
            margin-bottom: unit(6, rpx);
          }
          .lebal {
            font-size: unit(22, rpx);
            font-weight: 400;
            color: rgba(145, 145, 145, 1);
            span {
              font-size: unit(16, rpx);
              font-weight: 400;
              color: rgba(145, 145, 145, 1);
              background: rgba(233, 233, 233, 1);
              border-radius: unit(3, rpx);
              padding: unit(2, rpx) unit(8, rpx);
              margin-left: unit(8, rpx);
            }
          }
        }
      }

      > img {
        width: unit(660, rpx);
        height: unit(365, rpx);
        display: block;
        margin: 0 auto;
      }
      h3 {
        margin-top: unit(45, rpx);
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
