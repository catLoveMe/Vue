<template>
  <figure>
    <img :src="'src/assets/image/'+imgsrc" alt="">
    <figcaption>
      <h3>{{btntext1}}</h3>
      <h4>{{btntext2}}</h4>
      <h4>{{btntext3}}</h4>
    </figcaption>
  </figure>
</template>
<script>
    export default {
      name: 'previousactivity',
      data () {
        return {
//            imgsrc:''
        }
      },
      props:['imgsrc','btntext1','btntext2','btntext3'],
      components: {
      }
    }
</script>

<style scoped>
  figure{
    display: inline-block;
    /*border:1px solid gray;*/
    margin-bottom: 3%;
    margin-right: 2%;
  }
  figure img{
    width: 240px;
    height: 330px;
  }
  figcaption h3{
    font-size: 18px;
    color: #333333;
    margin-bottom: 0;
  }
  figcaption h4{
    font-size: 12px;
    color: #BCBCBC;
    margin: 0;
    line-height: 1.8;

  }

</style>
