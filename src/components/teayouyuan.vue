<template>
  <div id="youyuan">
    <navigation></navigation>
    <mytitle mainTitle="游园活动" subTitle="Activity" :breadArg="breadArg"></mytitle>
    <div id="content1">
      <youyuanh1 btntext1="游园活动" btntext2="Activity Introduce"></youyuanh1>
      <div class="content1left">
        <img src="../assets/image/u159.png">
      </div>
      <div class="content1right">
        <table>
          <tr>
            <td >内容：</td>
            <td>{{huodong.act_detail}}</td>
          </tr>
          <tr>
            <td >时间：</td>
            <td class="time">{{huodong.act_date}}</td>
          </tr>
          <tr>
            <td >地点：</td>
            <td>{{huodong.act_place}}</td>
          </tr>
          <tr>
            <td>活动人数：</td>
            <td><span class="joinnumber">{{applynum}}</span> /<span class="maxnumber">{{huodong.act_personcount}}</span> </td>
          </tr>
        </table>
        <teaBtn  btnClass="middBtn" btnText="申请"　class="shengqing" ></teaBtn>
      </div>
    </div>
    <div id="content2">
      <youyuanh1 btntext1="我们的茶园" btntext2="Tea Garden"></youyuanh1>
      <div class="contenttop">
        <div class="contenttopleft">
          <div class="contenttopleftword" >
            <span>{{contenttopspan}}</span>
            {{contenttopp}}
            <div class="lineborder1"></div>
            <div class="lineborder2"></div>
          </div>
        </div>
        <div class="contenttopright">
          <img src="../assets/image/u169.jpg">
        </div>
      </div>
      <div class="contentdown">
        <div class="contentdownleft">
          <img src="../assets/image/u230.jpg">
        </div>
        <div class="contentdownright">
          <div class="contentdownrightword" >
            <h2>{{contentdownh2}}</h2>
            <p>{{contentdownp}} </p>
            <div class="lineborder3"></div>
            <div class="lineborder4"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="content3">
      <youyuanh1 btntext1="往期活动" btntext2="Previous Activity"></youyuanh1>
      <previousactivity key="1" v-for="item in previousactivity" :imgsrc='item.img' :btntext1="item.title" :btntext2="item.time" :btntext3="item.peoplenum"></previousactivity>
    </div>
    <div id="content4">
      <img src="../assets/image/u279.png">
    </div>
    <div id="shengqing">
      <div class="close">
        ×
      </div>
      <table>
        <tr>
          <td>参加人数：</td>
          <td>
            <span class="peopleless">-</span>
            <input type="text" class="people">
            <span class="peoplemore">+</span>
          </td>
        </tr>
        <tr>
          <td> 电子门票码：</td>
          <td id="checkid"></td>
        </tr>
      </table>
      <p>
        <span>*</span> 温馨提醒：参加人数中填写你们参加游园活动的
        人数，凭上方电子门票码活动时间有序入场。
      </p>
      <el-button :plain="true" @click="open6" class="shengqingsure">确认</el-button>
      <!--<teaBtn  btnClass="middBtn" btnText="确认" 　class="shengqingsure" ></teaBtn>-->
    </div>
    <foot></foot>

  </div>


