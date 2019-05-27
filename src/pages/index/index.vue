<template>
  <div>
    <div class="search">
      <span class="iconfont icon-search"></span>
      <input type="text" placeholder="搜索更多家居好物">
    </div>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="500">
      <block v-for="(item, index) in movies" :index="index" :key="key">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>

  </div>
</template>

<script>

export default {
  data () {
    return {
      movies:[
        {url:"/static/images/banner.png"},
        {url:"/static/images/banner.png"},
      ],
    }
  },
  components: {
  },

  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="less">
  @import  "../../../static/fonts/iconfont.css";
  .search{
    width: 690rpx;
    height: 62rpx;
    border-radius:5px;
    margin: 24rpx 30rpx;
    border:1px solid rgba(38,38,38,1);
    display: flex;
    align-items: center;
    .icon-search{
      margin: 0 10px;
      color: #2C2C2C;
    }
    input{
      font-size:28rpx;
      display: block;
      width:610rpx;
    }
  }
  .swiper{
    height: 400rpx;
  }
  .slide-image{
    width: 100%;
  }
</style>
