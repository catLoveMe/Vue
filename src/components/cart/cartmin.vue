<template>
  <div class="eachCat" >
    <el-table
      ref="multipleTable"
      :data="cartProducts"
      style="width: 100%"
      empty-text="您的购物车是空的，快去抢购吧"
      @selection-change="handleSelectionChange"
    >
      <el-table-column

        width="55">
        <template slot-scope="scope">
          <div class="circle"></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="pro_img1"
        label=""
        align="center"
      width="300">
        <template slot-scope="scope">
          <div class="productImg" >
          <img  :src="'/apj'+scope.row.pro_img1" alt="加载出错。。。">
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="pro_name"
        label=""
        align="center">

      </el-table-column>
      <el-table-column
        prop="pro_price"
        label=""
        align="center"
        >

      </el-table-column>
      <el-table-column
        prop="sc_amount"
        label=""
        align="center"
      width="200">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.sc_amount" :min="1" label="描述文字"></el-input-number>
        </template>
      </el-table-column>

      <el-table-column
        label=""
        width="180"
        align="center">
        <template slot-scope="scope">
          <span class="errorS"  @click="open2(scope.row.pro_id)"  >X</span>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default{
    name:'cart',
    data:function () {
      return {
          istrue:0
      }
    },
    filters:{
      addMoney:function (value) {
        var result ;
        result = "￥"+value;
        return  result;
      }
    },
    methods :{
      open2(val) {
        var that = this;
        this.$confirm('主人确定不要我了吗?', '提示', {
          confirmButtonText: '是的呢！',
          cancelButtonText: '要要要',
          type: 'success'
        }).then(() => {
          this.$message({
            type: 'info ',
            message: '拜拜啦主人!'
          });
//          一个 store.dispatch 在不同模块中可以触发多个 action 函数。
// 在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
          that.$store.dispatch('delProduct',val);//store直接触发到action使用dispatch
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '主人我跟你回家！啦啦'
          });
        });
      },
      ...mapActions({
//        delProduct:'delProduct',
        handleSelectionChange:'addmony'
       })
    },
    computed:{
        //cartProducts的数据再getters中进行转化，转化为state.add数据
      //
      ...mapGetters(['cartProducts','addToCart'])
    },



  }

</script>

<style scoped>
  /*================================每个具体的购物订单*/
   .circle{
    width: 13px;
    height: 13px;
    border-radius: 3px;
    border: 1px solid grey;
    margin-left: 1%;
    margin-top: 1%;
    display: inline-block;
  }
  .el-input-number{
    width:70% !important;

  }
  .el-input__inner{
    border:  1px solid #8eb45e !important;
  }
  .el-table thead{
    background-color:#C9C9C9 !important;
  }
  @media (max-width: 768px)
  {
    body
    {
      font-size: 12px;
    }
  }
  .errorS{
    display: inline-block;
    font-weight: bolder;
    color: white;
    background-color: #8eb45e;
    border-radius: 30px;
    text-align: center;
    line-height: 30px;
    width: 30px;
    height: 30px;
    margin-left: 30px;
  }
  .eachCat{
    width: 1000px;
    height: 145px;
    margin-left: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid lightgrey;
  }
  .productImg{
    display: inline-block;
    margin-left: 3%;
    width: 15%;
  }
  .productImg img{
    width: 100%;
    height: 100%;
    margin-left: 10%;
    margin-top: -4.5%;
    float: left;
  }
  .proTitle{
    margin-left: 5%;
    margin-top: 10px;
  }
  .xinping{
    margin-left: 1%;
    margin-top: 10%;
  }
  .kindS{
    margin-top: -1%;
    margin-left: 13%;
    /*background-color: #e9e9e9;*/
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;

  }
  .singlePirceS{
    margin-left: 7.5%;
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;
    /*background-color:#e9e9e9;*/
  }
  .manyProAx{
    margin-left: 6%;
    padding-bottom: .7%;
    padding-top: .7%;
    background-color:#e9e9e9;
  }
  .catmout{
    padding-left: 1.5%;
    padding-right: 1.5%;
    outline: none;
  }
  .jian,.add{
    padding-left: 0.5%;
    padding-right: 0.5%;
    font-size: 20px;
  }
  .totalS{
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;
    margin-left: 5.8%;
    /*background-color: #e9e9e9;*/
  }
</style>
