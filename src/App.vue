<script>
  export default {
    created() {
      // 调用API从本地缓存中获取数据
      /*
       * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
       * 微信：mpvue === wx, mpvuePlatform === 'wx'
       * 头条：mpvue === tt, mpvuePlatform === 'tt'
       * 百度：mpvue === swan, mpvuePlatform === 'swan'
       * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
       */

      let _this = this;
      let url = 'index.php?method52=b.hanmo.getallclasses';
      let logs;
      wx.cloud.init();
      if (mpvuePlatform === 'my') {
        logs = mpvue.getStorageSync({key: 'logs'}).data || [];
        logs.unshift(Date.now());
        mpvue.setStorageSync({
          key: 'logs',
          data: logs
        })
      } else {
        logs = mpvue.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        mpvue.setStorageSync('logs', logs);
      }
      _this.$http.get(url).then((res) => {
        mpvue.setStorageSync('data', res.data.data);
      }).catch(err => {
        console.log("错误代码", err)
      })

    },
    log() {
      console.log(`log at:${Date.now()}`)
    },
    mounted(){
      let _this=this;
      wx.getSystemInfo({
        success (res) {
          mpvue.setStorageSync('model', res.model);
          mpvue.setStorageSync('language', res.language);
          mpvue.setStorageSync('version', res.version);
          mpvue.setStorageSync('platform', res.platform);
          mpvue.setStorageSync('system', res.system);
          mpvue.setStorageSync('brand', res.brand);
        }
      })
    },
  }
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200 rpx 0;
    box-sizing: border-box;
  }

  page {
    background: #F5F5F7;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
