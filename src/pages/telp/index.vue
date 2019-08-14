<template>
  <div>
    <!--<form report-submit='true' @submit="getFormid">-->
      <!--<button form-type="submit"> 查看/分享/首页/支付</button>-->
    <!--</form>-->
    <div>{{formid}}</div>
    <div @click="sendMsg">云开发发送消息</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        searchText:"",
        formid:'b92f5d7db9cc40e8b421a4c8f88af9ef'
      }
    },
    components: {},
    methods: {
      getFormid(e){
        console.log(e.mp.detail.formId);
        this.formid=e.mp.detail.formId;
      },
      sendMsg(){
        wx.cloud.callFunction({
          name:'raffle',
          data:{
            formId:this.formid
          },
          success(res){
            console.log(res)
          },
          fail(res){
            console.log(res)
          }
        });
      }
    },
    mounted() {

    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .search-box {
    width: unit(750, rpx);
    height: unit(140, rpx);
    position: relative;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .search {
      top: unit(32, rpx);
      width: unit(600, rpx);
      height: unit(80, rpx);
      left: unit(30, rpx);
      display: flex;
      align-items: center;
      border-radius: unit(40,rpx);
      img {
        width: unit(26, rpx);
        height: unit(26, rpx);
        margin-left: unit(22, rpx);
        margin-right: unit(16, rpx);
      }
      input {
        font-size: @theme-font-size-1;
        display: block;
        width: unit(550, rpx);

      }
    }
    .search-text{
      width: unit(100,rpx);
      text-align: center;
      font-size:unit(30,rpx);
      color:rgba(127,131,137,1);
    }
  }

  .list {
    width: unit(750, rpx);
    margin: unit(16, rpx) auto 0;
    padding-bottom: unit(16, rpx);
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
          width: unit(290,rpx);
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
