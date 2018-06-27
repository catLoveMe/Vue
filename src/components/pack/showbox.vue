<template>
  <figure>
    <img :src="imgsrc" alt="" @click="shit">
  </figure>
</template>
<script>
    export default {
      name:"showbox",
      data(){
        return {}
      },
      props:["imgsrc"],
      methods:{
          shit(){
            this.$emit("clicked");
          }
      }
    }
</script>
<style scoped>
  figure{
    display: inline-block;
    width: 75px;height: 75px;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }
  figure>img{
    width: 100%;
    height: 100%;
  }
</style>
