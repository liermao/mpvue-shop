<template>
  <div class="classifyDetails">
    <div class="top-header">
      <img :src=list.writer_avator class="uesrImg">
      <div>{{list.writer_name}}</div>
    </div>
      <div class="content">
        <h1>{{list.name}} | {{list.title}}</h1>
        <p><span>{{list.city}}</span><span>{{list.address}}</span><span>{{list.door}}</span></p>
        <div class="box" v-for="(item,index) in list.parts" :key="index">
          <img :src="item.imgSrc" mode="widthFix">
          <div class="title">
            <h3>{{item.name}}</h3>
            <span @click="turnList(item.id)" v-if="item.goods_ids">商品清单 ></span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: {
          id: 1,
          name: "李青羽",
          avatar: "http://www.shmiaosuan.com/upload/hanmo/images/avatar.png",
          addressName: "宝华源墅",
          addressType: "年轮",
          city:"杭州",
          VillageName:"未知小区",
          houseType:"2室2厅2卫1厨",
          WholeHouseSrc:"http://www.shmiaosuan.com/upload/hanmo/images/zhutu.png",
          WholeHouseName:"全屋场景图",
          houseList:[]
        },
      }
    },
    components: {},
    methods: {
      turnList(id){
        mpvue.navigateTo({url: '/pages/classifyList/main?id=' + id})
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
      _this.$http.get('index.php?method52=b.hanmo.designcase&id='+_this.getQuery().id).then((res) => {
        _this.list=res.data.data;
      }).catch(err => {
        console.log("错误代码", err)
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .top-header {
    width: unit(750, rpx);
    margin: 0 auto;
    display: flex;
    background: #fff;
    height: unit(126, rpx);
    align-items: center;
    img {
      display: block;
      width: unit(72, rpx);
      height: unit(72, rpx);
      border: 1px solid #ccc;
      border-radius: 36px;
      margin-right: unit(24, rpx);
      margin-left: unit(30, rpx);
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
  .content{
    width: unit(750,rpx);
    background: #fff;
    margin-top: unit(5,rpx);
    padding-bottom: unit(40,rpx);
    >h1{
      font-size:unit(42,rpx);
      font-weight:600;
      color:rgba(44,44,44,1);
      padding-top: unit(40,rpx);
      margin-bottom: unit(16,rpx);
      margin-left: unit(30,rpx);
    }
    p{
      margin-left: unit(30,rpx);
      margin-bottom: unit(40,rpx);
      span{
        font-size:unit(36,rpx);
        font-weight:400;
        color:rgba(64,64,64,1);
        padding-right: unit(10,rpx);
      }
    }
    .title{
      position: relative;
      span{
        position: absolute;
        right:0;
        top:0;

      }
    }
    .box{
      width: unit(690,rpx);
      margin :0 auto unit(40,rpx);
      img{
        width: unit(690,rpx);
      }
      h3{
        margin: unit(24,rpx) auto 0;
        font-size:unit(28,rpx);
        font-weight:600;
        color:rgba(44,44,44,1);
      }
      span{
        font-size:unit(28,rpx);
        font-weight:400;
        color:rgba(234,195,78,1);
      }
    }
  }

</style>
