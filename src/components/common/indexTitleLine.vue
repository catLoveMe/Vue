<template>
  <div class="container">
    <hr>
    <div class="titleBlock">
      <h1>{{title}}</h1>
      <i>{{subTitle}}</i>
      <i class="small">{{smallTitle}}</i>
    </div>
    <hr>
  </div>
</template>

<script>
  export default{
    name:'titleLine',
    props:["title","subTitle","smallTitle"]
  }
</script>

<style scoped>
  .container{
    text-align: center;
  }
  .titleBlock{
    display: inline-block;
    vertical-align: middle;
  }
 i{
   display: block;
   font-size: 24px;
 }
 .titleBlock{
   text-align: center;
   width: 20%;
   margin: 30px 50px;
 }
  hr{
    display: inline-block;
    width: 30%;
    color: #E4E4E4;
  }
  .small{
    font-size: 12px;
  }
</style>
