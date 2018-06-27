<template>
      <div class="outBox" @mouseup="clearMove()">
        <div class="headPture">
          <div class="circle" id="circle1" style="text-align: center">
            <img :src="'/api'+info.user_pic" alt="" id="imgNode1" style="width: 120px"/>
          </div>
          <div class="circle" id="circle">
            <canvas id="newCanvas" width="200" height="200"></canvas>
          </div>
          <p class="name">{{info.user_login}}</p>
          <div class="anniu">
            <input type="file" class="btn file" id="file" @change="changefile"/>
            <button class="btn">上传头像</button>
            <br>
            <span id="placeholderMss">未选择文件</span>
          </div>
          <img src="" alt="" id="imgNode"/>


          <div id="imgBox">
            <span id="mess">图片剪切预览:</span>
            <canvas id="oddCanvas" width="300px" height="200px"></canvas>
            <div id="cutBox" @mousedown="moveCutBox($event)"></div>
          </div>
          <button  class="btn1" @click="saveImg()">保存剪切</button>
        </div>
        <div class="inputBox">
          <div class="outDiv">
            <span class="snow">*</span>
            <div class="btn-style">
              <span>姓名</span>
              <input type="text" :value="info.user_name" class="zzname">
            </div>
          </div>
          <span v-show="isMan">{{ info.user_sex }}</span>
          <p v-if="info.user_sex=='男'">
          <input type="radio" name="sex" checked value="男">男
          <input type="radio" name="sex" value="女">女
          </p>
          <p v-else>
          <input type="radio" name="sex" value="男">男
          <input type="radio" name="sex" checked value="女">女
          </p>
          <div class="outDiv">
            <span class="snow">*</span>
            <div class="btn-style">
              <span>电话</span>
              <input type="text" :value="info.user_tel" class="zztel">
            </div>
          </div>
          <div class="outDiv">
            <span class="snow">*</span>
            <div class="btn-style">
              <span>生日</span>
              <input type="date" :value="info.user_birth" class="zzbir">
            </div>
          </div>
          <div class="outDiv">
            <span class="snow">*</span>
            <div class="btn-style">
              <span>用户名</span>
              <input type="text" :value="info.user_login">
            </div>
          </div>
          <div class="outDiv">
            <span class="snow">*</span>
            <div class="btn-style">
              <span>密码</span>
              <input type="password" :value="info.user_psw" id="pass">
              <span id="watchPass" @click="watchpass()">@</span>
              <button  @click="changePass()" id="changepass"> 修改密码</button>
            </div>
          </div>

          <teaBtn btnClass="middBtn" btnText="保存" id="btn" @click.native="changeMess()"></teaBtn>
        </div>
      </div>

</template>

<script>
  import selfCom from './selfCom.vue'
  import  teaBtn from '../common/teaBtn.vue'
  export default{
        name:'personself',
        data: function () {
          return {
              info:[],
            isMan : false,
            sex:""
          }
        },
      components:{
          selfCom :selfCom,
          teaBtn :teaBtn
      },
    created(){
      var _this = this;
      this.$axios.get('/api/userCentercheck.do')
        .then(function (resp) {
            console.log(resp.data);
          _this.info = resp.data.data[0];
        })
    },
    methods:{
      changefile:function (event) {
          $("#circle").css("display","block");
          $("#circle1").css("display","none");
        var oddCanvas = document.getElementById("oddCanvas");
        var ctx = oddCanvas.getContext("2d");
        var file = event.currentTarget;
        var filepath = $(file).val();
        var arr  = filepath.split("\\");
        var fileName=arr[arr.length-1];
        $(".btn1").css("display","block");
        $("#imgBox").css("display","block");
        if(fileName.length>0){
            $("#placeholderMss").html(fileName);
        }
        var fileReader = new FileReader();
        var imgdata = fileReader.readAsDataURL($("#file")[0].files[0]);
        fileReader.onload = function(){
          $("#imgNode").attr("src",this.result);
            ctx.drawImage($("#imgNode")[0],0,0);
        }
      },
      moveCutBox:function (event) {
        var downE = event;
        $("#cutBox")[0].onmousemove = function (e) {
          var left = $("#cutBox").position().left;
          var top = $("#cutBox").position().top;
          var moveE = e;
          $("#cutBox").css({
            left:moveE.clientX-downE.clientX +50+"px",
            top:moveE.clientY-downE.clientY +50+"px"
          });
          if(left<=0||left>=250||top<=0||top>=150){
            $("#mess").html("超出区域的无效哟")
          }else {
            $("#mess").html("剪切图片预览")
          }
        }
      },
      clearMove:function (event) {
        var oddCanvas = document.getElementById("oddCanvas");
        var ctx = oddCanvas.getContext("2d");
        $("#cutBox")[0].onmousemove = null;
        var newpositionleft = $("#cutBox").position().left;
        var newpositiontop = $("#cutBox").position().top;
        var newImg = ctx.getImageData(newpositionleft,newpositiontop,200,200);
        var newctx = $("#newCanvas")[0].getContext("2d");
        newctx.putImageData(newImg,0,0);
      },
      saveImg :function (event) {
          console.log("11111");
        var imgData = $("#newCanvas")[0].toDataURL();
        this.$axios.post("/api/keepImg.do",{imgDataUrl:imgData})
          .then(function (resp) {
            console.log(resp.data)
          })
      },
      changeMess:function () {
            var _this = this;
            var nameVal = document.getElementsByClassName("zzname")[0].value;
            var phoneVal = document.getElementsByClassName("zztel")[0].value;
//            var sexVal = document.getElementsByClassName("mysex")[0].value;
            var birthVal = document.getElementsByClassName("zzbir")[0].value;
        this.$axios.get("/api/changeSave.do",{params:{name:nameVal,phone:phoneVal,birth:birthVal}})
          .then(function (resp) {

            _this.$axios.get('/api/userCentercheck.do')
              .then(function (resp) {
                _this.info = resp.data.data[0];
              })
          })
      },
      changePass:function () {
        $("#pass").attr("type","password");
        $("#changepass").css("display","none")
        var password=$("#pass").val();
        var _this = this;
        this.$axios.post("/api/pswChange.do",{password:password})
          .then(function (resp) {
            _this.$axios.get('/api/userCentercheck.do')
              .then(function (resp) {
                console.log(resp,"resp");
                _this.info = resp.data.data[0];
              })
          })
      },
      watchpass:function () {
          if($("#pass").attr("type")=="password"){
            $("#pass").attr("type","text");
            $("#changepass").css("display","block");
          }else{
            $("#pass").attr("type","password");
            $("#changepass").css("display","none");
          }

      }
    },


    }


