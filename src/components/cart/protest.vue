<template>
  <div v-for="data">
    <shopPro></shopPro>
  </div>
</template>

<script>
  import shopPro from '../common/shopPro.vue'
    export default{
      name:'protest',
      components:{
        shopPro:shopPro
      },
      data:function () {
        return {
            data:[]
        }
      }
    }
</script>

<style scoped>
</style>
