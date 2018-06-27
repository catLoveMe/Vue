<template>
  <div class="navigationBlock">
    <transition name="el-zoom-in-top">
    <el-row type="flex" class="row-bg navigation" id="fixedNavigation" justify="space-around">
      <el-col :span="6">
        <img src="../../assets/image/logo.png" alt="" class="logo">
      </el-col>
      <el-col :span="14" class="navContent" >
        <ul>
          <li><router-link to="/">主页</router-link></li>
          <li><router-link to="/shop">商品</router-link></li>
          <li class="firstNav">茶园体验
            <ul class="secondNav">
              <li><router-link to="/teayouyuan">游园活动</router-link></li>
              <li><router-link to="/teaAdopt">领养茶树</router-link></li>
            </ul>
          </li>
          <li><router-link to="/healthydrinktea">饮茶推荐</router-link></li>
          <li><router-link to="/newtea">新茶预约</router-link></li>
          <li><router-link to="/pack">包装定制</router-link></li>
          <li><router-link to="/teaPromote">茶叶推广</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </el-col>
      <el-col :span="4" class="iconBtn">
        <span class="iconfont icon-cart cart" @click="goToCart"><span class="cartNum">{{ totalNum }}</span></span>
        <span class="iconfont icon-user" @click="showModal"></span>
        <span class="iconfont icon-list" @click="hideSlider"></span>
      </el-col>
      <div class="slider">
        <span class="iconfont icon-close" @click="showSlider"></span>
        <ul>
          <li><router-link to="/">主页</router-link></li>
          <li><router-link to="/shop">商品</router-link></li>
          <li><router-link to="/teayouyuan">游园活动</router-link></li>
          <li><router-link to="/teaAdopt">领养茶树</router-link></li>
          <li><router-link to="/healthydrinktea">饮茶推荐</router-link></li>
          <li><router-link to="/newtea">新茶预约</router-link></li>
          <li><router-link to="/pack">包装定制</router-link></li>
          <li><router-link to="/teaPromote">茶叶推广</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </div>
      <!--login-->
    </el-row>
    </transition>
    <div id="modal">
      <span class="iconfont icon-close" @click="hideModal"></span>
      <div class="modalBlock">
        <transition name="fade">
          <login v-show="loginShow" @showReg="showReg" @showForgetPsw="showForgetPsw" @loginSuccess="loginSuccess"></login>
        </transition>
        <transition name="fade">
          <register v-show="registerShow" @showLogin="showLogin"></register>
        </transition>
        <transition name="fade">
          <forgetPsw v-show="forgetPswShow" @showLogin="showLogin"></forgetPsw>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import login from '../login.vue'
  import register from '../register.vue'
  import forgetPsw from '../forgetPsw.vue'
  import {mapGetters,mapActions} from 'vuex'
  export default{
    name:'navigation',

    data(){
      return {
        loginShow:true,
        registerShow:false,
        forgetPswShow:false,
        loginStatus:0
      }
    },
    created(){
        console.log("window.sessionStorage.loginStatus***");
        console.log(window.sessionStorage.loginStatus);
        console.log(typeof window.sessionStorage.loginStatus);
      this.loginStatus = parseInt(window.sessionStorage.loginStatus) || 0;
    },
    methods:{
      hideSlider(){
        $(".slider").show();
        $(".slider ul").fadeIn();

      },
      showSlider (){
        $(".slider").hide();
        $(".slider ul").fadeOut();
      },
      showModal(){
          console.log(this.loginStatus);
          if(this.loginStatus === 1){
            this.$router.push({path:'/person'});
            return;
          }
        console.log("执行子组件方法");
        $("#modal").fadeIn();
        $("body").css("overflow-y","hidden")
      },
      hideModal(){
        $("#modal").fadeOut();
        $("body").css("overflow-y","auto");
        this.loginShow = true;
        this.registerShow = false;
        this.forgetPswShow = false;
      },
      showReg(){
        this.registerShow = true;
        this.loginShow = false;
        this.forgetPswShow = false;
      },
      showLogin(){
        this.loginShow = true;
        this.registerShow = false;
        this.forgetPswShow = false;
      },
      showForgetPsw(){
        this.loginShow = false;
        this.registerShow = false;
        this.forgetPswShow = true;
      },
      hideNavigation(){
          $(".navigation").hide();
      },
      showNavigation(){
        $(".navigation").show();
      },
      loginSuccess(){
          window.sessionStorage.loginStatus = 1;
          this.loginStatus = 1;
          this.hideModal();
          console.log("navigation loginSuccess function");
      },
      goToCart(){
          if(this.loginStatus = 1){
              this.$router.push("/doyoulike");
          }
      }
    },
    components:{
      login:login,
      register:register,
      forgetPsw:forgetPsw
    },
    computed :{
      ...mapGetters(['totalNum', 'totalPrice'])
    }
  }
