<template>
  <div>
    <navigation></navigation>
    <div>
    <titleBlock mainTitle="新茶预约" subTitle="New Tea" :breadArg="breadArg"></titleBlock>
    <div id="box1">
      <img src="../../../static/image/new_tea_image/1.png" alt="">
      <p>新茶，是指当年春季从茶树上采摘的头几批鲜叶加工而成的茶叶
        为求其鲜嫩，一些茶农在清明节前就开始采茶，这样的茶被称为明前茶
        雨水节气前采的茶，被称为雨前茶。</p>
      <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Assumenda culpa cum dolordoloremque eligendi itaque minima quo
      quod sit, vel! Commodi deserunt est, excepturi illo impedit ipsum
      laudantium odit quia?</span></p>
    </div>
    <div id="box2">
      <img src="../../../static/image/new_tea_image/4.jpg" alt="">
      <img src="../../../static/image/new_tea_image/111.png" alt="">
      <img src="../../../static/image/new_tea_image/3.jpg" alt="">
      <img src="../../../static/image/new_tea_image/5.png" alt="">
      <img src="../../../static/image/new_tea_image/p1.png" alt="">
      <div id="triangle-bottomright"></div>
      <img src="../../../static/image/new_tea_image/img1.png" alt="">
      <div>
        <img src="../../../static/image/new_tea_image/left.png" alt="">
        <p>春季温度适中，雨量充分，再加上茶树经过了半年冬季的休养生息，使得春季茶芽肥硕，
          色泽翠绿，叶质柔软，且含有丰富的维生素，特别是氨基酸。不但使春茶滋味鲜活且香气宜人富有保健作用</p>
        <img src="../../../static/image/new_tea_image/right.png" alt="">
      </div>
    </div>
    <cutoff msg="立即预约"></cutoff>
    <div id="box3">
      <div>
        <p>选择你喜欢的茶叶：</p>
        <p>您的电话：</p>
        <p>新茶数量：</p>
      </div>
      <div>
        <select name="" id="chooseTea">
          <option :value="item.newtea_id" v-for="item in teaArr" :key="item.newtea_id">{{item.newtea_name}}</option>
        </select>
        <el-input
          name="telInput"
          id="telInput"
          placeholder=""
          v-model="input11"
          clearable>
        </el-input>
        <el-input
          name="numInput"
          id="numInput"
          placeholder=""
          v-model="input12"
          clearable>
        </el-input>
      </div>
      <div class="btnP">
      <teaBtn btnText="立即预约" btnClass="bigBtn" id="bigBtn" @clickBtn="bookNow"></teaBtn>
      <small>我们在收到您的预约消息后，3-5个工作日内联系您！</small>
      </div>
    </div>
    <div id="box4">
      <div>
        <img src="../../../static/image/new_tea_image/left1.png" alt="">
        <p>新茶，是指当年春季从茶树上采摘的头几批鲜叶加工而成的茶叶
          为求其鲜嫩，一些茶农在清明节前就开始采茶，这样的茶被称为明前茶
          雨水节气前采的茶，被称为雨前茶。
        </p>
        <img src="../../../static/image/new_tea_image/right1.png" alt="">
      </div>
      <flash></flash>
    </div>
    <div id="box5">
      <img src="../../../static/image/new_tea_image/untitled.png" alt="">
      <p style="text-align: center">鉴别新茶</p>
      <div>
        <img src="../../../static/image/new_tea_image/c1.png" alt="">
        <span>观色法</span>
        <p>新茶颜色鲜、绿意明显，旧茶则色泽发暗、发黑，绿意明显比新茶差。</p>
      </div>
      <div>
        <img src="../../../static/image/new_tea_image/c2.png" alt="">
        <span>辨别细毫法</span>
        <p>新茶颜色鲜、绿意明显，许多绿茶炒制成形后，能够形成自然的细毛，
          这样的茶叶一般是芽尖，价钱比较贵，喝起来口感清爽、甜香，是茶叶中的名品。
          但放置时间长了，会使细毛凝聚成不易察觉的小团，这样的茶叶泡出来色香味都打
          了很大的折扣。新茶细毛自然连接在叶片上，尚未脱落。、发黑，绿意明显比新茶差。
        </p>
      </div>
      <div>
        <img src="../../../static/image/new_tea_image/c3.png" alt="">
        <span>干湿分辨法</span>
        <p>新茶刚刚上市，刚刚炒出来，除非商家造假，一般比较干燥。
          旧茶因放置时间较长，返潮影响会使茶叶手感稍重，用手摩擦，
          没有那种轻脆的摩擦音。
        </p>
      </div>
      <div>
        <img src="../../../static/image/new_tea_image/c4.png" alt="">
        <span>辨味法</span>
        <p>新茶香味浓郁，新鲜自然，旧茶香味偏淡，缺少鲜味。
          个别商家旧茶能够熏上香味，但这样的茶香味道不够纯正，只要仔细，
          一般能够辨别出来。
        </p>
      </div>
    </div>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>
