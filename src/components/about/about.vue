<template>
  <div id="app">
    <navigation></navigation>
    <titleBlock mainTitle="关于我们" subTitle="About" :breadArg="breadArg"></titleBlock>
    <div class="space"></div>
    <el-row>
      <el-col :span="18" :offset="3">
        <div class="imgBox">
          <div>
            <div>
              <h1>品牌故事 <br> OUR  STORY</h1>
              <i>this is myself story</i>
              <p>
                山泉为饮，青山作伴，看够云雾飘散，日升月沉；
                在时光的静磨中，我等待成熟，
                也等待那个将我摘下，带往你的世界的人。
                我用清香一缕、融融暖意，愿为你屏蔽十里红尘、俗世羁绊；
                我入水化境，轻舒曼舞，我用一生的岁月化为一盏茶汤，供你品饮；
                也用一世所内蕴的芳香与清雅，为你带来一刻欢悦。
                我是长于山野间的一片茶叶，
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="customer">
      <el-row>
        <el-col :span="4" :offset="10">
          <h1>我们的客户</h1>
          <p>We Love Our Clients!</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="4">
          <aboutBox></aboutBox>
          <aboutBox></aboutBox>
          <aboutBox></aboutBox>
        </el-col>
      </el-row>
    </div>
    <div class="customerLogo"></div>
    <div class="bottomCont">
      <h1>相关产品 <br> <span>Tea Garden</span></h1>
      <div class="bt1"></div>
      <div class="bt2"></div>
    </div>
    <el-row>
      <el-col :span="21" :offset="3">
        <div>
          <figure>
            <img src="../../assets/image/u2.jpg" alt="">
            <p>生长</p>
            <i>growing</i>
          </figure>
          <figure>
            <img src="../../assets/image/u4.jpg" alt="">
            <p>采摘</p>
            <i>picking</i>
          </figure>
          <figure>
            <img src="../../assets/image/u0.png" alt="">
            <p>烘培</p>
            <i>backing</i>
          </figure>
          <figure>
            <img src="../../assets/image/u2.jpg" alt="">
            <p>包装</p>
            <i>packing</i>
          </figure>
        </div>
      </el-col>
    </el-row>
    <div class="bottomCont">
      <h1>联系我们 <br> <span>Tea Garden</span></h1>
      <div class="bt1"></div>
      <div class="bt2"></div>
    </div>
    <div class="mapBlock">
      <bmap></bmap>
    </div>
    <el-row>
      <el-col :span="21" :offset="3">
        <div class="contact contactleft">
          <div>
            <p>地址</p>
            <input type="text" placeholder="成都市都江堰青城山脚下">
          </div>
          <div>
            <p>电话</p>
            <input type="text" placeholder="12548563524">
          </div>
          <div>
            <p>email</p>
            <input type="text" placeholder="872891123@qq.com">
          </div>

        </div>
        <div class="contact contactright">
          <p>联系我们</p>
          <input type="text" placeholder='姓名'>
          <input type="text" placeholder='电话'>
          <input type="text" placeholder='邮箱'>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <teaBtn btnClass="middBtn" btnText="发送" id='aboutBtn'></teaBtn>
        </div>
      </el-col>
    </el-row>
    <footerBlock></footerBlock>
  </div>
</template>


<script>
  import aboutBox from'../about/aboutBox.vue'
  import teaBtn from '../../components/common/teaBtn.vue'
  import navigation from '../../components/common/navigation.vue'
  import titleBlock from '../../components/common/title.vue'
  import footerBlock from '../../components/common/footer.vue'
  import bmap from '../common/map.vue'
  export default {
    name:"about",
    components:{
      aboutBox:aboutBox,
      teaBtn:teaBtn,
      navigation:navigation,
      titleBlock:titleBlock,
      footerBlock:footerBlock,
      bmap:bmap
    },
    data(){
      return{
        breadArg:{firstTitle:'关于我们'}
      }
    }
  }
</script>

