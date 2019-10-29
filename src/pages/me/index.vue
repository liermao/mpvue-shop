<template>
  <div>
    <div class="me-box">
      <img :src=avatarUrl class="avatarUrl">
      <button open-type="getUserInfo" @getuserinfo="getUserInfo" v-show="loginBtn">登录/注册</button>
      <span v-show="nickNameBtn" class="nickName">{{nickName}}</span>
      <div class="member" v-show="sellBtn"><img src="http://www.shmiaosuan.com/upload/hanmo/images/v.png">普通会员</div>
    </div>
    <div class="phone" v-if="phone">登录手机号，同步优惠券
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="phoneBtn">登录</button>
    </div>
    <div class="list-box box-one" @click="tuijian">
      <div class="left">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/zuanshi.png" alt="">
        <span>专享会员价</span>
      </div>
      <div class="right">
        <span>开通会员</span>
      </div>
    </div>
    <div class="list-box" @click="tuijian">
      <div class="left">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/tuijian.png" alt="">
        <span>推荐有奖</span>
      </div>
      <div class="right">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/arrow.png" alt="">
      </div>
    </div>
    <div class="list-box" @click="aboutfun">
      <div class="left">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/about.png" alt="">
        <span>关于我们</span>
      </div>
      <div class="right">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginBtn: true,
        sellBtn: false,
        avatarUrl: "",
        nickName: "",
        nickNameBtn: false,
        phone:true
      }
    },
    components: {},
    onLoad() {
      // 一进来看看用户是否授权过
      this.getSetting()
    },
    methods: {
      // 关于我们
      aboutfun() {
        wx.navigateTo({url: '/pages/aboutUs/main'})
      },
      tuijian() {
        wx.showToast({
          title: '暂未开放',
          icon: 'none',
          duration: 2000
        })
      },
      /*跳转到模板消息开发*/
      telp() {
        wx.navigateTo({url: '/pages/telp/main'})
      },
      // 获取用户的登陆状态
      getSetting() {
        let _this = this;
        wx.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                withCredentials: true,
                success: function (res) {
                  console.log(res);
                  _this.loginBtn = false;
                  _this.nickNameBtn = true;
                  _this.sellBtn = true;
                  _this.avatarUrl = res.userInfo.avatarUrl;
                  _this.nickName = res.userInfo.nickName;
                  wx.checkSession({
                    success() {
                      _this.$http.post('index.php?method52=b.hanmo.binduserinfo', {
                        encryptedData: res.encryptedData,
                        iv: res.iv
                      }).then((res1) => {
                        console.log(res1);
                      }).catch(err => {
                        console.log("错误代码", err)
                      })
                    },
                    fail() {
                      let _this = this;
                      wx.login({
                        success: resLogin => {
                          let code = resLogin.code;
                          if (code) {
                            mpvue.setStorageSync('code', code);
                            _this.$http.post('index.php?method52=b.hanmo.access', {
                              js_code: mpvue.getStorageSync('code'),
                            }).then((resUserInfo) => {
                              if (resUserInfo.success) {
                                _this.$http.post('index.php?method52=b.hanmo.binduserinfo', {
                                  encryptedData: res.encryptedData,
                                  iv: res.iv
                                }).then((data) => {
                                  console.log(data);
                                }).catch(err => {
                                  console.log("错误代码", err)
                                })
                              }
                            })
                          }
                        }
                      })
                    }
                  });
                  console.log('用户已经授权过')
                }
              })
            } else {
              _this.loginBtn = true;
              _this.nickNameBtn = false;
              _this.sellBtn = false;
              _this.avatarUrl = "http://www.shmiaosuan.com/upload/hanmo/images/avatar.png";
              console.log('用户还未授权过')
            }
          }
        })
      },
      getUserInfo(e) {
        if (wx.canIUse('button.open-type.getUserInfo')) {
          this.bindGetUserInfo(e);
        } else {
          console.log('请升级微信版本')
        }
      },
      bindGetUserInfo(e) {
        let _this = this;
        if (e.mp.detail.rawData) {
          console.log('用户按了允许授权按钮');
          wx.getUserInfo({
            withCredentials: true,
            success: function (res) {
              console.log(res);
              _this.loginBtn = false;
              _this.nickNameBtn = true;
              _this.sellBtn = true;
              _this.avatarUrl = res.userInfo.avatarUrl;
              _this.nickName = res.userInfo.nickName;
              wx.checkSession({
                success() {
                  _this.$http.post('index.php?method52=b.hanmo.binduserinfo', {
                    encryptedData: res.encryptedData,
                    iv: res.iv
                  }).then((res1) => {
                    console.log(res1);
                  }).catch(err => {
                    console.log("错误代码", err)
                  })
                },
                fail() {
                  let _this = this;
                  console.log("失效了");
                  wx.login({
                    success: resLogin => {
                      let code = resLogin.code;
                      if (code) {
                        mpvue.setStorageSync('code', code);
                        _this.$http.post('index.php?method52=b.hanmo.access', {
                          js_code: mpvue.getStorageSync('code'),
                        }).then((resUserInfo) => {
                          if (resUserInfo.success) {
                            _this.$http.post('index.php?method52=b.hanmo.binduserinfo', {
                              encryptedData: res.encryptedData,
                              iv: res.iv
                            }).then((data) => {
                              console.log(data);
                            }).catch(err => {
                              console.log("错误代码", err)
                            })
                          }
                        })
                      }
                    }
                  })
                }
              })
            }
          })
        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      },
      getPhoneNumber(e) {
        if (wx.canIUse('button.open-type.getPhoneNumber')) {
          this.bindGetPhoneNumber(e);
        } else {
          console.log('请升级微信版本')
        }
      },
      bindGetPhoneNumber(e) {
        let _this=this;
        if (e.mp.detail.encryptedData) {
          _this.$http.post('index.php?method52=b.hanmo.bindmobile&encryptedData', {
            encryptedData:e.mp.detail.encryptedData,
            iv: e.mp.detail.iv
          }).then((data) => {
            console.log(data.data.data);
            if(data.data.data){
                _this.phone=false;
            }
          }).catch(err => {
            console.log("错误代码", err)
          });


        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      },
      /*传参*/
    },

  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .me-box {
    width: unit(750, rpx);
    height: unit(340, rpx);
    background-image: url("http://www.shmiaosuan.com/upload/hanmo/images/box-bj.png");
    position: relative;
    display: flex;
    align-items: center;
    .avatarUrl {
      width: unit(136, rpx);
      height: unit(136, rpx);
      border-radius: unit(70, rpx);
      border: 2px solid #fff;
      margin-left: unit(30, rpx);
      margin-right: unit(38, rpx);
    }
    button {
      margin: 0 unit(16, rpx) 0 0;
      border: none;
      background: none;
      color: #fff;
      outline: none;
      font-size: unit(50, rpx);
      font-weight: 600;
    }
    span {
      margin: 0 unit(16, rpx) 0 0;
      color: #fff;
      outline: none;
      font-size: unit(50, rpx);
    }
    .nickName{
      max-width: unit(380, rpx);
      overflow:hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      font-size:unit(30,rpx)
    }
    .member {
      width: unit(126, rpx);
      height: unit(32, rpx);
      margin-right: unit(16, rpx);
      background: linear-gradient(90deg, rgba(25, 25, 25, 1) 0%, rgba(105, 105, 105, 1) 100%);
      border-radius: unit(16, rpx);
      font-size: unit(18, rpx);
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      display: flex;
      align-items: center;
      img {
        width: unit(26, rpx);
        height: unit(26, rpx);
        margin-left: unit(8, rpx);
        margin-right: unit(10, rpx);
      }
    }
  }

  .phone {
    width: unit(750, rpx);
    height: unit(85, rpx);
    background: rgba(255, 255, 255, 1);
    font-size: unit(26, rpx);
    font-weight: 400;
    color: rgba(44, 44, 44, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-indent: unit(30, rpx);
    .phoneBtn {
      width: unit(108, rpx);
      height: unit(60, rpx);
      border-radius: unit(60, rpx);
      border: unit(2, rpx) solid rgba(234, 195, 78, 1);
      margin: 0 unit(30, rpx) 0 0;
      text-align: center;
      padding: 0;
      line-height: unit(60, rpx);
      font-size: unit(26, rpx);
      font-weight: 400;
      color: rgba(234, 195, 78, 1);
      text-indent: 0;
    }
  }

  .list-box {
    width: unit(690, rpx);
    height: unit(104, rpx);
    background: rgba(255, 255, 255, 1);
    border-radius: unit(10, rpx);
    margin: unit(24, rpx) auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      width: unit(400, rpx);
      margin-left: unit(42, rpx);

      img {
        width: unit(42, rpx);
        height: unit(42, rpx);
        margin-right: unit(25, rpx);
      }
      span {
        font-size: unit(26, rpx);
        font-weight: 400;
        color: rgba(44, 44, 44, 1);
      }
    }
    .right {
      width: unit(200, rpx);
      text-align: right;
      img {
        width: unit(28, rpx);
        height: unit(28, rpx);
        padding-right: unit(40, rpx);
      }
    }
  }

  .box-one {
    background-image: url("http://www.shmiaosuan.com/upload/hanmo/images/huiyuan.png");
    background-size: 100% 100%;
    .left {
      span {
        color: rgba(253, 222, 167, 1);
      }
    }
    .right {
      span {
        display: block;
        width: unit(158, rpx);
        height: unit(54, rpx);
        background: linear-gradient(225deg, rgba(126, 126, 126, 1) 0%, rgba(106, 106, 106, 1) 100%);
        box-shadow: 0 unit(2, rpx) unit(8, rpx) 0 rgba(0, 0, 0, 0.1);
        border-radius: unit(27, rpx);
        font-size: unit(26, rpx);;
        font-weight: 400;
        text-align: center;
        line-height: unit(54, rpx);
        color: rgba(253, 222, 167, 1);
      }
    }
  }
</style>
