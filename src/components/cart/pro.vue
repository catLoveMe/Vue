<script src="../../store/modules/cart.js"></script>
<script src="../../store/index.js"></script>
<template>
  <div>
    <h1>Product组件- 商品信息</h1>
    <el-table
      :data="$store.state.cart.shop_list"
      style="width: 100%">
      <el-table-column
        prop="pro_id"
        label="ID"
        width="180"
        align="center">
      </el-table-column>

      <el-table-column
        prop="pro_name"
        label="商品名称"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="pro_price"
        label="单价"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)" type="text" size="small">添加到购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    name: 'vproduct',
    data(){
      return {

      }
    },
    methods:{

//      ...mapActions(['addToCart'])

//      addToCart(val){
//          var that = this;
//
//      }
    },
    computed:{
//
//        shoplist:function(){
//        //拿到getter
//        return this.$store.getters.shoplist
//
// }
      ...mapGetters(['shoplist'])
    },
    created(){
      var that = this;
//      this.$axios.get("/api/shopMain.do")
//        .then(function (resp) {
//          that.$store.state.cart.shop_list = resp.data.data;
//        })
    }
  }
</script>

<style scoped>
</style>