</script>

<style scoped>
  @import '../../assets/icon/iconfont.css';

  a{
    text-decoration: none;
    color: #2a2929;
  }
  #modal{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 19000;
    display: none;
  }

  #modal .icon-close{
    float: right;
    color: white;
    margin: 50px;
  }

  .modalBlock{
    width: 70%;
    height: 600px;
    background-color: white;
    margin: 5% auto 0;
  }

  *{
    margin: 0;
    padding:0;
  }
  .navigation{
    position: relative;
    z-index: 999;
    height: 75px;
    background-color: #F2F2F2;
  }
  .navContent ul{
    list-style: none;
    height: 75px;
  }
  .navContent>ul>li{
    display: inline-block;
    padding: 0 15px;
    font-size: 16px;
    line-height:75px;
  }

  .navContent>ul>li a:hover{
    cursor: pointer;
    color: #8EB45E;
  }

  .logo{
    height: 75px;
    vertical-align: middle;
  }
  .iconBtn{
    height: 75px;
    line-height: 75px;
  }
  .iconBtn>span{
    margin:0 10px;
    font-size: 20px;
  }
  .iconBtn>span:hover{
    cursor: pointer;
  }
  .icon-close:hover{
    cursor: pointer;
  }
  .cart{
    position: relative;
  }
  .cartNum{
    position: absolute;
    font-size: 12px;
    color: white;
    width: 18px;
    height:18px;
    line-height: 18px;
    text-align: center;
    border-radius: 50%;
    background-color: #8EB45E;
    top: -40%;
    left: 70%;
  }
  .firstNav{
    position: relative;
  }
  .firstNav:hover .secondNav{
    display: inline-block;
  }

  .secondNav{
    position: absolute;
    display: none;
    background-color: #f2f2f2;
    width:100%;
    left: 0;
  }

  .secondNav li{
    height: 50px;
    color: black;
    transition: all 0.3s ease;
    text-align: center;
    line-height: 50px;
    background-color: #f2f2f2;
  }

  .secondNav li:hover{
    color: #8EB45E;
  }

  .icon-list{
    display: none;
  }

  /*slider*/
  .slider{
    display: none;
    width: 80%;
    position: absolute;
    top: 0;
    z-index: 1000;
    background-color: rgba(255,255,255,0.9);
    left:0;
    padding: 5% 10% 10%;
    transition: all 0.3s ease;
  }
  .slider ul{
    display: none;
    list-style: none;
  }
  .slider li{
    padding: 20px;
    border-bottom: 1px solid lightgray;
    transition: all 0.3s ease;
  }

  .slider .icon-close{
    float: right;
  }

  .slider li:hover{
    color: #8EB45E;
    cursor: pointer;
    border-bottom: 1px solid #8EB45E;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
    opacity: 0
  }

  @media screen and (max-width: 1200px){
    .icon-list{
      display: inline-block;
    }
    .navContent ul{
      display: none;
    }
    .logo{
      margin: 0 auto;
    }
    .navigation,.logo{
      height: 50px;
    }
    .navContent ul{
      height: 50px;
    }
    .navContent>ul>li{
      line-height:50px;
    }
    .iconBtn{
      height: 50px;
      line-height: 50px;
      width: 45%;
      text-align: right;
    }
  }

  @media screen and (max-width: 660px){

  }
</style>
