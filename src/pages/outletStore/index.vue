<template>
  <div>
    <div class="search-box">
      <div class="search">
        <img src="http://47.98.180.219:10085/static/images/icon/search.png">
        <input type="text" placeholder="请输入工厂店名称" v-model="searchTxt">
      </div>
    </div>
    <ul class="collect">
      <li v-for="(item,index) in list" :key="index" @click="detialCollent(item.id)">
        <img :src=item.imgSrc alt="">
        <div class="box">
          <h1>{{item.name}}</h1>
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
        searchTxt: "",
        arr: []
      }
    },
    props: {},
    computed: {
      list: function () {
        let _this=this;
        let arrByZM = [];
        for (let i = 0; i < _this.arr.length; i++) {
          if (_this.arr[i].name.search(_this.searchTxt) != -1) {
            arrByZM.push(_this.arr[i]);
          }
        }
        return arrByZM;
      }
    },
    mounted(){
      let _this = this;
      // 工厂店
      _this.$http.get('index.php?method52=b.hanmo.listfactories&name=&min_id=&iDisplayLength=10').then((res) => {
        _this.arr=res.data.data.aaData;
      }).catch(err => {
        console.log("错误代码", err)
      })
    },
    components: {},
    methods: {
      detialCollent(id) {
        mpvue.navigateTo({url: '/pages/collectDetial/main?type=factory&id=' + id})
      }
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
      }
    }
  }
</style>