<script>
  import teaBtn from "../common/teaBtn.vue"
  import cutoff from "./cutoff.vue"
  import flash from "./flash.vue"
  import navigation from '../common/navigation.vue'
  import titleBlock from '../common/title.vue'
  import footerBlock from '../common/footer.vue'

    export default {
      name:"newtea",
      components:{
        footerBlock:footerBlock,
        navigation:navigation,
        titleBlock:titleBlock,
        cutoff:cutoff,
        teaBtn:teaBtn,
        flash:flash,
      },
      data() {
        return {
          input10: '',
          input11: '',
          input12: '',
          teaArr:[],
          breadArg:{
            firstTitle:'新茶预约'
          }
        }
      },
      created(){
        this.$axios.get("/api/bespeakGetData.do")
          .then(resp=>{
              this.teaArr = resp.data.data
          })
      },
      methods:{
        bookNow(){
            console.log("点击预约")
//          生成订单
          var teaname = document.getElementById("chooseTea").value;
          var telInput = document.getElementById("telInput").value;
          var numInput = document.getElementById("numInput").value;
          console.log(teaname);
            this.$axios.get("/api/bespeakYu.do",
              {params:{teaname:teaname,tel:telInput,num:numInput}})
              .then(resp=>{
                  alert("预约成功")
              })
        }
      }
    }
