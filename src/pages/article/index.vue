<template>
  <div class="p-article">
    <h3 class="title">{{data.title}}</h3>
    <h6 class="date">{{data.date_modify}}</h6>
    <div class="content">

    </div>
    <div class="list-title">商品列表</div>
    <ul class="list">
      <li v-for="(item,index) in data.goods" :key="index" >
        <div class="img"><img :src="item.imgSrc" mode="widthFix"></div>
        <div class="content">
          <div class="name">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
          <div class="detial" @click="detial(item.id)">立即查看</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: "",
        content:""
      }
    },
    components: {},
    methods: {
      detial(id) {
        mpvue.navigateTo({url: '/pages/detial/main?id=' + id})
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

      let _this = this;
      // 商品详情
      _this.$http.get('index.php?method52=b.hanmo.queryarticle&id=' + _this.getQuery().id).then((res) => {
        _this.data = res.data.data;
        _this.content=res.data.data.content.replace(/\<img/g, '<img style="max-width:100%;height:auto;" ');
      }).catch(err => {
        console.log("错误代码", err)
      })
    },

  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";

  .p-article {
    padding: 35px;
    background: #fff;
    color: #999;
    line-height: 1.6;
  }

  .title {
    font-size: unit(46, rpx);
    color: #333;
  }

  .date {
    margin-bottom: unit(20, rpx);
    font-size: unit(28, rpx);
  }

  .content {
    font-size: unit(30, rpx);
    color: #333333;
    img {
      margin: unit(30, rpx) auto;
    }
  }

  .list-title {
    margin-top: unit(30, rpx);
    height: unit(40, px);
    line-height: unit(40, px);
    text-align: center;
    color: #666;
    font-size: unit(30, rpx);
    background: #ccc;
  }

  .list {
    margin-top: unit(40, rpx);
    li {
      display: flex;
      align-items: center;
      margin:unit(40,rpx) auto;
      .img {
        width: unit(200, rpx);
        height: unit(200, rpx);
        display: flex;
        align-items: center;
        margin-right: unit(70, rpx);
        img {
          width: unit(200, rpx);
        }
      }
      .price {
        font-size: @theme-font-size-2;
        font-weight: 600;
        color: rgba(235, 195, 78, 1);
        margin: unit(20,rpx) auto;
      }
      .detial{
        width: unit(200,rpx);
        height: unit(50,rpx);
        background:rgba(235, 195, 78, 1);
        color: #fff;
        text-align: center;
        line-height: unit(50,rpx);
        border-radius: unit(10,rpx);
      }
    }
  }
</style>
