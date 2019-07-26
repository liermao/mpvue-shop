<template>
  <div>
    <div class="search-box">
      <div class="search">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/icon/search.png">
        <input type="text" placeholder="请输入工厂店名称" v-model="searchTxt">
      </div>
    </div>
    <div class="screen">
      <div class="screen-box">
        <h3 @click="stateFun"><span>国家</span><img
          src="http://www.shmiaosuan.com/upload/hanmo/images/icon/down.png"></h3>
        <div class="space" v-show="stateShow">
          <ul>
            <li v-for="(item,index) in state" :class="index===stateIndex ? 'active' : ''" :key="index"
                @click="stateSelect(index,item.id,item.children)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="screen-box">
        <h3 @click="placeFun"><span>产地</span><img
          src="http://www.shmiaosuan.com/upload/hanmo/images/icon/down.png"></h3>
        <div class="style" v-show="placeShow">
          <ul>
            <li v-for="(item,index) in place" :class="index===placeIndex ? 'active' : ''" :key="index"
                @click="placeSelect(index,item.id)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nodata" v-if="list.length === 0"><img src="http://www.shmiaosuan.com/upload/hanmo/images/nodata.png" alt=""></div>
    <ul class="collect">
      <li v-for="(item,index) in list" :key="index" @click="detialCollent(item.id)">
        <img :src="item.imgSrc">
        <div class="box">
          <h1>{{item.name}}</h1>
          <h5></h5>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>


  export default {
    data() {
      return {
        searchTxt: "",
        state: [],
        stateShow: false,
        stateIndex: 0,
        stateId:"",
        place: [],
        placeShow: false,
        placeId: 0,
        placeIndex: "",
        arr: []
      }
    },
    computed: {
      list: function () {
        let _this = this;
        let arrByZM = [];
        for (let i = 0; i < _this.arr.length; i++) {
          if (this.arr[i].name.search(_this.searchTxt) !== -1) {
            arrByZM.push(_this.arr[i]);
          }
        }
        return arrByZM;
      }
    },
    methods: {
      detialCollent(id) {
        mpvue.navigateTo({url: '/pages/collectDetial/main?type=parter&id=' + id})
      },
      stateFun() {
        this.placeShow = false;
        this.stateShow === true ? this.stateShow = false : this.stateShow = true;
      },
      stateSelect(index,id, childern) {
        this.stateIndex = index;
        this.stateShow = false;
        this.placeIndex = "";
        this.stateId=id;
        if (this.stateIndex > 0) {
          this.place = childern;
          this.search(this.stateId,this.placeId, this.searchTxt)
        } else {
          this.placeId = "";
          this.place=[];
          this.search(this.stateId,this.placeId, this.searchTxt)
        }
      },
      placeFun() {
        this.stateShow = false;
        if (this.place.length <= 0) {
          wx.showToast({
            title: '请先选择国家',
            icon: 'none',
            duration: 2000
          })
        } else {
          this.placeShow === true ? this.placeShow = false : this.placeShow = true;
        }
      },
      placeSelect(index, id) {
        this.placeIndex = index;
        this.placeId = id;
        this.placeShow = false;
        this.search(this.stateId,this.placeId, this.searchTxt)
      },
      //搜索
      search(country_id,id, val) {
        this.$http.get('index.php?method52=b.hanmo.listparters&country_id='+country_id+'&region_id=' + id + '&name' + val + '=&min_id=&iDisplayLength=10').then((res) => {
          this.arr = res.data.data.aaData;
        }).catch(err => {
          console.log("错误代码", err);
        });
      }
    },
    onShow() {
      let _this = this;
      _this.state = [];
      _this.stateShow = false;
      _this.stateIndex = 0;
      _this.place = [];
      _this.placeShow = false;
      _this.placeId = 0;
      _this.placeIndex = "";
      _this.arr = [];
      // 合作
      _this.$http.get('index.php?method52=b.hanmo.listparters').then((res) => {
        _this.arr = res.data.data.aaData;
      }).catch(err => {
        console.log("错误代码", err);
      });
      _this.$http.get('index.php?method52=b.hanmo.getallregions').then((res) => {
        _this.state = res.data.data;
        _this.state.unshift({
          id: 0,
          name: "不限"
        })
      }).catch(err => {
        console.log("错误代码", err);
      })
    },

  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .collect {
    width: unit(750, rpx);
    li {
      position: relative;
      height: unit(370, rpx);
      width: unit(750, rpx);

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .box {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        h1 {
          position: absolute;
          text-align: center;
          width: 100%;
          top: unit(120, rpx);
          font-size: unit(72, rpx);
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
        }
        h5 {
          position: absolute;
          text-align: center;
          width: 100%;
          top: unit(220, rpx);
          font-size: unit(26, rpx);
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  .screen {
    width: unit(750, rpx);
    height: unit(85, rpx);
    display: flex;
    box-shadow: 0 unit(6, rpx) unit(10, rpx) rgba(0, 0, 0, 0.1);
    background: #fff;
    .screen-box {
      width: unit(375, rpx);
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
      .space, .style {
        position: absolute;
        width: unit(750, rpx);
        background: rgba(245, 245, 247, 1);
        top: unit(85, rpx);
        left: 0;
        z-index: 555555;
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
        left: unit(-375, rpx);
      }
    }
  }
</style>
