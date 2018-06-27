<template>
  <div class="content1top">
    <div class="leftxian"></div>
    <div class="middleword">
      <h1>{{btntext1}}</h1>
      <h3>{{btntext2}}</h3>
    </div>
    <div class="rightxian"></div>
  </div>
</template>
<script>
  export default {
    name: 'youyuanh1',
    props:['btntext1','btntext2'],
   /* props: {
    btntext1: {},
    btntext2: {},
    },*/
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  @media (max-width: 768px){
    .middleword h1{
      font-size: 15px;
      height: 17px;
      margin-top: 80px !important;
    }
    .middleword h3{
      font-size: 10px !important;
      height: 11px;
    }
  }
  @media screen and (min-width: 769px){
    .middleword h1{
      font-size: 18px;
      height: 20px;
      margin-top: 80px !important;
    }
    .middleword h3{
      font-size: 13px !important;
      height: 14px;
    }
  }
  @media screen and (min-width: 993px) {
    .middleword h1{
      font-size: 22px;
      height: 24px;
      margin-top: 75px !important;
    }
    .middleword h3{
      font-size: 15px !important;
      height: 17px;
    }
  }
    @media screen and (min-width: 1201px){
      .middleword h1{
        font-size: 28px;
        height: 30px;
        margin-top: 70px !important;
      }
      .middleword h3{
        font-size: 18px !important;
        height: 20px;
      }
    }
  .content1top{
    width: 100%;
    height: 200px;
  }
  .leftxian{
    float: left;
    width: 35%;
    height: 100px;
    margin-left: 3%;
    border-bottom: 1px solid gainsboro;
  }
  .middleword{
    float:left;
    width: 20%;
    height: 200px;
    margin: 0 2%;
  }
  .middleword h1,h3{
    margin: 0;
    color: #666666;
    font-weight: 500;
  }
  .middleword h1{
    width: 100%;
  }
  .middleword h3{
    font-size: 0.65rem;
    width: 100%;
    height: 0.7rem;
    margin-top: 10px;
  }
  .rightxian{
    float: left;
    width: 35%;
    height: 100px;
    border-bottom: 1px solid gainsboro;
  }
</style>
