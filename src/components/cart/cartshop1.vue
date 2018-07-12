<template>
  <div class="outBox">
    <div class="catCount">
      <span class="nbS">&nbsp;</span>
      <div class="circle"></div>
      <span class="caozuo">产品</span>
      <span class="product">商品名称</span>
      <span class="kind">规格</span>
      <span class="manyPro">数量</span>
      <span class="caozuo" >操作</span>
    </div >
    <div class="catCart scrollbar" >
      <cartCom>
      </cartCom>
    </div>

    <div class="fen">
      <p><teaBtn btnText="继续购物" btnClass="middBtn" id="btn1"></teaBtn>
        <span id="allMoney">总数:{{totalNum}}</span>
        <span class="totalMoney">总价:{{totalPrice}}</span>
      </p>
      <div class="sleect">
        <div class="circle"></div>
        <span @click="clearAllCart()">清空全部</span>
        <router-link to="/pay">
        <button class="teaBtn" id="btn2" >去结算</button>
        </router-link>
      </div>

    </div>
    <div v-for="item in data" :key="item.pro_id">
      <shopPro :proname="item.pro_name" :imgsrc="item.pro_img1" :price="item.pro_size"></shopPro>
    </div>
    <div class="likeS">
      <p>
        <router-link to="/doyoulike" active-class="active"><span>以下商品，需要重新加入购物车才能继续购买</span></router-link>
        <router-link to="/nearView" active-class="active" ><span >最近浏览</span></router-link>
        <router-link to="/myWatch" active-class="active"><span  >我的关注</span></router-link>
      </p>
      <div class="contLi">
        <router-view/>
      </div>
    </div>
  </div>



</template>
<script>
  import teaBtn from '../common/teaBtn.vue'
  import cartCom from './cartmin.vue'
  import shopPro from '../common/shopPro.vue'
  import {mapGetters,mapActions} from 'vuex' //从vuex中引入mapGetters 等


  export default{
    name: 'cartShop',
    data: function () {
      return {
          data: ''
      }
    },
    components: {
      cartCom: cartCom,
      teaBtn: teaBtn,
      shopPro: shopPro
    },
    methods: {//定义方法
      ...mapActions(['clearAllCart', "totalNum2"])//action方法中定义了commit到muations的标识
    },
    computed: {//依赖属性
      ...mapGetters(['totalNum', 'totalPrice'])
    }
  }

</script>

<style scoped>
  .teaBtn{
    outline: none;
    border: none;
    color: white;
    border-radius:30px;
    padding:9px 46px;
    background-color: #8eb45e;
  }
  .contLi{
    width: 100%;
    /*border: 1px solid blue;*/
    height: 300px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .caozuo{
    margin-left: 150px;
  }
  .active{
    padding: 3px;
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #8eb45e;
    color: white;
  }
  .likeS{
    text-align: center;
  }
  .likeS p{
    text-align: left;
    margin-left: 60px;
    margin-bottom: 5%;
  }
  .likeS p span{
    margin-left: 10px;
    margin-right: 10px;
  }
  .likeS shopPro{
    margin-left: 10%;
  }
  .fen{
    border-bottom: 1px solid gainsboro;
    margin-bottom: 5%;
    margin-left: 2%;
  }
  .sleect{
    margin-top: 20px;
    margin-bottom: 5%;
  }
  .sleect span{
    padding-left: 20px;
  }
  .totalMoney{
    margin-left: 55%;
  }
  #btn1{
    display: inline-block;
    margin-top: 20px;
    margin-left: 50px;
  }
  #btn2{
    display: inline-block;
    float: right;
    margin-right: 10%;
  }
  .catCart{
    overflow-x: auto;
    width: 100%;
    margin-bottom: 10%;
  }
  .outBox{

    margin-top: 5%;
    margin-bottom: 5%;
  }
  .catCount{
    width: 1000px;
    margin-left: 2%;
    background-color: #e9e9e9;
    height: 40px;
    position: relative;
  }
  .circle{
    width: 13px;
    height: 13px;
    border-radius: 3px;
    border: 1px solid grey;
    margin-left: 1%;
    margin-top: 1%;
    display: inline-block;
  }
  .nbS{
    font-size: 0;
  }
  .product{
    padding-left: 16%;
  }
  .kind{
    padding-left: 8%;
  }
  .singlePirce{
    padding-left: 10%;
  }
  .manyPro{
    padding-left: 14%;
  }
  .total{
    padding-left: 10%;
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
