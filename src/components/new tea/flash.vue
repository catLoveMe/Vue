<template>
  <el-carousel :interval="3000" type="card" height="200px" id="flash">
    <el-carousel-item v-for="item in 4" :key="item">

    </el-carousel-item>
  </el-carousel>
</template>
<script>
    export default {
      name:"flash",
    }
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/image/new_tea_image/tea1.jpg") no-repeat rgb(242,242,242) center;
    background-size: 159px 200px;
  }
  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/image/new_tea_image/tea2.jpg") no-repeat rgb(242,242,242) center;
    background-size: 159px 200px;
  }
  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/image/new_tea_image/tea3.jpg") no-repeat rgb(242,242,242) center;
    background-size: 159px 200px;
  }
  .el-carousel__item:nth-of-type(4) {
    background: url("../../../static/image/new_tea_image/tea4.jpg") no-repeat rgb(242,242,242) center;
    background-size: 159px 200px;
  }
  .el-carousel__item>img{
    height: 200px;
  }
  #flash{
    width: 50%;
    position: absolute;
    left: 44%;top: 20%;
  }
</style>
