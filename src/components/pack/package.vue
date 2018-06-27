<template>
  <div id="mainPage">
    <div id="subPage">
      <div id="model" style="text-align: left">
        <p>样式模版</p>
        <showbox id="imgBox" v-for="item in boxArr" class="'+item.pack_mat_id+'"
        :imgsrc="item.pack_box_src" :key="item.pack_mat_id "
                 @clicked="addNew(item.pack_box_src,item.pack_mat_id)">
        </showbox>
      </div>
      <div id="box2">
        <img src="" alt="">
        <div id="subBox2">
          <canvas id="myCanvas" v-on:mousedown = "whenMouseDown(this)"></canvas>
          <div id="circleIcon" v-on:mousedown = "mouseDown(this)"></div>
        </div>
        <div id="subBox3">
          <div id="myCanvas1" v-on:mousedown = "whenMouseDown1(this)">
            <img src="" alt="">
          </div>
          <div id="circleIcon1" v-on:mousedown = "mouseDown1(this)"></div>
        </div>
      </div>
      <div id="btn1">
        <button id="clearBtn" @click="clearAll">清除</button>
      </div>
      <div id="box3">
        <div>
          <p @click="showbox1">图片</p>
          <p @click="showbox2">文字</p>
          <div id="change1">
            <imgBox ref="son"></imgBox>
          </div>
          <div id="change2">
            <fontBox></fontBox>
          </div>
        </div>
      </div>
      <div id="btn2">
        <button id="confirmBtn" @click="confirm">确认</button>
      </div>
    </div>
    <div id="canvasPage">
      <button @click="save">保存</button>
      <button @click="back">返回</button>
    </div>
  </div>
