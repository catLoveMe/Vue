<template>
  <section class="footer">
    <span class="nbS">&nbsp;</span>
    <div class="footOne">
      <img src="../../assets/image/f-e.png" alt=""/>
      <!--<div id="sub">-->
      <!--<h1>Subscribe To Our Newsletter</h1>-->
      <!--<p>关注我们的最新消息</p>-->
      <!--</div>-->
      <input type="text" placeholder="邮箱"/>
      <teaBtn btnText="发送" btnClass="middBtn"  class="btn"></teaBtn>
    </div>
    <div class="footTwo">
      <ul>
        <li>联系方式</li>
        <li><span>&#xe644;</span><span>12345678900</span></li>
        <li><span>&#xe61d;</span><span>tearyhme@163.com</span></li>
        <li><span>&#xe66f;</span><span>www.tearhyme.com</span></li>
        <li class="lilast">
          <a href="#" class="fi">&#xe676;</a>
          <a href="#">&#xe600;</a>
          <a href="#">&#xec9c;</a>
          <a href="#">&#xe62b;</a>
        </li>
      </ul>
      <ul  class="mess">
        <li>信息</li>
        <li><a href="#">最新产品<hr/></a></li>
        <li><a href="#">最热产品<hr/></a></li>
        <li><a href="#">我们的消息<hr/></a></li>
        <li><a href="#">关于商城<hr/></a></li>
      </ul >
      <ul class="aa">
        <li>个人账户</li>
        <li><a href="#">个人信息<hr/></a></li>
        <li><a href="#">地址<hr/></a></li>
        <li><a href="#">折扣<hr/></a></li>
      </ul>
      <ul class="last">
        <li class="fir">图片分享</li>
        <li><img src="../../assets/image/1.png" alt=""/>
          <img src="../../assets/image/2.gif" alt=""/>
          <img src="../../assets/image/3.gif" alt=""/>
          <img src="../../assets/image/4.gif" alt=""/>
          <img src="../../assets/image/5.gif" alt=""/>
          <img src="../../assets/image/6.gif" alt=""/>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import teaBtn from './teaBtn.vue'
    export default{
      name:'foot',
      data:function(){
        return {}
      },
      components:{
        teaBtn:teaBtn
      }
    }
</script>

<style scoped>
  @media (max-width: 920px) and (min-width: 678px)
  {
    .last{
      display: none;
    }
  }
  @media (max-width: 678px) and (min-width: 400px)
  {
    .last{
      display: none;
    }
    .aa li{
      float: left;
      padding-left:40px;
    }
    .aa{
      margin-top: -10%;
    }
    .mess li{
      float: left;
      padding-left:40px;

    }
    .footTwo ul:first-child a{
      width: 20px;
      height: 20px;
      display: inline-block;
      border-radius: 100%;
      border: 1px solid #cbcbcb;
      text-align: center;
      line-height: 20px;
    }
  }
  @media (max-width: 400px){
    .last{
      display: none;
    }
    .aa li{
      float: left;
      padding-left:20px;
    }

    .mess li{
      float: left;
      padding-left:40px;
    }
  }

  *{
    margin: 0;
    padding: 0;
    font-family: youe;
  }

  @font-face {
    font-family: youe;
    src: url("../../assets/icon/iconfont.eot");
    src: url("../../assets/icon/iconfont.woff");
  }
  .footOne{
    height: 194px;
    width: 100%;
    position: relative;
  }
  .footOne img{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
  }
  .btn{
    display: inline-block;
    margin-left: 5%;
  }
  .nbS{
    font-size: 0;
  }

  span{
    font-family: youe;
  }
  .footTwo{
    width: 100%;
    height: 350px;
    background-color: #FAFAFA;
  }
  ul{
    float: left;
  }
  li{
    list-style: none;
  }
  .footTwo ul:first-child{
    margin-left: 18%;
  }
  .footTwo ul:first-child a{
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 100%;
    border: 1px solid #cbcbcb;
    text-align: center;
    line-height: 40px;
  }
  .lilast{
    margin-top: 4%;
  }
  .lilast a {
    transition: all .5s linear;
  }
  .lilast a:not(.fi){
    margin-left: 10px;
  }
  .lilast a:hover{
    background-color: #8eb45e;
    color: white;
    transform: scale(1.2);
  }
  .footTwo ul{
    margin-top: 4%;
    margin-left: 9%;
    cursor: pointer;
  }
  ul li:first-child{
    padding-bottom: 40px;
    font-weight: bold;
  }
  li{
    padding-bottom: 10px;
  }
  li a{
    color: black;
    text-decoration: none;
    position: relative;
  }
  .footTwo ul:nth-child(4){
    width: 15%;
  }
  .last li:not(.fir){
    margin-left:5px;
    display: inline-block;
  }
  li img{
    float: left;
    width: 25%;
    height: 25%;
    margin-left: 5px;
    margin-top: 5px;
  }
  input{
    width: 25%;
    padding: 8px;
    outline: none;
    border: 1px solid gainsboro;
    border-radius: 3px;
    margin-top: 7%;
    margin-left: 40%;
  }
  #sub p{
    color: grey;
    padding-top: 5%; ;
  }
  li span:first-child{
    padding-right: 20%;
    transition: all .3s linear;
  }
  li span:first-child:hover{
    transform: rotate(90deg) scale(1.2);
  }
  li span{
    color: #484848;
  }
  li span:hover{
    color: #8eb45e;
  }
  li:hover{
    color: #8eb45e;
  }
  a:hover{
    color: #8eb45e;
  }
  /*a{*/
  /*text-decoration: underline;*/
  /*padding-bottom: 2px;*/
  /*}*/
  a hr,li hr{
    width: 30%;
    height: 0;
    border: 1px solid #8eb45e;
    transition: all .3s linear;
    opacity: 0;
  }
  a:hover hr{
    opacity: 1;
    width: 80%;
  }


</style>
