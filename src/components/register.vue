<template>
  <div class="registerBlock">
    <img src="../assets/image/register.png" alt="">
    <div class="contentBlock">
      <div class="mainBlock">
        <h3>注册</h3>
        <form onsubmit="return false" id="regFrom">
          <p class="message">{{message}}</p>
          <div>
            <label for="phone">手机号:</label>
            <input type="text" name="phone" id="phone">
            <small class="sendCode" @click="getPhoneCode">发送验证码</small>
          </div>
          <div>
            <label for="codeR">验证码:</label>
            <input type="text" name="code" id="codeR">
          </div>
          <div>
            <label for="firstPsw">设置密码:</label>
            <input type="password" name="firstPsw" id="firstPsw">
          </div>
          <div>
            <label for="secondPsw">确认密码:</label>
            <input type="password" name="secondPsw" id="secondPsw">
          </div>
          <div class="otherLink">
            <small @click="showLogin">返回登录</small>
          </div>
          <div class="btnBlock" @click="register">
            <teaBtn btnClass="middBtn" btnText="注册" class="btn"></teaBtn>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
  import teaBtn from './common/teaBtn.vue'
  export default{
    name:'register',
    data(){
      return {
          message:""
      }
    },
    methods:{
      showLogin(){
        this.$emit('showLogin');
      },
      getPhoneCode(){
        let phone = $("#phone").val();
        console.log(phone);
        console.log("获取手机验证码");
        this.$axios.post("/api/getTelCode.do",{
          phone:phone
        })
          .then(resp=>{
            console.log(resp);
            console.log(resp.msg);
            console.log("发送验证码成功")
          })
      },
      register(){
          console.log("enter register");
        let firstPsw = $("#firstPsw").val();
        let secondPsw = $("#secondPsw").val();
        let phone = $("#phone").val();
        let code = $("#codeR").val();
        console.log("code:"+code);
        if(firstPsw === secondPsw){
          this.$axios.post("/api/register.do",{
            firstPsw:firstPsw,
            secondPsw:secondPsw,
            phone:phone,
            code:code
          }).then(resp=>{
              console.log(resp);
              this.message = resp.data.msg;
          });
        }else{
         this.message = "两次输入密码不相同";
        }
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
  .registerBlock{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: white url("../assets/image/bg1.jpg");

  }
  .registerBlock>img{
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
  .registerBlock>img:first-child{
    width: 18%;
    top:40% ;
    left: 14%;
  }

  .registerBlock h3{
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
    margin-left: 30px;
  }
  .sendCode:hover{
    cursor: pointer;
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
