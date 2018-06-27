<template>
  <div class="outBox scrollbar">
    <div class="allOrder" @click="allorderMess()">
      <span>全部订单</span>
      <span class="down">></span>
    </div>
    <orderMessCom></orderMessCom>

        <!--<div class="catCount">-->
      <!--<table>-->
        <!--<tr>-->
          <!--<td> <div class="circle"></div></td>-->
          <!--<td><span class="orderDetil">订单详情</span></td>-->
          <!--<td><span class="receive">收货人</span></td>-->
          <!--<td><span class="singlePirce">单价</span></td>-->
          <!--<td><span class="manyPro">数量</span></td>-->
          <!--<td><span class="total">总价</span></td>-->
          <!--<td><span class="address">地址</span></td>-->
          <!--<td><span class="pack">包装</span></td>-->
          <!--<td><span class="status">状态</span></td>-->
          <!--<td><span class="total">操作</span></td>-->

        <!--</tr>-->
      <!--</table>-->

    <!--</div>-->
    <!--&lt;!&ndash;"proimgsrc","proName","prohing","shopper","singlepirse","eachmount","countTotal","address","packname","stauts"&ndash;&gt;-->
    <!--<orderMessCom v-for="item in data " :proimgsrc="item.proimgsrc" :proName="item.proName" :prohing="item.prohing" :shopper="item.shopper" :singlepirse="item.singlepirse"-->
                  <!--:eachmount="item.eachmount" :countTotal="item.countTotal" :address="item.address" :packname="item.packname" :stauts="item.stauts" :id="item.id"></orderMessCom>-->
  </div>
</template>

<script>
  import orderMessCom from './orderMessCom.vue'
    export default{
      name:'orderMess',
      data:function () {
        return {

        }
      },
      components:{
          orderMessCom:orderMessCom
      },
      methods:{
        allorderMess(){
          var that = this;
          this.$axios.get("/api/allorder.do")
            .then(function (resp) {
              that.$store.state.order.orderdata = resp.data.data;
            })
        }
      }
    }
</script>

<style scoped>
  table{
    width: 1050px;
  }

  td{
    text-align: center;
  }
  *{
    font-size: 14px;
  }
  .allOrder{
    width: 120px;
    height: 35px;
    background-color: #e9e9e9;
    line-height: 35px;
    padding-left: 25px;
    margin-left: 83%;
    margin-bottom: 20px;
  }
  .down{
    display: inline-block;
    transform: rotate(90deg);
    font-size: 20px;
    margin-left: 30px;
    color: #8eb45e;
  }
  .outBox{
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
    overflow-x: auto;
    margin-left: 15px;
  }
  body{
    font-size: 14px;
  }
  @media (max-width: 768px)
  {
    body
    {
      font-size: 12px;
    }
  }
  @media  (min-width: 768px) and (max-width:1120px)
  {
    body
    {
      font-size: 13px;
    }
  }
  .catCount{
    width: 1050px;
    height: 40px;
  }
  .circle{
    width: 13px;
    height: 13px;
    border-radius: 13px;
    border: 1px solid grey;
    margin-left: 5%;
    margin-top: 1%;
    display: inline-block;
  }
  .nbS{
    font-size: 0;
  }
  .orderDetil{
    margin-left: 5%;
  }
  .receive{
    margin-left: 15%;
  }
  .singlePirce{
    margin-left: 5%;
  }
  .manyPro{
    margin-left: 5%;
  }
  .total{
    margin-left: 5%;
  }
  .address,.status{
    margin-left: 5%;
  }
  .pack{
    margin-left: 10%;
  }
  /*===============滚动条样式*/
  /*滚动条部分*/
  .scrollbar::-webkit-scrollbar{
    width:8px;
    height:8px;
  }
  .scrollbar::-webkit-scrollbar-button{
    width:8px;
    height:8px;
  }
  .scrollbar::-webkit-scrollbar-track{
    background: transparent;
    border-radius: 4px;

  }
  .scrollbar::-webkit-scrollbar-track-piece {
    background: transparent;
    border-radius: 4px;
  }
  .scrollbar::-webkit-scrollbar-thumb       {
    background: rgba(142, 180, 94, 0.51);
    border-radius:4px;
  }
  .scrollbar::-webkit-scrollbar-corner      {
    background:transparent;
  }
</style>
