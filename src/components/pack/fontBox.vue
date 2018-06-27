<template>
  <div id="box3-sub2">
    <textarea name="" id="fontArea" cols="35" rows="6" placeholder="添加文字"></textarea>
    <h3>字体&nbsp;:</h3>
    <select name="" id="fontFamily">
      <option value="">选择字体</option>
      <option value="SimSun">宋体</option>
      <option value="	KaiTi">楷体</option>
      <option value="	Microsoft YaHei">微软雅黑</option>
    </select>
    <div>
    <p @click="bolder">B</p>
    </div>
    <div @click="getColor" id="changeColor">
      <button>颜色:</button>
      <div id="colorBox">
        <div id="triangle-up"></div>
        <div class="red" @click="changeColor"></div>
        <div class="green" @click="changeColor"></div>
        <div class="yellow" @click="changeColor"></div>
        <div class="pink" @click="changeColor"></div>
      </div>
    </div>
    <div>
      <p style="float: left">旋转：</p>
      <input type="text" id="rotateFont" v-on:change="rotateFont"/>
    </div>
    <button id="createFont" @click="createFont">生成字体</button>
  </div>
</template>
<script>
    export default {
      name:"fontBox",
      methods: {
//      获取调色盘
        getColor(){
          var changeColorObj = document.getElementById("changeColor");
          if (changeColorObj.style.overflow == "visible") {
            changeColorObj.style.overflow = "hidden"
          } else {
            changeColorObj.style.overflow = "visible"
          }
        },
//      生成文字
        createFont(){
          var canvas = document.getElementById("myCanvas");
          var text = document.getElementById("fontArea").value;
          var ctx = canvas.getContext("2d");
          var fontFamily = document.getElementById("fontFamily").value;
          ctx.clearRect(0, 0, 1000, 400);
          ctx.font = "bold 60px" + fontFamily;
          ctx.fillText(text, 100, 100, 200);
        },
//      文字加粗
        bolder(){
          var colorBox = this.className;
          var canvas = document.getElementById("myCanvas");
          var text = document.getElementById("fontArea").value;
          var ctx = canvas.getContext("2d");
          var fontFamily = document.getElementById("fontFamily").value;
          var font_Family = fontFamily.trim();
          if (ctx.font == "bold 60px " + font_Family) {
            ctx.clearRect(0, 0, 1000, 400);
            ctx.font = "normal 60px " + font_Family;
            ctx.fillStyle = "" + colorBox;
            ctx.fillText(text, 100, 100, 200);
          } else if (ctx.font == "60px " + font_Family) {
            ctx.clearRect(0, 0, 1000, 400);
            ctx.font = "bold 60px " + font_Family;
            ctx.fillStyle = "" + colorBox;
            ctx.fillText(text, 100, 100, 200);
          }
        },
//      文字变色
        changeColor () {
          var colorBox = event.currentTarget.className;
          var canvas = document.getElementById("myCanvas");
          var text = document.getElementById("fontArea").value;
          var ctx = canvas.getContext("2d");
          var fontFamily = document.getElementById("fontFamily").value;
          ctx.clearRect(0, 0, 1000, 400);
          ctx.font = "bold 60px" + fontFamily;
          ctx.fillStyle = "" + colorBox;
          ctx.fillText(text, 100, 100, 200);
          //        console.log("颜色改变成功")
        },
//      文字旋转
        rotateFont(){
          var degree = document.getElementById("rotateFont").value;
          var newDegree = "rotate("+degree+"deg)";
          document.getElementById("subBox2").style.transform = newDegree
        }
      }
    }
</script>
<style scoped>
  #box3-sub2{
    width: 380px;
    position: relative;
    top: 20px;
  }
  #fontArea{
    width: 360px;height: 100px;
    margin-top: 20px;
    outline: none;
    font-size: 20px;
  }
  #box3-sub2>h3{
    width: 60px;font-size: 1em;
    margin-left: 10px;
    margin-top: 10px;
  }
  #box3-sub2>select{
    width: 80px;height: 25px;
    position: absolute;
    left: 75px;top: 138px;
    outline:none;
  }
  #box3-sub2>div:nth-of-type(1){
    position: absolute;
    top: 142px;left: 180px;
    width: 50px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    font-weight: bolder;
  }
  #box3-sub2>div:nth-of-type(1)>p{
    cursor: pointer;
    width: 10px;margin-left: 20px;
  }
  #box3-sub2>div:nth-of-type(2){
    overflow: hidden;
    font-size: 19px;
    width: 50px;height: 35px;
    position: absolute;
    left: 250px;top: 138px;
  }
  #box3-sub2>div:nth-of-type(2)>button{
    width: 50px;color: white;height: 25px;
    border: none;outline: none;
    background-color: rgb(126,173,84);
    border-radius: 5px;
    cursor: pointer;
  }
  #colorBox{
    margin-left: -60px;margin-top: 20px;
    width: 170px;height: 40px;
    border: 1px solid rgb(126,173,84);
  }
  #triangle-up{
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid rgb(126,173,84);
    margin-top: -20px;margin-left: 75px;
  }
  #colorBox>div:nth-of-type(2){
    width: 30px;height: 30px;
    background-color: red;
    float: left;margin-left: 10px;
    margin-top: 5px;
    cursor: pointer;
  }
  #colorBox>div:nth-of-type(3){
    width: 30px;height: 30px;
    background-color: green;
    float: left;margin-left: 10px;
    margin-top: 5px;
    cursor: pointer;
  }
  #colorBox>div:nth-of-type(4){
    width: 30px;height: 30px;
    background-color: yellow;
    float: left;margin-left: 10px;
    margin-top: 5px;
    cursor: pointer;
  }
  #colorBox>div:nth-of-type(5){
    width: 30px;height: 30px;
    background-color: pink;
    float: left;margin-left: 10px;
    margin-top: 5px;
    cursor: pointer;
  }
  #box3-sub2>div:nth-of-type(3){
    position: absolute;
    left: 17px;top: 180px;
    font-size: 18px;
    font-weight: bold;
  }
  #box3-sub2>div:nth-of-type(3)>input{
    float: left;margin-top: 2px;
    height: 20px;margin-left: 5px;
    width: 50px;outline: none;
  }
  #box3-sub2>button{
    position: absolute;
    left: 260px;top: 230px;
    width: 100px;height: 40px;
    border: none;outline:none;
    border-radius: 10px;font-size: 15px;
    cursor: pointer;color: white;
    background-color: rgb(126,173,84);
  }
</style>