</template>
<script>
  import html2canvas from 'html2canvas'
  import showbox from "./showbox";
  import imgBox from "./imgBox.vue";
  import fontBox from "./fontBox.vue";
    export default {
      name:"myPackage",
      data(){
          return{
              boxArr:[]
          }
      },
      components:{
        showbox:showbox,
        imgBox:imgBox,
        fontBox:fontBox
      },
      created(){
        this.$axios.get("/api/showModel.do")
          .then(data=>{
              var myData = data.data.data;
              this.boxArr = myData
          })
      },
      methods:{
        //拖动box2图片
        whenMouseDown(obj){
            var bodyObj = document.body;
            var canvasObj = document.getElementById("myCanvas");
            var subBox2Obj = document.getElementById("subBox2");
            var objLeft = subBox2Obj.offsetLeft;
            var objTop = subBox2Obj.offsetTop;
            var e = window.event||arguments[0];
            var eX = e.clientX;
            var eY = e.clientY;
            bodyObj.onmousemove = function () {
              var eMove = window.event||arguments[0];
              var eMoveX = eMove.clientX;
              var eMoveY = eMove.clientY;
              var x = eMoveX-eX+objLeft;
              var y = eMoveY-eY+objTop;
              if(x<0){
                x=0;
              }
              if(x>473){
                x=473;
              }
              if(y<0){
                y=0
              }
              if(y>325){
                y=325
              }
              subBox2Obj.style.marginLeft = x+"px";
              subBox2Obj.style.marginTop = y+"px";
            };
            canvasObj.onmouseup = function () {
              bodyObj.onmousemove = null
            };
          },
        //拖动上传图片
        whenMouseDown1(obj){
          var bodyObj = document.body;
          var canvas1Obj = document.getElementById("myCanvas1");
          var subBox3Obj = document.getElementById("subBox3");
          var objLeft = subBox3Obj.offsetLeft;
          var objTop = subBox3Obj.offsetTop;
          var e = window.event||arguments[0];
          var eX = e.clientX;
          var eY = e.clientY;
          bodyObj.onmousemove = function () {
            var eMove = window.event||arguments[0];
            var eMoveX = eMove.clientX;
            var eMoveY = eMove.clientY;
            var x = eMoveX-eX+objLeft-130;
            var y = eMoveY-eY+objTop-100;
            if(x<-130){
              x= -130;
            }
            if(x>473){
              x=473;
            }
            if(y< -100){
              y= -100
            }
            subBox3Obj.style.marginLeft = x+"px";
            subBox3Obj.style.marginTop = y+"px";
          };
          canvas1Obj.onmouseup = function () {
            bodyObj.onmousemove = null
          };
        },
        //放大字体
        mouseDown(obj){
          var bodyObj = document.body;
          var model = document.getElementById("model");
          var myCanvasObj = document.getElementById("myCanvas");
          var subBox2Obj = document.getElementById("subBox2");
          var circleObj = document.getElementById("circleIcon");
          var box2Obj = document.getElementById("box2");
          var stylesheet1 = document.defaultView.getComputedStyle(subBox2Obj,null);
          var width = parseInt(stylesheet1.width);
          var height = parseInt(stylesheet1.height);
          var stylesheet2 = document.defaultView.getComputedStyle(myCanvasObj,null);
          var width1 = parseInt(stylesheet2.width);
          var height1 = parseInt(stylesheet2.height);
          var e = window.event||arguments[0];
          var eX = e.clientX-200;
          var eY = e.clientY-200;
          bodyObj.onmousemove = function () {
            var eMove = window.event||arguments[0];
            var eMoveX = eMove.clientX-200;
            var eMoveY = eMove.clientY-200;
            var x = eMoveX-eX;
            var y = eMoveY-eY;
            if(x>485){
              x=485;
            }
            if(y>545){
              y=545
            }
            subBox2Obj.style.width = width+x+"px";
            subBox2Obj.style.height = height+y+"px";
            myCanvasObj.style.width = width1+x+"px";
            myCanvasObj.style.height = height1+y+"px";
              };
                myCanvasObj.onmouseup = function () {
                bodyObj.onmousemove = null
              };
              circleObj.onmouseup = function () {
                bodyObj.onmousemove = null
              };
              box2Obj.onmouseup = function () {
                bodyObj.onmousemove = null
              };
              model.onmouseup = function () {
                bodyObj.onmousemove = null
              }
            },
        //放大上传图片
        mouseDown1(obj){
          var bodyObj = document.body;
          var model = document.getElementById("model");
          var myCanvas1Obj = document.getElementById("myCanvas1");
          var subBox3Obj = document.getElementById("subBox3");
          var circle1Obj = document.getElementById("circleIcon1");
          var box2Obj = document.getElementById("box2");
          var stylesheet1 = document.defaultView.getComputedStyle(subBox3Obj,null);
          var width = parseInt(stylesheet1.width);
          var height = parseInt(stylesheet1.height);
          var stylesheet2 = document.defaultView.getComputedStyle(myCanvas1Obj,null);
          var width1 = parseInt(stylesheet2.width);
          var height1 = parseInt(stylesheet2.height);
          var e = window.event||arguments[0];
          var eX = e.clientX;
          var eY = e.clientY;
          bodyObj.onmousemove = function () {
            var eMove = window.event||arguments[0];
            var eMoveX = eMove.clientX;
            var eMoveY = eMove.clientY;
            var x = eMoveX-eX;
            var y = eMoveY-eY;
            if(x>485){
              x=485;
            }
            if(y>545){
              y=545
            }
            subBox3Obj.style.width = width+x+"px";
            subBox3Obj.style.height = height+y+"px";
            myCanvas1Obj.style.width = width1+x+"px";
            myCanvas1Obj.style.height = height1+y+"px";
          };
          myCanvas1Obj.onmouseup = function () {
            bodyObj.onmousemove = null
          };
          circle1Obj.onmouseup = function () {
            bodyObj.onmousemove = null
          };
          box2Obj.onmouseup = function () {
            bodyObj.onmousemove = null
          };
          model.onmouseup = function () {
            bodyObj.onmousemove = null
          }
        },
//      清空
        clearAll(){
          var box2Obj = document.getElementById("box2");
          var imgList = box2Obj.getElementsByTagName("img");
          imgList[0].setAttribute("src","");
          var canvas1Obj = document.getElementById("myCanvas1");
          canvas1Obj.getElementsByTagName("img")[0].setAttribute("src","");
          var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, 1000, 400);
          ctx.fillText("", 100, 100, 200);
        },
        //添加选中图片至Box2盒子上
        addNew(src,num){
            console.log(num)
          var imgBoxObj = document.getElementById("imgBox");
          if(imgBoxObj.style.border != "1px solid rgb(126,173,84)"){
              imgBoxObj.style.border = "1px solid rgb(126,173,84)"
          }else {
            imgBoxObj.style.border = "1px solid rgb(242,242,242)"
          }
          var box2Obj = document.getElementById("box2");
          box2Obj.getElementsByTagName("img")[0].setAttribute("src",src);
          this.$refs.son.update(num);
        },
        //切换图片盒子
        showbox1(){
          var change1 = document.getElementById("change1");
          var change2 = document.getElementById("change2");
          change1.style.display = "block";
          change2.style.display = "none"

        },
        //切换文字
        showbox2(){
          var change1 = document.getElementById("change1");
          var change2 = document.getElementById("change2");
          change1.style.display = "none";
          change2.style.display = "block"
        },
        //生成图片
        confirm(){
            this.$emit("clicked");
            var box2Obj = document.getElementById("box2");
            var subPage = document.getElementById("subPage");
            var mainPage = document.getElementById("mainPage");
            var canvasPage = document.getElementById("canvasPage");
            subPage.style.opacity = "0";
            canvasPage.style.display = "block";
            html2canvas(box2Obj).then(function (canvas) {
              canvasPage.appendChild(canvas)
            })
        },
        //保存
        save(){
            alert("保存成功")
        },
        back(){
          this.$emit("goBack");
          var subPage = document.getElementById("subPage");
          var canvasPage = document.getElementById("canvasPage");
          subPage.style.opacity = "1";
          canvasPage.style.display = "none";
          var canvasArr = canvasPage.getElementsByTagName("canvas");
          for(var i=0;i<canvasArr.length;i++){
              canvasArr[i].style.display = "none"
          }
        }
      }
    }
