<template>
  <div class="loginBlock">
    <img src="../assets/image/login1.jpg" alt="">
    <img src="../assets/image/login2.jpg" alt="">
    <div class="contentBlock">
      <div class="mainBlock">
        <h3>登录</h3>
        <form onsubmit="return false;" id="loginFrom">
          <p class="message">{{message}}</p>
          <div>
            <label for="username">用户名:</label>
            <input type="text" name="username" id="username">
          </div>
          <div>
            <label for="password">密码:</label>
            <input type="password" name="password" id="password">
          </div>
          <div>
            <label for="code">验证码:</label>
            <input type="text" name="code" id="code">
            <div class="codeBlock">
              <div>
                <canvas id="codeImg" ></canvas>
              </div>
              <span class="changeCode" @click="getcode">看不清楚，换一张</span>
            </div>

          </div>
          <div class="otherLink">
            <small @click="showForgetPsw">忘记密码</small>
            <small><span @click="showReg">没有账号?立即注册</span></small>
          </div>
          <div class="btnBlock" @click="loginPost">
            <teaBtn btnClass="middBtn" btnText="登录" class="btn" ></teaBtn>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
  import teaBtn from './common/teaBtn.vue'
  export default{
    name:'login',
    data(){
      return {
        message:"",
        status:0
      }
    },
    components:{
      teaBtn:teaBtn
    },
    created(){
      this.getcode();
    },
    methods:{
      showReg(){
        this.$emit('showReg');
      },
      showForgetPsw(){
        this.$emit('showForgetPsw');
        console.log("showForgetPsw");
      },
      loginPost(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var code = document.getElementById("code").value;
        this.$axios.get("/apj/zzinfo.do",{
          params:{username:username,password:password}
        });
        this.$axios.post("/api/loginCheck.do",{
          username:username,
          password:password,
          code:code
        })
          .then(resp=>{
            console.log("数据返回成功",resp);
            console.log(resp.data.msg);
            this.message = resp.data.msg;
            if(resp.data.flag === 1){
              this.message = resp.data.msg;
//                  this.$emit("closeModel");
              this.$emit("loginSuccess");
              window.location.reload();
            }
          });
      },
      getcode(){
        this.$axios.get("/api/getCode.do")
          .then(resp=>{
            console.log(resp.data.code);
            let code = resp.data.code;
            console.log("渲染验证码");
            var drawing = document.getElementById("codeImg");
            if(drawing.getContext){
              let context = drawing.getContext("2d");
              context.clearRect(0, 0, 1000, 300);
              context.font = "bold 70px Arial";
              context.textAlign = "center";
              context.textBaseline = "top";
              context.fillText(code,130,70);
            }
            this.$axios.get("/apj/zzcode.do",{
                params:{code: code}
            })
          });
      },
    }
  }
</script>

<style>
  .message{
    font-size: 12px;
    color: #942a25;
  }
  #codeImg{
    width: 100px;
    height: 30px;
  }
  .loginBlock{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: white url("../assets/image/bg1.jpg");

  }
  .loginBlock>img{
    position: absolute;
    z-index: 10;
  }

  .contentBlock{
    position: relative;
    z-index: 100;
    width: 40%;
    margin: 50px auto 0;
    border: 1px solid #F2F2F2;
    padding: 5px;
    box-shadow: 5px 5px 5px #f2f2f2;
    background-color: white;
  }
  .mainBlock{
    border: 1px solid #F2F2F2;
    padding: 30px;
  }
  .loginBlock>img:first-child{
    width: 18%;
    transform: rotate(-90deg);
    top: 18%;
    right: 16%;
  }

  .loginBlock>img:nth-child(2){
    width: 25%;
    top: 55%;
    left: 5%;
  }


  .loginBlock h3{
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #F2F2F2;
    font-weight: 400;
  }

  form{
    margin: 30px 0 0;
  }

  form>div{
    padding: 10px;
  }

  form label{
    display: inline-block;
    width: 20%;
    font-size: 14px;
  }
  form input{
    width: 70%;
    padding:10px 5px;
    border: 0;
    border-bottom: 1px solid #f2f2f2;
  }
  #code{
    width: 30%;
  }
  .codeBlock{
    display: inline-block;
    font-size: 12px;
    margin: 0 0 0 10px;
    text-align: center;
  }
  /*.codeBlock>div{*/
  /*display: inline-block;*/
  /*}*/
  .codeBlock img{
    display:block ;
    width: 100px;
  }
  .otherLink{
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
  }
  .otherLink:after{
    content: '';
    clear: both;
    display: block;
    visibility: hidden;
  }
  .otherLink small:first-child{
    float: right;
  }
  .otherLink small:last-child{
    float: left;
  }
  .otherLink small:hover{
    cursor: pointer;
  }
  .btnBlock{
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }
  .btnBlock:hover{
    cursor:pointer;
  }
  .btn:hover{
    cursor: pointer;
  }
  .changeCode:hover{
    cursor: pointer;
  }
</style>
