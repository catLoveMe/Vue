<template>
  <div>
    <div id="upLine"></div>
    <div id="textArea">
      <p>团体定制：</p>
      <div>1</div>
      <p>在线设计</p>
      <div>2</div>
      <p>生成模版</p>
    </div>
    <div id="downLine"></div>
  </div>
</template>
<script>
    export default {
      name:"bread"
    }
</script>
<style scoped>
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
