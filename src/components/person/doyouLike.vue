<template>
  <div >
    <shopPro
      v-for="iteam in datapro"
      :key="iteam.pro_name"
      :proname="iteam.pro_name"
      :price="iteam.pro_price"
      :pro_id = "iteam"
      :imgsrc="'/apj'+ iteam.pro_img1"
    ></shopPro>

  </div>

</template>

<script>
  import shopPro from '../common/shopPro.vue'
  export default{
    name:'doyoulike',
    data:function () {
      return {
        datapro:[]
      }
    },
    components:{
      shopPro:shopPro
    },
    created(){
      var that = this;
      this.$axios.get("/api/shoppingCartcheck.do")
        .then(function (resp) {
          that.datapro = resp.data.data
        })
    }
  }
</script>

<style scoped>
</style>