</template>
<script>
  import navigation from './common/navigation.vue';
  import title from './common/title.vue';
  import foot from './common/footer.vue';
  import youyuanh1 from './youyuanh1.vue';
  import teaBtn from './common/teaBtn.vue';
  import previousactivity from './previousactivity.vue';
  export default {
    name: 'teayouyuan',
    data () {
      return {
        breadArg:{
          firstTitle:"茶园体验",
          secondTitle:"游园活动"
        },
        huodong:{},
        applynum:89,
        /*{
         activity:"亲子采茶游园活动",
         time:"2017.12.12-09:00am-17:00pm",
         place:"绿茶茶区",
         peoplenumber:"50"
         },*/
        contenttopspan:"茶园",
        contenttopp:"远离人烟，蜿蜒数里深入密林，山路崎岖，所有物料全都靠" +
        "肩挑手抬.园内保留大量高低不齐的老茶树供鸟类栖息,由" +
        "于杜绝使用杀虫剂，这些鸟承担着整片茶园的除虫任务。杜" +
        "绝使用化肥，肥料是野生放养的羊粪，因为其他牲畜难免用" +
        "过人工饲料那就等于存在有不够纯净的可能",
        contentdownh2:"完美与极致",
        contentdownp:"是一种态度、一种心境，一如静坐品他的茶" +
        "清空明净 ，一尘不染 。",
        previousactivity:[
          {img:"u183.jpg", title:"茶叶采摘" ,time:"2014.03.02" ,peoplenum:"参与人数：100"},
          {img:"u195.jpg", title:"茶园摄影" ,time:"2014.03.02" ,peoplenum:"参与人数：100"},
          {img:"u204.jpg", title:"烘焙体验" ,time:"2014.03.02" ,peoplenum:"参与人数：100"},
          {img:"u219.png", title:"跟着大师学做茶" ,time:"2014.03.02" ,peoplenum:"参与人数：100"}
        ],
      }
    },
    components: {
      youyuanh1:youyuanh1,
      previousactivity:previousactivity,
      teaBtn:teaBtn,
      navigation:navigation,
      mytitle:title,
      foot:foot
    },
    created(){
      var that = this;
      $(function () {
        $(".shengqing").on("click",function () {
          $(".people").val(0);
//          $("#shengqing").css("display","block");
          $("#shengqing").slideDown("normal");

          let checkid1 = "";
          for(let i=1;i<=4;i++)
          {
            checkid1 += String.fromCharCode(Math.floor( Math.random() * 26) + "A".charCodeAt(0));
          }
          $("#checkid").html(checkid1);
        });
        $(".close").on("click",function () {
          $("#shengqing").slideUp("normal");
        });
        $(".people").val("0");
        $(".peopleless").on("click",function () {
          if(parseInt($(".people").val())>=1){
            $(".people").val(parseInt($(".people").val())-1);
          }
        });
        $(".peoplemore").on("click",function () {
          $(".people").val(parseInt($(".people").val())+1)  ;
        });

        $(".shengqingsure").on("click",function () {
          if(((parseInt($(".joinnumber").html())+parseInt($(".people").val()))<$(".maxnumber").html())&&($(".people").val()>0)){
//                $(".joinnumber").html(parseInt($(".joinnumber").html())+parseInt($(".people").val()));
            $("#shengqing").slideUp("normal");

            var checkid = $("#checkid").html();
            var count = $(".people").val();
            that.$axios.post("/api/applyActivity.do",{actId:1,userId:1,ticket:checkid,count:count}).then(resp =>{
              console.log(resp.msg);
            });

            that.$axios.get("/api/getapplynum.do").then(resp => {
//            console.log("3333333:",resp.data[0].applysum);
              that.applynum = resp.data[0].applysum;
            })
          }
        });
        setTimeout(timechange,100);
        function timechange() {
//            $(".time").html( $(".time").html().split("T")[0]);
          let newtime = new Date($(".time").html());
          $(".time").html(newtime.getFullYear()+"-"+(newtime.getMonth()+1)+"-"+newtime.getDate());
        }
      });

      this.$axios.get("/api/activity.do").then(resp => {
        that.huodong = resp.data.data[0];
      });

      this.$axios.get("/api/getapplynum.do").then(resp => {
        console.log("3333333:",resp.data[0].applysum);
        that.applynum = resp.data[0].applysum;
      })
    },
    methods:{
      open6() {
        if (((parseInt($(".joinnumber").html()) + parseInt($(".people").val())) < $(".maxnumber").html()) && ($(".people").val() > 0)) {
          this.$message({
            showClose: true,
            message: '恭喜您，报名成功！',
            type: 'success'
          })
        }
        else if (((parseInt($(".joinnumber").html()) + parseInt($(".people").val())) < $(".maxnumber").html()) && ($(".people").val() == 0)) {
          this.$message({
            showClose: true,
            message: '参加人数不可为零！',
            type: 'warning'
          })
        }
        else if(((parseInt($(".joinnumber").html()) + parseInt($(".people").val())) > $(".maxnumber").html())) {
          this.$message({
            showClose: true,
            message: '十分抱歉，参加活动人数超额！参加活动失败',
            type: 'error'
          });
          $("#shengqing").slideUp("normal");
        }
      }
    }

  }



