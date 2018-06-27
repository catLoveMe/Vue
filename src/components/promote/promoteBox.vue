<template>
  <div id="app">
    <figure>
      <img :src="proImg" alt="">
      <figcaption>
        <h4>{{proTitle}}</h4>
        <p>{{proCaption}}</p>
      </figcaption>
      <span> 了解更多 >></span>
    </figure>
  </div>
</template>

<script>
  export default {
    name:"promoteBox",
    props:['proImg','proTitle','proCaption']

  }
</script>

<style scoped>
  figure{
    width:27%;
    float: left;
    margin:2% 2% 4% 3.6%;
  }
  img{
    width:100%;
  }
  h4,span{
    color: #8EB45E;
  }

  h4{
    margin-top:20px;
  }
  span{
    display: inline-block;
    margin-top: 10px;
  }

  p{
    font-size: 12px;
  }

</style>
