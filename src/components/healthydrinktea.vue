<template>
  <div id="drinktea">
    <navigation></navigation>
    <mytitle mainTitle="饮茶推荐" subTitle="Recommend" :breadArg="breadArg"></mytitle>
    <div id="drinkteatop">
      <img src="../assets/image/u322.png">
      <h3>一分钟，学会喝自己的茶！</h3>
      <img src="../assets/image/u318.png">
    </div>
    <div class="lunbo1">
      <div class="lunbo1top">
        <div class="leftxian"></div>
        <div class="middleword">
          喝茶的季节
        </div>
        <div class="rightxian"></div>
      </div>
      <div class="lunbo">
        <div class="lunboshang">
          <div class="turnleft">
            <span class="iconfont icon-arrow-left"></span>
          </div>
          <div class="showimg">
            <img src="../assets/image/chun.png" class="showimg1">
          </div>
          <div class="turnright">
            <span class="iconfont icon-arrow-right"></span>
          </div>
        </div>
        <div class="lunbozhong">
          <ul>
            <li>春</li>
            <li>夏</li>
            <li>秋</li>
            <li>冬</li>
          </ul>
          <p></p>
        </div>
        <div class="lunboproduct">
          <div class="box1">
            代表茶
          </div>
          <div class="box2">
            茉莉花茶
          </div><br/>
          <div class="box1">
            茶种
          </div>
          <div class="box3">
            花茶
          </div><br/>
          <div class="box1">
            茶性
          </div>
          <div class="box3">
            性平
          </div>
        </div>
        <div class="lunboproduct">
          <div class="box4">
            代表茶
          </div>
          <div class="box5">
            西湖龙井
          </div>
          <div class="box5">
            福鼎白茶
          </div>
          <div class="box5">
            普洱生茶
          </div>
          <br/>
          <div class="box4">
            茶种
          </div>
          <div class="box6">
            绿茶
          </div>
          <div class="box6">
            白茶
          </div>
          <div class="box6">
            黑茶生茶
          </div><br/>
          <div class="box4">
            茶性
          </div>
          <div class="box6">
            性凉
          </div>
          <div class="box6">
            性凉
          </div>
          <div class="box6">
            性凉
          </div>
        </div>
        <div class="lunboproduct">
          <div class="box4">
            代表茶
          </div>
          <div class="box5">
            福鼎白茶
          </div>
          <div class="box5">
            清香铁观音
          </div>
          <div class="box5">
            武夷大红袍
          </div>
          <br/>
          <div class="box4">
            茶种
          </div>
          <div class="box6">
            陈年白茶
          </div>
          <div class="box7">
            福鼎白茶
          </div>
          <br/>
          <div class="box4">
            茶性
          </div>
          <div class="box6">
            性平
          </div>
          <div class="box7">
            性平
          </div>
        </div>
        <div class="lunboproduct">
          <div class="box4">
            代表茶
          </div>
          <div class="box5">
            滇红
          </div>
          <div class="box5">
            普洱熟茶
          </div>
          <br/>
          <div class="box4">
            茶种
          </div>
          <div class="box6">
            红茶
          </div>
          <div class="box6">
            黑茶熟茶
          </div>
          <br/>
          <div class="box4">
            茶性
          </div>
          <div class="box6">
            性温
          </div>
          <div class="box6">
            性温
          </div>
        </div>
      </div>
    </div>
    <div class="lunbo2">
      <div class="lunbo1top">
        <div class="leftxian"></div>
        <div class="middleword">
          喝茶的时间
        </div>
        <div class="rightxian"></div>
      </div>
      <div class="lunbo">
        <div class="lunboshang">
          <div class="turnleft">
            <span class="iconfont icon-arrow-left"></span>
          </div>
          <div class="showimg">
            <img src="../assets/image/morning.jpg" class="showimg1">
          </div>
          <div class="turnright">
            <span class="iconfont icon-arrow-right"></span>
          </div>
        </div>
        <div class="lunbozhong">
          <ul>
            <li>早</li>
            <li>中</li>
            <li>晚</li>
          </ul>
          <p></p>
        </div>
        <div class="lunboproduct">
          <div class="box1">
            代表茶
          </div>
          <div class="box2">
            滇红
          </div>
        </div>
        <div class="lunboproduct">
          <div class="box4">
            代表茶
          </div>
          <div class="box5">
            茉莉花茶
          </div>
          <div class="box5">
            西湖龙井
          </div>
          <div class="box5">
            普洱生茶
          </div><br/>
          <div class="box5">
            清香铁观音
          </div>
          <div class="box5">
            武夷大红袍
          </div>
          <div class="box5">
            浓香铁观音
          </div>
          <div class="box5">
            黄山毛峰
          </div>
        </div>
        <div class="lunboproduct">
          <div class="box4">
            代表茶
          </div>
          <div class="box5">
            滇红
          </div>
          <div class="box5">
            普洱熟茶
          </div>
          <div class="box5">
            清香铁观音
          </div><br/>
          <div class="box5">
            浓香铁观音
          </div>
          <div class="box5">
            武夷大红袍
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
  import navigation from './common/navigation.vue';
  import title from './common/title.vue';
  import foot from './common/footer.vue';
  export default {
    name: 'healthydrinktea',
    data () {
      return {
        breadArg:{
          firstTitle:"喝茶推荐"
        }
      }
    },
    components: {
      navigation:navigation,
      mytitle:title,
      foot:foot
    },
    created(){
      $(function () {
        //第一个轮播
        var nowindex=0;
        var imgsrc = ["./src/assets/image/chun.png","./src/assets/image/xia.jpg",
          "./src/assets/image/qiu.jpg","./src/assets/image/dong.jpg"];
        var lunbozhongp = ["春饮花茶可以散发漫漫冬季积郁于人体之内的寒气，促进人体阳气生发。<br/>花茶香气浓烈,香而不浮,爽而不浊,令人精神振奋,消除春困,提高人体机能效率",
          "夏季，气候炎热，暑气逼人，人体的津液大量损耗.<br/>此时,以饮用性味苦寒的茶类为宜,用以消暑解热",
          "秋季，天高气爽，风霜高洁，气候干燥，余热未消，人体津液未完全恢复平衡。此时，以饮用<br/>乌龙茶一类的青茶为好,此茶性味介于红绿之间,不寒不热,既能消除余热,又能恢复津液",
          "冬季，北风凛冽，寒气袭人，人体阳气易损。此时，以选用味甘性温的茶为好，<br/>以温育人体的阳气，全发酵茶有助消化去油腻之功，于冬季进补肥腻时有利"];
        $(".lunbo1 .turnleft").on("click",function(){
          prev();
        });
        $(".lunbo1 .turnright").on("click",function(){
          next();
        });
        function prev(){
          nowindex--;
          if(nowindex<0){
            nowindex = 3;
          }
          $(".lunbo1 .showimg1").attr("src",""+imgsrc[nowindex]+"");
        }
        function next(){
          nowindex++;
          if(nowindex>3){
            nowindex = 0;
          }
          $(".lunbo1 .showimg1").attr("src",""+imgsrc[nowindex]+"");
        }
        for(let i=0;i<4;i++){
          $(".lunbo1 .lunbozhong ul li").eq(i).on("click",function () {
            nowindex = i;
            $(".lunbo1 .showimg1").attr("src",""+imgsrc[nowindex]+"");
          });
        }
        setInterval(dian,100);
        function dian() {
          $(".lunbo1 .lunbozhong ul li").css("background-color","white");
          $(".lunbo1 .lunbozhong ul li").eq(nowindex).css("background-color","#99CC33");
          $(".lunbo1 .lunbozhong p").html(lunbozhongp[nowindex]);

          $(".lunbo1 .lunboproduct").css("display","none");
          $(".lunbo1 .lunboproduct").eq(nowindex).css("display","block");
        }
        //第二个轮播
        var nowindex2=0;
        var imgsrc2 = ["./src/assets/image/morning.jpg","./src/assets/image/afternoon.jpg",
          "./src/assets/image/evening.jpg"];
        var lunbozhongp2 = ["人在睡了一夜之后，身体往往处于相对静止的状态，<br/>喝红茶则可促进血液循环，同时能够祛除体内寒气，让大脑供血充足",
          "自品清香茶悠然味，偷得浮生半日闲。午后人容易昏昏欲睡，茶叶中含有咖啡碱，因此喝适量的茶有助于提神益思",
          "人在吃了三餐之后，身体内会积聚一些肥腻之物在消化系统内，<br/>倘若晚饭后能够饮用一杯发酵过的茶，既暖胃又助消化"
        ];
        $(".lunbo2 .turnleft").on("click",function(){
          prev2();
        });
        $(".lunbo2 .turnright").on("click",function(){
          next2();
        });
        function prev2(){
          nowindex2--;
          if(nowindex2<0){
            nowindex2 = 2;
          }
          $(".lunbo2 .showimg1").attr("src",""+imgsrc2[nowindex2]+"");
        }
        function next2(){
          nowindex2++;
          if(nowindex2>2){
            nowindex2 = 0;
          }
          $(".lunbo2 .showimg1").attr("src",""+imgsrc2[nowindex2]+"");
        }
        for(let j=0;j<4;j++){
          $(".lunbo2 .lunbozhong ul li").eq(j).on("click",function () {
            nowindex2 = j;
            $(".lunbo2 .showimg1").attr("src",""+imgsrc2[nowindex2]+"");
          });
        }
        setInterval(dian2,100);
        function dian2() {
          $(".lunbo2 .lunbozhong ul li").css("background-color","white");
          $(".lunbo2 .lunbozhong ul li").eq(nowindex2).css("background-color","#99CC33");
          $(".lunbo2 .lunbozhong p").html(lunbozhongp2[nowindex2]);

          $(".lunbo2 .lunboproduct").css("display","none");
          $(".lunbo2 .lunboproduct").eq(nowindex2).css("display","block");
        }
      })
    }
  }