</script>
<style scoped>
  @font-face {
    font-family: "tea-font";
    src: url('../assets/icon/tea.ttf');
  }
  @media (max-width: 768px){
    .content1right table{
      font-size: 14px;
    }
    .content1left{
      width: 100% !important;
    }
    .content1right{
      width: 100% !important;
    }
    .content1right table{
      margin: 25% auto !important;
    }
    .content1right table tr td{
      text-align: center !important;
    }
    .contenttopleftword{
      font-size: 8px !important;
    }
    .contenttopleftword span{
      font-size: 16px !important;
    }
    .contenttopright img{
      margin: 50% 0 !important;
      width: 80% !important;
    }
    .contentdownleft img{
      margin: 35% 0 !important;
    }
    .contentdownrightword{
      font-size: 8px !important;
    }
    .contentdownrightword h2{
      font-size: 16px !important;
    }
    .close{
      margin-left: 80% !important;
    }
    #shengqing table{
      width: 70% !important;
    }
    #shengqing table tr td{
      font-size: 8px !important;
    }
    #shengqing table tr td span {
      font-size: 15px !important;
    }
    #shengqing p{
      font-size:10px !important;
      width: 70% !important;
      margin-left: 10% !important;
    }
  }
  @media screen and (min-width: 769px){
    .content1right table{
      font-size: 17px;
    }
    .content1left{
      width: 100% !important;
    }
    .content1right{
      width: 100% !important;
    }
    .content1right table{
      margin: 25% auto !important;
    }
    .content1right table tr td{
      text-align: center !important;
    }
    .contenttopleftword{
      font-size: 10px !important;
    }
    .contenttopleftword span{
      font-size: 20px !important;
    }
    .contenttopright img{
      margin: 17% 0 !important;
    }
    .contentdownleft img{
      margin: 14% 0 !important;
    }
    .contentdownrightword{
      font-size: 10px !important;
    }
    .contentdownrightword h2{
      font-size: 20px !important;
    }
  }
  @media screen and (min-width: 993px) {
    .content1right table{
      font-size: 16px;
    }
    .content1left{
      width: 49% !important;
    }
    .content1right{
      width: 49% !important;
    }
    .content1right table tr td{
      text-align: left !important;
    }
    .contenttopleftword{
      font-size: 14px !important;
    }
    .contenttopleftword span{
      font-size: 28px !important;
    }
    .contenttopright img{
      margin: 20% 0 !important;
    }
    .contentdownleft img{
      margin: 20% 0 !important;
    }
    .contentdownrightword{
      font-size: 14px !important;
    }
    .contentdownrightword h2{
      font-size: 28px !important;
    }
  }
  @media screen and (min-width: 1201px){
    .content1right table{
      font-size: 20px;
    }
    .content1left{
      width: 49% !important;
    }
    .content1right{
      width: 49% !important;
    }
    .content1right table tr td{
      text-align: left !important;
    }
    .contenttopleftword{
      font-size: 16px !important;
    }
    .contenttopleftword span{
      font-size: 32px !important;
    }
    .contenttopright img{
      margin: 14% 0 !important;
    }
    .contentdownleft img{
      margin: 15% 0 !important;
    }
    .contentdownrightword{
      font-size: 16px !important;
    }
    .contentdownrightword h2{
      font-size: 32px !important;
    }
  }
  #youyuan{
    width: 100%;
    /*outline: 2px solid red;*/
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  #content1{
    /*border: 3px solid yellow;*/
    width: 100%;
  }
  .content1left{
    /*float: left;*/
    display: inline-block;
    width: 49%;
    /*outline: 1px solid red;*/
    overflow: hidden;
  }
  .content1left img{
    width: 40%;
    margin-top: 15%;
    margin-bottom: 15%;
    /*outline: 1px solid red;*/
  }
  .content1right{
    width: 49%;
    display: inline-block;
    /*outline: 1px solid red;*/
    position: relative;
  }
  .content1right table{
    width: 75%;
    margin: 25% 0;
    /*outline: 1px solid red;*/
    /*font-size: 20px;*/
    color: #666666;
    font-weight: 500;
  }
  .shengqing{
    /*margin-top: -10%;*/
    position: absolute;
    bottom: 15%;
    left: 30%;
  }
  .content1right table tr td{
    /*outline: 1px solid red;*/
    line-height: 1.8;
  }
  #content2{
    /*outline: 1px solid red;*/
    width: 100%;
  }
  .contenttop{
    width: 100%;
    /*outline: 1px solid red;*/
  }
  .contenttopleft{
    display: inline-block;
    width: 47%;
    /*outline: 1px solid green;*/
    overflow: hidden;
    /*height: 500px;*/
  }
  .contenttopleftword{
    width: 80%;
    margin: 15% 0;
    padding: 5% 5%;
    text-align: justify;
    font-size: 14px;
    color: #999999;
    line-height: 2.3;
    /*outline: 1px solid yellow;*/
    position: relative;
  }
  .contenttopleftword span{
    line-height: 1.3;
    font-size: 32px;
    color: #666666;
    margin: 0 4%;
  }
  .lineborder1{
    width: 45%;
    border-top: 2px solid #F2F2F2;
    position:absolute;
    top: 0;
    right:-10%;
  }
  .lineborder2{
    height: 75%;
    border-right: 2px solid #F2F2F2;
    position:absolute;
    top: -15%;
    right:0;
  }
  .contenttopright{
    display: inline-block;
    width: 47%;
    /*outline: 1px solid green;*/
    /*height: 500px;*/
  }
  .contenttopright img{
    width: 60%;
    margin: 15% 0;
    /*margin-left: -15%;*/
    /*outline: 1px solid red;*/
  }
  .contentdownleft{
    display: inline-block;
    width: 47%;
    /*outline: 1px solid green;*/
    /*height: 500px;*/
    text-align: right;
  }
  .contentdownleft img{
    width: 90%;
    /*outline: 2px solid red;*/
  }
  .contentdownright{
    display: inline-block;
    width: 47%;
    /*outline: 1px solid green;*/
    overflow: hidden;
  }
  .contentdownrightword{
    width: 70%;
    margin: 20% 10%;
    padding: 5% 5%;
    text-align: justify;
    font-size: 14px;
    color: #999999;
    line-height: 2.3;
    /*outline: 1px solid yellow;*/
    position: relative;
  }
  .contentdownrightword h2{
    margin: 0;
    font-size: 32px;
    color: #666666;
  }
  .contentdownrightword p{
    margin: 0;
  }
  .lineborder3{
    width: 35%;
    border-top: 2px solid #F2F2F2;
    position:absolute;
    top: 0;
    left:-8%;
  }
  .lineborder4{
    height: 100%;
    border-right: 2px solid #F2F2F2;
    position:absolute;
    top: -15%;
    left:0;
  }
  #content3{
    /*border: 1px solid red;*/
    width: 100%;
  }
  #shengqing{
    width:50%;
    border: 1px solid #E4E4E4;
    background-color: white;
    position: fixed;
    top: 20%;
    left: 25%;
    border-radius: 15px;
    box-shadow: 10px 10px 5px #E4E4E4;
    display: none;
  }
  .close{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #8CB457;
    color: white;
    font-size: 20px;
    line-height: 30px;
    margin-left: 90%;
    margin-top: 10px;
  }
  #shengqing table{
    /*outline: 1px solid red;*/
    width: 60%;
    margin-left: 10%;
  }
  #shengqing  table tr td{
    /*outline: 1px solid red;*/
    text-align: left;
    height: 40px;
    color: #666666;
    font-size: 16px;
  }
  .peopleless,.peoplemore{
    color: #8EB45E;
    font-size: 20px;
    font-weight: 900;
  }
  .people{
    width: 30%;
    margin: 0 2%;
  }
  #shengqing table tr td:nth-of-type(1){
    width: 40%;
  }
  #shengqing table tr td:nth-of-type(2){
    width: 50%;
  }
  #shengqing p{
    color: #666666;
    font-weight: 700;
    font-size: 14px;
    width: 45%;
    margin-left: 20%;
    margin-top: 5%;
    /*outline: 1px solid red;*/
    text-align: left;
  }
  #shengqing p span{
    color: #8EB45E;
    font-size: 20px;
  }
  .shengqingsure{
    margin-top: 35px;
    margin-bottom: 5%;
    background-color:#8CB457 ;
  }
</style>
