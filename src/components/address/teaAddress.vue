
<!--我的地址-->

<template>
  <div id="app">
    <div class="addressBlock" >
      <addressBox  @edit="showUpdate(index)" @delete="checkToDelete(item.addr_id)"  v-for="(item,index) in address" :key="item.addr_id"
                   :adPerson="item.addr_name"  :city="item.addr_pro+item.addr_city+item.addr_area" :area="item.addr_detail" :phone="item.addr_tel" :email="item.addr_email"></addressBox>
      <teaBtn btnClass="middBtn" btnText="新增地址"  id="addBtn" @clickBtn="showAdd"></teaBtn>

      <div class="addAr">
        <div>
          <h3>新增收货地址</h3>
          <img src="../../assets/image/dele.png" alt="" id="addDele">
        </div>
        <form action="" id="addtext" onsubmit="return false">
          <p>收货人：<input type="text" id="getPerson" name="user_name"></p>
          <p class="ni">地区：
            <v-distpicker :province="province" :city="city" :area="area" id="threead"  @selected="onSelected"></v-distpicker>
          </p>
          <p>详细地址：<input type="text" id="detilad"  name="addr_detail"></p>
          <p>手机号码：<input type="text" id="phonead"  name="addr_tel"></p>
          <p>邮箱：<input type="text" id="emailad"  name="addr_email"></p>
          <p><span></span>用来接收提醒邮件，便于您及时了解订单状态</p>
          <teaBtn btnClass="middBtn" btnText="保存地址"  id="saveBtn" @click.native="addOrEdit()"></teaBtn>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import addressBox from '../address/addressBox.vue'
  import teaBtn from '../common/teaBtn.vue'
  import VDistpicker from 'v-distpicker'
  import navigation from '../common/navigation.vue'
  import titleBlock from '../common/title.vue'
  import footerBlock from '../common/footer.vue'

  export default {
    name:"teaAddress",
    components:{
      VDistpicker,
      addressBox:addressBox,
      teaBtn:teaBtn,
      navigation:navigation,
      titleBlock:titleBlock,
      footerBlock:footerBlock
    },
    data(){
      return{
        address:[{}],
        editId:0,
        province:"省",
        city:"市",
        area:"区",
        option:0,
        breadArg:{
          firstTitle:"个人中心",
          secondTitle:"地址管理"
        }
//           address:[]
      }
    },

    //=====================================加载数据====================================================

    created () {
      this.getData();
    },
    methods: {
      onSelected(data){
        console.log("获取地址信息");
        console.log(data);
        this.province = data.province.value;
        this.city = data.city.value;
        this.area = data.area.value;
      },
      addOrEdit(){
        if(this.option === 1){
//            do add
          this.checkToAdd();
        }else if(this.option === 0){
//            do edit
          this.checkToEdit();

        }
      },
      getData(){
        console.log("获取数据");
        this.$axios.get('/api/showAddress.do')
          .then(resp => {
            this.address = resp.data.data;
          })
      },
      doDelete(id){
        this.$axios.get('/api/deleteAddr.do',{params:{addrId:id}})
          .then(resp => {
            console.log("删除请求返回成功");
            console.log(resp)
          }).then(()=>{
          console.log("重新获取数据");
          this.getData();
        });
      },
      doUpdate(index){
        console.log("_________________")
        var data = $("#threead").selected;
        console.log(data);
        console.log("_________________");
        this.$axios.get('/api/changeAddress.do',{params:{
          addrId:this.address[index].addr_id,
          addrName:$("#getPerson").val(),
          addrPro:this.province,
          addrCity:this.city,
          addrArea:this.area,
          addrDetail:$("#detilad").val(),
          addrEmail:$("#emailad").val(),
          addrTel:$("#phonead").val(),
        }})
          .then(resp => {
            console.log("修改请求返回成功");
            console.log(resp);

          }).then(()=>{
          console.log("重新获取数据");
          this.getData();
        });
      },
      doAddAddr(){
//        执行添加
        this.$axios.get('/api/addNewAddress.do',{params:{
          addrName:$("#getPerson").val(),
          addrPro:this.province,
          addrCity:this.city,
          addrArea:this.area,
          addrDetail:$("#detilad").val(),
          addrEmail:$("#emailad").val(),
          addrTel:$("#phonead").val(),
        }})
          .then(resp => {
            console.log("新增请求返回成功");
            console.log(resp);

          }).then(()=>{
          console.log("重新获取数据");
          this.getData();
        });

      },
      checkToDelete(id) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
//              执行删除操作
          console.log("删除数据id:"+id);
          this.doDelete(id);

          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      checkToEdit(){
        this.$confirm('确认修改?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
//              修改操作
          this.doUpdate(this.editId);
          this.closeWindow();
          this.$message({
            type: 'success',
            message: '修改成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      },
      checkToAdd(){
        this.$alert('新增成功', '', {
          confirmButtonText: '确定',
          callback: action => {
            this.doAddAddr();
            this.closeWindow();
            this.$message({
              type: 'success',
              message: '新增成功'
            });
          }
        });
      },
      showUpdate(index){
        this.option = 0;
        $(".addAr").css('visibility',"visible");
        $(".addAr").animate({left:"0"},'slow');
        $(".addAr h3").html("修改地址");
        $("#getPerson").val(this.address[index].addr_name);
        $("#detilad").val(this.address[index].addr_detail);
        $("#phonead").val(this.address[index].addr_tel);
        $("#emailad").val(this.address[index].addr_email);
        this.province=this.address[index].addr_pro;
        this.area=this.address[index].addr_area;
        this.city=this.address[index].addr_city;
        this.editId = index;
        console.log("当前编辑的地址id为："+this.editId);
      },
      showAdd(){
        console.log("新增地址");
        this.option = 1;
        $(".addAr").css('visibility',"visible");
        $(".addAr").animate({left:"0"},'slow');
        $(".addAr h3").html("新增地址");
        this.province = "省";
        this.city = "市";
        this.area = "区";
      },
      closeWindow(){
        $(".addAr").animate({left:"-100%"},'slow',function () {
          $(".addAr").css('visibility',"hidden");
          $("#addtext input").val("");
        });
      },

    }
  }

  $(function () {
    $("#threead").children().eq(0).attr("name","addr_pro");
    $("#threead").children().eq(1).attr("name","addr_city");
    $("#threead").children().eq(2).attr("name","addr_area");

    $("#addDele").click(function () {
      $(".addAr").animate({left:"-100%"},'slow',function () {
        $(".addAr").css('visibility',"hidden");
        $("#addtext input").val("");
      });
    });
  })

</script>

<style scoped>
  #addDele:hover,#saveBtn:hover{
    cursor: pointer;
  }
  .addAr #threead{
    float: right;
  }
  .addAr .ni{
    /*border: 1px solid black;*/
    width:75%;
    height: 50px;
    line-height: 50px;
  }

  #app{
    position: relative;
  }
  #addBtn{
    margin-left:15%;
    margin-top:5%;
  }
  .addressBlock{
    width: 80%;
    min-height: 600px;
    margin:5% auto;
    overflow: hidden;
    position: relative;
    z-index: 10;
    padding-bottom: 3%;
    border-top: 1px solid gainsboro;
  }

  input{
    outline: none;
  }
  .addAr{
    width:99.8%;
    border: 1px solid gainsboro;
    background-color: white;
    position: absolute;
    top:0;
    left:-100%;
    visibility: hidden;
    overflow: hidden;
  }
  .addAr p:nth-of-type(6) span{
    width:8px;
    height:8px;
    display: inline-block;
    border-radius:8px;
    border: 2px solid  #7EAD54;
    margin-right:6px;
  }
  .addAr p:nth-of-type(6){
    margin:4% 5%;
    font-size: 10px;
  }
  #saveBtn{
    margin: 5% 0 0 38%;
  }
  .addAr form{
    margin:5%;
    margin-bottom:3%;
  }
  .addAr>div{
    height:30px;
    padding:10px;
    background-color: #F5F1EE;
  }
  .addAr h3{
    font-size: 20px;
    font-weight: 100;
    line-height:35px;
    float: left;
  }
  .addAr>div img{
    width:25px;
    float: right;
    margin-top:5px;
  }
  .addAr p {
    width: 60%;
    margin-bottom: 3%;
  }
  .addAr input{
    color: grey;
  }
</style>