<style scoped>
  :root {
    overflow-y: auto;
    overflow-x: hidden;
  }
  .space{
    height: 100px;
  }
  .contact{
    width: 40%;
    height:300px;
    float: left;
    margin-right:5%;
    /*outline: 1px solid red;*/
  }
  .contactleft div{
    margin:0 30px 50px 30px;
  }
  .contactleft input{
    border: none;
    width:80%;
    margin-top: 5%;
    border-bottom: 1px solid grey;
  }
  .contactright textarea{
    width:88%;
    height:130px;
  }
  .contactright input{
    width:25%;
    margin:8% 4% 6% 0;
  }
  #aboutBtn{
    float: right;
    margin-top: 5%;
    margin-right:10%;
  }
  .imgBox{
    width: 100%;
    /*height:600px;*/
    /*position: relative;*/
    background:url("../../assets/image/u2.jpg") 100% 0 no-repeat,
    url("../../assets/image/u33.png") 50% 90% no-repeat,
    url("../../assets/image/u4.jpg") 0 100% no-repeat;
    background-size:36% 330px,70% 590px,44% 290px;
  }
  .imgBox{
    overflow: hidden;
  }
  .imgBox>div{
    width:40%;
    /*padding:5% 15%;*/
    border: 1px solid rgba(220, 220, 220, 0.65);
    border-radius: 5px;
    /*position: absolute;*/
    /*left:25%;*/
    /*top:7%;*/
    margin: 10% auto;
    padding:2%;
    background-color: white;
  }
  .imgBox>div>div{
    border-radius: 5px;
    padding:2% 15%;
    box-shadow:1px 1px 1px 1px rgba(220, 220, 220, 0.49);
    border: 1px solid gainsboro;
    background:url("../../assets/image/u158.png") 50% -2% no-repeat,
    url("../../assets/image/u263.png") 50% 95% no-repeat;
    background-size:100px,80%;

  }
  .imgBox>div>div p{
    margin-top:20%;
    padding-bottom:35%;
    text-align: left;
    margin-left: 2%;
    font-size: 12px;
  }
  .imgBox{
    text-align: center;
  }
  .imgBox h1{
    color: #949494;
  }

  .customer,.customerLogo{
    width:100% ;
    height: 300px;
    /*margin-left:-15%;*/
    margin-top:12%;
    text-align: center;
    padding-bottom: 10%;
    background-color:#FAFAFA;
  }
  .customerLogo{
    margin-top: 0;
    height:10px;
    background: url("../../assets/image/u257.png") no-repeat center;
    background-color: #DDEACC;
  }
  .customer h1{
    font-size: 20px;
    margin:20% 0 0 0;
  }
  .customer h1+p{
    font-size: 18px;
    font-weight: bold;
  }
  .bottomCont{
    width: 100%;
    position: relative;
  }
  .bottomCont h1{
    font-size: 25px;
    font-weight: 200;
    width: 120px;
    margin:8% 45%;
  }

  .bottomCont .bt1{
    width:26%;
    position: absolute;
    border:1px solid rgba(220, 220, 220, 0.44);
    top:44%;
    left:140px;
  }
  .bottomCont .bt2{
    width:26%;
    position: absolute;
    border:1px solid rgba(220, 220, 220, 0.44);
    top:44%;
    right:140px;
  }
  .bottomCont h1 span{
    font-size: 20px;
  }
  .bottom span{
    padding:8px;
    margin: 5px;
    border-radius: 3px;
    display: inline-block;
    background-color: rgba(220, 220, 220, 0.31);
  }
  figure{
    width:20%;
    height:350px;
    float: left;
    text-align: center;
    margin-right: 2%;
    /*border: 1px solid red;*/
  }
  figure img{
    width: 100%;
    height: 270px;
  }
  figure p{
    margin:8%;
  }
  figure p:nth-of-type(1){
    font-weight: bold;
  }
  .mapBlock{
    margin-bottom:60px;
  }
</style>