</script>
<style>
  .btnP{
    text-align: center;
  }
  .btnP small{
    color: lightgray;
    margin-top:30px;
  }
  *{
    margin: 0;padding: 0;
  }
  #box1{
    position: relative;
    width: 1349px;
    text-align: center;
  }
  #box2{
    position: relative;
      width: 1349px;height: 100%;
    text-align: center;
  }
  #box1>img:nth-of-type(1){
    width: 20%
  }
  #box1>p:nth-of-type(1){
    width: 40%;
    margin: 40px auto;
  }
  #box1>p:nth-of-type(2){
    width: 43%;font-size: 15px;
    margin: 3% auto;
    font-family: Viner Hand ITC;
  }
  #box2>img:nth-of-type(1){
    width: 50%;
    position: absolute;
    left: 10%;
  }
  #box2>img:nth-of-type(2){
    width: 20%;
    position: absolute;
    left: 65%;
    margin-top: 11%;
  }
  #box2>img:nth-of-type(3){
    width: 21%;
    margin-top:30%;
  }
  #box2>img:nth-of-type(4){
    width: 20%;
    position: absolute;
    left: 10%;
    margin-top: 36%;
  }
  #box2>img:nth-of-type(5){

    width: 13%;
    position: absolute;
    left: 14%;
    margin-top: 40%;
  }
  #triangle-bottomright {
    margin-top: -48%;
    width: 0;
    height: 0;
    border-bottom: 790px solid rgb(247,247,247);
    border-left: 1349px solid transparent;
    z-index: -1;
  }
  #box2>img:nth-of-type(6){
    width: 30%;
    position: absolute;
    left: 8%;
    margin-top: -28%;
  }
  #box2>div:nth-of-type(2){
    background-color: white;
    width: 28%;height: 20%;
    position: absolute;
    left: 65%;
    margin-top:-30%
  }
  #box2>div>img:nth-of-type(1){
    width: 10%;
    position: absolute;
    left: 0;top: 0;
  }
  #box2>div>img:nth-of-type(2){
    width: 10%;
    position: absolute;
    right: 0;bottom: 0;
  }
  #box2>div>p{
    color: grey;
    width: 80%;
    position: absolute;
    left: 10%;
    margin-top: 18%;
  }
  #box3{

    position: relative;
    width: 1349px;height: 500px;
  }
  #box3>div:nth-of-type(1)>p{
    color: grey;
    width: 100%;
    margin-top: 30%;
    text-align: right;
  }
  #box3>div:nth-of-type(1){
    position: absolute;
    left: 27%;top: 5%;
  }
  #chooseTea{
    border-radius: 3px;
    line-height: 40px;
    text-align: left;
    width: 20%;height: 8%;
    position: absolute;
    left: 50%;top: 11.5%;
    border: 1px solid rgb(228,228,228);
    outline: none;
  }
  #tea-sublist>span>i{
    margin-left: 90%;
  }
  #telInput{
    width: 20%;
    border: 1px solid rgb(228,228,228);
    position: absolute;
    left: 50%;
    margin-top: 110px;
  }
  #numInput{
    width: 20%;
    border: 1px solid rgb(228,228,228);
    position: absolute;
    left: 50%;
    margin-top: 155px;
  }
  #bigBtn{
    margin:320px auto 10px;
  }
  #box3>p{
    color: grey;
    margin-top: 25px;
  }
  #box4{
    width: 1349px;height: 350px;
    position: relative;
    background-color: rgb(246,246,246);
  }
  #box4>div:nth-of-type(1){
    width: 28%;height: 60%;
    position: absolute;
    left: 10%;top: 20%;
  }
  #box4>div:nth-of-type(1)>img:nth-of-type(1){
    position: absolute;
    left: 0;top: 0;
    width: 10%;
  }
  #box4>div:nth-of-type(1)>img:nth-of-type(2){
    position: absolute;
    right: 0;bottom: 0;
    width: 10%;
  }
  #box4>div:nth-of-type(1)>p{
    color: grey;
    width: 60%;
    margin: 11% auto;
  }
  #box5{
    width: 100%;height: 600px;
    position: relative;
    text-align: center;
  }
  #box5>img{
    display: inline-block;
    margin-top: 100px;
  }
  #box5>p{
    font-size: 1.5em;
    margin-top: -265px;
  }
  #box5>div:nth-of-type(1){
    width: 30%;height: 25%;
    position: absolute;
    left: 10%;top: 20%;
  }
  #box5>div:nth-of-type(1)>img{
    position: absolute;
    left: 0;top: 0;
  }
  #box5>div:nth-of-type(1)>span{
    font-size: 23px;
    position: absolute;
    left: 35%;top: 20%;
  }
  #box5>div:nth-of-type(1)>p{
    position: absolute;
    left: 33.5%;top: 50%;
  }
  #box5>div:nth-of-type(2){
    width: 30%;height: 55%;
    position: absolute;
    left: 10%;top: 45%;
  }
  #box5>div:nth-of-type(2)>img{
    position: absolute;
    left: 3%;top: 0;
  }
  #box5>div:nth-of-type(2)>span{
    font-size: 23px;
    position: absolute;
    left: 35%;top: 5%;
  }
  #box5>div:nth-of-type(2)>p{
    position: absolute;
    left: 34%;top: 20%;
  }
  #box5>div:nth-of-type(3){
    width: 30%;height: 55%;
    position: absolute;
    left: 60%;top: 21.5%;
  }
  #box5>div:nth-of-type(3)>img{
    position: absolute;
    left: 85%;top: 0;
  }
  #box5>div:nth-of-type(3)>span{
    font-size: 23px;
    position: absolute;
    left: 40%;top: 5%;
  }
  #box5>div:nth-of-type(3)>p{
    width: 65%;
    position: absolute;
    left: 3%;top: 20%;
  }
  #box5>div:nth-of-type(4){
    width: 30%;height: 55%;
    position: absolute;
    left: 60%;top: 55%;
  }
  #box5>div:nth-of-type(4)>img{
    position: absolute;
    left: 85%;top: 0;
  }
  #box5>div:nth-of-type(4)>span{
    font-size: 23px;
    position: absolute;
    left: 40%;top: 5%;
  }
  #box5>div:nth-of-type(4)>p{
    width: 65%;
    position: absolute;
    left: 3%;top: 20%;
  }
</style>
