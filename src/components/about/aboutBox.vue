<template>
    <div id="app">
       <div class="aboutCont">
         <p> 用心做茶 <span class="fontIcon">”</span> </p>
        <div>
          <img src="../../assets/image/u2.jpg" alt="">
          <span>张珊 <br>主持人</span>
        </div>
       </div>

    </div>
</template>

<script>
    export default {
        name:"aboutBox"
    }
</script>

<style scoped>
  .aboutCont img{
    width: 50px;
    height: 50px;
    float: left;
    position: relative;
    top:-5px;
    border-radius: 50px;

  }
  .aboutCont{
    width:30%;
    margin:3% 1%;
    float: left;
    position: relative;
    /*border: 1px solid red;*/
  }
  .aboutCont>p{
    width:70%;
    padding:15%;
    background-color: white;
  }
  .aboutCont>div{
    width:120px;
    margin:30px auto;
  }
  .aboutCont>div>span{
    margin-left:10px;
  }
  .fontIcon{
    font-size:60px;
    color: #7EAD54;
    position: absolute;
    top:-11%;
    left:93%;
  }
</style>