</script>

<style scoped>
  #watchPass{
    display: inline-block;
    margin-left: 100%;
    margin-top: 10%;
  }
  #changepass{
    display:none;
   border-radius:10px ;
    background-color: white;
    border: 1px solid #8eb45e;
    color: #8eb45e;
    padding: 2px;
    margin-top: 6%;
  }
  #pass{
    width:100%;
    outline: none;
    border: none;
    border-bottom: 1px solid gainsboro;
  }
  #circle{
    display: none;
  }
  .btn-style span{
    position: absolute;
    left: 0;
    top: -25px;
    padding-bottom: 4%;
    color: grey;
    transition: all .2s linear;
  }
  .btn-style{
    width:50%;
    position: relative;
    margin-top: 5%;
    display: inline-block;

  }
  input[type=text]{
    width:100%;
    outline: none;
    border: none;
    border-bottom: 1px solid gainsboro;
  }
  .btn-style>div{
    width:100%;
    border: 1px solid #8eb45e;
    position: absolute;
    bottom: 0;
    left:0;
    transform: scaleX(0);
  }
  @keyframes linearmove {
    10%{
      opacity: 1;
      transform: scaleX(0.1);
    }

    50%{
      transform: scaleX(0.5);
    }

    100%{
      transform: scaleX(1);
    }
  }
  .snow{
    padding-right: 3%;
    font-size: 30px;
    color: #8eb45e;
  }
  .outDiv{
    position: relative;
    margin-top: 8%;
  }
  #mess{
    font-size: 12px;
    color: #8eb45e;
    position: absolute;
    left: -10%;
    top: -12%;
  }
  .btn1{
    margin-left: 68%;
    margin-top: 5%;
    background-color: white;
    border: 1px solid #e9e9e9;
    color: #8eb45e;
    display: none;
    padding-left: 5px;
    padding-bottom: 3px;
    padding-top: 3px;
    padding-right: 5px;
    border-radius: 15px;
  }
  @keyframes linearmove {

    10%{
      opacity: 1;
      transform: scaleX(0.1);
    }

    50%{
      transform: scaleX(0.5);
    }

    100%{
      transform: scaleX(1);
    }
  }
  #imgBox{
    width: 90%;
    height: 200px;
    border: 1px solid gainsboro;
    margin-top: 15%;
    position: relative;
    display: none;
  }
  #cutBox{
    width: 80px;
    height: 80px;
    border-radius: 80px;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid gainsboro;
  }
  #imgNode{
    display: none;
  }
  #placeholderMss{
    padding-left: 1%;
    color: #8eb45e;
    position: absolute;
    top: 180% ;
    left: 30%;
    font-size: 12px;
  }
  .file{
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
  .anniu{
    width: 180px;
    margin-left: 18%;
    margin-top: 2%;
    position: relative;
  }
  #btn{
    margin-left: 45%;
    margin-top: 10%;

  }
  input[type=radio]{
    padding: 5%;
    margin-left: 10%;
    margin-top: 8%;
  }
  input[type=file]{
    border: none;
    position: absolute;
  }
  .headPture{
    float: left;
    display: inline-block;
    width: 40%;
    border-right: 1px solid gainsboro;
    height: 390px;
    margin-top: 5%;
    margin-bottom: 15%;
    position: relative;
    margin-left: 5%;
  }
  .outBox{
    width: 80%;
    border: 1px solid ghostwhite;
    box-shadow: 2px 2px 15px 1px #D7D7D7;
    margin: auto;
    margin-top: 5%;
    position: relative;
    margin-bottom: 10%;
  }
  .inputBox{
    margin-left: 10%;
    margin-bottom: 15%;
    display: inline-block;
    width: 40%;
    margin-top: 10%;
    height: 390px;
  }
  .circle {
    width: 120px;
    height: 120px;
    margin-top: 10%;
    border-radius: 120px;
    border: 1px solid gainsboro;
    overflow: hidden;
    margin-left: 30%;
    position: relative;
  }
  .circle img{
    /*position: absolute;*/
    /*z-index: 9;*/
  }
  .name{
    padding-top: 5%;
    padding-left: 35%;
    outline: none;
  }
  .btn{
    margin-left: 35%;
    margin-top: 5%;
    /*visibility: hidden;*/
    background-color: white;
    border: 1px solid #F2F2F2;
    color: #8eb45e;
    padding-left: 5px;
    padding-bottom: 3px;
    padding-top: 3px;
    padding-right: 5px;
    border-radius: 15px;
    position: absolute;
  }
</style>
