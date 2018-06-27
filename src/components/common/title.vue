<template>
  <div class="title">
    <img src="../../assets/image/nav2.png" alt="">
    <div class="titleContent">
      <h1 class="mainTitle">{{mainTitle}}</h1>
      <hr>
      <h2 class="subTitle">{{subTitle}}</h2>
      <small>
        <span @click="backindex">主页</span>
        <span>/</span>
        <span @click="backtoparent(breadArg.subTitleLink)">{{ breadArg.firstTitle }}</span>
        <span v-if="breadArg.secondTitle" >/</span>
        <span v-if="breadArg.secondTitle">{{ breadArg.secondTitle }}</span>
      </small>
    </div>
  </div>
</template>

<script>
  export default{
    name:'title',
//      breadArg为对象，输入除首页的面包屑
    props:['mainTitle','subTitle','subTitleLink','breadArg'],
    data (){
      return {
      }
    },
    methods:{
      backindex(){
        this.$router.push("/");
      },
      backtoparent(link){
        this.$router.push(link);
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .title{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .titleContent{
    position: absolute;
    margin: auto;
    top: 10%;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  hr{
    width: 30%;
    margin: 0 auto;
  }
  .title img{
    width: 100%;
  }
  .mainTitle{
    padding: 20px 0;
  }
  .subTitle{
    font-style: italic;
    margin: 15px 0;
  }
  small>span{
    margin: 0 20px;
  }
  small>span:last-child{
    color: #7EAD54;
  }

  @media screen and (max-width: 850px){
    .mainTitle{
      font-size: 20px;
      font-weight:400 ;
      top: 50%;
    }
    .subTitle{
      font-size: 16px;
      font-weight:400 ;
    }
  }

  @media screen and (max-width: 700px){
    .subTitle,small,hr{
      display: none;
    }
  }

  small span:hover{
    cursor: pointer;
  }
</style>
