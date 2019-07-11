<template>
  <div>
    <div class="search-box">
      <div class="search">
        <img src="http://47.98.180.219:10085/static/images/icon/search.png">
        <input type="text" placeholder="请输入软装名称" v-model="searchTxt">
      </div>
    </div>
    <scroll-view scroll-x="true"
                 style=" white-space: nowrap; display: flex"
                 class="nav"
                 :scroll-into-view="navId"
                 scroll-with-animation="true">
      <div class="name"
           v-for="(item,index) in navList"
           :key="index"
           :id="'nav_'+index"
           :class="index===currentIndex ? 'active' : ''"
           @tap="toContent(index,item.id)">{{item.name}}
      </div>
    </scroll-view>
    <div class="screen">
      <div class="screen-box">
        <h3 @click="spaceFun"><span>空间</span><img
          src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="space" v-show="spaceShow">
          <ul>
            <li v-for="(item,index) in space" :class="index===spaceIndex ? 'active' : ''" :key="index"
                @click="spaceSelect(index,item.id,item.value)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="screen-box">
        <h3 @click="styleFun"><span>风格</span><img
          src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="style" v-show="styleShow">
          <ul>
            <li v-for="(item,index) in style" :class="index===styleIndex ? 'active' : ''" :key="index"
                @click="styleSelect(index,item.id,item.value)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="screen-box">
        <h3 @click="priceFun"><span>价格</span><img src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="price" v-show="priceShow">
          <ul>
            <li v-for="(item,index) in price" :class="index===priceIndex ? 'active' : ''" :key="index"
                @click="priceSelect(index,item.id,item.value)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="screen-box">
        <h3 @click="colorFun"><span>筛选</span><img src="http://47.98.180.219:10085/static/images/icon/down.png"></h3>
        <div class="color" v-show="colorShow">
          <h3>颜色</h3>
          <ul>
            <li v-for="(item,index) in color" :class="index===colorIndex ? 'active' : ''" :key="index"
                @click="colorSelect(index,item.id,item.value)">
              <span class="color-icon"
                    :style={background:item.value}></span>{{item.name}}
            </li>
          </ul>
          <h3>材质</h3>
          <ul>
            <li v-for="(item,index) in material" :class="index===materialIndex ? 'active' : ''" :key="index"
                @click="materialSelect(index,item.id,item.value)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="detial(item.id)">
          <div class="img-box">
            <img :src=item.imgSrc alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="money">¥<span>{{item.price}}</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "index",
    data() {
      return {
        navList: [],
        furnitureId: "",
        searchTxt: "",
        currentIndex: 0,
        type: 2,
        space: [],
        spaceShow: false,
        spaceID: "",
        spaceTxt: "",
        spaceIndex: 0,

        style: [],
        styleShow: false,
        styleID: "",
        styleTxt: "",
        styleIndex: 0,

        price: [],
        priceShow: false,
        priceID: "",
        priceTxt: "",
        priceIndex: 0,

        material: [],
        materialIndex: 0,
        materialTxt: "",
        materialID: "",

        color: [],
        colorShow: false,
        colorID: "",
        colorTxt: "",
        colorIndex: 0,
        list: [],
      }
    },
    methods: {
      toContent(index, type) {
        let _this = this;
        _this.currentIndex = index;
        _this.type = type;
        _this.navId = `nav_${index}`;
        //这儿不知道传什么值合适
        _this.$http.get('index.php?method52=b.goods.gettypesbyid&id=' +type).then((res) => {
          _this.space = res.data.data.space;
          _this.material = res.data.data.material;
          _this.style = res.data.data.style;
          _this.price = res.data.data.price;
          _this.color = res.data.data.color;
        }).catch(err => {
          console.log("错误代码", err)
        });

        _this.$http.get('index.php?method52=b.goods.query&class_id=' + type).then((res) => {
          _this.list = res.data.data.aaData;
        }).catch(err => {
          console.log("错误代码", err)
        })
      },
      detial(id) {
        mpvue.navigateTo({url: '/pages/detial/main?id=' + id})
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
      spaceSelect(index, id, val) {
        this.spaceIndex = index;
        this.spaceID = id;
        this.spaceTxt = val;
        this.spaceShow = false;
        this.search(this.spaceTxt, this.styleTxt, this.priceTxt, this.colorTxt, this.materialTxt);
      },
      styleSelect(index, id, val) {
        this.styleIndex = index;
        this.styleID = id;
        this.styleTxt = val;
        this.styleShow = false;
        this.search(this.spaceTxt, this.styleTxt, this.priceTxt, this.colorTxt, this.materialTxt);
      },
      priceSelect(index, id, val) {
        this.priceIndex = index;
        this.priceID = id;
        this.priceTxt = val;
        this.priceShow = false;
        this.search(this.spaceTxt, this.styleTxt, this.priceTxt, this.colorTxt, this.materialTxt);
      },
      colorSelect(index, id, val) {
        this.colorIndex = index;
        this.colorID = id;
        this.colorTxt = val;
        this.search(this.spaceTxt, this.styleTxt, this.priceTxt, this.colorTxt, this.materialTxt);
      },
      materialSelect(index, id, val) {
        this.materialIndex = index;
        this.materialID = id;
        this.materialTxt = val;
        this.colorShow = false;
        this.search(this.spaceTxt, this.styleTxt, this.priceTxt, this.colorTxt, this.materialTxt);
      },
      // 数组去重数组
      uniq(array) {
        var temp = [];
        var index = [];
        var l = array.length;
        for (var i = 0; i < l; i++) {
          for (var j = i + 1; j < l; j++) {
            if (array[i] === array[j]) {
              i++;
              j = i;
            }
          }
          temp.push(array[i]);
          index.push(i);
        }
        return temp;
      },
      search(spaceTxt, styleTxt, priceTxt, colorTxt, materialTxt) {
        let _this=this;
          _this.$http.get('index.php?method52=b.goods.query&style='+styleTxt+'&space='+spaceTxt+'&price='+priceTxt+'&color='+colorTxt+'&material='+materialTxt+'&class_id='+_this.$root.$mp.query.id+'&min_id=9&iDisplayLength=10').then((res)=>{
           console.log(res);
            _this.list=res.data.data.aaData;
        }).catch(err=>{
          console.log("错误代码",err)
        })
      }
    },
    mounted() {
      let _this = this;
      //获取本地数据
      let arr = mpvue.getStorageSync('data');
      for (let i = 0; i < arr.length; i++) {
        if (_this.$root.$mp.query.parent_id== arr[i].id) {
          _this.navList = arr[i].children;
        }
      }
      _this.$http.get('index.php?method52=b.goods.gettypesbyid&id=' + _this.$root.$mp.query.id).then((res) => {
        _this.space = res.data.data.space;
        _this.material = res.data.data.material;
        _this.style = res.data.data.style;
        _this.price = res.data.data.price;
        _this.color = res.data.data.color;
      }).catch(err => {
        console.log("错误代码", err)
      });
      _this.$http.get('index.php?method52=b.goods.query&class_id=' + _this.$root.$mp.query.id).then((res) => {
        _this.list = res.data.data.aaData;
      }).catch(err => {
        console.log("错误代码", err)
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .nav {
    padding-top: unit(20, rpx);
    height: unit(85, rpx);
    background: #fff;
    box-shadow: 0 unit(6, rpx) unit(10, rpx) 0 rgba(0, 0, 0, 0.1);
    line-height: unit(60, rpx);
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
  .screen {
    width: unit(750, rpx);
    height: unit(85, rpx);
    display: flex;
    box-shadow: 0 unit(6, rpx) unit(10, rpx) rgba(0, 0, 0, 0.1);
    background: #fff;
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
  .list {
    width: unit(750, rpx);
    margin: unit(16, rpx) auto 0;
    padding-bottom: unit(16, rpx);
    background: #fff;

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
</style>
