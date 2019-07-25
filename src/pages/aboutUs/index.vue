<template>
  <div class="aboutUs">
    <img src="http://www.shmiaosuan.com/upload/hanmo/images/about-top.png" alt="">
    <div>
      <div class="title">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/left.png" class="left">关于我们<img
        src="http://www.shmiaosuan.com/upload/hanmo/images/right.png" alt="" class="right">
      </div>
      <p>
        阿拉工作室是一家集软装全案、家具家私定制、艺术品陈设、智能新科技、美学生活馆等通过对上游供应厂商与下游客户需求整条产业链的整合，工作室针对每一个使用者提供专业的空间规划和设计能力，透过色彩、材质的纹理及质地，雕塑空间的层次，极致匠心，挖掘居家背后深度的人文关怀，推崇精致却不失个性的空间布置，为您打造集舒适、温馨、美好的家！</p>
      <img src="http://www.shmiaosuan.com/upload/hanmo/images/about-1.png" alt="">
    </div>
    <div>
      <div class="title">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/left.png" class="left">我们团队<img
        src="http://www.shmiaosuan.com/upload/hanmo/images/right.png" alt="" class="right">
      </div>
      <p>阿拉工作室主创人员均毕业于中国美院，作品遍布江浙沪地标营销中心、样板房、顶级平层私宅和别墅，代表作品有：湘湖壹号、武林壹号、武林外滩、新华园、蓝色钱江、万科翡翠园、绿城晓荷江南、西房拱辰外滩……等。</p>
      <div class="about-user">
        <ul>
          <li>
            <img src="http://www.shmiaosuan.com/upload/hanmo/images/about-top1.png" alt="">
            <h3>周瑾</h3>
            <h5>主理人</h5>
          </li>
          <li>
            <img src="http://www.shmiaosuan.com/upload/hanmo/images/about-top2.png" alt="">
            <h3>李彬</h3>
            <h5>创始合伙人</h5>
          </li>
          <li>
            <img src="http://www.shmiaosuan.com/upload/hanmo/images/about-top3.png" alt="">
            <h3>罗小燕</h3>
            <h5>创始合伙人</h5>
          </li>
        </ul>
      </div>
    </div>
    <div class="last">
      <div class="title">
        <img src="http://www.shmiaosuan.com/upload/hanmo/images/left.png" class="left">联系我们<img
        src="http://www.shmiaosuan.com/upload/hanmo/images/right.png" alt="" class="right">
      </div>
      <h2>927-243534</h2>
      <h4>浙江省宁波市xxx路xxx号</h4>
      <h6>youxiangdizhi@xxx.com</h6>
      <button>立即咨询</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    mounted() {
    },
    methods: {},
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/bass/css/bass";
  .aboutUs{

    >img{
      width: unit(750,rpx);
      height: unit(370,rpx);
    }
    >div{
      margin-top: unit(16,rpx);
      background: #fff;
      .title {
        text-align: center;
        padding-top: unit(32, rpx);
        padding-bottom: unit(32, rpx);
        position: relative;
        border-bottom: unit(2,rpx) solid #D9D9D9;
        img {
          width: unit(42, rpx);
          height: unit(24, rpx);
        }
        .left {
          margin-right: unit(20, rpx);
        }
        .right {
          margin-left: unit(20, rpx);
        }
      }
      p{
        padding: unit(33,rpx) unit(38,rpx);
        font-size:unit(26,rpx);
        font-weight:400;
        color:rgba(44,44,44,1);
        line-height:unit(48,rpx);
      }
      >img{
        display: block;
        width: unit(690,rpx);
        height: unit(300,rpx);
        margin: unit(19,rpx) auto;
      }
      ul{
        display: flex;
        align-items: center;
        li{
          width:unit(140,rpx);
           margin: unit(60,rpx);
          img{
            display: block;
            width: unit(120,rpx);
            height: unit(120,rpx);
            margin: 0 auto;
          }
          h3{
            font-size:unit(26,rpx);
            font-weight:600;
            color:rgba(44,44,44,1);
            text-align: center;
            margin-top: unit(16,rpx);
            margin-bottom: unit(8,rpx);
          }
          h5{
            text-align: center;
            font-size:unit(26,rpx);
            font-weight:400;
            color:rgba(90,90,90,1);
          }
        }

      }
      >h2{
        text-align: center;
        font-style: oblique;
        font-size:unit(50,rpx);
        font-weight:600;
        color:rgba(44,44,44,1);
        margin-top:unit(48,rpx);
        margin-bottom: unit(32,rpx);
      }
      >h4{
        text-align: center;
        font-size:unit(30,rpx);
        font-weight:500;
        color:rgba(44,44,44,1);
        margin-bottom: unit(32,rpx);
      }
      >h6{
        text-align: center;
        font-size:unit(26,rpx);
        font-weight:500;
        color:rgba(44,44,44,1);
        margin-bottom: unit(48,rpx);
      }
      button{
        width:unit(190,rpx);
        height:unit(70,rpx);
        background:rgba(234,195,78,1);
        border-radius:unit(5,rpx);
        font-size:unit(30,rpx);
        font-weight:600;
        color:rgba(255,255,255,1);
        margin-bottom: unit(48,rpx);
      }

    }
    .last{
      padding-bottom: unit(50,rpx);
    }
  }

</style>
