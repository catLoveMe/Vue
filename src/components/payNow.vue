<template>
  <div id="pay">
    <navigation></navigation>
    <mytitle mainTitle="订单支付" subTitle="Pay" :breadArg="breadArg"></mytitle>
    <div id="content">
      <img src="../assets/image/yezi1.png" class="yezi1">
      <img src="../assets/image/yezi1.png" class="yezi2">
      <img src="../assets/image/yezi1.png" class="yezi3">
      <div class="payleft">
        <div class="title">
          {{title}}
        </div>
        <div class="productshow scrollbar">
          <div class="showtea" v-for="product in data">
            <div class="showtealeft" >
              <img :src="'/apj'+product.pro_img1">
            </div>
            <div class="showtearight">
              <h4>{{product.pro_name}}</h4>
              <h5>单价：<span class="perprice">{{product.pro_price}}</span></h5>
              <h5>数量：<span class="number">{{ amount }}</span></h5>
            </div>
          </div>
        </div>
        <div class="pricedetail">
          <table>
            <tr>
              <td>商品总价</td>
              <td>￥<span>{{ data[0].pro_price*amount}}</span></td>
            </tr>
            <tr>
              <td>运费</td>
              <td>￥<span id="yunfei">{{yunfei}}</span></td>
            </tr>
          </table>
        </div>
        <div class="allpay">
          <div class="baozhuang">
            没有包装？<a href="#"> <span>立即前往></span></a>
          </div>
          <div class="allpaymoney">
            总价：<span id="orderprice">{{  data[0].pro_price*amount + parseInt(yunfei) }}.00</span>

          </div>

        </div>
      </div>
      <div class="payright">
        <table>
          <tr>
            <td>订单编号：</td>
            <td id="order_id">{{dingdannum}}</td>
          </tr>
          <tr>
            <td>送货方式：</td>
            <td>
              <select id="order_postmethod">
                <option>顺丰</option>
                <option>中通</option>
                <option>天天</option>
                <option>随机</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>是否需要发票：</td>
            <td>
              <select id="order_bill">
                <option>否</option>
                <option>是</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>支付方式：</td>
            <td>
              <select id="order_paymethod">
                <option>支付宝</option>
                <option>微信</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>收货地址：</td>
          </tr>
        </table>
        <div class="shouhuoplace">
          <ul>
            <li>收货人：<span id="order_receivername">{{shouhuomes.name}}</span></li>
            <li>地址：<span id="order_addr">{{shouhuomes.place}}</span></li>
            <li>手机：<span id="order_phone">{{shouhuomes.phone}}</span></li>
            <li>邮箱：<span >{{shouhuomes.email}}</span></li>
          </ul>
        </div>
        <div class="payrightfooter">
          <table>
            <tr>
              <td><a href="#">新增<i class="el-icon-circle-plus-outline"></i></a> </td>
              <td><a href="#">点击选择其他收藏地址</a></td>
            </tr>
            <tr>
              <td>
                <button  @click = 'giveup' id="goback">返回</button>
              </td>
              <td>
                <!--<a href="#">-->
                <button id="paysure" @click="paysure">确认支付</button>
                <!--</a>-->
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import navigation from './common/navigation.vue';
  import title from './common/title.vue';
  import foot from './common/footer.vue';
  import teaBtn from './common/teaBtn.vue';
  export default {
    name: 'pay',
    data () {
      return {
        title:"订单生成",
        breadArg:{
          firstTitle:"商城",
          secondTitle:"支付"
        },
        dingdannum:parseInt(Math.random()*100000000),
        yunfei:"10.00",
        shouhuomes:{
          name:"张三",
          place:"成都市高新区天府二街云华路",
          phone:"17812341234",
          email:"sdfs@163.com"
        },
        data:[],
        amount: 1
      }
    },
    components: {
      navigation:navigation,
      mytitle:title,
      foot:foot,
      teaBtn:teaBtn
    },
    created(){
      $(function () {
        var pricesum1 = 0;
        for(let i=0;i<$(".showtea").length;i++){
          pricesum1 += parseInt($(".perprice").eq(i).html())*parseInt($(".number").eq(i).html());
        }
        $("#price").html(pricesum1+".00");
        var allpaymoney = parseInt($("#price").html())+parseInt($("#yunfei").html());
        $(".allpaymoney span").html(allpaymoney+".00");

      });
      var that = this;
      this.amount = this.$route.query.num;
//      console.log("=========="+this.$route.query.num)
      that.$axios.get('/api/getMessPay.do',{params:{pro_id:this.$route.query.pro_id}})
        .then(resp=>{
           that.data =resp.data.data
        })

    },
    methods:{

      paysure(){
        var that = this;
        var order_id = $("#order_id").html();
        var order_postmethod = $("#order_postmethod").val();
        var order_paymethod = $("#order_paymethod").val();
        var order_receivername = $("#order_receivername").html();
        var order_bill = $("#order_bill").val();
//        var order_price = $("#order_price").val();
        if(order_bill=="是"){
          order_bill = 1;
        }else{
          order_bill = 0;
        }
        var order_addr = $("#order_addr").html();
        var order_price = parseInt($("#orderprice").html());

        console.log(that,"that");
        var arr = [];
        for(var i = 0;i<this.$store.state.cart.added.length;i++){
          arr.push(this.$store.state.cart.added[i].pro_id);
        }
        this.$axios.post("/api/addOrderOne.do",{order_id:order_id,order_postmethod:order_postmethod,
          order_paymethod:order_paymethod,order_receivername:order_receivername, order_bill:order_bill,
          order_addr:order_addr,order_price:order_price,arr:arr}).then(resp =>{
          console.log(resp.data,"=============");
        });

      },
      giveup(){
        var that = this;
        this.$confirm('确定放弃该订单吗', '提示', {
          confirmButtonText: '是的呢！',
          cancelButtonText: '要要要',
          type: 'success'
        }).then(() => {
          this.$message({
            type: 'info ',
            message: '拜拜啦!'
          });
          this.back();
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '我跟你回家！啦啦'
          });
        });
      },
      back(){
        location.href=history.go(-1)
      }

    },
    computed:{
    }
  }
