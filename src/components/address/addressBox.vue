<template>
  <div id="app">
    <div class="adBox">
      <p>收货人：<span>{{adPerson}}</span></p>
      <p>所在地区：<span>{{city}}</span></p>
      <p>地址：<span>{{area}}</span></p>
      <p>手机：<span>{{phone}}</span></p>
      <p>邮箱：<span>{{email}}</span></p>
      <p class="adIcon">
        <img src="../../assets/update.png" alt="" @click="updateAd">
        <img src="../../assets/image/dele.png" alt="" @click="deleclick">
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"addressBox",
    props:['adPerson','city','area','phone','email'],
    methods:{
      updateAd(){
        this.$emit("edit")
      },
      deleclick(){
        this.$emit("delete")
      }
    }
  }
</script>

<style scoped>
  .adIcon img:hover{
    cursor: pointer;
  }
  .adBox{
    width:70%;
    /*height:175px;*/
    font-size:14px;
    margin:35px auto;
    padding:0.5% 2%;
    position: relative;
    border: 1px solid #8EB45E;
    /*background-color: gainsboro;*/
  }
  .adBox img{
    width:25px;
    height:25px;
  }
  .adIcon{
    position: absolute;
    top:6px;
    right: 20px;
  }
  p{
    margin:2.5%;
  }
  @media  screen and (max-width:800px) {
    * {
      font-size: 10px;
    }
  }
</style>
