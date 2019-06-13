<template>
  <div>
     <ul class="collect">
       <li>
           <img src="../../../static/images/col1.png" alt="">
          <div class="box">
                 <h1>IKEA</h1>
                 <h5>宜家家居</h5>
          </div>
       </li>
       <li>
         <img src="../../../static/images/col2.png" alt="">
         <div class="box">
             <h1>索菲亚</h1>
             <h5>— 全屋定制 —</h5>
         </div>
       </li>
       <li>
         <img src="../../../static/images/col3.png" alt="">
         <div class="box">
           <h1>0PPEIN</h1>
           <h5>欧派</h5>
         </div>
       </li>
       <li>
         <img src="../../../static/images/col3.png" alt="">
         <div class="box">
           <h1>0PPEIN</h1>
           <h5>欧派</h5>
         </div>
       </li>
       <li>
         <img src="../../../static/images/col3.png" alt="">
         <div class="box">
           <h1>0PPEIN</h1>
           <h5>欧派</h5>
         </div>
       </li>
       <li>
         <img src="../../../static/images/col3.png" alt="">
         <div class="box">
           <h1>0PPEIN</h1>
           <h5>欧派</h5>
         </div>
       </li>
     </ul>
  </div>
</template>
<script>


export default {
  data () {
    return {

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
  .collect{
    width: unit(750,rpx);
    li{
      position: relative;
      height: unit(370,rpx);
      width: unit(750,rpx);

      img{
        display: block;
        width: 100%;
        height: 100%;
      }
      .box{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        background: rgba(0,0,0,0.5);
          h1{
            position: absolute;
            text-align: center;
            width: 100%;
            top: unit(120,rpx);
            font-size:unit(72,rpx);
            font-weight:600;
            color:rgba(255,255,255,1);
          }
          h5{
            position: absolute;
            text-align: center;
            width: 100%;
            top: unit(220,rpx);
            font-size:unit(26,rpx);
            font-weight:400;
            color:rgba(255,255,255,1);
          }
      }
    }
  }
</style>
