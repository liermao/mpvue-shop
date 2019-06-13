<template>
  <div>
    <ul class="classify">
      <li>
        <img src="../../../static/images/al1.png" alt="">
        <div class="tag">现代简约</div>
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al2.png" alt="">
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al1.png" alt="">
        <div class="tag">现代简约</div>
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al2.png" alt="">
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al1.png" alt="">
        <div class="tag">现代简约</div>
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al2.png" alt="">
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al1.png" alt="">
        <div class="tag">现代简约</div>
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al2.png" alt="">
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al1.png" alt="">
        <div class="tag">现代简约</div>
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
      <li>
        <img src="../../../static/images/al2.png" alt="">
        <div class="content">
          <h3>宝华源墅 | 年轮</h3>
          <p>以“年轮”为主题，有形式有寓意，以圆为元素，层层蜕变… </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    methods: {},
    created() {
    }
  }
</script>

<style scoped lang="less">
  .classify {
    li {
      width: unit(690, rpx);
      height: unit(540, rpx);
      margin: unit(24, rpx) auto 0;
      position: relative;
      img {
        width: unit(660, rpx);
        height: unit(365, rpx);
        display: block;
        margin: 0 auto;
      }
      .content {
        width: 100%;
        height: unit(440, rpx);
        background: #fff;
        position: absolute;
        top: unit(100, rpx);
        z-index: -1;
        box-shadow: 0 unit(2, rpx) unit(12, rpx) 0 rgba(0, 0, 0, 0.06);
        border-radius: unit(10, rpx);
        h3 {
          margin-top: unit(318, rpx);
          font-size: unit(28, rpx);
          margin-left: unit(40, rpx);
          font-weight: 600;
          color: rgba(44, 44, 44, 1);
        }
        p {
          width: unit(634, rpx);
          font-size: unit(24, rpx);
          margin-left: unit(40, rpx);
          font-weight: 400;
          color: rgba(44, 44, 44, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: unit(16, rpx)
        }
      }
      .tag {
        position: absolute;
        top: unit(344, rpx);
        left: unit(40, rpx);
        width: unit(110, rpx);
        height: unit(42, rpx);
        background: rgba(44, 44, 44, 1);
        box-shadow: 0 unit(2, rpx) unit(8, rpx) 0 rgba(0, 0, 0, 0.06);
        border-radius: unit(10, rpx);
        z-index: 1;
        font-size: unit(20, rpx);
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: unit(42, rpx);
      }
    }
  }
</style>
