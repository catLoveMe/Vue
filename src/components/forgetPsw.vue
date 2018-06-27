<template>
  <div class="forgetPswBlock">
    <img src="../assets/image/psw1.png" alt="">
    <img src="../assets/image/psw2.png" alt="">
    <div class="contentBlock">
      <div class="mainBlock">
        <h3>忘记密码</h3>
        <form onsubmit="return false" id="regFrom">
          <p class="message">{{message}}</p>
          <div>
            <label for="phoneF">手机号:</label>
            <input type="text" name="phone" id="phoneF">
            <small class="sendCode" @click="getCodeF">发送验证码</small>
          </div>
          <div>
            <label for="telCode">验证码:</label>
            <input type="text" name="telCode" id="telCode">
            <small class="checkCode" @click="checkTelCode">验证</small>
          </div>
          <div>
            <label for="firstPswF">设置密码:</label>
            <input type="password" name="firstPsw" id="firstPswF">
          </div>
          <div>
            <label for="secondPswF">确认密码:</label>
            <input type="password" name="secondPsw" id="secondPswF">
          </div>
          <div class="otherLink">
            <small @click="showLogin">返回登录</small>
          </div>
          <div class="btnBlock" @click="changePsw">
            <teaBtn btnClass="middBtn" btnText="确认修改" class="btn" ></teaBtn>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
  import teaBtn from './common/teaBtn.vue'
  export default{
    name:'forgetPsw',
    data(){
      return {
          message:""
      }
    },
    methods:{
        showLogin(){
          this.$emit('showLogin');
        },
      changePsw(){
            console.log("checkCode");
        let phone = $("#phoneF").val();
        let firstPsw = $("#firstPswF").val();
        let secondPsw = $("#secondPswF").val();
        if(firstPsw === secondPsw){
            this.$axios.post("/api/editFPsw.do",{
              phone:phone,
              psw:firstPsw
            }).then(resp=>{
                console.log(resp);
                this.message = resp.data.msg;
                console.log("密码修改返回结果");
            });
        }else{
            this.message = "两次输入密码不相同"
        }
      },
      getCodeF(){
        let phone = $("#phoneF").val();
        console.log(phone);
        this.$axios.post("/api/getTelCode.do",{
            phone:phone
        }).then(resp=>{
            console.log(resp);
            this.message = "发送验证码成功"
        });
      },
      checkTelCode(){
        let phone = $("#phoneF").val();
        let code = $("#telCode").val();
        console.log("phone:"+phone+"code:"+code);
        this.$axios.post("/api/checkFpswCode.do",{
            phone:phone,
            code:code
        }).then(resp=>{
            this.message = resp.data.msg;
        });
      }
    },
    components:{
      teaBtn:teaBtn
    }
  }
</script>

<style>
  .message{
    font-size: 12px;
    color: #942a25;
  }

  #phoneF,#telCode{
    width: 40%;
  }
  .forgetPswBlock{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: white url("../assets/image/bg1.jpg");

  }
  .forgetPswBlock>img{
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

  .forgetPswBlock>img:first-child{
    width: 13%;
    top:10% ;
    left: 18%;
  }
  .forgetPswBlock>img:nth-child(2){
    width: 20%;
    top:80% ;
    right: 15%;
    z-index: 1100;
  }
  .forgetPswBlock h3{
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
  #phone{
    width: 30%;
  }
  .sendCode{
    color: #7EAD54;
  }
  .checkCode{
    color: #7EAD54;
    float: right;
  }
  .checkCode:hover{
    cursor: pointer;
  }
  .otherLink{
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
    color: #7EAD54;
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
  .otherLink small:hover{
    cursor: pointer;
  }
  .btnBlock{
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }
  .btn:hover{
    cursor: pointer;
  }

</style>