</script>
<style scoped>
  #mainPage{
    overflow: hidden;
    position: relative;
    width: 1349px;height: 500px;
  }
  #model{
    border: 1px solid rgb(242,242,242);
    width: 15%;height: 65%;
    position: absolute;
    left: 8%;top: 15%;
  }
  #model>p{
    text-align: left;
    color: rgb(142,180,94);
    margin-left: 5%;
    margin-top: 5%;
  }
  #imgBox{
    border: 1px solid rgb(242,242,242);
    width: 70px;height: 70px;
    margin-left: 10%;
    margin-top: 10%;
  }
  #box2{
    overflow: hidden;
    width: 35%;
    height: 65%;
    border: 1px solid rgb(242,242,242);
    position: absolute;
    left: 26%;top: 15%;
  }
  #box2 img{
    position: absolute;
    left: 0;
    top: 0;z-index: -1;
    width: 100%;height: 100%;
  }
  #subBox2{
    width: 100px;height: 40px;
    position: relative;
  }
  #subBox2>canvas{
    border: 1px solid rgb(242,242,242);
    width: 100px;height: 40px;
    cursor: pointer;
  }
  #circleIcon{
    cursor: pointer;
    border: 1px solid rgb(242,242,242);
    width: 10px;height: 10px;
    position: absolute;
    right: -13px;bottom: -13px;
  }
  #subBox3{
    width: 200px;height: 100px;
    position: absolute;
    left: 130px;top: 100px;
  }
  #myCanvas1{
    border: 1px solid rgb(242,242,242);
    width: 200px;height: 100px;
    cursor: pointer;
  }
  #myCanvas1>img{
    width: 100%;
    height: 100%;
  }
  #circleIcon1{
    cursor: pointer;
    border: 1px solid rgb(242,242,242);
    width: 10px;height: 10px;
    position: absolute;
    right: -13px;bottom: -13px;
  }
  #box3{
    border: 1px solid rgb(242,242,242);
    width: 28%;height: 65%;
    position: absolute;
    left: 64%;top: 15%;
  }
  #clearBtn{
    width: 100px;height: 40px;
    position: absolute;
    left: 350px;top: 420px;
    border: none;outline: none;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;color: white;
    background-color: rgb(126,173,84);
  }
  #confirmBtn{
    width: 100px;height: 40px;
    position: absolute;
    left: 865px;top: 420px;
    border: none;outline: none;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;color: white;
    background-color: rgb(126,173,84);
  }
  #box3>div:nth-of-type(1){
    height: 10%;
    font-size: 1.1em;
    text-align: center;
    border-bottom: 1px solid rgb(242,242,242);
    cursor: pointer;
  }
  #box3>div:nth-of-type(1) p:nth-of-type(1){
    width: 49.7%;float: left;
    position: absolute;
    top: 5px;z-index: 99;
    border-right: 1px solid rgb(242,242,242);
  }
  #box3>div:nth-of-type(1) p:nth-of-type(2){
    width: 49.7%;float: left;
    position: absolute;
    top: 6px;left: 190px;
    z-index: 99;
  }
  .active{
    border-bottom: 2px solid rgb(203,218,122);
    cursor: pointer;
  }
  #change2{
    display: none;
    height: 300px;
    /*border: 1px solid red;*/
  }
  #canvasPage{
    display: none;
    position: relative;
    margin-top: 100px;
  }
  #canvasPage>button:nth-of-type(1){
    width: 100px;height: 40px;
    position: absolute;
    left: 1000px;top: 300px;
    border: none;outline: none;
    border-radius: 10px;color: white;
    background-color: rgb(126,173,84);
    cursor: pointer;
  }
  #canvasPage>button:nth-of-type(2){
    width: 100px;height: 40px;
    position: absolute;
    left: 1200px;top: 300px;
    border: none;outline: none;
    border-radius: 10px;color: white;
    background-color: rgb(126,173,84);
    cursor: pointer;
  }
</style>
