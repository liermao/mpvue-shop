<template>
  <div>
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
  </div>
</template>

<script>


  export default {
    data() {
      return {}
    },

    components: {},
    mounted(){
      // 一进来看看用户是否授权过
      this.getSetting()
    },
    methods: {
      getSetting() {
        mpvue.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              mpvue.getUserInfo({
                success: function (res) {
                  console.log(res.userInfo);
                  //用户已经授权过
                  console.log('用户已经授权过')
                }
              })
            } else {
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
        if (e.mp.detail.rawData) {
          console.log('用户按了允许授权按钮');
          console.log(e.mp.detail.rawData);
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

<style scoped lang="less">

</style>
