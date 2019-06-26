<template>
  <div>
    <div class="me-box">
      <img :src=avatarUrl class="avatarUrl">
      <button open-type="getUserInfo" @getuserinfo="getUserInfo" v-show="loginBtn">登录/注册</button>
      <span v-show="nickNameBtn">{{nickName}}</span>
      <div class="member" v-show="sellBtn"><img src="http://47.98.180.219:10085/static/images/v.png">普通会员</div>
    </div>
    <div class="phone">登录手机号，同步优惠券<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="phoneBtn">登录</button></div>
    <div class="list-box box-one">
      <div class="left">
        <img src="http://47.98.180.219:10085/static/images/zuanshi.png" alt="">
        <span>专享会员价</span>
      </div>
      <div class="right">
           <span>开通会员</span>
      </div>
    </div>
    <div class="list-box">
      <div class="left">
        <img src="http://47.98.180.219:10085/static/images/tuijian.png" alt="">
        <span>推荐有奖</span>
      </div>
      <div class="right">
        <img src="http://47.98.180.219:10085/static/images/arrow.png" alt="">
      </div>
    </div>
    <div class="list-box"  @click="aboutfun">
      <div class="left">
        <img src="http://47.98.180.219:10085/static/images/about.png" alt="">
        <span>关于我们</span>
      </div>
      <div class="right">
        <img src="http://47.98.180.219:10085/static/images/arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginBtn:true,
        sellBtn:false,
        avatarUrl:"",
        nickName:"",
        nickNameBtn:false
      }
    },
    components: {},
    mounted(){
      // 一进来看看用户是否授权过
      this.getSetting()
    },
    methods: {
      // 关于我们
      aboutfun(){
        wx.navigateTo({url: '/pages/aboutUs/main'})
      },

      getSetting() {
        let _this=this;
        mpvue.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              mpvue.getUserInfo({
                success: function (res) {
                  console.log(res.userInfo);
                  _this.loginBtn=false;
                  _this.nickNameBtn=true;
                  _this.sellBtn=true;
                  _this.avatarUrl=res.userInfo.avatarUrl;
                  _this.nickName=res.userInfo.nickName;
                  console.log('用户已经授权过')
                }
              })
            } else {
              _this.loginBtn=true;
              _this.nickNameBtn=false;
              _this.sellBtn=false;
              _this.avatarUrl="http://47.98.180.219:10085/static/images/avatar.png";
              console.log('用户还未授权过')
            }
          }
        })
      },
      getUserInfo(e) {
        console.log('click事件首先触发');
        console.log(e);
        // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
        // console.log(wx.canIUse('button.open-type.getUserInfo'))
        if (wx.canIUse('button.open-type.getUserInfo')) {
          this.bindGetUserInfo(e);
        } else {
          console.log('请升级微信版本')
        }
      },
      bindGetUserInfo(e) {
        let _this=this;
        if (e.mp.detail.rawData) {
          console.log('用户按了允许授权按钮');
          let data=JSON.parse(e.mp.detail.rawData);

          _this.loginBtn=false;
          _this.nickNameBtn=true;
          _this.sellBtn=true;
          _this.avatarUrl=data.avatarUrl;
          _this.nickName=data.nickName;

        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      },
      getPhoneNumber(e){
        console.log('click事件首先触发');
        console.log(e);
        if (wx.canIUse('button.open-type.getUserInfo')) {
          this.bindGetPhoneNumber(e);
        } else {
          console.log('请升级微信版本')
        }
      },
      bindGetPhoneNumber(e) {
        if (e.mp.detail.encryptedData) {
          console.log('用户按了允许授权按钮');
          console.log(e.mp.detail.encryptedData);
          console.log(e.mp.detail.iv);
        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      },
    },
    created() {
    }
  }
</script>

<style scoped lang="less" >
  @import "../../../static/bass/css/bass";
    .me-box{
      width: unit(750,rpx);
      height: unit(340,rpx);
      background-image: url("http://47.98.180.219:10085/static/images/box-bj.png");
      position: relative;
      display: flex;
      align-items: center;
      .avatarUrl{
        width: unit(136,rpx);
        height: unit(136,rpx);
        border-radius: unit(70,rpx);
        border:2px solid #fff;
        margin-left: unit(30,rpx);
        margin-right: unit(38,rpx);
      }
      button{
        margin: 0  unit(16,rpx) 0 0;
        border: none;
        background: none;
        color: #fff;
        outline: none;
        font-size:unit(50,rpx);
        font-weight:600;
      }
      span{
        margin: 0  unit(16,rpx) 0 0;
        color: #fff;
        outline: none;
        font-size:unit(50,rpx);
      }
      .member{
        width:unit(126,rpx);
        height:unit(32,rpx);
        margin-right: unit(16,rpx);
        background:linear-gradient(90deg,rgba(25,25,25,1) 0%,rgba(105,105,105,1) 100%);
        border-radius:unit(16,rpx);
        font-size:unit(18,rpx);
        font-weight:400;
        color:rgba(255,255,255,1);
        display: flex;
        align-items: center;
        img{
          width: unit(26,rpx);
          height: unit(26,rpx);
          margin-left: unit(8,rpx);
          margin-right: unit(10,rpx);
        }
      }
    }
    .phone{
      width: unit(750,rpx);
      height: unit(85,rpx);
      background:rgba(255,255,255,1);
      font-size:unit(26,rpx);
      font-weight:400;
      color:rgba(44,44,44,1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-indent: unit(30,rpx);
      .phoneBtn{
        width:unit(108,rpx);
        height:unit(60,rpx);
        border-radius:unit(60,rpx);
        border:unit(2,rpx) solid rgba(234,195,78,1);
        margin: 0 unit(30,rpx) 0 0;
        text-align: center;
        padding: 0;
        line-height: unit(60,rpx);
        font-size:unit(26,rpx);
        font-weight:400;
        color:rgba(234,195,78,1);
        text-indent:0;
      }
    }
    .list-box{
      width:unit(690,rpx);
      height:unit(104,rpx);
      background:rgba(255,255,255,1);
      border-radius:unit(10,rpx);
      margin: unit(24,rpx) auto 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        display: flex;
        align-items: center;
        width: unit(400,rpx);
        margin-left: unit(42,rpx);

        img{
          width: unit(42,rpx);
          height: unit(42,rpx);
          margin-right: unit(25,rpx);
        }
        span{
          font-size: unit(26,rpx);
          font-weight:400;
          color:rgba(44,44,44,1);
        }
      }
      .right{
        width:unit(200,rpx);
        text-align: right;
        img{
          width:unit(28,rpx);
          height:unit(28,rpx);
          padding-right: unit(40,rpx);
        }
      }
    }
    .box-one{
      background-image: url("http://47.98.180.219:10085/static/images/huiyuan.png");
      background-size: 100% 100%;
      .left{
        span{
          color:rgba(253,222,167,1);
        }
      }
      .right{
        span{
          display: block;
          width:unit(158,rpx);
          height:unit(54,rpx);
          background:linear-gradient(225deg,rgba(126,126,126,1) 0%,rgba(106,106,106,1) 100%);
          box-shadow:0 unit(2,rpx) unit(8,rpx) 0 rgba(0,0,0,0.1);
          border-radius:unit(27,rpx);
          font-size:unit(26,rpx);;
          font-weight:400;
          text-align: center;
          line-height: unit(54,rpx);
          color:rgba(253,222,167,1);
        }
      }
    }
</style>