</script>
<style scoped>
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-arrow-right:before { content: "\e632"; }

  .icon-arrow-left:before { content: "\e660"; }

  #drinkteatop{
    text-align: center;
  }
  #drinkteatop img:nth-of-type(1){
    width: 15%;
    margin-left: -1%;
    margin-top: 3%;
  }
  #drinkteatop h3{
    font-size: 16px;
    color: #666666;
    position: relative;
    z-index: 2;
  }
  #drinkteatop img:nth-of-type(2){
    width: 30%;
    position: relative;
    margin-top: -3%;
    margin-bottom: 3%;
  }
  .lunbo1,.lunbo2{
    background-color: #FAFAFA;
    width: 100%;
    overflow: hidden;
  }
  .lunbo2{
    background-color: white;
  }
  .lunbo1top{
    /*outline: 1px solid black;*/
    width: 55%;
    margin: 50px auto;
    height: 70px;
    text-align: center;
  }
  .leftxian{
    display: inline-block;
    width: 35%;
    border-bottom: 1px solid  darkgray;
    z-index: 2;
    vertical-align: middle;
  }
  .middleword{
    display: inline-block;
    width: 30%;
    margin:0 -3%;
    font-size: 28px;
    text-align: center;
    line-height: 70px;
    color: #666666;
    vertical-align: middle;
  }
  .rightxian{
    display: inline-block;
    width: 35%;
    z-index: 2;
    border-bottom: 1px solid darkgray;
    vertical-align: middle;
  }
  .lunbo{
    width: 100%;
  }
  .lunboshang{
    width: 80%;
    height: 230px;
    margin: 0 auto;
    text-align: center;
  }
  .lunboshang .turnleft{
    display: inline-block;
    text-align: left;
    font-size: 45px;
    font-weight: 700;
    height: 100%;
    color: #666666;
    line-height: 45px;
    vertical-align: middle;
  }
  .lunboshang .showimg{
    /*width: 90%;*/
    display: inline-block;
    /*height: 230px;*/
  }
  .lunboshang .showimg img{
    width: 100%;
    height: 100%;
  }
  .lunboshang .turnright{
    text-align: right;
    display: inline-block;
    font-size: 45px;
    font-weight: 700;
    height: 100%;
    color: #666666;
    line-height: 45px;
    vertical-align: middle;
  }
  .turnright span{
    font-size: 45px;
    color: lightgray;
    vertical-align: middle;
  }
  .turnleft span{
    font-size: 45px;
    color: lightgray;
  }
  .lunboshang span:hover{
    cursor: pointer;
  }
  .lunbozhong{
    width: 100%;
  }
  .lunbozhong ul{
    width: 290px;
    height: 52px;
    margin: 0 auto;
  }
  .lunbo2  .lunbozhong ul{
    width: 250px;
  }
  .lunbozhong ul li{
    float: left;
    list-style-type: none;
    width:50px;
    height: 50px;
    text-align: center;
    margin-top: -40px;
    line-height: 50px;
    font-weight: 700;
    margin-right: 20px;
    background-color: white;
    font-size: 20px;
    border-radius: 50%;
    border: 1px solid #008000;
    color: #666666;
  }
  .lunbo2 .lunbozhong ul li{
    margin-right: 30px;
  }
  .lunbozhong ul li:nth-of-type(1){
    background-color: #99CC33;
  }
  .lunbozhong p{
    width:50% ;
    margin: 0 auto;
    text-align: center;
    line-height: 1.7;
    font-size: 18px;
    color: #999999;
  }
  .lunboproduct{
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
    text-align: center;
  }
  .box1,.box2,.box3{
    width: 150px;
    height: 70px;
    display: inline-block;
    margin: 30px 55px;
    border-radius: 10px;
    text-align: center;
    line-height: 70px;
    font-weight: 500;
    background-color: white;
  }
  .box4,.box5,.box6,.box7{
    width: 150px;
    height: 70px;
    display: inline-block;
    margin: 30px 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 70px;
    font-weight: 500;
    background-color: white;
  }
  .box2,.box5{
    border: 1px solid #7EAD54;
    color: #7EAD54;
  }
  .box3,.box6{
    background-color: #F2F2F2;
    color: #7EAD54;
  }
  .box7{
    background-color: #F2F2F2;
    color: #7EAD54;
    width: 340px;
  }
</style>
