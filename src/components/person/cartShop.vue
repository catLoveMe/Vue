<template>
  <div class="outBox">
    <div class="catCart scrollbar" >
    <div class="catCount">
      <span class="nbS">&nbsp;</span>
      <div class="circle"></div>
      <span class="product">产品</span>
      <span class="kind">种类</span>
      <span class="singlePirce">单价</span>
      <span class="manyPro">数量</span>
      <span class="total">小计</span>
      <span class="caozuo" >操作</span>
    </div >
    <!--"imgsrc","protitle","hingpotion","typeS","singlepirce","countCart","totalCount"-->
    <cartCom      v-for="item in data"  :key="item.id"  :unquieValue='item.id' :imgsrc="item.imgsrc" :protitle="item.protitle" :hingpotion="item.hingpotion" :typeS="item.typeS"
             :singlepirce="item.singlepirce" :countCart="item.countCart" :totalCount="item.totalCount">
    </cartCom>


    <div class="fen">
      <p><teaBtn btnText="继续购物" btnClass="middBtn" id="btn1"></teaBtn>
        <span class="totalMoney">总价：<span id="allMoney"></span></span>
      </p>
      <div class="sleect">
        <div class="circle"></div>
        <span>删除选中的商品</span>
        <span>清除下架的商品</span>
        <teaBtn btnText="去结算" btnClass="middBtn" id="btn2"></teaBtn>
      </div>
  </div>
    </div>
    <div class="likeS">
      <p>
        <router-link to="/doyoulike" active-class="active"><span>猜您喜欢</span></router-link>
        <router-link to="/nearView" active-class="active" ><span >最近浏览</span></router-link>
        <router-link to="/myWatch" active-class="active"><span  >我的关注</span></router-link>
      </p>
      <div class="contLi">
      <router-view/>
      </div>
    </div>
  </div>



</template>
<!--"imgsrc","protitle","hingpotion","typeS","singlepirce","countCart","totalCount"-->
<script>
  import teaBtn from '../common/teaBtn.vue'
  import cartCom from './cartCom.vue'
  import shopPro from '../common/shopPro.vue'
    export default{
        name:'cartShop',
        data:function () {
          return {
            data:[
              {id:1,imgsrc:"lanrenzhijia1.jpg",protitle:"红茶",hingpotion:"好评",typeS:"红茶",singlepirce:"100",countCart:"2",totalCount:"100"},
              {id:2,imgsrc:"lanrenzhijia1.jpg",protitle:"白茶",hingpotion:"好评",typeS:"白茶",singlepirce:"200",countCart:"2",totalCount:"1314"},
              {id:3,imgsrc:"lanrenzhijia1.jpg",protitle:"红茶",hingpotion:"好评",typeS:"红茶",singlepirce:"300",countCart:"1",totalCount:"1043"},
              {id:4,imgsrc:"lanrenzhijia1.jpg",protitle:"白茶",hingpotion:"好评",typeS:"白茶",singlepirce:"100",countCart:"1",totalCount:"1431"}
            ],
            arr:[]
          }
        },
        components:{
          cartCom:cartCom,
          teaBtn :teaBtn,
          shopPro:shopPro
        },
      methods:{
        handleEdit() {
          var _this=this;
          console.log("in this");
        },
        aa(val){
            console.log(this.arr.length);
            this.arr.push(val);
            console.log("arr",this.arr);
            console.log();
            $("#allMoney").html("11");
        }
      }
    }

</script>

<style scoped>
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
    margin-left: 80px;
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
    border-radius: 13px;
    border: 1px solid grey;
    margin-left: 5%;
    margin-top: 1%;
    display: inline-block;
  }
  .nbS{
    font-size: 0;
  }
  .product{
    padding-left: 5%;
  }
  .kind{
    padding-left: 25%;
  }
  .singlePirce{
    padding-left: 10%;
  }
  .manyPro{
    padding-left: 10%;
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
