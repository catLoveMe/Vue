<template>
  <div>
    <navigation></navigation>
    <titleBlock mainTitle="包装定制" subTitle="Packing" :breadArg="breadArg"></titleBlock>
    <div class="treetop">
      <div style="transform: scale(0.9);text-align: center">
        <cutoff></cutoff>
        <div id="fontBox">
          <p>一套精美的包装</p>
          <p>源自于我们的用心打造</p>
        </div>
        <div>
          <div id="upLine"></div>
          <div id="textArea">
            <p>团体定制：</p>
            <div id="ballOne">1</div>
            <p>在线设计</p>
            <div id="ballTwo">2</div>
            <p>生成模版</p>
          </div>
          <div id="downLine"></div>
        </div>
        <myPackage @clicked="change" @goBack="goback"></myPackage>
        <div id="box1">
          <img src="../../../static/image/packimg/timg1.jpg" alt="">
          <img src="../../../static/image/packimg/fontpic.png" alt="">
          <img src="../../../static/image/packimg/timg3.jpg" alt="">
          <div id="fontBox1">
            <p>个性化定制</p>
            <p>Made To Order</p>
          </div>
          <div id="fontBox2">
            <p>在包装定制方面，公司已为十多万客户提供了包装定制服务，
              我们拥有海量模版供用户选择，同时支持用户上传图片，个性定制，深受广大用户喜爱。</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt distinctio
              earum et eveniet quam voluptas. Cumque dolorem doloribus</p>
          </div>
        </div>
      </div>
      <footerBlock></footerBlock>
    </div>
  </div>
</template>
<script>
  import cutoff from "../new tea/cutoff.vue";
  import myPackage from "./package.vue"
  import titleBlock from '../common/title.vue'
  import navigation from '../common/navigation.vue'
  import footerBlock from '../common/footer.vue'
  export default {
    name:"pack",
    components:{
      cutoff:cutoff,
      myPackage:myPackage,
      navigation:navigation,
      titleBlock:titleBlock,
      footerBlock:footerBlock,
    },
    data(){
      return{
        breadArg:{
          firstTitle:"包装定制"
        }
      }
    },
    methods:{
      change(){
        var ballOne = document.getElementById("ballOne");
        var ballTwo = document.getElementById("ballTwo");
        ballOne.style.backgroundColor = "grey";
        ballTwo.style.backgroundColor = "rgb(126,173,84)"
      },
      goback(){
        var ballOne = document.getElementById("ballOne");
        var ballTwo = document.getElementById("ballTwo");
        ballOne.style.backgroundColor = "rgb(126,173,84)";
        ballTwo.style.backgroundColor = "grey"
      }
    }
  }
</script>
<style scoped>
  #fontBox{
    width: 170px;
    margin: auto;
    margin-top: -60px;
  }
  #box1{
    border-top: 1px solid rgb(242,242,242);
    position: relative;
    width: 1349px;height: 910px;
    background-image: url("../../../static/image/packimg/bg1.png");
    Background-repeat:no-repeat;
    background-position: center center;
  }
  #box1>img:nth-of-type(1){
    width: 21%;
    position: absolute;
    left: 20%;top: 60%;
  }
  #box1>img:nth-of-type(2){
    width: 28%;
    position: absolute;
    left: 38%;top: 20%;
    z-index: 1;
  }
  #box1>img:nth-of-type(3){
    width: 21%;
    position: absolute;
    left: 65.9%;top: 15%;
  }
  #fontBox1{
    position: absolute;
    left: 42%;top: 22%;
    z-index: 2;
    background-color: white;
    width: 20%;height: 9%;
  }
  #fontBox1>p:nth-of-type(1){
    margin-top: 7%;
  }
  #fontBox1>p:nth-of-type(2){
    margin-top: 5px;
    font-family: Viner Hand ITC;
  }
  #fontBox2{
    position: absolute;
    left: 40%;top: 35%;
    z-index: 2;
    background-color: white;
    width: 24%;height: 25%;
  }
  #fontBox2>p:nth-of-type(1){
    margin-top: 7%;
    margin-left: 10%;
    width: 80%;
    font-size: 0.8em;
  }
  #fontBox2>p:nth-of-type(2){
    margin-top: 25px;
    font-family: Viner Hand ITC;
  }
  #upLine{
    width: 1349px;
    border: 1px solid rgb(242,242,242);
    margin-top: 55px;
  }
  #downLine{
    width: 1349px;
    border: 1px solid rgb(242,242,242);
  }
  #textArea{
    width: 1349px;
    height: 50px;
  }
  #textArea>p:nth-of-type(1){
    font-weight: bold;
    font-size: 1.2em;
    float: left;line-height: 50px;
    margin-left: 12%;
  }
  #textArea>div:nth-of-type(1){
    line-height: 25px;color: white;
    width: 25px;height: 25px;
    border-radius: 25px;
    background-color: rgb(126,173,84);
    float: left;margin-left: 8%;margin-top: 12.5px;
  }
  #textArea>p:nth-of-type(2){
    float: left;line-height: 50px;
    margin-left: 2%;
  }
  #textArea>div:nth-of-type(2){
    line-height: 25px;color: white;
    width: 25px;height: 25px;
    border-radius: 25px;
    background-color: grey;
    float: left;margin-left: 8%;margin-top: 12.5px;
  }
  #textArea>p:nth-of-type(3){
    float: left;line-height: 50px;
    margin-left: 2%;
  }
</style>
