<template>
  <div>
     <ul class="collect">
       <li v-for="(item,index) in arr" :key="index" @click="detialCollent(item.id)">
           <img :src="item.img">
          <div class="box">
                 <h1>{{item.eg}}</h1>
                 <h5>{{item.cha}}</h5>
          </div>
       </li>
     </ul>
  </div>
</template>
<script>


export default {
  data () {
    return {
        arr:[
          {id:1,eg:"IKEA",cha:"宜家家居",img:"http://47.98.180.219:10085/static/images/col1.png"},
          {id:2,eg:"IKEA1",cha:"宜家家居1",img:"http://47.98.180.219:10085/static/images/col1.png"},
          {id:3,eg:"IKEA2",cha:"宜家家居2",img:"http://47.98.180.219:10085/static/images/col1.png"},
          {id:4,eg:"IKEA3",cha:"宜家家居3",img:"http://47.98.180.219:10085/static/images/col1.png"},
          {id:5,eg:"IKEA4",cha:"宜家家居4",img:"http://47.98.180.219:10085/static/images/col1.png"},
        ]
    }
  },
  components: {
  },
  methods: {
      detialCollent(id){
        mpvue.navigateTo({ url: '/pages/collectDetial/main?id='+id})
      }
  },
  created () {}
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
