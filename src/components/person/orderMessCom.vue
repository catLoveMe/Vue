<template>
  <div>
    <div class="fenge">

    </div>
    <el-table
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :data="$store.state.order.orderdata"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="送货方式">
              <span>{{ props.row.order_postmethod }}</span>
            </el-form-item>
            <el-form-item label="支付方式">
              <span>{{ props.row.order_paymethod }}</span>
            </el-form-item>
            <el-form-item label="是否开发票">
              <span>{{ props.row.order_bill | billStaus}}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.order_addr }}</span>
            </el-form-item>
            <el-form-item label="支付状态">
              <span>{{ props.row.order_pay | payStatus}}</span>
            </el-form-item>
            <el-form-item label="包装材质">
              <span>{{ props.row.pack_mat_name }}</span>
            </el-form-item>
            <el-form-item label="包装图案">
              <span>{{ props.row.pack_img_name }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="订单日期"
        prop="order_time">
      </el-table-column>
      <el-table-column
        label="订单编号"
        prop="order_id">
      </el-table-column>
      <el-table-column
        label="商品名"
        prop="pro_name">
      </el-table-column>
      <el-table-column
        label="收货人"
        prop="order_receivername">
      </el-table-column>
      <el-table-column
        label="订单总价"
        prop="order_price">
      </el-table-column>
      <el-table-column
        label="订单状态"
        prop="order_condition">
        <template slot-scope="scope">
          <span>{{scope.row.order_condition | changeStatus}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <span class="errorS"  @click="delProduct(scope.row)"  >X</span>
        </template>
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
    export default{
        name:'orderMessCom',
      data:function () {
        return {
          istrue:false,
          isbegin:false
        }
      },
      filters:{
        addMoney:function (value) {
          var result ;
          result = "￥"+value;
          return  result;
        },
        changeStatus :function (value) {
          var result ;
          if(value=="0"){
            result="取消";
          }else {
            result="进行中";
          }
          return  result;
        },
        payStatus :function (value) {
          var result ;
          if(value=="0"){
            result="未支付";
          }else {
            result="已支付";
          }
          return  result;
        },
        billStaus :function (value) {
          var result ;
          if(value=="0"){
            result="未开发票";
          }else {
            result="已开发票";
          }
          return  result;
        }
      },
      methods: {
        open2() {
            var that = this;
            that.isbegin = true;
          this.$confirm('主人确定不要我了吗?', '提示', {
            confirmButtonText: '是的呢！',
            cancelButtonText: '要要要',
            type: 'success'
          }).then(() => {
            this.$message({
              type: 'info',
              message: '拜拜啦主人!'
            });
          }).catch(() => {
            this.$message({
              type: 'success',
              message: '主人我跟你回家！啦啦'
            });
          });
        },
        changeColor(){
            if(this.istrue){
              this.istrue=false
            }else{
              this.istrue=true
            }

        },
        handleSelectionChange(){

        },
        delProduct(val){
//            删除商品
          var that = this;
            console.log(val.order_id,"val");
            this.$axios.get('/api/DonotshowOrder.do',{params:{OrderId:val.order_id}})
              .then(function (resp) {
//                console.log(resp)
                that.$axios.get("/api/orderClint.do")
                  .then(function (resp) {
                    that.$store.state.order.orderdata = resp.data.data;
                  })
              })
        }

      },
    created (){
            var that = this;
            this.$axios.get("/api/orderClint.do")
              .then(function (resp) {
                that.$store.state.order.orderdata = resp.data.data;
              })
    }
    }
</script>

<style scoped>
  .a{
    width: 120px;
  }
  .c{
    width: 100px;
  }
  .b{
    width: 50px;
  }
  .e{
    width: 50px;
  }
  table{
    width: 1050px;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .thirTd{
    width: 200px;
    text-align: left;
    padding-left: 40px;
  }
  table tr td{
    text-align: center;
  }
  button span{
    color: #8eb45e !important;
  }
  .color{
    background-color: #e9e9e9;
  }
  .color2{
    background-color:  #8eb45e;
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
  }
  .eachOrder{
    width: 1050px;
    height: 135px;
    margin-top: 5%;
    border-bottom: 1px solid lightgrey;
  }
  .productImg{
    display: inline-block;
    position: relative;
  }
  .productImg img{
    width: 130px;
    height: 160px;
    margin-left: -20%;
    margin-top: -14%;
    float: left;
  }
  .proTitle{
    /*margin-left: 2%;*/
    /*padding-left: 5px;*/
    /*padding-top: 80px;*/
    position: absolute;
    left: 110px;
    top: 40px;
    width: 50px;
  }
  .circle{
     width: 13px;
     height: 13px;
     border-radius: 13px;
     border: 1px solid grey;
     /*margin-left: 4%;*/
     margin-top: 1%;
     display: inline-block;
   }
  .shipper{
    /*margin-left: 3%;*/

    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;

  }
  .singlePirceS{
    /*margin-left: 4%;*/
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;
    /*background-color: #e9e9e9;*/
  }
  .manyProAx{
    /*margin-left: 3%;*/
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;
    /*background-color: #e9e9e9;*/
  }
  .totalS{
    /*margin-left: 4%;*/
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;
    /*background-color: #e9e9e9;*/
  }
  .addressS{
    margin-left: 2%;
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;
    /*background-color: #e9e9e9;*/
  }
  .packS{
    /*margin-left: 7%;*/
    padding-left: 1.5%;
    padding-top: .7%;
    padding-bottom: .7%;
    padding-right: 1.5%;
    /*background-color: #e9e9e9;*/
  }
  .fenge{
    /*background-color: #e9e9e9;*/
    height: 40px;
    position: relative;
    line-height: 40px;
    margin-bottom: 40px;
    width: 1050px;
  }
  .fenge span{
    padding-left: 5%;
  }
</style>
