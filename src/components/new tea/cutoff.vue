<template>
  <div id="cutoff">
    <div>
      <img src="../../../static/image/new_tea_image/6.png" alt="">
      <div id="line1"></div>
      <p>{{msg}}</p>
      <div id="line2"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"cutoff",
    props:["msg"]
  }
</script>
<style>
  #cutoff{
    /*background-color: pink;*/
    position: relative;
    width: 100%;
    height: 100px;
    text-align: center;
  }
  #cutoff>div{
    display: inline-block;
    /*background-color: #942a25;*/
    width: 80%;
    margin: 40px 0;
  }
  #cutoff img{
    /*position: absolute;*/
    /*left: 5%;top: 10%;*/
    vertical-align: middle;
  }
  #cutoff>div>div:nth-of-type(1){
    width: 20%;
    border-bottom: 1px solid rgb(228,228,228);
    /*position: absolute;*/
    /*left: 14%;top: 60%;*/
    display: inline-block;
    vertical-align: middle;
  }
  #cutoff>div>div:nth-of-type(2){
    width: 30%;
    border-bottom: 1px solid rgb(228,228,228);
    /*position: absolute;*/
    /*left: 55%;top: 60%;*/
    display: inline-block;
    vertical-align: middle;
  }
  #cutoff p{
    color: grey;
    width: 20%;
    display: inline-block;
    vertical-align: middle;
    margin: 0 20px;
  }
</style>