</script>
<style scoped>
  @media (max-width: 768px) {
    .payleft,.payright{
      width:90% !important;
    }
    .payleft .title{
      width: 80px !important;
      left:-15px !important;
      font-size: 14px !important;
    }
    .payright{
      top: 50px !important;
      margin-bottom: 100px !important;
    }
  }
  *{
    padding: 0;
    margin: 0;
  }
  #goback{
    width: 70px;
    height: 25px;
    border-radius: 30px;
    border: 1px solid gainsboro;
    color: #8eb45e;
    background-color: transparent;
  }
  #pay{
    width: 100%;
    /*outline: 15px solid green;*/
    text-align: center;
  }
  .payrightfooter table tr td:nth-of-type(2) a[data-v-54148630]{
    font-size: initial;
  }
  #content{
    width: 100%;
    position: relative;
  }
  #content .yezi1{
    position: absolute;
    width: 150px;
    height: 160px;
    top: 25%;
    left: 5%;
    transform: rotate(30deg);
    opacity: 0.3;
  }
  #content .yezi2{
    position: absolute;
    width: 220px;
    height: 280px;
    top: 80px;
    right: 6%;
    transform: rotate(-50deg);
    opacity: 0.3;
  }
  #content .yezi3{
    position: absolute;
    width: 220px;
    height: 280px;
    bottom:110px;
    left: 40%;
    z-index: 1;
    transform: rotate(-10deg);
    opacity: 0.3;
  }
  .payleft,.payright {
    width: 30%;
    height: 700px;
    position: relative;
    margin-top: 100px;
    margin-right: 2%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px 3px 15px #E4E4E4;
    display: inline-block;
  }
  .payleft{
    top: -20px;
  }
  .payleft .title{
    width: 150px;
    height: 40px;
    position: absolute;
    left:-75px;
    top: -20px;
    font-size: 18px;
    color: #797979;
    line-height: 40px;
    z-index: 2;
    background-color: white;
    box-shadow: 2px 2px 2px #c9c9c9;
  }
  .payleft .productshow{
    width: 100%;
    height: 500px;
    overflow: auto;
    /*outline: 1px solid red;*/
  }
  .showtea{
    width: 60%;
    height: 245px;
    border-bottom: 1px solid darkgray;
    margin: 0 auto;
  }
  .showtealeft,.showtearight{
    width:50%;
    /*display: inline-block;*/
    float: left;
    height: 100%;
    text-align: center;
  }
  .showtealeft img{
    width: 100%;
    margin-top: 15%;
  }
  .showtearight h4{
    margin-top: 50%;
    font-size: 18px;
  }
  .showtearight h5{
    font-size: 14px;
    font-weight: 200;
    line-height: 2;
  }
  .pricedetail{
    width: 60%;
    margin-left: 10%;
    border-bottom: 1px solid darkgray;
    height: 100px;
  }
  .pricedetail table{
    /*outline: 1px solid red;*/
    width: 100%;
    height: 100%;
    text-align: left;
    /*margin-top: 10px;*/
  }
  .pricedetail table tr td:nth-of-type(1){
    /*outline: 1px solid red;*/
    padding-left: 10%;
    width: 80%;
  }
  .pricedetail table tr td:nth-of-type(2){
    /*outline: 1px solid red;*/
    width: 20%;
  }
  .allpay{
    width: 60%;
    margin-left: 10%;
    height: 100px;
  }
  .baozhuang{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: right;
    border-bottom: 1px solid darkgray;
  }
  .baozhuang a{
    text-decoration: none;
  }
  .baozhuang span{
    color: #8EB45E;
  }
  .allpaymoney{
    text-align: left;
    font-size: 20px;
    line-height: 50px;
    color: #8EB45E;
    font-weight: 700;
  }
  .allpaymoney span{
    color: #8EB45E;
    font-size: 16px;
    line-height: 50px;
    float: right;
    font-weight: 700;
  }
  .payright table{
    /*outline: 1px solid red;*/
    width: 80%;
    height: 300px;
    text-align: left;
  }
  .payright{
    top: -162px;
    position: relative;
    z-index: 2;
    color: #333333;
  }
  .payright table tr td:nth-of-type(1){
    /*outline: 1px solid red;*/
    /*padding-left: 10%;*/
    width: 40%;
    text-align: right;
  }
  .payright table tr td:nth-of-type(2){
    /*outline: 1px solid red;*/
    width: 60%;
    text-align: center;
  }
  .payright table tr td:nth-of-type(2) select{
    width: 80%;
    height:70%;
  }
  .shouhuoplace {
    width: 80%;
    height: 240px;
    border: 1px solid darkgray;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
  }
  .shouhuoplace ul{
    /*outline: 1px solid red;*/
    height: 80%;
    margin-top: 10%;
  }
  .shouhuoplace ul li{
    list-style-type: none;
    width: 70%;
    margin-left: 15%;
    height: 20%;
    /*outline: 1px solid red;*/
    text-align: left;
  }
  .payrightfooter{
    width: 100%;
    /*outline: 1px solid red;*/
    height: 160px;
  }
  .payrightfooter table{
    /*outline: 1px solid red;*/
    width: 100%;
    height: 100%;
    font-weight: 600;
    font-size: 18px;
  }
  .payrightfooter table tr td:nth-of-type(1){
    width: 50%;
    text-align: center;
    /*outline: 1px solid red;*/
  }
  .payrightfooter table tr td:nth-of-type(1) a{
    text-decoration: none;
    color: #8EB45E;
  }
  .payrightfooter table tr td:nth-of-type(2){
    width: 50%;
    text-align: center;
    color: #8EB45E;
    /*outline: 1px solid red;*/
  }
  .payrightfooter table tr td:nth-of-type(2) a{
    text-decoration: none;
    color: #8EB45E;
  }
  #paysure{
    width: 70%;
    height: 38px;
    background-color: #8EB45E;
    font-size: 18px;
    color: white;
    outline: none;
    border: none;
    border-radius: 30px;
  }
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
