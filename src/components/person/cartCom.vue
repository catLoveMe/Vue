<template>
  <div class="eachCat">
    <span class="nbS">&nbsp;</span>
    <!--<div class="circle">{{unquieValue}}</div>-->
    <div class="circle" :data-value="unquieValue" @click="changeColor($event)"></div>
    <div class="productImg">
      <img  src="imgsrc" alt="加载出错。。。">
      <span class="proTitle">{{protitle}}</span>
      <br/>
      <span class="xinping">{{hingpotion}}</span>
    </div>
    <span class="kindS">{{typeS}}</span>
    <span class="singlePirceS">{{singlepirce | addMoney}}</span>
    <span class="manyProAx">
        <span class="jian"  @click="jian(countCart)">-</span>
        <span class="catmout" contenteditable="true">{{countCart }}</span>
        <span class="add" @click="add(countCart)">+</span>
    </span>
    <span class="totalS">{{totalCount | addMoney }}</span>
    <span class="errorS" :data-value="unquieValue" @click="open2" >X</span>
  </div>
</template>

<script>
    export default{
        name:'cartCom',
        data:function () {
          return {}
        },
      filters:{
        addMoney:function (value) {
          var result ;
          result = "￥"+value;
          return  result;
        }
      },
      props:["imgsrc","protitle","hingpotion","typeS","singlepirce","countCart","totalCount","unquieValue"],
      methods :{
        open2() {
          this.$confirm('主人确定不要我了吗?', '提示', {
            confirmButtonText: '是的呢！',
            cancelButtonText: '要要要',
            type: 'success'
          }).then(() => {
            this.$message({
              type: 'info ',
              message: '拜拜啦主人!'
            });
          }).catch(() => {
            this.$message({
              type: 'success',
              message: '主人我跟你回家！啦啦'
            });
          });
        },
        changeColor(event){
          var cssColor = $(event.currentTarget).css("backgroundColor");
            if(cssColor=="rgba(0, 0, 0, 0)" || cssColor=="rgb(255, 255, 255)"){
                $(event.currentTarget).css("backgroundColor","#8eb45e");
                $(".kindS").css("backgroundColor","#e9e9e9");
                $(".singlePirceS").css("backgroundColor","#e9e9e9");
                $(".totalS").css("backgroundColor","#e9e9e9");
                $(".manyProAx").css("backgroundColor","white");
            }else {
              $(".kindS").css("backgroundColor","white");
              $(".singlePirceS").css("backgroundColor","white");
              $(event.currentTarget).css("backgroundColor","white");
              $(".totalS").css("backgroundColor","white");
              $(".manyProAx").css("backgroundColor","#e9e9e9");
            }
        },
        jian(val){
            console.log(val,"val");
          val--;
          if(val<=0){
              val = 1;
              return val;
          }
        },
        add(val){
          console.log(val,"val add");
            val++;
            return val;
        }
      }


    }
//    $(function () {
//        var arr = [];
//        console.log("1111111");
//        function aa() {
//          $(".circle").click(function () {
////          arr.push($(this).attr("data-value"));
//            checkValue($(this).attr("data-value"));
//            console.log($(this).attr("data-value"))
//          });
//        }
//      $(".errorS").click(function () {
////          arr.push($(this).attr("data-value"));
//        checkValue($(this).attr("data-value"));
//        console.log($(this).attr("data-value"))
//      })
//      function checkValue(val) {
//        for(var i = arr.length;i>0;i--){
//            console.log(arr[i]);
//            if(val===arr[i]){
//
//                console.log("same value")
//            }else {
//                arr.push(val);
//                break;
//            }
//        }
//        console.log(arr);
//      }
//    })
</script>

<style scoped>
  /*================================每个具体的购物订单*/
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
  .circle{
    width: 13px;
    height: 13px;
    border-radius: 13px;
    border: 1px solid grey;
    margin-left: 4.7%;
    margin-top: 1%;
    display: inline-block;
    font-size: 0;
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
    width: 50%;
    height: 50%;
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
